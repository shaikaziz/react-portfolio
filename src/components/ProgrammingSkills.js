import React from "react";
import java from '../assets/java.svg'
import js from '../assets/javascript.svg'
import py from '../assets/python.svg'
import ts from '../assets/typescript-icon.svg'
import csharp from '../assets/c-sharp.svg'
import cpp from '../assets/c-plusplus.svg'
import MySQL from '../assets/mysql.svg'
import PostgreSQL from '../assets/postgresql.svg'
import HTML from '../assets/html-5.svg'
import css from '../assets/css-3.svg'
import Go from '../assets/go.svg'
import c from '../assets/c.svg'
// import IconC from 'react-devicon/c/plain'
import Tooltip from '@material-ui/core/Tooltip';
import "../styles/Skill.css";
/* 
Java, Python, JavaScript, TypeScript, C#, C, C++, MySQL, HTML, CSS, Go
*/
function ProgrammingSkills() {
    return (
        <div className="icons">
            <div className="icon">
                <Tooltip title="Java">
                    <img src={java} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="JavaScript">
                    <img src={js} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="TypeScript">
                    <img src={ts} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="Python">
                    <img src={py} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="C">
                    <img src={c} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="C++">
                    <img src={cpp} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="C#">
                    <img src={csharp} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="GoLang">
                    <img src={Go} height={50} width={50}></img>
                </Tooltip>
                
                <Tooltip title="HTML">
                    <img src={HTML} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="CSS">
                    <img src={css} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="MySQL">
                    <img src={MySQL} height={50} width={50}></img>
                </Tooltip>
                <Tooltip title="PostGreSQL">
                    <img src={PostgreSQL} height={50} width={50}></img>
                </Tooltip>
                
                

            </div >
        </div >
    );
}

export default ProgrammingSkills;
