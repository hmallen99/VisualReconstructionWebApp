import React from 'react';
import ImageUpload from '../UtilPages/ImageUpload';

class MnistCNN extends React.Component {
  constructor(props) {
    super(props);

    this.handleDigitDetection = this.handleDigitDetection.bind(this);
    this.state = {
      digit : "Upload an image to get a digit!",
    }
  }

  handleDigitDetection(data) {
    fetch('https://visrec-backend.herokuapp.com/demos/mnist_cnn', {
        method: 'POST',
        body: data,
    }).then(response => {
      return response.json()
    }).then(json => {
      this.setState({digit : json})
    })
  }

  render() {
    return (
      <div className="MnistCNN">
        <h2>
          MnistCNN
        </h2>
        <ImageUpload uploadFetchRequest={this.handleDigitDetection} />
    <h3>{this.state.digit}</h3>
      </div>
    );
  }
}

export default MnistCNN;