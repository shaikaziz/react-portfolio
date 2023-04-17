import React from "react";
import git from '../assets/git-icon.svg'
import aws from '../assets/aws.svg'
import docker from '../assets/docker-icon.svg'
import kubernetes from '../assets/kubernetes.svg'
import terraform from '../assets/terraform.svg'
import jenkins from '../assets/jenkins.svg'
import mongodb from '../assets/mongodb-icon.svg'
import digitalocean from '../assets/digital-ocean.svg'
import heroku from '../assets/heroku-icon.svg'
import netlify from '../assets/netlify-icon.svg'
import argocd from '../assets/argo-icon.svg'


import Tooltip from '@material-ui/core/Tooltip';
import "../styles/Skill.css";
/* 
Git, AWS, Docker, Kubernetes, Terraform, Jenkins, GraphQL, Selenium, MongoDB, DigitalOcean, Heroku, Netlify
*/
function Tools() {
    return (
        <div className="icons">
            <div className="icon">
                <Tooltip title="Git">
                    <img src={git} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="AWS">
                    <img src={aws} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="Jenkins">
                    <img src={jenkins} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="Docker">
                    <img src={docker} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="Kubernetes">
                    <img src={kubernetes} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="Terraform">
                    <img src={terraform} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="ArgoCD">
                    <img src={argocd} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="MongoDB">
                    <img src={mongodb} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="Digital Ocean">
                    <img src={digitalocean} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="Heroku">
                    <img src={heroku} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="Netlify">
                    <img src={netlify} height={50} width={50}></img>
                </Tooltip>



            </div >
        </div >
    );
}

export default Tools;
