import { useState } from 'react';
import Section from './Section';
import { experience } from '../data/experience';

function Experience() {
  const [selected, setSelected] = useState(experience[0]);

  return (
    <Section id="experience" muted>
      <h2 className="mb-6 flex items-center text-4xl">
        Experience
        <span className="ml-4 hidden h-px flex-1 bg-black md:block" />
      </h2>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="md:w-1/3 lg:w-1/4">
          <div className="flex overflow-x-auto md:flex-col [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {experience.map((item) => {
              const active = item.id === selected.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelected(item)}
                  className={`shrink-0 min-w-[100px] cursor-pointer whitespace-nowrap px-4 py-2 text-left transition-colors border-neutral-400 md:w-full md:shrink md:border-l-2 md:border-b-0 border-b-2 hover:bg-neutral-900 hover:border-accent hover:text-accent ${
                    active ? 'border-accent text-accent' : ''
                  }`}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
        </div>

        <div className="md:w-2/3 lg:w-3/4 md:min-h-80">
          <div className="text-2xl font-semibold">
            {selected.company} - {selected.position}
          </div>
          <p className="text-neutral-600">{selected.dates}</p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-lg">
            {selected.description.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Experience;
