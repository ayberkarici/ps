import React, { useEffect, useState } from "react";
import SkeletonLarge from "../skeletons/SkeletonLarge";
import RankWheel from "./RankWheel";

const MovieCard = (props) => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        let axios = require("axios");
        let qs = require("qs");
        let data = qs.stringify({ tt: props.name }); // props.query
        let config = {
            method: "post",
            url: "https://betterimdbot.herokuapp.com/",
            headers: {
                accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                setMovie(response.data[1].jsonnnob);
            })
            .catch(function (error) {
                console.log(error);
                return false;
            });
    }, []);


    const [detail, setDetail] = useState(false);

    function handleDetail(e) {
        e.type == "mouseleave" ? setDetail(false) : setDetail(!detail);
    }

    return (
        <>

            <div
                className="card"
                onMouseEnter={(e) => handleDetail(e)}
                onMouseLeave={(e) => handleDetail(e)}
                onTouchStart={(e) => handleDetail(e)}
                onTouchEnd={(e) => handleDetail(e)}
            >
                {movie.name == undefined && <SkeletonLarge />}
                {movie.image && (
                    <>
                        <div className="cardNumber">
                            <span>{props.number}</span>
                        </div>
                        <div className="cardImage" style={{backgroundImage : "url(" + movie.image + ")"}}>
                        </div>
                        <div
                            className="shadowCard"
                            style={{
                                opacity: detail ? 1 : 0,
                            }}
                        >
                            <div className="single-chart">
                                <RankWheel rank={props.rank} detail={detail} />
                            </div>
                            <div
                                className={
                                    detail
                                        ? "seeDetailsButton animate__animated animate__fadeIn "
                                        : "seeDetailsButton "
                                }
                            >
                                {" "}
                            </div>
                        </div>{" "}
                    </>
                )}
            </div>
        </>
    );
};

export default MovieCard;
