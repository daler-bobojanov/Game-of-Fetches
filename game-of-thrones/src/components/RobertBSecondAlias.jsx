import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://anapioficeandfire.com/api\\";
class RobertBSecondAlias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
            robertBaratheonSecondAlias: []
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
                robertBaratheonSecondAlias: res.data.aliases
            })

        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <button value="characters/901" onClick={this.buttonClicked}>
                    What is Robert Baratheon's second alias?
        </button>
                <h1>{this.state.robertBaratheonSecondAlias[1]}</h1>
            </div>

        );
    }
}

export default RobertBSecondAlias;