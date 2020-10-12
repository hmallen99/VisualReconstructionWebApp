from flask import Flask
app = Flask(__name__)

@app.route('/')
def vis_main():
    return "NT@B Visual Reconstruction"