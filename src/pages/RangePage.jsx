import { ArrowRight, ArrowUpRight, CircleDot, Leaf, MessageCircleMore, PackageSearch } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Eyebrow, LinkButton, SectionHeading } from '../components/ContentBlocks.jsx';

const products = [
  {
    id: 'tyrosel-i',
    name: 'Tyrosel-I Tablets',
    description:
      'Nutraceutical tablet (1.2 g) providing L-Tyrosine 250 mg, Magnesium 90 mg, Vitamin C 65 mg, Zinc 13.2 mg, Vitamin B6 1.9 mg, Selenium 200 mcg, Folic Acid 129.4 mcg, and Vitamin B12 2.2 mcg per serving. Recommended usage: 1 tablet daily before breakfast. Not for medicinal use.',
    image: '/assets/tyrosel-i.jpg',
    imageAlt: 'Tyrosel-I Tablets nutraceutical visual sheet',
    accent: 'orange',
  },
  {
    id: 'mel-zim',
    name: 'MEL-ZIM Tablets',
    description:
      'Nutraceutical tablet providing Melatonin 5 mg, Magnesium 225 mg, and Zinc 11.25 mg per serving (10 tablets). Recommended usage: 1 tablet daily. Not for medicinal use.',
    image: '/assets/mel-zim.png',
    imageAlt: 'MEL-ZIM Tablets nutraceutical visual sheet',
    accent: 'green',
  },
  {
    id: 'amarvat-sea-buckthorn-juice',
    name: 'AMARVAT Sea Buckthorn Juice',
    description:
      'Himalayan-origin Sea Buckthorn juice (99% liquid concentrate) sourced from Leh-Ladakh, naturally rich in Vitamin C and antioxidants with no added sugar. Pack size: 300 ml (MRP ₹999/-, shelf life 24 months). Nutraceutical — ready stock for retail and B2B orders.',
    image: '/assets/amarvat-sea-buckthorn-juice.jpg',
    imageAlt: 'AMARVAT Sea Buckthorn Juice — 99% Liquid Concentrate, 300 ml bottle and pack',
    accent: 'orange',
  },
  {
    id: 'hepfit-sl',
    name: 'HEPFIT-SL Liver Support',
    description:
      'Strawberry-flavoured nutraceutical liver support liquid (200 ml, MRP ₹220/-) providing Silymarin 35 mg, L-Ornithine L-Aspartate 250 mg, and Vital B-Complex (Vitamins B1, B2, B3, B5, B6 & B12) per 10 ml serving. Usage as directed by a healthcare professional. Not for medicinal use.',
    image: '/assets/hepfit-sl.jpg',
    imageAlt: 'MAYLEBENS HEPFIT-SL Liver Support 200 ml bottle and carton',
    accent: 'green',
  },
];

const rangeAreas = [
  { no: '01', title: 'Nutrition supplements', icon: Leaf, text: 'A broad category at the heart of Curelix Lifesciences and its nutrition-first mission.' },
  { no: '02', title: 'Everyday wellbeing', icon: CircleDot, text: 'A starting point for conversations about nutrition and everyday wellness.' },
  { no: '03', title: 'Retailer & chemist connections', icon: PackageSearch, text: 'Connect with our team for current product details, availability and channel enquiries.' },
];

export default function RangePage() {
  return (
    <>
      <section className="page-hero section-wrap range-hero">
        <div className="page-hero-copy">
          <Eyebrow>NUTRACEUTICAL FOCUS</Eyebrow>
          <h1>Nutrition,<br /><em>with purpose.</em></h1>
          <p>Our focus is a strong range of nutraceuticals — guided by our aim to make best-in-class nutrition supplements part of a healthier India.</p>
          <div className="page-hero-actions"><LinkButton to="/contact">Ask about our range</LinkButton><span className="caption-note">Information from our team, not a catalogue.</span></div>
          <div className="page-hero-meta"><span>02</span><i /><span>OUR NUTRACEUTICAL FOCUS</span></div>
        </div>
        <div className="range-hero-art" aria-hidden="true">
          <div className="range-hero-surface" />
          <img
            className="page-hero-image"
            src="/assets/curelix-range-hero.webp"
            alt="Nutraceutical formulations and pure botanical extracts"
          />
          <div className="page-hero-image-wash" />
          <div className="range-hero-label"><span>01</span><i /> A thoughtful<br />nutrition focus</div>
          <div className="range-hero-stamp"><Leaf size={21} /><small>PEOPLE<br />FIRST</small></div>
        </div>
      </section>

      <section className="range-products-section" id="products">
        <div className="section-wrap">
          <SectionHeading
            eyebrow="PRODUCTS"
            title={<>Our nutraceutical<br /><em>products.</em></>}
            body="Explore our featured nutraceutical offerings below. Reach out to our team for complete specifications, availability and ordering enquiries."
          />
          <div className="product-cards-grid">
            {products.map((product) => (
              <article className={`product-card product-card-${product.accent}`} key={product.id}>
                <div className="product-card-media">
                  <img
                    className="product-card-image"
                    src={product.image}
                    alt={product.imageAlt}
                    loading="lazy"
                  />
                </div>
                <div className="product-card-body">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-card-footer">
                    <Link to="/contact" className="inline-arrow-link product-card-cta">
                      Enquire about {product.name} <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
                <span className="product-card-line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="range-overview section-wrap">
        <SectionHeading eyebrow="RANGE OVERVIEW" title={<>A clear starting point.<br /><em>Personal answers.</em></>} body="We share a category-level overview here. Product names, formulations, availability and other specifics should be confirmed directly with the Curelix Lifesciences team." />
        <div className="range-area-list">
          {rangeAreas.map(({ no, title, icon: Icon, text }) => (
            <article className="range-area-card" key={no}>
              <span className="range-area-no">{no}</span>
              <div className="range-area-icon"><Icon size={20} strokeWidth={1.7} /></div>
              <div className="range-area-content"><h3>{title}</h3><p>{text}</p></div>
              <Link to="/contact" className="range-area-link" aria-label={`Ask about ${title}`}><ArrowRight size={17} /></Link>
            </article>
          ))}
        </div>
        <div className="range-disclosure"><span className="disclosure-mark">i</span><p><strong>A note on product information</strong><br />This page is not a product catalogue. No specific product brands, ingredients, certifications, or medical benefits are being represented here. Please speak with our team for verified, up-to-date product information.</p></div>
      </section>

      <section className="range-partner-section">
        <div className="section-wrap partner-inner">
          <div className="partner-symbol"><MessageCircleMore size={25} /></div>
          <div className="partner-copy"><Eyebrow light>FOR RETAILERS &amp; CHEMISTS</Eyebrow><h2>Let's talk about<br /><em>working together.</em></h2><p>Connect with Curelix Lifesciences to ask about the current range and partnership enquiries.</p></div>
          <LinkButton to="/contact" variant="light">Start a conversation</LinkButton>
        </div>
      </section>

      <section className="range-patient-note section-wrap"><span className="patient-note-icon"><CircleDot size={18} /></span><p><strong>For patients:</strong> Product selection and health decisions are personal. Please consult a qualified healthcare professional for advice suited to your needs.</p></section>
    </>
  );
}
