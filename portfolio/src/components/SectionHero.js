import React from "react";

const SectionHero = (props) => {
    return (
        <section className="sectionContainer">
            <div className="section">
                <div className="sectionTitle">
                    <span>{props.title}</span>
                </div>
                {props.children}
            </div>
        </section>
    );
};

export default SectionHero;
