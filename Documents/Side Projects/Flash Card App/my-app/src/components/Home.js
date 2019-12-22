import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import FlashCard from "./FlashCard";
import AddForm from "./AddForm";

// data
import { conceptArray } from "../data";

const Home = () => {
    // Fisher-Yates (aka Knuth) Shuffle
    // don't completely understand it but I got it to work
    const shuffle = array => {
        var currentIndex = array.length, temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
    
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    
        return array;
  }

    // puts shuffled array of concepts into state
    const [stateConceptArray, setStateConceptArray] = useState(conceptArray);
    const [cardArray, setCardArray] = useState(shuffle(stateConceptArray));
    const [randomCard, setRandomCard] = useState({});
    const [frontMode, setFrontMode] = useState(true);
    const [formMode, setFormMode] = useState(false);
    const [homeMode, setHomeMode] = useState(true);

    // stores the individual concept (individual item in the concept Array) to be displayed as a card
    const getCard = () => {
        // grabs the first item in the shuffled array
        setRandomCard(cardArray[0]);
        // filters array so that item already displayed on card cannot be shown again until array is reshuffled
        setCardArray(cardArray.filter(item => item !== cardArray[0]));
        // when there is only one item left in filtered array, shuffles entire array again
        if (cardArray.length === 1) {
        setCardArray(shuffle(stateConceptArray));
        }
        // this allows for the front of the card(ie. the definition) to be displayed
        setFrontMode(true);
  };

    const flip = () => {
    // this allows for the back of the card (ie. the term itself) to be displayed
        setFrontMode(!frontMode);
    }


    // click event that takes us to form to add new concept to conceptArray
    const renderForm = () => {
        setFormMode(true);
        setHomeMode(false);
    }

    // click event that allows for Home Page to be rendered
    const handleHomeClick = () => {
        setHomeMode(true);
        setFormMode(false);
    }
    

    // console.log(randomCard);
    // console.log(conceptArrayRandomized);
    // console.log(conceptArray);

    return (
        <div className="home">
            <Link className="home-a" to="/" onClick={handleHomeClick}>Home</Link>
            <div className="flash-card">
                <div className="card-contents-container">
                    {!formMode && <FlashCard randomCard={randomCard} frontMode={frontMode} />}
                    <div className="card-buttons-container">
                        {!formMode && <button className="card-button get-card" onClick={getCard}>NEXT CARD</button>}
                        {!formMode && <button className="card-button flip-card" onClick={flip}>FLIP CARD</button>}
                        <br />
                    </div>
                </div>
            </div>
            <Link className="add-a" to="/add">{!formMode && <button className="add-button" onClick={renderForm}>+ADD CARD</button>}</Link>
            {formMode && !homeMode && <AddForm stateConceptArray={stateConceptArray} setStateConceptArray={setStateConceptArray} />}
        </div>
    )
}

export default Home;