import React from "react";
import Quiz from "./quiz";
export default class QuizComponent extends React.Component {
  state = {
    quizQstn: [
      {
        qst: "What is the name of this Animal ?",
        options: ["Lion", "Cat", "Dog"],
        answer: "Lion",
        img: "https://i.ibb.co/NLDmTcg/lion.jpg",
      },
      {
        qst: "What is the name of this Color ?",
        options: ["Red", "Blue", "Black"],
        answer: "Blue",
        img: "https://i.ibb.co/4dn6Sfz/blue.png",
      },
      {
        qst: "What is the name of this Flower ?",
        options: ["Rose", "Lilly", "Sunflower"],
        answer: "Rose",
        img: "https://i.ibb.co/6RzhNJp/rose.jpg",
      },
      {
        qst: "What is the name of this Player ?",
        options: ["Virat", "Dhoni", "Raina"],
        answer: "Dhoni",
        img: "https://i.ibb.co/JxpH5Y8/dhoni.jpg",
      },
      {
        qst: "What is the name of this Gadget ?",
        options: ["Mobile", "TV", "Calculator"],
        answer: "Mobile",
        img: "https://i.ibb.co/m8yR8vj/mobile.jpg",
      },
      {
        qst: "What is the name of this Actor ?",
        options: ["Shahruk", "Salman", "Amitabh"],
        answer: "Amitabh",
        img: "https://i.ibb.co/qYfYV7w/amitabh.jpg",
      },
      {
        qst: "What is the name of this Vechile ?",
        options: ["Bike", "Car", "Train"],
        answer: "Bike",
        img: "https://i.ibb.co/chj0fCB/bike.jpg",
      },
      {
        qst: "What is the colour of the moon ?",
        options: ["white", "Gray", "Blue"],
        answer: "white",
        img: "https://i.ibb.co/TLpzkKx/moon.jpg",
      },
      {
        qst: "What is the Color of Rainbow  ?",
        options: ["only Red", "only Green", "mixed"],
        answer: "mixed",
        img: "https://i.ibb.co/vd8WjkN/rainbow.jpg",
      },
      {
        qst: "What is the name of this Politician ?",
        options: ["Modi", "Yogi", "Kejriwal"],
        answer: "Modi",
        img: "https://i.ibb.co/CsNp1xF/The-Prime-Minister-Shri-Narendra-Modi-with-the-Prime-Minister-of-Ireland-Mr-Enda-Kenny-at-Government.jpg",
      },
      {
        qst: "What is the name of this Bird ?",
        options: ["Sparrow", "Crow", "Peacock"],
        answer: "Crow",
        img: "https://i.ibb.co/TBGy7Jx/crow.jpg",
      },
      {
        qst: "What is the name of this Place ?",
        options: ["India Gate", "LalKila", "Kutubminar"],
        answer: "LalKila",
        img: "https://i.ibb.co/RgcqJpb/lalkila.jpg",
      },
      {
        qst: "What is the name of this Pot ?",
        options: ["Jug", "Bowl", "Spoon"],
        answer: "Spoon",
        img: "https://i.ibb.co/bsyZ6nZ/spoon.jpg",
      },
    ],
    name: "",
    view: -1,
    randomArr: [],
  };
  async componentDidMount() {
    const { quizQstn } = this.state;
    let gen = [];
    for (let i = 0; i < 5; i++) {
      let randomI;
      while (!randomI) {
        let temp = Math.floor(Math.random() * quizQstn.length);
        if (!gen.filter((v) => quizQstn[temp] == v).length) {
          randomI = temp;
        }
      }
      gen.push(quizQstn[randomI]);
    }
    this.setState({ randomArr: gen });
  }
  handleChange = (e) => {
    const { currentTarget: input } = e;
    let s1 = { ...this.state };
    s1[input.name] = input.value;
    this.setState(s1);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ view: 1 });
  };
  render() {
    const { view, name, randomArr = [] } = this.state;

    return (
      <div className="container">
        {view == -1 ? (
          <React.Fragment>
            <div className="text-center welcomeScreen ">
              <h2 className="heading2  my-1">Welcome to Quiz </h2>
              <div className="form-group my-4 ">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Please Enter Your name"
                />
                <div className="text-center">
                  <button
                    className="btn btn-warning btn-sm my-4"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <Quiz name={name} randomArr={randomArr} />
        )}
      </div>
    );
  }
}