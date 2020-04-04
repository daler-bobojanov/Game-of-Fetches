import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://anapioficeandfire.com/api\\";
class HouseLCoatOfArms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
            coatOfArms: null
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
                coatOfArms: res.data.coatOfArms
            })
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div>
                <button type="button" value="houses/229" onClick={this.buttonClicked}>
                    What's the coat of arms of House Lannister?
          </button>
                <h1>{this.state.coatOfArms}</h1>
            </div>
        );
    }
}

export default HouseLCoatOfArms;