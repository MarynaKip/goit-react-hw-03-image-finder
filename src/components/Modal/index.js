import "./Modal.scss";
import React, { Component } from "react";
//import PropTypes from "prop-types";

export default class Modal extends Component {
  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

//Modal.propTypes = {};

//export default Modal;
