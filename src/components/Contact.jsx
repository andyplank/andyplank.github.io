import React from 'react';
import Container from 'react-bootstrap/Container';
import Github from '../assets/github.svg';
import Email from '../assets/gmail.svg';
import LinkedIn from '../assets/linkedin.svg';
import Res from '../assets/res.png';

const Contact = () => (
  <div id="contact" className="break bg-light">
    <Container fluid="md" className="text-center">
      <h2 className="my-2">Get in touch</h2>
      <p>
        To find out more information about me, view my resume with the link on the left.
        <br />
        Also, feel free to email me or connect with me over social media.
      </p>
      <div>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-2">
          <img src={Res} width="65em" height="65em" alt="Resume icon" className="inline" />
        </a>
        <a href="mailto:aplank14@gmail.com" target="_blank" rel="noopener noreferrer" className="px-2">
          <img src={Email} width="65em" height="65em" alt="Email icon" className="inline" />
        </a>
        <a href="https://github.com/andyplank" target="_blank" rel="noopener noreferrer" className="px-2">
          <img src={Github} width="65em" height="65em" alt="Github icon" className="inline" />
        </a>
        <a href="https://www.linkedin.com/in/andy-plank" target="_blank" rel="noopener noreferrer" className="px-2">
          <img src={LinkedIn} width="65em" height="65em" alt="LinkedIn icon" className="inline" />
        </a>
      </div>
    </Container>
  </div>
);

export default Contact;
