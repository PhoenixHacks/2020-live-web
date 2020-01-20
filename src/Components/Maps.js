import React from "react";
import ModalImage from "react-modal-image";

export default class Maps extends React.Component {
  render() {
    return (
      <div className="" id="maps">
        <ModalImage className="map" alt="IST Map" small={require("../images/IST.png")} large={require("../images/IST.png")} />
      </div>
    );
  }
}
