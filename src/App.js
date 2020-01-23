import React from "react";

import Maps from "./Components/Maps";
import Header from "./Components/Header";
import Schedule from "./Components/Schedule";
import Media from "./Components/Media";

class App extends React.Component {

  render() {
    //DONE: Add a helpful resources section.
      //TODO: need to add content
    //TODO: make the site thoroughly responsive
    //TODO: add notifications for announcements
    //TODO: Fix issue with zoomed in on mobile

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
