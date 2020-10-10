import React from 'react';
import Github from '../Photos/github.svg';
import Email from '../Photos/gmail.svg';
import LinkedIn from '../Photos/linkedin.svg';

const Contact = () => (
  <div>
    <a href="mailto:plank2@purdue.edu" target="_blank" rel="noopener noreferrer"><img src={Email} width="65em" height="65em" alt="Email social media icon" /></a>
    <a href="https://github.com/Aplank14" target="_blank" rel="noopener noreferrer"><img src={Github} width="65em" height="65em" alt="Github social media icon" /></a>
    <a href="https://www.linkedin.com/in/andy-plank" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} width="65em" height="65em" alt="Github social media icon" /></a>
  </div>
);

export default Contact;
