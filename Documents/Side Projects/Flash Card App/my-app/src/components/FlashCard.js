import React from "react";

// components
import Definition from "./Definition";
import Term from "./Term";

const FlashCard = props => {
    return (
        <div>
            {props.frontMode && <Definition randomCard={props.randomCard} />}
            {!props.frontMode && <Term randomCard={props.randomCard} />}
        </div>
    )
}

export default FlashCard;