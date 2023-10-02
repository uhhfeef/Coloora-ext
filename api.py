from flask import Flask, request, jsonify
import requests
import base64
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/fetch-image", methods=["POST"])
def fetch_image():
    payload = request.json
    image_url = payload.get("imageURL")

    # 1. Check if it's an image link
    if not image_url:
        return jsonify({"success": False, "error": "Image URL not provided."}), 400

    try:
        response = requests.get(image_url, timeout=10)
        response.raise_for_status()

        # Ensure the URL points to an image
        if not response.headers.get("content-type").startswith("image/"):
            return (
                jsonify({"success": False, "error": "URL does not point to an image."}),
                400,
            )

        # 2. Fetch the image
        image_data = response.content

        # 3. Transfer image data as base64
        # (Note: This will result in a larger payload, but it's suitable for client-side processing in the extension)
        base64_encoded = base64.b64encode(image_data).decode("utf-8")
        return jsonify(
            {"success": True, "dataURL": f"data:image/jpeg;base64,{base64_encoded}"}
        )

    except requests.RequestException:
        return jsonify({"success": False, "error": "Failed to fetch image."}), 500


if __name__ == "__main__":
    app.run(debug=True)
