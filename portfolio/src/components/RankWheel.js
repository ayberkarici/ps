import React from "react";

const RankWheel = (props) => {
    return (
        <>
            <svg viewBox="0 0 36 36" className="circular-chart orange">
                <path
                    className="circle-bg"
                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                    className="circle"
                    strokeDasharray={props.rank*10 + ", 100"}
                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    style={{
                        animation: props.detail
                            ? "progress 1s ease-out forwards"
                            : "",
                    }}
                />
                <text x="18" y="20.35" className="percentage">
                    {props.rank}/10
                </text>
            </svg>
        </>
    );
};

export default RankWheel;
