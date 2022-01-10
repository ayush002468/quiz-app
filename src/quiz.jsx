import React from "react";
import Score from "./score";
export default class Quiz extends React.Component {
  state = {
    indexOf: 0,
    message: "",
    count: 0,
  };

  getCheck = (name, index, randomArr) => {
    let s1 = { ...this.state };
    let json = randomArr[index];

    if (json.answer !== name) {
      s1.indexOf = index;
      s1.message = "Answer is not Correct !!";
      s1.count += 1;
      this.setState(s1);
    } else if (json.answer == name) {
      s1.indexOf = s1.indexOf + 1;
      s1.message = "";
      this.setState(s1);
    }
  };
  render() {
    let { indexOf, message, count } = this.state;
    let { name, randomArr } = this.props;

    let {
      qst,
      options = [],
      img,
      answer,
    } = randomArr.length == 0 ? [] : randomArr[indexOf > 4 ? 0 : indexOf];
    return (
      <div className="">
        {indexOf > 4 ? (
          <Score name={name} count={count} />
        ) : (
          <div className="showQuiz ">
            <div>
              <h4 className="question">{qst}</h4>
            </div>
            <div className="imageShow">
              <img src={img} className="imagesize " />
            </div>
            <div className="button">
              {options.map((v, index) => (
                <button
                  className="btn btn-warning m-2 btn-sm "
                  key={index}
                  onClick={() => this.getCheck(v, indexOf, randomArr)}
                >
                  {v}
                </button>
              ))}
            </div>
            <div className="text-center text-danger">{message}</div>
          </div>
        )}
      </div>
    );
  }
}