import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Container, Row, Col, Image,
} from 'react-bootstrap';
import Profile from '../assets/profile.jpg';
import Profile1 from '../assets/1.jpg';
import Profile2 from '../assets/2.jpg';
import Profile3 from '../assets/3.jpg';
import Profile4 from '../assets/4.jpg';
import Profile5 from '../assets/5.jpg';

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
            <div className="pl-4 pt-4">
              <h2>About me</h2>
              <div className="subtitle pb-1">Software Engineer, Purdue Alumn, doer of things</div>
              <p>
                The only thing I love more than making software is software that works.
                Besides building software,
                I also enjoy building things.
                I have been an avid woodworker since I was 12 and made a
                Christmas tree in woodshop: see
                {' '}
                <u>projects</u>
                . I also enjoy doing anything outside.
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
