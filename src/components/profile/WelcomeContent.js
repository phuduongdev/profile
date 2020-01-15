import React from "react";
import "../../css/welcome.css";

function WelcomeContent(props) {
  return (
    <section className="container demo">
      <div className="content">
        <div id="large-header" className="large-header">
          <canvas id="demo-canvas"></canvas>
          <div id="welcome-section" className="main-title welcome-section">
            <h1>Hello I am Phu</h1>
            <p>a web developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeContent;
