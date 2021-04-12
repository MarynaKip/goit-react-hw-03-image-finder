import "./Modal.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    modalURL: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">
          <img src={this.props.modalURL} alt={this.props.modalURL} />
        </div>
      </div>
    );
  }
}
