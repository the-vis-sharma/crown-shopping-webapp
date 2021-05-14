import React from "react";
import Directory from "../../components/directory/directory.component";

import "./home-page.style.scss";

import DirectoryData from "../../components/directory/directory.data";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Directory directoryList={DirectoryData} />;
      </div>
    );
  }
}

export default HomePage;
