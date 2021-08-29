// import 'Projects.css';
import jsquiz from './Images/jsquiz.JPG';
import passwordgen from './Images/passwordgen.JPG';
import evento from './Images/eventocapture.JPG';

function Projects() {
    return (
        <div className="projectContainer">
            <div className="project">
                <img className="Projects" src={jsquiz}/>
            </div>
            <div className="project">
                <img className="Projects" src={passwordgen}/>
            </div>
            <div className="project">
                <img className="Projects" src={evento}/>
            </div>
            
        </div>
    )
}
export default Projects;