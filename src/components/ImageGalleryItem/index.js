import React, { Component } from "react";
import "./ImageGalleryItem.scss";
import PropTypes from "prop-types";

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="ImageGalleryItem" key={this.props.id} id={this.props.id}>
        <img
          src={this.props.imageURL}
          alt={this.props.imageURL}
          className="ImageGalleryItem-image"
          onClick={() => this.props.onClick(this.props.modalURL)}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  modalURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
