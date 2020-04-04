import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://anapioficeandfire.com/api\\";
class MargaeryTBorn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      margaeryTyrellBorn: null
    }
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  async buttonClicked(e) {
    e.persist();
    e.preventDefault();
    try {
      const res = await axios.get(`${BASE_URL}${e.target.value}`);
      this.setState({
        question: e.target.value,
        margaeryTyrellBorn: res.data.born
      })
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        <button
          type="button"
          value="characters/16"
          onClick={this.buttonClicked}
        >
          Where was Margaery Tyrell born?
        </button>
        <h1>{this.state.margaeryTyrellBorn}</h1>
      </div>
    );
  }
}

export default MargaeryTBorn;