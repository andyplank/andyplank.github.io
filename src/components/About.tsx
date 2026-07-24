import Section from './Section';
import FadeInImage from './FadeInImage';
import Profile from '../assets/ProfilePictures/profile.jpg';
import Profile1 from '../assets/ProfilePictures/1.webp';
import Profile2 from '../assets/ProfilePictures/2.webp';
import Profile3 from '../assets/ProfilePictures/3.webp';
import Profile4 from '../assets/ProfilePictures/4.webp';
import Profile5 from '../assets/ProfilePictures/5.webp';

const pics = [Profile1, Profile2, Profile3, Profile4, Profile5];

function About() {
  return (
    <Section id="about">
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <div className="w-full md:w-1/3">
          <FadeInImage
            src={Profile}
            alt="andy profile picture"
            className="w-full md:rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl">About me</h2>
          <div className="mt-1 text-2xl text-neutral-600">
            Software Engineer, Purdue Alumn, Woodworker
          </div>
          <p className="mt-3 text-lg leading-relaxed">
            Currently, I am a Software Engineer at Microsoft where I work on improving
            Azure Server Performance. Typically, this involves finding and resolving
            inefficiencies in the OS. Before work, I graduated from Purdue University
            with a Master&apos;s Degree in Computer Science. Outside of work, I love
            video games (Outer Wilds is the greatest game of all time). I have been an
            avid woodworker since I was 13 and made a Christmas tree in woodshop. If you
            are interested in that sort of thing, check out my projects down below.
          </p>
        </div>
      </div>

      <div className="mt-6 hidden grid-cols-5 gap-2 border-t-[1.5px] border-neutral-300 pt-6 md:grid">
        {pics.map((pic, i) => (
          <div key={pic}>
            <FadeInImage src={pic} alt={`andy image ${i}`} className="w-full px-2" />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default About;
