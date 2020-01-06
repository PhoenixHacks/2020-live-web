import React from "react";

export default class Radio extends React.Component {
  render() {
    return (  
        <div>
            <h2>
                <b>Radio</b>
            </h2>
            <div>
                <i class="fa fa-circle text-danger Blink"></i>&nbsp; LIVE
            </div>
            <audio id="audio_player" src="http://68.183.126.181:8000/stream" type="audio/mpeg" controls/>
        </div>
    );
  }
}
