import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Footer = (props) => {
    let history = useLocation();

    return (
        <div
            className={
                history.pathname == "/" ? "footer " : "footer footerBgDark "
            }
        >
            <span>{"</> by Ayberk Arıcı"}</span>
        </div>
    );
};

export default Footer;
