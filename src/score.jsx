import React from "react";
import axios from "axios";
export default class Score extends React.Component {
  state = {};
  tryAgain = () => {
    window.location = "/";
  };
  async componentDidMount() {
    let { name, count } = this.props;
    console.log(name, count);
    let date = new Date();
    let dates = date.toLocaleString();
    let obj = { name: name, error: count, date: dates };
    let response = await axios.post(
      "https://polar-garden-52627.herokuapp.com/user",
      obj
    );
    let { data } = response;
  }
  render() {
    let { name, count } = this.props;
    return (
      <div className="">
        <div className="scorecard">
          <div className="error">
            Number of Errors :- <span className="text-danger">{count}</span>
          </div>
          <div className="continue-btn-wrapper">
            <button
              className="continue-btn"
              onClick={() => this.tryAgain()}
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }
}