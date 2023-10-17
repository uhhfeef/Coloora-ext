from flask import Flask, request, jsonify, make_response
import requests
import base64
from flask_cors import CORS, cross_origin
import logging
import colorthief
from io import BytesIO

logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/")
def index():
    return "Flask server is up and running!"


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

if __name__ == '__main__':
    app.run(debug=True)
