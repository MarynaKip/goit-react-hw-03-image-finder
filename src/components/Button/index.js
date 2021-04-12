import React, { Component } from "react";

import "./Button.scss";

class Button extends Component {
  static defaultProps = {};

  static propTypes = {};

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
