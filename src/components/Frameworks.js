import React from "react";
import react from '../assets/react.svg'
import node from '../assets/node.svg'
import django from '../assets/django.svg'
import cucumber from '../assets/cucumber.svg'
import flask from '../assets/flask.svg'
import spring from '../assets/spring-boot.png'
import dotnet from '../assets/dotnet.svg'
import express from '../assets/express.svg'
import graphql from '../assets/graphql.svg'
import selenium from '../assets/selenium.svg'
import Go from '../assets/go.svg'
import Tooltip from '@material-ui/core/Tooltip';
import "../styles/Skill.css";
/* 
ReactJS, NodeJS, Django, Cucumber, Flask, SpringBoot, .NET, ExpressJS, GraphQL
*/
function Frameworks() {
    return (
        <div className="icons">
            <div className="icon">
                <Tooltip title="React JS">
                    <img src={react} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="Node JS">
                    <img src={node} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="SpringBoot">
                    <img src={spring} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="Django">
                    <img src={django} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title=".NET">
                    <img src={dotnet} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="GraphQL">
                    <img src={graphql} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="Python Flask">
                    <img src={flask} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="Cucumber BDD">
                    <img src={cucumber} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="Express JS">
                    <img src={express} height={50} width={50}></img>
                </Tooltip>
                
                <Tooltip title="Selenium">
                    <img src={selenium} height={50} width={50}></img>
                </Tooltip>


            </div >
        </div >
    );
}

export default Frameworks;
