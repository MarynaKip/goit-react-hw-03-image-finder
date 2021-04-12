import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ImageGallery.scss";

// import styled from "styled-components";

class ImageGallery extends Component {
  render() {
    return <ul className="ImageGallery">{this.props.children}</ul>;
  }
}

ImageGallery.propTypes = {
  children: PropTypes.node,
};

export default ImageGallery;
