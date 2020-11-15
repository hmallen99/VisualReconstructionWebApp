import React from 'react';

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);

        
        this.handleUploadImage = this.handleUploadImage.bind(this);
        if (props.uploadFetchRequest == null) {
          this.uploadFetchRequest = this.defaultFetchRequest.bind(this);
        } else {
          this.uploadFetchRequest = props.uploadFetchRequest.bind(this);
        }
         
    }

    defaultFetchRequest(data) {
      fetch('https://visrec-backend.herokuapp.com/uploads', {
          method: 'POST',
          body: data,
      })
    }

    handleUploadImage(e) {
        e.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);

        this.uploadFetchRequest(data);
    }

    render() {
      return (
        <div className="ImageUpload">
          <p>
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

export default ImageUpload;
