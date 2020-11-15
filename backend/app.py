import os
from flask import Flask, flash, jsonify, request, redirect, url_for
from flask_cors import CORS
from routes.demos import demos

app = Flask(__name__)
app.register_blueprint(demos)

CORS(app)

@app.route('/')
def vis_main():
    return "NT@B Visual Reconstruction"

@app.route('/uploads', methods=['GET', 'POST'])
def upload_file():
    #TODO: Get images from frontend here
    file = request.files['file']
    return jsonify(file)

@app.route('/generate3d', methods=['GET', 'POST'])
def generate_3d():
    #TODO: Send an obj file of with the 3D model to the frontend
    return "Generate 3D image"

if __name__ == "__main__":
    app.run()
