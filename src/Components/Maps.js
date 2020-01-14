import React from "react";

export default class Maps extends React.Component {
  render() {
    return (
      <div className="maps">
        <h2>
          <strong>Maps</strong>
        </h2>
        <div>
          <img intrinsicsize="690x518" style={{maxWidth: "100%"}} src={require("../images/IST.png")} />
        </div>
        <br />
      </div>
    );
  }
}
