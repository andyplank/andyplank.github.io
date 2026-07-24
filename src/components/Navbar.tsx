import { useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full px-4 py-3">
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="rounded border border-white/60 p-2 text-white lg:hidden"
      >
        <span className="block h-0.5 w-6 bg-white" />
        <span className="mt-1 block h-0.5 w-6 bg-white" />
        <span className="mt-1 block h-0.5 w-6 bg-white" />
      </button>

      <ul
        className={`${
          open ? 'flex' : 'hidden'
        } flex-col gap-2 pt-2 lg:flex lg:flex-row lg:gap-6 lg:pt-0`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg text-white/90 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
