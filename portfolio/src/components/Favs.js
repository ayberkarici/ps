import React from "react";
import { Link } from "react-router-dom";

const Favs = (props) => {
    return (
        <div className="favs">
            {props.children}
            <Link to={props.path}>
                <button className="">Dive in!</button>
            </Link>
        </div>
    );
};

export default Favs;
