import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://anapioficeandfire.com/api\\";
class SecSeatOfHouseBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
            secondSeatOfHouseBaratheon: [],
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
                secondSeatOfHouseBaratheon: res.data.seats
            })
        } catch (e) {
            console.error(e);

        }
    }

    render() {
        return (
            <div className="wrapper">
                <button type="button" value="houses/17" onClick={this.buttonClicked}>
                    What is the second seat of House Baratheon?
        </button>
                <h1>{this.state.secondSeatOfHouseBaratheon[1]}</h1>
            </div>
        );
    }
}

export default SecSeatOfHouseBar;