import React, { Component } from "react";
import "./style.css";

import { Link } from "react-router-dom";

export default class DisplayTable extends Component {
  render() {
    console.log(this.props.isState, "data-state");
    let data = {};
    // if (this.props.isState) {
    //   // data = Object.keys(this.props.data)
    //   console.log(this.props.data, "state");
    // } else {
    //   // data = Object.keys(this.props.data)
    //   //       console.log(this.props.data, "country");
    // }

    let tableRow = this.props.isState
      ? Object.keys(this.props.data["districts"]).map(item => (
          <>
            {console.log(item, "logdis")}
            <tr>
              <td>{item}</td>
              <td>
                {this.props.data["districts"][item]["total"]["confirmed"]}
              </td>
              <td>{this.props.data["districts"][item]["total"]["tested"]}</td>
              <td>
                {this.props.data["districts"][item]["total"]["recovered"]}
              </td>
              <td>{this.props.data["districts"][item]["total"]["deceased"]}</td>
            </tr>
          </>
        ))
      : Object.keys(this.props.data).map(item => (
          <tr>
            <Link to={`/state/${item}`}>
              <td>{item}</td>
            </Link>
            <td>{this.props.data[item]["total"]["confirmed"]}</td>
            <td>{this.props.data[item]["total"]["tested"]}</td>
            <td>{this.props.data[item]["total"]["recovered"]}</td>
            <td>{this.props.data[item]["total"]["deceased"]}</td>
          </tr>
        ));

    return (
      <div className="table-div">
        <table style={{ width: "100%" }}>
          <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deceased</th>
          </tr>
          {tableRow}
        </table>
      </div>
    );
  }
}
