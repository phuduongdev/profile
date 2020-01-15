import React, { Component } from "react";
import "../../css/metronome-app.css";
import "../../css/constellation-effects.css";
import StrongBeat from "../../files/audio/click1.wav";
import WeakBeat from "../../files/audio/click2.wav";

// import "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js";

class MetronomeApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      count: 1,
      bmp: 80,
      beatsPerMeasure: 4
    };

    this.StrongBeat = new Audio(StrongBeat);
    this.WeakBeat = new Audio(WeakBeat);
  }

  handleBmpChange = event => {
    const bmp = event.target.value;
    this.setState({ bmp });
  };

  //   startStop = () => {
  //     this.StrongBeat.play();
  //   };

  startStop = () => {
    if (this.state.playing) {
      clearInterval(this.timer);
      this.setState({
        // count: ,
        playing: false
      });
    } else {
      this.timer = setInterval(this.playClick, (60 / this.state.bmp) * 1000);

      this.setState(
        {
          count: 0,
          playing: true
        },
        this.playClick
      );
    }
  };

  playClick = () => {
    const { count, beatsPerMeasure } = this.state;

    if (count % beatsPerMeasure === 0) {
      this.WeakBeat.play();
    } else {
      this.StrongBeat.play();
    }

    this.setState(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  };

  render() {
    // let bmp = 60;
    // let playing = false;
    const { playing, bmp, count } = this.state;
    return (
      <>
        <div id="projects" className="container demo">
          <div className="content">
            <div id="large-header" className="large-header">
              <canvas id="demo-canvas"></canvas>
              {/* <h1 className="main-title">
                <span className="thin">Explore</span> Space
              </h1> */}
              <div className="metronome">
                <h1>Metronome</h1>
                {/* <h2>RAWrrrrrrrrrrrrrrrrrrrrrrr!</h2> */}
                <div className="bmp__slider">
                  <div>{bmp}&nbsp;BMP</div>
                  <input
                    type="range"
                    min="60"
                    max="240"
                    value={bmp}
                    onChange={this.handleBmpChange}
                  />
                  {/* <div>{count}</div> */}
                </div>
                <button onClick={this.startStop}>
                  {playing ? "Stop" : "Start"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MetronomeApp;
