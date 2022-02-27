import React, { useEffect } from "react";
import profilePhoto from "../assets/img/profile.jpg";
import MainSection from "../components/MainSection";

export const BriefLanding = (props) => {
    return (
        <>
            <div className="briefLanding">
                <div className="photoBox animate__animated animate__fadeIn animate__slower">
                    <img
                        src={profilePhoto}
                        alt="profile photo (code:handsome)"
                    ></img>
                </div>
                <div className="landingQuote animate__animated animate__fadeInDown animate__delay-0-5s">
                    <p>
                        <span>
                            “Life's most persistent and urgent question is,
                            'What are you doing for others?'”{" "}
                        </span>
                        <br />- MLK.
                    </p>
                </div>
                <div className="letsMeetBox">
                    <span className="animate__animated animate__slideInLeft">
                        Let's
                    </span>
                    <span className="animate__animated animate__slideInLeft">
                        Meet
                    </span>
                </div>

                <div
                    className={
                        props.windowPos
                            ? "ca3-scroll-down-link ca3-scroll-down-arrow "
                            : "deActivate ca3-scroll-down-link ca3-scroll-down-arrow"
                    }
                    data-ca3_iconfont="ETmodules"
                    data-ca3_icon=""
                ></div>
            </div>
            <MainSection />
        </>
    );
};

export default BriefLanding;
