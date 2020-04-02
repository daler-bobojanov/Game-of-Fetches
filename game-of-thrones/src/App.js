import React, { Component } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "https://anapioficeandfire.com/api\\";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      question: " "
      // born: "res.data",
      // region: "res.data",
      // data: []
    };
    this.buttonClicked = this.buttonClicked.bind(this);
    // this.res.data = this.res.data.bind(this);
  }

  async buttonClicked(e) {
    e.preventDefault();
    this.setState({
      question: e.target.value
      // born: res.data.born,
      // region: res.data.region
    });
    const res = await axios.get(`${BASE_URL}${e.target.value}`);
    console.log(res.data.region);
  }

  render() {
    return (
      <div className="App">
        <header>Game of Fetches</header>
        <form onClick={this.buttonClicked}>
          <button value="characters/16">Where was Margaery Tyrell born?</button>
          <button value="houses/378">What region is House Targaryen in?</button>
          <button value="houses/229">
            What's the coat of arms of House Lannister?
          </button>
          <button value="houses/17">
            What is the second seat of House Baratheon?
          </button>
          <button value="characters/901">
            What is Robert Baratheon's second alias?
          </button>
          <button value="houses/362">
            What's the name of the founder of House Stark?
          </button>
          <button value="characters/232">
            What are the titles of Catelyn Stark's three POV books?
          </button>
        </form>
        {/* <div id="display"></div> */}
      </div>
    );
  }
}

export default App;

/*


Here's the part you have to do

Where was Margaery Tyrell born?
URL: http://anapioficeandfire.com/api/characters/16

What region is House Targaryen in?
URL: http://www.anapioficeandfire.com/api/houses/378

What's the coat of arms of House Lannister?
URL: http://www.anapioficeandfire.com/api/houses/229

What is the second seat of House Baratheon?
URL: http://www.anapioficeandfire.com/api/houses/17

What is Robert Baratheon's second alias?
URL: http://www.anapioficeandfire.com/api/characters/901

What's the name of the founder of House Stark? (You have to chain fetch requests!)
URL: http://www.anapioficeandfire.com/api/houses/362

What are the titles of Catelyn Stark's three POV books? (Look into Promise.all to request these simultaniously)
URL: http://www.anapioficeandfire.com/api/characters/232
*/
