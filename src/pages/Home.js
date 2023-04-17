import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { Link } from "@material-ui/core";
import { useParams } from "react-router-dom";
import ProgrammingSkills from '../components/ProgrammingSkills';
import Frameworks from '../components/Frameworks';
import Tools from '../components/Tools';

import im from '../assets/azizz.jpg'

function Home() {
    const { id } = useParams();
    return (
        <div className="home">
            <div className="about">
                <span>
                    <h2>Hi, I'm Aziz</h2><img src={im} className="aziz" width={50} height={50}></img>
                </span>


                <div className="prompt">
                    <p className="line">A passionate software engineer with an experience in building enterprise-level applications.
                        Have worked on projects
                        ranging from e-commerce platforms to fintech solutions,
                        and I take pride in delivering high-quality code that meets business objectives.
                        In my free time, I contribute to open-source projects and attend local tech meetups. Apart from that I love reading, working out, playing badminton, and playing video games.
                        I'm always looking for new challenges, so feel free to connect with me if you're interested in working together!</p>

                    <Link href="https://www.linkedin.com/in/shaik-azizuddin-mohammed/" target="_blank" ><LinkedInIcon /></Link>
                    <Link href="mailto: shaikazi@buffalo.edu" target="_blank" ><EmailIcon /></Link>
                    <Link href="https://github.com/shaikaziz" target="_blank" ><GithubIcon /></Link>


                </div>
            </div>
            <div className="skills">
                <h1> Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Programming Languages</h2>
                        <span>
                            <ProgrammingSkills />
                        </span>
                    </li>
                    <li className="item">
                        <h2>Frameworks</h2>
                        <span>
                            <Frameworks />
                        </span>
                    </li>

                    {/* {console.log(skill.image)} */}
                    {/* <p>{skill.image}</p> */}
                    <li className="item">
                        <h2>Tools</h2>
                        <Tools />
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
