import React, { useState } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Wine from '../assets/Woodworking/Wine.jpeg';
import Pens from '../assets/Woodworking/Pens.jpeg';
import Flower from '../assets/Woodworking/Flower.jpeg';
import Tree from '../assets/Woodworking/Tree.jpeg';
import Frame from '../assets/Woodworking/Frame.jpeg';
import Ladder from '../assets/Woodworking/Ladder.JPG';
import Shoes from '../assets/Woodworking/Shoes.jpg';
import Purdue from '../assets/Woodworking/Purdue.jpg';
import Wand from '../assets/Woodworking/Wand.jpg';
import Keys from '../assets/Woodworking/Keys.jpg';

const Projects = () => {
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [index, setIndex] = useState(0);

  return (
    <div id="projects" className="break">
      <Container fluid="md">
        <div className="text-center pb-2">
          <h1>Woodworking</h1>
          <p>
            Below is a collection of some of the woodworking projects I have done in the past.
          </p>
        </div>
        <CardColumns>
          <Card>
            <Card.Img variant="top" src={Pens} />
            <Card.Body>
              <Card.Title>Hand Turned Wooden and Acryllic Pens</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Flower} />
            <Card.Body>
              <Card.Title>Wall Mounted Flower Jar with Lights</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Wand} />
            <Card.Body>
              <Card.Title>Harry Potter Wand Holder</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Keys} />
            <Card.Body>
              <Card.Title>Barnwood Key Holder</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Wine} />
            <Card.Body>
              <Card.Title>Barnwood Wine Holder</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Purdue} />
            <Card.Body>
              <Card.Title>CNC Router Cut Purdue Sign</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Ladder} />
            <Card.Body>
              <Card.Title>Rustic Blanket Ladder</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Tree} />
            <Card.Body>
              <Card.Title>Merry Christmas Lawn Decoration</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Shoes} />
            <Card.Body>
              <Card.Title>Iron Pipe Shoe Rack</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Frame} />
            <Card.Body>
              <Card.Title>Wooden Card Holder</Card.Title>
            </Card.Body>
          </Card>
        </CardColumns>
      </Container>
    </div>

  );
};

export default Projects;
