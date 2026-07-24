import Navbar from './Navbar';
import FadeInImage from './FadeInImage';
import Landing from '../assets/ProfilePictures/landing.jpg';

function Hero() {
  return (
    <div id="#" className="relative flex h-screen items-center justify-center overflow-hidden">
      <FadeInImage
        src={Landing}
        alt=""
        aria-hidden="true"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Radial darkening overlay to match the original landing look. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2))',
        }}
      />
      <div className="absolute inset-0">
        <Navbar />
      </div>
    </div>
  );
}

export default Hero;
