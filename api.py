from flask import Flask, request, jsonify, make_response
import requests
import base64
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/fetch-image": {"origins": "*"}})


@app.route("/")
def index():
    return "Flask server is up and running!"


@app.route("/fetch-image", methods=["POST", "OPTIONS"])
def fetch_image():
    # Handle the OPTIONS request for preflight
    if request.method == "OPTIONS":
        response = make_response()
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "Content-Type"
        return response

    payload = request.json
    image_url = payload.get("imageURL")

    if not image_url:
        response = make_response(
            jsonify({"success": False, "error": "Image URL not provided."}), 400
        )
    else:
        try:
            response_from_image_url = requests.get(image_url, timeout=10)
            response_from_image_url.raise_for_status()

            if not response_from_image_url.headers.get("content-type").startswith(
                "image/"
            ):
                response = make_response(
                    jsonify(
                        {"success": False, "error": "URL does not point to an image."}
                    ),
                    400,
                )
            else:
                image_data = response_from_image_url.content
                base64_encoded = base64.b64encode(image_data).decode("utf-8")
                response = make_response(
                    jsonify(
                        {
                            "success": True,
                            "dataURL": f"data:image/jpeg;base64,{base64_encoded}",
                        }
                    )
                )

        except requests.RequestException:
            response = make_response(
                jsonify({"success": False, "error": "Failed to fetch image."}), 500
            )

    # Set CORS headers explicitly
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return response


if __name__ == "__main__":
    app.run(debug=True)
