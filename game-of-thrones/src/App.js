import React, { Component } from "react";
import "./App.css";
import MargaeryTBorn from './components/MargaeryTBorn';
import HouseTRegion from './components/HouseTRegion';
import HouseLCoatOfArms from './components/HouseLCoatOfArms';
import SecSeatOfHouseBar from './components/SecSeatOfHouseBar';
import RobertBSecondAlias from './components/RobertBSecondAlias';
import FounderOfHouseStark from './components/FounderOfHouseStark';
import TitlesOfCatelynSPOVBooks from './components/TitlesOfCatelynS3POVBooks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Game of Fetches</header>
        <MargaeryTBorn />
        <HouseTRegion />
        <HouseLCoatOfArms />
        <SecSeatOfHouseBar />
        <RobertBSecondAlias />
        <FounderOfHouseStark />
        <TitlesOfCatelynSPOVBooks />
      </div>
    );
  }
}

export default App;

/*
Here's the part you have to do
1.
Where was Margaery Tyrell born?
URL: http://anapioficeandfire.com/api/characters/16
2.
What region is House Targaryen in?
URL: http://www.anapioficeandfire.com/api/houses/378
3.
What's the coat of arms of House Lannister?
URL: http://www.anapioficeandfire.com/api/houses/229
4.
What is the second seat of House Baratheon?
URL: http://www.anapioficeandfire.com/api/houses/17
5.
What is Robert Baratheon's second alias?
URL: http://www.anapioficeandfire.com/api/characters/901
6.
What's the name of the founder of House Stark? (You have to chain fetch requests!)
URL: http://www.anapioficeandfire.com/api/houses/362
7.
What are the titles of Catelyn Stark's three POV books? (Look into Promise.all to request these simultaniously)
URL: http://www.anapioficeandfire.com/api/characters/232
*/
