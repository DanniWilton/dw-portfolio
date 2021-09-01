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
                <a href="https://github.com/DanniWilton/SkullStylist">Skull Stylist Github</a>
                
                <a href="https://github.com/DanniWilton/SkullStylist">Heroku Deployment</a>
                
            </div>
            <div className="project">
                <img className="Projects" src={jsquiz} alt="javascript quiz"/>
                <a href="https://github.com/DanniWilton/JavascriptQuiz">Javascript Quiz Github</a>
                <a href="https://danniwilton.github.io/JavascriptQuiz">Website</a>
            </div>


            <div className="project">
                <img className="Projects" src={passwordgen} alt="password generator"/>
                <a  href="https://github.com/DanniWilton/PasswordGenerator">Password Generator Github</a>
                <a href="https://danniwilton.github.io/PasswordGenerator/">Website</a>
            </div>
            
            <div className="project">
                <img className="Projects" src={evento} alt="evento- the event searcher"/>
                <a href="https://github.com/Au-RiZeR/Event-Searcher">Evento Github</a>
                <a href="https://au-rizer.github.io/Event-Searcher">Website</a>
            </div>
            <div className="project">
                <img className="Projects" src={readmegen} alt="read me generator"/>
                <a href="https://github.com/DanniWilton/readmegenerator">ReadMe Github</a>
                <a href="https://drive.google.com/file/d/1SfO6QB4M4GnT7qEuMdOUICKt2k_vA2pK/view">Video of application</a>
            </div>
            <div className="project">
                <img className="Projects" src={velvetsoapbox} alt="velvet soap box- a place to add events"/>
                <a  href="https://github.com/Serotonin-Seekers/Evento2">The Velvet Soap Box Github</a>
                <a href="https://event-woo-serotonin-seekers.herokuapp.com">Heroku Deployment</a>

            </div>
        </div>
    )
}
export default Projects;