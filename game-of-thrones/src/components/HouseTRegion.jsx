import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://anapioficeandfire.com/api\\";
class HouseTRegion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
            houseTargaryenRegion: null
        }
        this.buttonClicked = this.buttonClicked.bind(this)
    }

    async buttonClicked(e) {
        e.persist();
        e.preventDefault();
        try {
            const res = await axios.get(`${BASE_URL}${e.target.value}`);
            this.setState({
                question: e.target.value,
                houseTargaryenRegion: res.data.region
            })
        } catch (e) {
            console.error(e);
        }
    }


    render() {
        return (
            <div>
                <button type="button" value="houses/378" onClick={this.buttonClicked}>
                    What region is House Targaryen in?
        </button>
                <h1>{this.state.houseTargaryenRegion}</h1>
            </div>
        );
    }
}

export default HouseTRegion;

