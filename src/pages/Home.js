import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { Link } from "@material-ui/core";

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hi, I am Aziz</h2>
                <div className="prompt">
                    <p className="line">A software developer with a passion for learning and creating.</p>
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
                            Java, Python, JavaScript, TypeScript, C#, C, C++, MySQL, HTML, CSS, Go
                        </span>
                    </li>
                    <li className="item">
                        <h2>Frameworks</h2>
                        <span>
                            React, Node, Django, Cucumber, Flask, SpringBoot, .NET
                            ExpressJS, GraphQL
                        </span>
                    </li>
                    <li className="item">
                        <h2>Tools</h2>
                        <span> Git, AWS, Docker, Kubernetes, Terraform, Jenkins, GraphQL, Selenium, MongoDB, DigitalOcean, Heroku, Netlify</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
