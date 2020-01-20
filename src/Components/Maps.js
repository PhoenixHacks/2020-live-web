import React from "react";
import ModalImage from "react-modal-image";

export default class Maps extends React.Component {
  render() {
    return (
      <div className="maps">
        <div className="map1">
          {/*<img alt="IST Map" src={require("../images/IST.png")} />*/}
          <ModalImage alt="IST Map" small={require("../images/IST.png")} large={require("../images/IST.png")} />
        </div>
        {/*
        <div className="map2">
          <img alt="Campus Map" src={require("../images/Campus.jpg")} />
        </div>*/}
      </div>
    );
  }
}
