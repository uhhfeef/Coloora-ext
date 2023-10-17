from flask import Flask, request, jsonify, make_response
import requests
import base64
from flask_cors import CORS, cross_origin
import logging
import colorthief
from io import BytesIO

logging.basicConfig(level=logging.DEBUG)

GA_ENDPOINT = "https://www.google-analytics.com/mp/collect"
MEASUREMENT_ID = "G-2BBSSZBKEP"
API_SECRET = "TUHix_4URgGljI971eQi2A"

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route("/")
def index():
    return "Flask server is up and running!"


@app.route("/fetch-image", methods=["POST", "OPTIONS"])
@cross_origin()  # Necessary
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
        except Exception as e:
            response = make_response(
                jsonify(
                    {
                        "success": False,
                        "error": f"An unexpected error occurred: {str(e)}",
                    }
                ),
                500,
            )
        return response

    # Set CORS headers explicitly
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return response


@app.route("/send-analytics", methods=["POST"])
@cross_origin()
def send_analytics():
    payload = request.json
    client_id = payload.get("client_id")
    event_name = payload.get("event_name")
    event_params = payload.get("event_params")

    if not client_id or not event_name:
        return jsonify({"success": False, "error": "Missing required parameters."}), 400

    try:
        response = requests.post(
            f"{GA_ENDPOINT}?measurement_id={MEASUREMENT_ID}&api_secret={API_SECRET}",
            json={
                "client_id": client_id,
                "events": [{"name": event_name, "params": event_params}],
            },
        )
        response.raise_for_status()
        return jsonify({"success": True})

    except requests.RequestException:
        return (
            jsonify(
                {"success": False, "error": "Failed to send data to Google Analytics."}
            ),
            500,
        )

@app.route('/generate-palette', methods=['POST'])
@cross_origin()  # Necessary
def generate_palette():
    try:
        # Get the image URL from the request
        data = request.json
        image_url = data['imageURL']

        # Fetch the image using Flask-CORS
        response = requests.get(image_url)
        image_data = BytesIO(response.content)

        # Use ColorThief to get the dominant colors
        color_thief = colorthief.ColorThief(image_data)
        palette = color_thief.get_palette(color_count=5)

        return jsonify({"success": True, "palette": palette})

    except Exception as e:
        return jsonify({"success": False, "error": str(e)})

@app.after_request
def after_request(response):
    app.logger.debug("Request headers: %s", request.headers)
    app.logger.debug("Response headers: %s", response.headers)
    return response


if __name__ == "__main__":
    app.run()
