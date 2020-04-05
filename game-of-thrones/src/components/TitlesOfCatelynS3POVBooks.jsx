import React, { Component } from 'react';
import Axios from 'axios';

const BASE_URL = "https://anapioficeandfire.com/api\\";
class TitlesOfCatelynSPOVBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
            firstCall: null,
            titlesOfPOVBooks: []
        }
        this.buttonClicked = this.buttonClicked.bind(this);

    }

    async buttonClicked(e) {
        e.persist();
        e.preventDefault();
        try {
            const res = await Axios.get(`${BASE_URL}${e.target.value}`);
            this.setState({
                question: e.target.value,
                firstCall: res.data.povBooks,
            })
            const promise1 = Axios.get(this.state.firstCall[0]);
            const promise2 = Axios.get(this.state.firstCall[1]);
            const promise3 = Axios.get(this.state.firstCall[2]);
            const allPromises = [promise1, promise2, promise3];

            // console.log('All Promises-->', allPromises);
            Promise.all(allPromises).then(responses => {
                const titles = []
                for (let i = 0; i < responses.length; i++) {
                    // console.log(responses[i].data.name)
                    titles.push(responses[i].data.name);

                    this.setState({ titlesOfPOVBooks: titles })
                    // console.log(this.state.titlesOfPOVBooks, 'This State');
                }
            })
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (

            <div className="wrapper" >
                <button type="button" value="characters/232" onClick={this.buttonClicked}>
                    What are the titles of Catelyn Stark's three POV books?
        </button>
                {/* <h1>{this.state.titlesOfPOVBooks}</h1> */}
                <ul>
                    {this.state.titlesOfPOVBooks.map((data, id) => (
                        <li key={id}>{`'${data}'`}</li>))}
                </ul>
            </div>

        );
    }
}

export default TitlesOfCatelynSPOVBooks;