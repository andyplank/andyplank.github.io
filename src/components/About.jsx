import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Container, Row, Col, Image,
} from 'react-bootstrap';
import Profile from '../assets/ProfilePictures/profile.jpg';
import Profile1 from '../assets/ProfilePictures/1.jpg';
import Profile2 from '../assets/ProfilePictures/2.jpg';
import Profile3 from '../assets/ProfilePictures/3.jpg';
import Profile4 from '../assets/ProfilePictures/4.jpg';
import Profile5 from '../assets/ProfilePictures/5.jpg';

const pics = [Profile1, Profile2, Profile3, Profile4, Profile5];
const PictureRow = pics.map((e) => (
  <Col md={2} className="mt-3 border-top border-4 p-0">
    <Image className="px-2  pt-2" src={e} fluid />
  </Col>
));

const About = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <div id="about" className="break">
      <Container>
        <Row className="justify-content-center">
          <Col md={3} className="p-0">
            <div className="px-3 px-md-0">
              <Image src={Profile} fluid rounded={!isMobile} />
            </div>
          </Col>
          <Col md={7} className="d-flex align-items-center p-0">
            <div className="px-4 pt-4">
              <h2>About me</h2>
              <div className="subtitle pb-1">Software Engineer, Purdue Alumn, Woodworker</div>
              <p>
                I am a graduate student at Purdue University where I am earning a
                Master&apos;s Degree in Computer Science.
                I&apos;ve always loved computers, so I am lucky to be in a
                field where I can build software for them.
                Outside of work, I like to building things.
                I have been an avid woodworker since I was 13 and made a
                Christmas tree in woodshop. If you are interested in
                that sort of thing, check out my projects down below.
                I also love staying active whether that is by playing
                tennis, golf, or just working out.
              </p>
            </div>
          </Col>
        </Row>
        {!isMobile
          && (
            <Row className="justify-content-center">
              {PictureRow}
            </Row>
          )
        }

      </Container>
    </div>

  );
};

export default About;
