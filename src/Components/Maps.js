import React from "react";

export default class Maps extends React.Component {
  render() {
    return (
      <div className="maps">
        <h2>
          <strong>Maps</strong>
        </h2>
        <div>
          <img style={{maxWidth: "100%"}} src={require("../images/PG6.jpg")} />
          <img style={{ maxWidth: "100%" }} src={require("../images/GC.jpg")} />
          <img style={{ maxWidth: "100%" }} src={require("../images/Advising.jpg")} />
        </div>
        <br />
      </div>
    );
  }
}
