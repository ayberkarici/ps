import React from "react";
import SectionHero from "../components/SectionHero";
import Substance from "../components/Substance";
import SkillBox from "../components/SkillBox";
import Skill from "../components/Skill";
import Work from "../components/Work";
import SayHi from "../components/SayHi";
import Favs from "./Favs";
import { useLocation } from "react-router-dom";

const MainSection = () => {
    return (
        <div className="mainSection">
            <div className="svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#16181f"
                        fillOpacity="1"
                        d="M0,96L1442,256L1442,0L0,0Z"
                    ></path>
                </svg>
            </div>
            <div className="sectionTray">
                <SectionHero title="Story.">
                    <Substance emoji="👀">
                        Was born in Sakarya/Adapazarı
                    </Substance>
                    <Substance emoji="✏️">
                        Went to Cumhuriyet Anatolian High School
                    </Substance>
                    <Substance emoji="🎨">
                        Started making oil paints and pencil drawings
                    </Substance>
                    <Substance emoji="👨‍💻">
                        Started Web Development and did some projects
                    </Substance>
                    <Substance emoji="📖">
                        Came to Istanbul and started university. (Marmara
                        Univ. Industrial Engineering, English)
                    </Substance>
                </SectionHero>
                <SectionHero title="Skills.">
                    <SkillBox>
                        <Skill level="4.3/5" sign="H" title="HTML5"></Skill>
                        <Skill level="4.5/5" sign="C" title="CSS3"></Skill>
                        <Skill level="4/5" sign="J" title="JavaScript"></Skill>
                        <Skill level="3.4/5" sign="R" title="ReactJS"></Skill>
                        <Skill level="4.1/5" sign="UI" title="UI/UX"></Skill>
                        <Skill level="3.6/5" sign="JQ" title="JQuery"></Skill>
                        <Skill level="3.8/5" sign="D" title="Django"></Skill>
                        <Skill level="3.9/5" sign="P" title="Python"></Skill>
                        <Skill level="4/5" sign="S" title="SCSS"></Skill>
                    </SkillBox>
                </SectionHero>
                <SectionHero title="Works.">
                    <Work
                        title="Aymar Local Market App"
                        desc="
                        A market application where you can place an order and track your order."
                        techs={[
                            { name: "Django" },
                            { name: "Python" },
                            { name: "HTML" },
                            { name: "CSS3" },
                            { name: "JavaScript" },
                            { name: "JQuery" },
                            { name: "Postgresql" },
                            { name: "AWS" },
                            { name: "Firebase" },
                        ]}
                        link="http://aymar.shop"
                    />
                    <Work
                        title="WoodluckTR Table Center"
                        desc="
                        A responsive web-app that allows you to design your own table and find out an average price."
                        techs={[
                            { name: "HTML5" },
                            { name: "CSS3" },
                            { name: "SCSS" },
                            { name: "JavaScript" },
                            { name: "JQuery" },
                        ]}
                        link="https://worldclasswoods-tablecenter.vercel.app/"
                    />
                    <Work
                        title="DoForU (simple to-do app)"
                        desc="It is a simple to-do list app. I used Google's Firebase to authentication and realtime database. Please focus on auth operations and real-time database. PHP can has some errors."
                        techs={[
                            { name: "HTML5" },
                            { name: "CSS3" },
                            { name: "PHP" },
                            { name: "CodeIgniter" },
                            { name: "Firebase" },
                            { name: "JQuery" },
                        ]}
                        link="https://doforu.herokuapp.com/"
                    />
                    <Work
                        title="Simple Pricer"
                        desc="This one is first version of WorldClassWoods Table Center."
                        techs={[
                            { name: "HTML5" },
                            { name: "CSS3" },
                            { name: "JavaScript" },
                        ]}
                        link="https://simple-pricerv2.vercel.app/"
                    />
                    <Work
                        title="Recipe App (no-responsive)"
                        desc="A simple Recipe App which used a recipe API. In this project, I practiced API calls and mobile design in my early coding days."
                        techs={[
                            { name: "HTML5" },
                            { name: "CSS3" },
                            { name: "JavaScript" },
                        ]}
                        link="https://recipe-appz.vercel.app/"
                    />
                    to be continued...
                </SectionHero>
                
                {/* <SectionHero title="Favs.">
                    <Favs path="/movies">
                        <h3>
                            See the <span style={{color : "#fff700"}}>movies</span> that inspired me
                        </h3>
                    </Favs>
                </SectionHero>
                 */}
                <SectionHero title="Say hi.">
                    <SayHi></SayHi>
                </SectionHero>
            </div>
        </div>
    );
};

export default MainSection;
