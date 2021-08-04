import React from 'react';
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
import Tray from '../assets/Woodworking/Tray.jpg';

const Projects = () => {
  const ProjectData = [
    { desc: 'Hand Turned Wooden and Acryllic Pens', pic: Pens },
    { desc: 'Wall Mounted Flower Jar with Lights', pic: Flower },
    { desc: 'Harry Potter Wand Holder', pic: Wand },
    { desc: 'Barnwood Key Holder', pic: Keys },
    { desc: 'Barnwood Wine Holder', pic: Wine },
    { desc: 'CNC Router Cut Purdue Sign', pic: Purdue },
    { desc: 'Rustic Blanket Ladder', pic: Ladder },
    // { desc: 'Merry Christmas Lawn Decoration', pic: Tree },
    { desc: 'Wooden Bath Tray', pic: Tray },
    { desc: 'Iron Pipe Shoe Rack', pic: Shoes },
    { desc: 'Wooden Card Holder', pic: Frame },
  ];

  return (
    <div id="projects" className="break">
      <Container fluid="md">
        <div className="text-center pb-2">
          <h1>Projects</h1>
          <p>
            Over the years, I have been able to work on a lot of different woodworking projects.
            Although, a lot of them ended up looking like like&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="/Plank.jpg">this</a>
            , some of them turned out really well.
            Below is a collection of my favorite projects.
          </p>
        </div>
        <CardColumns>
          {
            ProjectData.map((e) => (
              <Card>
                <Card.Img variant="top" src={e.pic} />
                <Card.Body>
                  <Card.Title>{e.desc}</Card.Title>
                </Card.Body>
              </Card>
            ))
          }
        </CardColumns>
      </Container>
    </div>
  );
};

export default Projects;
