import { ArrowDown, ArrowRight, ArrowUpRight, Heart, Leaf, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Eyebrow, LinkButton, SectionHeading } from '../components/ContentBlocks.jsx';

const focusCards = [
  { index: '01', icon: Leaf, title: 'A nutrition-first focus', copy: 'Nutraceuticals are at the heart of our ambition to make everyday health a priority.' },
  { index: '02', icon: UsersRound, title: 'A wider circle of care', copy: 'Connecting with retailers, chemists and patients to make nutrition easier to discover.' },
  { index: '03', icon: Heart, title: 'A purpose for India', copy: 'A clear vision: helping more people take a thoughtful step toward wellbeing.' },
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero section-wrap">
        <div className="hero-copy">
          <div className="hero-overline"><span className="tricolor-mark"><i /><i /><i /></span><span>PHARMACEUTICAL &amp; NUTRACEUTICAL</span></div>
          <h1>Making India <span className="hero-highlight">healthy.</span></h1>
          <p className="hero-subhead">Making India healthy by proving best in class nutrition supplements</p>
          <p className="hero-intro">A nutrition-focused company with a simple purpose: bring thoughtful supplements closer to the people and communities who need them.</p>
          <div className="hero-actions">
            <LinkButton to="/range#products">Explore our focus</LinkButton>
            <Link className="text-link" to="/contact">Connect with us <ArrowUpRight size={15} /></Link>
          </div>
          <div className="hero-signoff"><span className="signoff-line" /><span>Nutrition for a healthier tomorrow</span></div>
        </div>
        <div className="hero-art-wrap">
          <div className="hero-art-halo" />
          <div className="hero-art-frame">
            <img
              src="/assets/curelix-home-pills.jpg"
              alt="Colorful nutraceutical capsules, softgels, and tablets in saffron orange, green, blue, and golden tones"
            />
            <div className="hero-art-wash" />
            <div className="art-caption"><span className="caption-dot" /><span>Thoughtful nutrition<br /><strong>for everyday wellbeing</strong></span></div>
          </div>
          <div className="hero-float-card glass-panel"><div className="float-card-icon"><Leaf size={17} /></div><span>Our purpose</span><strong>To make every Indian healthy</strong></div>
          <span className="hero-art-orbit orbit-one" /><span className="hero-art-orbit orbit-two" />
        </div>
        <a className="hero-scroll" href="#purpose"><span>Scroll to explore</span><ArrowDown size={15} /></a>
      </section>

      <section className="purpose-section section-wrap" id="purpose">
        <div className="purpose-intro">
          <Eyebrow>WHY CURELIX</Eyebrow>
          <h2>Better nutrition.<br /><em>For more of India.</em></h2>
          <p>Our work starts with a belief in the role of nutrition in everyday wellbeing — and the value of making it easier to reach people.</p>
          <Link className="inline-arrow-link" to="/about">Get to know us <ArrowRight size={16} /></Link>
        </div>
        <div className="focus-list">
          {focusCards.map(({ index, icon: Icon, title, copy }) => (
            <article className="focus-card" key={index}>
              <span className="focus-index">{index}</span>
              <div className="focus-icon"><Icon size={20} strokeWidth={1.7} /></div>
              <div className="focus-copy"><h3>{title}</h3><p>{copy}</p></div>
              <span className="focus-arrow"><ArrowUpRight size={16} /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="range-preview-section">
        <div className="section-wrap range-preview-inner">
          <div className="range-preview-copy">
            <Eyebrow light>OUR NUTRACEUTICAL FOCUS</Eyebrow>
            <h2>Nutrition that belongs<br /><em>in everyday conversations.</em></h2>
            <p>Our range story begins with a commitment to best-in-class nutrition supplements. For current product information and availability, speak with our team.</p>
            <LinkButton to="/range" variant="light">Explore the range</LinkButton>
          </div>
          <div className="range-orbit-art" aria-hidden="true">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
            <div className="range-core"><span className="core-cross">✳</span><small>NUTRITION<br />FOCUS</small></div>
            <span className="range-label label-one">Everyday</span><span className="range-label label-two">Wellbeing</span><span className="range-label label-three">Nutrition</span>
          </div>
          <div className="range-preview-footnote"><span className="footnote-mark">i</span>Category-level overview only; product specifics are available from our team.</div>
        </div>
      </section>

      <section className="mission-strip section-wrap">
        <div className="mission-side-label"><span>OUR PROMISE</span><i /></div>
        <blockquote>“To provide best in class nutrition supplements.”</blockquote>
        <Link className="inline-arrow-link" to="/about">Our mission &amp; vision <ArrowRight size={16} /></Link>
      </section>

      <section className="home-contact-cta section-wrap">
        <div className="home-cta-content">
          <span className="cta-pretitle">LET'S CONNECT</span>
          <h2>Make a healthier<br />connection.</h2>
          <p>Whether you're a retailer, chemist or patient, our team is ready to hear from you.</p>
          <LinkButton to="/contact" variant="white" arrow="up">Get in touch</LinkButton>
        </div>
        <div className="home-cta-side" aria-hidden="true"><span className="cta-circle circle-outer" /><span className="cta-circle circle-inner" /><span className="cta-cross">+</span><span className="cta-side-word">curelix <i>●</i></span></div>
        <div className="cta-bottomnote"><span>REACH OUT, WE'RE LISTENING</span><ArrowRight size={14} /></div>
      </section>
    </>
  );
}
