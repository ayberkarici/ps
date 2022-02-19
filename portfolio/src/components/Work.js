import React, {  } from "react";

const Work = (props) => {
    return (
        <div className="workHero">
            <span className="title">
                <a href={props.link} rel="noreferrer">
                    {props.title}
                </a>
            </span>
            <p>{props.desc}</p>
            <span className="subTitle">Used Techs:</span>
            <ul>
                {props.techs.map((tech, index) => {
                    return <li key={index}>{tech.name}</li>;
                })}
            </ul>
            <a
                href={props.link}
                rel="noreferrer"
                className="goWorkButtonHref"
            >
                <div className="goWorkButton">Take a look</div>
            </a>
        </div>
    );
};

export default Work;
