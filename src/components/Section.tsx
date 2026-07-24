interface SectionProps {
  id: string;
  children: React.ReactNode;
  /** Applies the light background used by some sections. */
  muted?: boolean;
  className?: string;
}

/**
 * Shared section wrapper that encodes the consistent vertical rhythm
 * (10vh desktop / 5vh mobile) used across every page section.
 */
function Section({ id, children, muted = false, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-[5vh] md:py-[10vh] ${muted ? 'bg-surface' : ''} ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl px-4">{children}</div>
    </section>
  );
}

export default Section;
