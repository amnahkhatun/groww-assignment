import React, { Component } from "react";
import "./style.css";
import DisplayTable from "./DisplayTable";

export default class InformationBox extends Component {
  state = {
    values: "",
    confirmed: "",
    deceased: "",
    recovered: "",
    tested: ""
  };
  componentDidMount() {
    fetch("https://api.covid19india.org/v4/min/data.min.json")
      .then(res => {
        if (!res.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then(data => {
        localStorage.setItem("Covid19", JSON.stringify(data));

        let keys = Object.keys(data);
        let tConfirmed = 0;
        let tDeceased = 0;
        let tRecovered = 0;
        let tTested = 0;
        keys.map(item => (
          <>
            {/* {console.log(data[item]["total"], "total")} */}
            {
              ((tConfirmed += data[item]["total"]["confirmed"]),
              (tDeceased += data[item]["total"]["deceased"]),
              (tRecovered += data[item]["total"]["recovered"]),
              (tTested += data[item]["total"]["tested"]))
            }
          </>
        ));
        {
          {
            this.setState({
              confirmed: tConfirmed,
              deceased: tDeceased,
              recovered: tRecovered,
              tested: tTested,
              values: data
            });
          }
        }
      });
  }

  render() {
    return (
      <div>
        <h1>India</h1>
        <div className="main-box">
          <div className="individual-box">
            <p>Total Confirmed</p>
            <p>{this.state.confirmed}</p>
          </div>
          <div className="individual-box">
            <p>Active</p>
            <p>{this.state.tested}</p>
          </div>
          <div className="individual-box">
            <p>Recovered</p>
            <p>{this.state.recovered}</p>
          </div>
          <div className="individual-box">
            <p>Deceased</p>
            <p>{this.state.deceased}</p>
          </div>
        </div>
        <DisplayTable data={this.state.values} isState={false} />
      </div>
    );
  }
}
