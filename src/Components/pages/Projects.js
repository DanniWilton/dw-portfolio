import './Projects.css';
import React from 'react';
import jsquiz from './Images/jsquiz.JPG';
import passwordgen from './Images/passwordgen.JPG';
import evento from './Images/eventocapture.JPG';
import readmegen from './Images/readmegen.JPG';
import velvetsoapbox from './Images/velvetsoapbox.JPG';
import skullstylist1 from './Images/skullstylist1.JPG';

function Projects() {
    return (
        <div className="project-container">
            <div className="project">
                <img className="Projects" src={skullstylist1} alt="skull stylist project"/>
            </div>
            <div className="project">
                <img className="Projects" src={jsquiz} alt="javascript quiz"/>
            </div>
            <div className="project">
                <img className="Projects" src={passwordgen} alt="password generator"/>
            </div>
            <div className="project">
                <img className="Projects" src={evento} alt="evento- the event searcher"/>
            </div>
            <div className="project">
                <img className="Projects" src={readmegen} alt="read me generator"/>
            </div>
            <div className="project">
                <img className="Projects" src={velvetsoapbox} alt="velvet soap box- a place to add events"/>
            </div>
        </div>
    )
}
export default Projects;