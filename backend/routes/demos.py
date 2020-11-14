from flask import Blueprint, render_template, request, jsonify
from flask_cors import CORS
import numpy as np
from PIL import Image
import models.mnist_cnn as model

demos = Blueprint('demos', __name__)

@demos.route('/demos/mnist_cnn', methods=['GET', 'POST'])
def classify_mnist():
    file = request.files['file']
    image = np.array(Image.open(file))
    #print(image.shape)
    result = model.load_and_evaluate(image)
    
    return jsonify(str(result))