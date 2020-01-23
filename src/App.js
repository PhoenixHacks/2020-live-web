import React from "react";

import Maps from "./Components/Maps";
import Header from "./Components/Header";
import Schedule from "./Components/Schedule";
import Media from "./Components/Media";

class App extends React.Component {

  render() {
    //TODO: add notifications for announcements

    return (<>
      <Header />
      <div className="container" id="content">
        <Media />
        <Schedule />
        <Maps />
      </div>
    </>);
  }
}

export default App;
