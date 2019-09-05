import React from "react";

const Validation = (props) => {
    let validationMessage ="";
    if (props.inputLength <= 5) {
        validationMessage = "Text too short!";
    } else {
        validationMessage = "Text long enough";
    }
    return (
    <div className="validation">
        {
            props.inputLength >5 ?
            <p>Text long enough</p> :
            <p>Text too short!</p>
        }
        <p>{validationMessage}</p>
    </div>
    )
}

export default Validation;