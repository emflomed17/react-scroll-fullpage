import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import React, { Component } from "react";

export default class Landing extends Component {
  render() {
    console.log(this.props);
    const fullpageOptions = {
      anchors: ["firstPage", "secondPage", "thirdPage"],
      sectionsColor: ["#e7ea10", "#ff5f45", "#0798ec"],
      callbacks: ["onLeave"],
      scrollOverflow: true
    };
    const FullpageWrapper = fullpageProps => (
      <ReactFullpage
        {...fullpageOptions}
        {...fullpageProps}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <SectionOne />
              <SectionTwo fullpageApi={fullpageApi} />
              <SectionThree />
            </div>
          );
        }}
      />
    );
    return <FullpageWrapper />;
  }
}
