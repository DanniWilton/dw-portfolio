import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Danni Wilton, the code witch
        </p>
        <p className='footer-subscription-text'>
          Where to find me
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/'>Contact Form <a href="https://docs.google.com/forms/d/1Pjq6hvm0usW-7Wfff0R0PXmymkhrKsWECDQ4-s4_MQM/edit?usp=sharing"><i class="fas fa-envelope-square"></i></a></Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media </h2>
            <Link to='/'>LinkedIn <a href="https://www.linkedin.com/in/dannielle-wilton-030b42206"><i class="fab fa-linkedin-in"></i></a></Link>
            <Link to='/'>Github <a href="https://github.com/DanniWilton"><i class="fab fa-github"></i></a></Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;