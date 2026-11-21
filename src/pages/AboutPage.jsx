import { ArrowUpRight, Compass, Leaf, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Eyebrow, LinkButton, SectionHeading } from '../components/ContentBlocks.jsx';

export default function AboutPage() {
  return (
    <>
      <section className="page-hero section-wrap about-hero">
        <div className="page-hero-copy">
          <Eyebrow>ABOUT CURELIX</Eyebrow>
          <h1>A healthier India,<br /><em>is a shared purpose.</em></h1>
          <p>Curelix Lifesciences is a pharmaceutical and nutraceutical company with a people-first ambition: make good nutrition part of more everyday conversations.</p>
          <div className="page-hero-meta"><span>01</span><i /><span>OUR STORY &amp; PURPOSE</span></div>
        </div>
        <div className="about-hero-art">
          <img
            className="page-hero-image"
            src="/assets/curelix-about-hero.webp"
            alt="Healthcare and wellness research at Curelix Lifesciences"
          />
          <div className="page-hero-image-wash" />
          <div className="about-card glass-panel"><span className="about-card-symbol"><Leaf size={22} /></span><span>Our north star</span><strong>To make every Indian healthy</strong></div>
          <span className="about-art-caption">CURELIX<br /><b>LIFESCIENCES</b></span>
        </div>
      </section>

      <section className="about-foundation section-wrap">
        <div className="foundation-heading"><Eyebrow>THE FOUNDATION</Eyebrow><h2>Clear purpose.<br /><em>Thoughtful progress.</em></h2></div>
        <div className="foundation-copy"><p>Curelix Lifesciences is built around an uncomplicated idea: nutrition should be easier to talk about, easier to discover and more accessible across India. We work toward that purpose while serving retailers, chemists and patients.</p><p>Praveen Kumar is the name behind this brand's personal contact point. We welcome conversations with the people and partners who share an interest in a healthier India.</p><Link className="inline-arrow-link" to="/contact">Start a conversation <ArrowUpRight size={15} /></Link></div>
      </section>

      <section className="purpose-cards-section">
        <div className="section-wrap">
          <SectionHeading eyebrow="OUR DIRECTION" title={<>A purpose with<br /><em>two clear horizons.</em></>} body="Our mission and vision keep the work grounded in what matters most: nutrition and people." />
          <div className="purpose-cards">
            <article className="purpose-card mission-card">
              <div className="purpose-card-top"><span>01 / MISSION</span><Target size={21} /></div>
              <h3>To provide best in class nutrition supplements</h3>
              <p>A focused commitment to the best-in-class nutrition supplements at the heart of our mission.</p>
              <span className="purpose-card-line" />
            </article>
            <article className="purpose-card vision-card">
              <div className="purpose-card-top"><span>02 / VISION</span><Compass size={21} /></div>
              <h3>To make every Indian healthy</h3>
              <p>A nationwide vision — expressed in five words and carried through the work we do.</p>
              <span className="purpose-card-line" />
            </article>
          </div>
        </div>
      </section>

      <section className="usp-section section-wrap">
        <div className="usp-mark"><span>✳</span><small>OUR<br />FOCUS</small></div>
        <div className="usp-copy"><Eyebrow>WHAT SETS US APART</Eyebrow><h2>A strong range<br /><em>of nutraceuticals.</em></h2><p>Our stated differentiator is our best range of nutraceuticals. For the current range and product-specific information, our team is the best place to start.</p></div>
        <LinkButton to="/range" variant="outline">Explore our focus</LinkButton>
      </section>

      <section className="about-contact-band"><div className="section-wrap band-inner"><p>Made for meaningful conversations with retailers, chemists and patients.</p><Link to="/contact">Let's connect <ArrowUpRight size={16} /></Link></div></section>
    </>
  );
}
