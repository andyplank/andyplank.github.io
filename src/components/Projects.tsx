import Section from './Section';
import FadeInImage from './FadeInImage';
import { projects } from '../data/projects';

function Projects() {
  return (
    <Section id="projects">
      <div className="pb-8 text-center">
        <h1 className="text-4xl">Projects</h1>
        <p className="mt-2 text-lg">
          Over the years, I have been able to work on a lot of different woodworking
          projects. Although a lot of them ended up looking like{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/Plank.jpg"
            className="text-accent underline"
          >
            plank
          </a>
          , some of them turned out really well. Below is a collection of my favorite
          projects.
        </p>
      </div>

      <div className="columns-1 gap-4 md:columns-3">
        {projects.map((project) => (
          <div
            key={project.desc}
            className="mb-4 break-inside-avoid overflow-hidden rounded-md border border-neutral-200 shadow-sm"
          >
            <FadeInImage src={project.pic} alt={project.desc} className="w-full" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.desc}</h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
