import React from "react";

const Substance = (props) => {
    return (
        <div className="bowl">
            <span>
                <span className="emojiSign">{props.emoji}</span> {props.children}
            </span>
        </div>
    );
};

export default Substance;
