import React from "react";

export default class Radio extends React.Component {
  render() {
    //TODO: Have the discord bot monitor a channel for media links (youtube, soundcloud, etc)
      // and have a radio (media player) section of the live page to play the posted songs in a queue


    return (  
      <div className="radio">
        <div className="card">
          <div className="col">
              <i className="fa fa-circle text-danger Blink"></i>&nbsp; LIVE
          </div>
          <div className="col">
            {/*<audio id="audio_player" src="http://68.183.126.181:8000/stream" type="audio/mpeg" controls/>*/}
            <audio style={{width: "100%"}} id="audio_player" src="https://demo.azuracast.com/radio/8000/radio.mp3?1579048568" type="audio/mpeg" controls/>
          </div>
        </div>
      </div>
    );
  }
}
