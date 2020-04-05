import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://anapioficeandfire.com/api\\";
class FounderOfHouseStark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
            founderOfHouseStark: null
        }
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    async buttonClicked(e) {
        e.persist();
        e.preventDefault();
        try {
            let res = await axios.get(`${BASE_URL}${e.target.value}`);
            res = await axios.get('https://www.anapioficeandfire.com/api/characters/209');

            this.setState({
                question: e.target.value,
                founderOfHouseStark: res.data.name
            })

        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div className="wrapper">
                <button type="button" value="houses/362" onClick={this.buttonClicked}>
                    What's the name of the founder of House Stark?
        </button>
                <h1>{this.state.founderOfHouseStark}</h1>
            </div>
        );
    }
}

export default FounderOfHouseStark;