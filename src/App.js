import React from "react";

import Maps from "./Components/Maps";
import Header from "./Components/Header";
import Schedule from "./Components/Schedule";
import Media from "./Components/Media";

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
    
        <div className="content">
          <Media />
          <div className="spacer"/>
          <Schedule />
          <Maps />
        </div>
      </div>
    );
  }
}

export default App;
