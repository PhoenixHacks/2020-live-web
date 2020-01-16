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
          <div className="transition t-down"></div>
          <Media />
          <div className="transition t-up"></div>
          <Schedule />
          <div className="transition t-down"></div>
          <Maps />
        </div>
      </div>
    );
  }
}

export default App;
