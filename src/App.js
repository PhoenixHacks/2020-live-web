import React from "react";

import Maps from "./Components/Maps";
import Header from "./Components/Header";
import Schedule from "./Components/Schedule";
import Media from "./Components/Media";

class App extends React.Component {

  render() {
    // Add a helpful resources section.
    return (
      <div>
        <Header />
        <div className="container" id="content">
          <Media />
          <Schedule />
          <Maps />
        </div>
      </div>
    );
  }
}

export default App;
