import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export default class SectionOne extends Component {
  render() {

    const textStyle = {
      color: '#000000'
    }

    return (
      <div className="section">
      <Spring
      from={{ opacity: 0, marginTop: -10000 }}
      to={{ opacity: 1, marginTop: 0 }}
      >
        {props => (
          <div style={props}>
              <h3 style={textStyle}>Section one</h3>
          </div>
        )}
      </Spring>
      </div>
    );
  }
}
