import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import work from '../assets/data.json';

import './Experience.css';

const Experience = () => {
  const [selected, setSelected] = useState(work[0]);

  const workList = work.map((elm) => {
    const className = elm.id === selected.id ? 'selected' : '';
    return (
      <div key={elm.id} className={className}>
        <button type="button" className="btn click" onClick={() => { setSelected(elm); }}>
          <span>{elm.company}</span>
        </button>
      </div>
    );
  });

  const workBullets = selected.description.map((elm, key) => (
    // eslint-disable-next-line react/no-array-index-key
    <li key={`bullet${key}`}>
      {elm}
    </li>
  ));

  return (
    <div id="experience" className="py-4 mx-4 px-4">
      <Container>
        <h2 className="mb-4 header">Work Experience</h2>
        <Row>
          <Col md={4} className="py-2">
            {workList}
          </Col>
          <Col md={8} className="py-2">
            <h4>
              <span>{selected.company}</span>
              {' '}
              -
              {' '}
              <span>{selected.position}</span>
            </h4>
            <p>{selected.dates}</p>
            <div>
              <ul>
                {workBullets}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
