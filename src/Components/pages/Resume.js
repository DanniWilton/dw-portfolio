import React from 'react';
import Resume from './resume/dwresume21.pdf';
import './Resume.css';

export default function ResumeDW() {
    return(
    <div className="resume-container">
        <h1>Resume of Danni Wilton</h1>
        <h2>Download my Resume <a className="link-text" href={Resume}>here</a></h2>
    </div>
    );
}