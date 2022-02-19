import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SayHi = () => {
    return (
        <div className="socialsContainer">
            <a className="mail" href="mailto:ayberk816gg@gmail.com">
                ayberk816gg <br /> @gmail.com
            </a>
            <div className="sectionInsideSeperator"></div>
            <p>
                I love designing things. And also love
                expressing myself with using colors and layers.
            </p>
            <div className="socials">
                <a href="https://www.instagram.com/ayberkaricci">
                    <div className="socialsButton">
                        <FaInstagram />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/ayberk-ar%C4%B1c%C4%B1-6873a318a/">
                    <div className="socialsButton">
                        <FaLinkedin />
                    </div>
                </a>
                <a href="https://github.com/ayberkarici">
                    <div className="socialsButton">
                        <FaGithub />
                    </div>
                </a>
            </div>
            
        </div>
        
    );
};

export default SayHi;
