import React from 'react';

class Demos extends React.Component {
    constructor(props) {
        super(props);

        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    handleUploadImage(e) {
        e.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);

        fetch('http://localhost:5000/uploads', {
            method: 'POST',
            body: data,
        });
    }

    render() {
      return (
        <div className="Demos">
          <h2>
            Other Demos
          </h2>
          <p>
            Demos code here!
            <form onSubmit={this.handleUploadImage}>
                <div>
                  <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
                </div>
                <br />
                <div>
                  <button>Upload</button>
                </div>
            </form>
          </p>
        </div>
      );
    }

}

export default Demos;
