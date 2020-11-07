import os
from flask import Flask, flash, request, redirect, url_for
app = Flask(__name__)

@app.route('/')
def vis_main():
    return "NT@B Visual Reconstruction"

@app.route('/uploads', methods=['GET', 'POST'])
def upload_file():
    #TODO: Get images from frontend here
    file = request.files['file']
    return "Upload a file"

@app.route('/generate3d', methods=['GET', 'POST'])
def generate_3d():
    #TODO: Send an obj file of with the 3D model to the frontend
    return "Generate 3D image"

if __name__ == "__main__":
    app.run()
