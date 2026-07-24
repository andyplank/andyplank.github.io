import Section from './Section';
import Github from '../assets/github.svg';
import Email from '../assets/gmail.svg';
import LinkedIn from '../assets/linkedin.svg';
import Res from '../assets/res.png';

const socials = [
  { href: '/Resume.pdf', icon: Res, alt: 'Resume icon' },
  { href: 'mailto:aplank14@gmail.com', icon: Email, alt: 'Email icon' },
  { href: 'https://github.com/andyplank', icon: Github, alt: 'Github icon' },
  { href: 'https://www.linkedin.com/in/andy-plank', icon: LinkedIn, alt: 'LinkedIn icon' },
];

function Contact() {
  return (
    <Section id="contact" muted className="text-center">
      <h2 className="my-2 text-4xl">Get in touch</h2>
      <p className="text-lg">
        To find out more information about me, view my resume with the link on the left.
        <br />
        Also, feel free to email me or connect with me over social media.
      </p>
      <div className="mt-4 flex justify-center gap-4">
        {socials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={social.icon} width={65} height={65} alt={social.alt} />
          </a>
        ))}
      </div>
    </Section>
  );
}

export default Contact;
