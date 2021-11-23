import React from "react";

export default class UploadImage extends React.Component {
  triggerInputFile = () => {
    this.fileInput.click();
  };

  getImage = (event) => {
    this.props.getImage(event.target.files[0], this.props.noteSelected);
  };

  render() {
    return (
      <div>
        <img
          className="noteAddFeatureImages"
          src={require("../assets/account.svg")}
          alt="uploadImage"
          onClick={this.triggerInputFile}
        />
        <input
          ref={(fileInput) => (this.fileInput = fileInput)}
          type="file"
          style={{ display: "none" }}
          onChange={this.getImage}
          name="image"
        />
      </div>
    );
  }
}
