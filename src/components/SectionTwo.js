import React, { Component } from "react";

export default class SectionTwo extends Component {
  downClick = () => {
    this.props.api.moveSectionDown();
  };

  upClick = () => {
    this.props.api.moveSectionUp();
  };

  render() {
    return (
      <div className="section">
        <div className="slide">
          <h3>Section two</h3>
          <button onClick={this.downClick}>Click me to move down</button>
          <button onClick={this.upClick}>Click me to move up</button>
        </div>
      </div>
    );
  }
}
