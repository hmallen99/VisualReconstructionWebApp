import numpy as np
import tensorflow as tf
from tensorflow import keras
import os

def model():
    num_classes = 10
    input_shape = (28, 28, 1)
    #TODO: train this model and then save it. Use the saved model for inference in the demos
    model = keras.models.Sequential([
      keras.Input(shape=input_shape),
      keras.layers.Conv2D(32, kernel_size=(3, 3), activation='relu'),
      keras.layers.MaxPooling2D(pool_size=(2, 2)),
      keras.layers.Conv2D(64, kernel_size=(3, 3), activation='relu'),
      keras.layers.MaxPooling2D(pool_size=(2, 2)),
      keras.layers.Flatten(),
      keras.layers.Dropout(0.5),
      keras.layers.Dense(num_classes, activation="softmax")
    ])

    model.compile(loss="categorical_crossentropy", optimizer="adam", metrics=["accuracy"])

    return model

def load_dataset():
    num_classes = 10
    (x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()

    x_train = x_train.astype("float32") / 255
    x_test = x_test.astype("float32") / 255

    x_train = np.expand_dims(x_train, -1)
    x_test = np.expand_dims(x_test, -1)

    y_train = keras.utils.to_categorical(y_train, num_classes)
    y_test = keras.utils.to_categorical(y_test, num_classes)

    return x_train, y_train, x_test, y_test


def train():
    x_train, y_train, x_test, y_test = load_dataset()
    mnist_model = model()
    mnist_model.fit(x_train, y_train, batch_size=128, epochs=15, validation_split=0.1)
    mnist_model.save_weights('saved_model/mnist_cnn/mnist_cnn_weights')
    return mnist_model

def load_and_evaluate(image):
    image = np.expand_dims(image, 0)
    image = np.expand_dims(image, -1)
    new_model = model()
    dirname = os.path.dirname(__file__)
    weight_file = os.path.join(dirname, 'saved_model/mnist_cnn/mnist_cnn_weights')
    new_model.load_weights(weight_file)
    return np.argmax(new_model.predict(image))

if __name__=="__main__":
    mnist_model = train()
    #print(load_and_evaluate(np.ones((1, 28, 28))))

