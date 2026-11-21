import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { Eyebrow } from '../components/ContentBlocks.jsx';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const subject = encodeURIComponent(`Website enquiry from ${name || 'Curelix Lifesciences website'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:curelixlifesciences@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <section className="contact-hero section-wrap">
        <div className="contact-heading"><Eyebrow>CONTACT CURELIX</Eyebrow><h1>Let's start<br /><em>a conversation.</em></h1><p>For enquiries from retailers, chemists, patients and partners — we're here to listen.</p><span className="contact-hero-index">04 <i /> GET IN TOUCH</span></div>
        <div className="contact-hero-aside"><span className="contact-aside-line" /><p>A thoughtful connection can be the first step toward something better.</p><a href="mailto:curelixlifesciences@gmail.com">Send us an email <ArrowUpRight size={15} /></a></div>
      </section>

      <section className="contact-main section-wrap">
        <div className="contact-details">
          <Eyebrow>REACH OUR TEAM</Eyebrow>
          <h2>We'd be glad<br />to hear from you.</h2>
          <p className="contact-details-intro">Choose whichever way works best for you. Our team welcomes genuine questions and conversations.</p>
          <div className="contact-methods">
            <a className="contact-method" href="mailto:curelixlifesciences@gmail.com">
              <span className="contact-method-icon"><Mail size={19} /></span><span className="contact-method-copy"><small>EMAIL</small><strong>curelixlifesciences@gmail.com</strong></span><ArrowUpRight className="method-arrow" size={16} />
            </a>
            <a className="contact-method" href="tel:+918851463013">
              <span className="contact-method-icon"><Phone size={19} /></span><span className="contact-method-copy"><small>PHONE</small><strong>+91 8851-463013</strong></span><ArrowUpRight className="method-arrow" size={16} />
            </a>
            <a className="contact-method" href="https://wa.me/918851463013" target="_blank" rel="noopener noreferrer">
              <span className="contact-method-icon"><MessageCircle size={19} /></span><span className="contact-method-copy"><small>WHATSAPP</small><strong>+91 8851-463013</strong></span><ArrowUpRight className="method-arrow" size={16} />
            </a>
            <a className="contact-method" href="tel:+919818011734">
              <span className="contact-method-icon"><Phone size={19} /></span><span className="contact-method-copy"><small>ALTERNATE PHONE</small><strong>+91 9818011734</strong></span><ArrowUpRight className="method-arrow" size={16} />
            </a>
            <a
              className="contact-method"
              href="https://www.google.com/maps/search/?api=1&query=179%2C+2nd+Floor%2C+Raghuleela+Mega+Mall%2C+Behind+Kandivali+%28W%29%2C+Mumbai%2C+Maharashtra-400067"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-method-icon"><MapPin size={19} /></span>
              <span className="contact-method-copy">
                <small>ADDRESS</small>
                <strong>179, 2nd Floor, Raghuleela Mega Mall, Behind Kandivali (W), Mumbai, Maharashtra-400067</strong>
              </span>
              <ArrowUpRight className="method-arrow" size={16} />
            </a>
          </div>
          <div className="contact-representative"><span className="rep-avatar">PK</span><div><small>CONTACT</small><strong>Praveen Kumar</strong></div><i className="rep-accent" /></div>
        </div>

        <form className="contact-form glass-panel" onSubmit={handleSubmit}>
          <div className="form-head"><span className="form-step">01 / YOUR MESSAGE</span><h3>How can we help?</h3><p>Share a few details and your email app will open with a message addressed to our team.</p></div>
          <label htmlFor="contact-name">Your name <span>*</span></label>
          <input id="contact-name" name="name" type="text" placeholder="Name" autoComplete="name" required />
          <label htmlFor="contact-email">Email address <span>*</span></label>
          <input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          <label htmlFor="contact-message">Your message <span>*</span></label>
          <textarea id="contact-message" name="message" rows="4" placeholder="Tell us what you'd like to know..." required />
          <button className="button button-primary form-submit" type="submit">{sent ? 'Open your email app again' : 'Prepare your message'} <Send size={15} /></button>
          <p className="form-privacy">This form prepares an email in your own mail app; it does not store or submit your message on this site.</p>
        </form>
      </section>

      <section className="contact-footer-cta"><div className="section-wrap contact-footer-inner"><p>Making India healthy —<br /><em>one conversation at a time.</em></p><a href="mailto:curelixlifesciences@gmail.com">curelixlifesciences@gmail.com <ArrowUpRight size={15} /></a></div></section>
    </>
  );
}
