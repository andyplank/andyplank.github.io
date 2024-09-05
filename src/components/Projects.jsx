import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

import Wine from '../assets/Woodworking/Wine.webp';
import Pens from '../assets/Woodworking/Pens.webp';
import Frame from '../assets/Woodworking/Frame.webp';
import Ladder from '../assets/Woodworking/Ladder.webp';
import Shoes from '../assets/Woodworking/Shoes.webp';
import Purdue from '../assets/Woodworking/Purdue.webp';
import Wand from '../assets/Woodworking/Wand.webp';
import Keys from '../assets/Woodworking/Keys.webp';
import Tray from '../assets/Woodworking/Tray.webp';
import Venom from '../assets/Woodworking/Venom.webp';
import Jinx from '../assets/Woodworking/Jinx.webp';
import Gojo from '../assets/Woodworking/Gojo.webp';
import Signs from '../assets/Woodworking/Signs.webp';

const Projects = () => {
  const ProjectData = [
    { desc: 'Hand Turned Wooden and Acryllic Pens', pic: Pens },
    { desc: 'Iron Pipe Shoe Rack', pic: Shoes },
    { desc: 'Barnwood Wine Holder', pic: Wine },
    { desc: 'Satorou Gojo cutout', pic: Gojo },
    { desc: 'Harry Potter Wand Holder', pic: Wand },
    { desc: 'CNC Router Cut Purdue Sign', pic: Purdue },
    { desc: 'Rustic Blanket Ladder', pic: Ladder },
    { desc: 'Steel cutout of Jinx', pic: Jinx },
    { desc: 'Wooden Bath Tray', pic: Tray },
    { desc: 'Wooden Card Holder', pic: Frame },
    { desc: 'Barnwood Key Holder', pic: Keys },
    { desc: 'Witcher 3 signs', pic: Signs },
    { desc: 'Steel cutout of Venom', pic: Venom },
  ];

  return (
    <div id="projects" className="break">
      <Container fluid="md">
        <div className="text-center pb-2">
          <h1>Projects</h1>
          <p>
            Over the years, I have been able to work on a lot of different woodworking projects.
            Although, a lot of them ended up looking like like&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="/pictures/Plank.webp">plank</a>
            , some of them turned out really well.
            Below is a collection of my favorite projects.
          </p>
        </div>
        <CardColumns>
          {
            ProjectData.map((e) => (
              <Card key={e.desc}>
                <Card.Img variant="top" src={e.pic} alt={e.desc} />
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
