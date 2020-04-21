/** @format */

import React, { Component } from "react";

class DictionaryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainBlockDisplay: "none",
      detailsBlockDisplay: "",
      basicBlockDisplay: "flex",
      expandButtonOnVisible: "visible",
      kunDictVisible: "hidden",
    };
  }

  detailsListStyle = {
    marginBottom: "10px",
  };

  horizon__line = {
    opacity: "0.3",
    margin: "2px auto",
    width: "45%",
  };

  flexContainer = {
    backgroundColor: "#f1f1f1",
    width: "100px",
    margin: "10px",
    textAlign: "center",
    lineHeight: "75px",
    fontSize: "30px",
  };

  closeButtonHandle = () => {
    this.setState({
      mainBlockDisplay: "block",
      detailsBlockDisplay: "none",
    });
  };

  expandOnButtonHandle = () => {
    this.setState({
      basicBlockDisplay: "none",
      expandButtonOnVisible: "hidden",
      kunDictVisible: "visible",
    });
  };

  expandKunButtonHandle = () => {
    this.setState({
      basicBlockDisplay: "flex",
      expandButtonOnVisible: "visible",
      kunDictVisible: "hidden",
    });
  };

  justForTestHandle = () => {
    this.setState({
      mainBlockDisplay: "none",
      detailsBlockDisplay: "block",
    });
  };

  render() {
    return (
      <>
        {/* co ban */}
        <div
          className="dict__main"
          style={{
            width: "100%",
            color: "black",
            // display: this.state.mainBlockDisplay,
          }}
        >
          <div
            className="dict__basic"
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              height: "auto",
              alignItems: "center",
            }}
          >
            <div
              className="dict__basic__right"
              style={{
                width: "100%",
                display: "inline-block",
              }}
            >
              <p
                style={{
                  verticalAlign: "middle",
                  fontSize: "68px",
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                日
              </p>
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                NHẬ<span style={{ color: "red" }}>T</span>
              </p>
              <hr style={this.horizon__line} />
              <p align="center">
                に<span style={{ color: "red" }}>ち</span> 、 じ
                <span style={{ color: "red" }}>つ</span> (にち)
              </p>
              <hr style={this.horizon__line} />
              <p align="center">Ngày, mặt trời</p>
            </div>
          </div>

          <button onClick={this.justForTestHandle}>Use for testing</button>
        </div>

        {/* chi tiet co ban */}
        <div
          className="dict__details__container"
          style={{
            width: "100%",
            color: "black",
            display: this.state.detailsBlockDisplay,
          }}
        >
          <div
            className="dict__basic"
            style={{
              padding: "10px",
              height: "auto",
              alignItems: "center",
              display: this.state.basicBlockDisplay,
            }}
          >
            <div
              className="dict__basic__left"
              style={{
                width: "40%",
                display: "flex",
              }}
            >
              <p
                style={{
                  verticalAlign: "middle",
                  fontSize: "68px",
                  fontWeight: "800",
                  margin: "auto",
                }}
              >
                日
              </p>
            </div>
            <div
              className="dict__basic__right"
              style={{
                width: "59%",
                display: "inline-block",
              }}
            >
              <p align="center" style={{ fontSize: "20px" }}>
                NHẬ<span style={{ color: "red" }}>T</span>
              </p>
              <hr style={this.horizon__line} />
              <p align="center">
                に<span style={{ color: "red" }}>ち</span> 、 じ
                <span style={{ color: "red" }}>つ</span> (にち)
              </p>
              <hr style={this.horizon__line} />
              <p align="center">Ngày, mặt trời</p>
            </div>
          </div>

          {/* tu vung am On */}
          <div
            className="on__dict__container"
            style={{
              border: "1px solid rgb(214, 214, 194)",
              padding: "8px 0 8px 8px",
              fontSize: "12px",
              display: "flex",
              height: "auto",
            }}
          >
            <div className="on__dict__content" style={{ width: "98%" }}>
              <ul
                className="vocalbulary"
                style={{
                  listStyle: "circle",
                  // display: 'inline-block',
                  // flexDirection: 'column',
                  height: "auto",
                  marginLeft: "16px",
                }}
              >
                <li className style={this.detailsListStyle}>
                  <div
                    style={{
                      marginRight: "8%",
                      display: "inline-flex",
                    }}
                  >
                    日:
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                    }}
                  >
                    NHẬT (ngày, mặt trời)
                    <br />ひ
                  </div>
                </li>
                <li style={this.detailsListStyle}>
                  十日: THẬP-NHẬT (ngày 10)
                  <br />
                  とおか
                </li>
                <li style={this.detailsListStyle}>
                  日本: NHẬT-BẢN (Nhật Bản)
                  <br />
                  ほんじつ
                </li>
                <li style={this.detailsListStyle}>
                  本日: BẢN-NHẬT (hôm nay)
                  <br />ひ
                </li>
              </ul>
            </div>

            <div
              className="right__task__bar"
              style={{
                // width: "5%",
                display: "flex",
                justifyContent: "center",
                height: "auto",
                flexWrap: "wrap",
                alignContent: "space-between",
              }}
            >
              <div className={this.flexContainer}>
                <button onClick={this.closeButtonHandle}>X</button>
              </div>
              <div
                className={this.flexContainer}
                style={{
                  visibility: this.state.expandButtonOnVisible,
                }}
              >
                <button onClick={this.expandOnButtonHandle}>v</button>
              </div>
            </div>
          </div>

          <div
            className="kun__dict__details"
            style={{
              border: "1px solid rgb(214, 214, 194)",
              padding: "8px 0 8px 8px",
              fontSize: "12px",
              display: "flex",
              height: "auto",
              visibility: this.state.kunDictVisible,
            }}
          >
            <div style={{ width: "98%" }}>
              <ul
                style={{
                  listStyle: "circle",
                  display: "inline-block",
                  flexDirection: "column",
                  height: "auto",
                  marginLeft: "16px",
                }}
              >
                <li
                  style={{
                    marginBottom: "10px",
                    display: "block",
                  }}
                >
                  <div style={{ width: "5%" }}>日:</div>
                  <div style={{ width: "5%" }}>
                    NHẬT (ngày, mặt trời)
                    <br />ひ
                  </div>
                </li>
                <li style={this.detailsListStyle}>
                  十日: THẬP-NHẬT (ngày 10)
                  <br />
                  とおか
                </li>
                <li style={this.detailsListStyle}>
                  日本: NHẬT-BẢN (Nhật Bản)
                  <br />
                  ほんじつ
                </li>
              </ul>
            </div>

            <div
              className="right__task__bar"
              style={{
                // width: "5%",
                display: "flex",
                justifyContent: "center",
                height: "auto",
                flexWrap: "wrap",
                alignContent: "space-between",
              }}
            >
              <div
                style={{ visibility: "hidden" }}
                className={this.flexContainer}
              >
                XX
              </div>
              <div
                className={this.flexContainer}
                onClick={this.expandKunButtonHandle}
              >
                <button>^</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DictionaryView;
