import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Button.scss";

class Button extends Component {
  static defaultProps = {};

  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <button
        className="Button"
        type="button"
        onClick={() => this.props.onClick()}
        // onClick={this.props.onClick()}
      ></button>
    );
  }
}

export default Button;
