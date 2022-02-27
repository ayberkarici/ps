import React from "react";
import "animate.css";

function Header(props) {
    return (
        <header 
            role="banner"
            className={
                props.windowPos
                    ? "banner animate__animated animate__fadeIn"
                    : "banner animate__animated animate__fadeOutUp"
            }
        >
            <span className="title animate__animated animate__fadeInDown">
                Ayberk Arıcı
            </span>
            <span className="subTitle code animate__animated animate__fadeIn">
                personal site
            </span>
        </header>
    );
}

export default Header;
