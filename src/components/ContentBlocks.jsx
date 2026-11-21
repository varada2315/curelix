import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Eyebrow({ children, light = false }) {
  return <span className={`eyebrow${light ? ' eyebrow-light' : ''}`}><i aria-hidden="true" />{children}</span>;
}

export function SectionHeading({ eyebrow, title, body, align = 'left', light = false }) {
  return (
    <div className={`section-heading align-${align}${light ? ' section-heading-light' : ''}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

export function LinkButton({ to, children, variant = 'primary', arrow = 'right' }) {
  const Icon = arrow === 'up' ? ArrowUpRight : ArrowRight;
  return <Link className={`button button-${variant}`} to={to}>{children}<Icon size={16} strokeWidth={2} /></Link>;
}
