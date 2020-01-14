import React from "react";

export default class Maps extends React.Component {
  render() {
    return (
      <div className="maps">
        <h2>
          <strong>Maps</strong>
        </h2>
        <div>
          <img className="map" src={require("../images/IST.png")} />
          <img className="map" src={require("../images/Campus.jpg")} />
        </div>
        <br />
      </div>
    );
  }
}
