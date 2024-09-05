import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Container, Row, Col, Image,
} from 'react-bootstrap';
import Profile from '../assets/ProfilePictures/profile.jpg';
import Profile1 from '../assets/ProfilePictures/1.webp';
import Profile2 from '../assets/ProfilePictures/2.webp';
import Profile3 from '../assets/ProfilePictures/3.webp';
import Profile4 from '../assets/ProfilePictures/4.webp';
import Profile5 from '../assets/ProfilePictures/5.webp';

const pics = [Profile1, Profile2, Profile3, Profile4, Profile5];
const PictureRow = pics.map((e, i) => (
  // eslint-disable-next-line react/no-array-index-key
  <Col md={2} className="mt-3 border-top border-4 p-0" key={`andy-image-${i}`}>
    <Image className="px-2  pt-2" src={e} fluid alt={`andy image ${i}`} />
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
                Currently, I am a Software Engineer at Microsoft where I work on improving
                Azure Server Performance.
                Typically, this involves finding and resolving inefficiencies in the OS.
                Before work, I graduated from Purdue University with a Master&apos;s Degree
                in Computer Science.
                Outside of work, I love video games (Outer Wilds is the greatest game of all time).
                I have been an avid woodworker since I was 13 and made a Christmas tree in woodshop.
                If you are interested in that sort of thing, check out my projects down below.
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
