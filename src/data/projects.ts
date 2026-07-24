import type { Project } from '../types';

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
import Magnet from '../assets/Woodworking/Magnet.webp';
import Foil from '../assets/Woodworking/Foil.webp';

export const projects: Project[] = [
  { desc: 'Carbon Fiber Hydrofoil & Aluminum Fuselage', pic: Foil},
  { desc: 'Hand Turned Wooden and Acryllic Pens', pic: Pens },
  { desc: 'Iron Pipe Shoe Rack', pic: Shoes },
  { desc: 'Barnwood Wine Holder', pic: Wine },
  { desc: 'Satorou Gojo Cutout', pic: Gojo },
  { desc: 'Harry Potter Wand Holder', pic: Wand },
  { desc: 'CNC Router Cut Purdue Sign', pic: Purdue },
  { desc: 'Rustic Blanket Ladder', pic: Ladder },
  { desc: 'Outer Wilds Fridge Magnets', pic: Magnet},
  { desc: 'Steel Cutout of Jinx', pic: Jinx },
  { desc: 'Wooden Bath Tray', pic: Tray },
  { desc: 'Wooden Card Holder', pic: Frame },
  { desc: 'Barnwood Key Holder', pic: Keys },
  { desc: 'Witcher 3 Signs', pic: Signs },
  { desc: 'Steel Cutout of Venom', pic: Venom },
];
