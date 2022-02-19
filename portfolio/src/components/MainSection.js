import React from "react";
import SectionHero from "../components/SectionHero";
import Substance from "../components/Substance";
import SkillBox from "../components/SkillBox";
import Skill from "../components/Skill";
import Work from "../components/Work";
import SayHi from "../components/SayHi";

const MainSection = () => {
    return (
        <div className="mainSection">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#252a34"
                    fill-opacity="1"
                    d="M0,96L1440,256L1440,0L0,0Z"
                ></path>
            </svg>
            <div className="sectionTray">
                <SectionHero title="Story.">
                    <Substance emoji="👀">
                        I was born in Sakarya/Adapazarı
                    </Substance>
                    <Substance emoji="✏️">
                        I went to Cumhuriyet Anatolian High School
                    </Substance>
                    <Substance emoji="🎨">
                        I started making oil paints and pencil drawings
                    </Substance>
                    <Substance emoji="👨‍💻">
                        I started Web Development and did some projects
                    </Substance>
                    <Substance emoji="📖">
                        I started to go to university (Marmara Univ. Industrial
                        Engineering, English)
                    </Substance>
                </SectionHero>
                <SectionHero title="Skills.">
                    <SkillBox>
                        <Skill sign="H" title="HTML5"></Skill>
                        <Skill sign="C" title="CSS3"></Skill>
                        <Skill sign="J" title="JavaScript"></Skill>
                        <Skill sign="R" title="ReactJS"></Skill>
                        <Skill sign="UI" title="UI/UX"></Skill>
                        <Skill sign="JQ" title="JQuery"></Skill>
                        <Skill sign="P" title="PHP"></Skill>
                        <Skill sign="M" title="MySQL"></Skill>
                        <Skill sign="S" title="SCSS"></Skill>
                    </SkillBox>
                </SectionHero>
                <SectionHero title="Works.">
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
                        desc="It is a simple to-do list app. I used Google's Firebase to authentication and realtime database. Also this is one of my early works on UI design and Google's Firebase."
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
                        title="Simple Pricer (no-responsive)"
                        desc="This one is first version of WoodluckTR Table Center. It is not supported for small sized devices like phones."
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
                    <br />
                    to be continued...
                </SectionHero>
                <SectionHero title="Say hi.">
                    <SayHi></SayHi>
                </SectionHero>
            </div>
        </div>
    );
};

export default MainSection;
