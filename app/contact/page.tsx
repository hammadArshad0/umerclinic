import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/contact/ContactForm';
import { Phone, MessageCircle, MapPin, Clock, ChevronRight, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Umer Clinic in Rawalpindi. Call 0333-5896721 or WhatsApp us to book an appointment. Open Mon–Sat 2:30 PM – 6:30 PM.',
};

const contactCards = [
  {
    icon: <Phone size={24} strokeWidth={2} />,
    title: 'Call Us',
    content: '0333-5896721',
    subContent: '+92 333 5896721',
    href: 'tel:+923335896721',
    cta: 'Call Now',
  },
  {
    icon: <MessageCircle size={24} strokeWidth={2} />,
    title: 'WhatsApp',
    content: 'Chat with Us',
    subContent: '0333-5896721',
    href: 'https://wa.me/923335896721',
    cta: 'Open WhatsApp',
    green: true,
  },
  {
    icon: <MapPin size={24} strokeWidth={2} />,
    title: 'Location',
    content: 'J-333 Hamroz Dhok Alyas',
    subContent: 'Rawalpindi, Pakistan',
    href: 'https://maps.google.com/?q=J-333+Hamroz+Dhok+Alyas+Rawalpindi',
    cta: 'Get Directions',
  },
  {
    icon: <Clock size={24} strokeWidth={2} />,
    title: 'Clinic Hours',
    content: '2:30 PM – 6:30 PM',
    subContent: 'Monday to Saturday (Closed Sun)',
    href: null,
    cta: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#111827',
          padding: 'clamp(48px, 8vw, 80px) 16px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1484863137850-59afcfe05386?w=1400&q=80&fit=crop&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
          }}
        />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.4)" />
            <span style={{ color: '#E8620A', fontSize: '0.875rem', fontWeight: '500' }}>Contact</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', color: 'white', fontFamily: "'Merriweather', serif", marginBottom: '16px' }}>
            Contact &amp; Book an Appointment
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.0625rem', maxWidth: '520px', lineHeight: '1.7' }}>
            Get in touch with Umer Clinic to schedule your appointment or ask us any health-related questions.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section style={{ backgroundColor: '#F9FAFB', padding: '48px 16px 0' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '16px' }}>
            {contactCards.map((card, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: card.green ? '#DCFCE7' : '#FFF7ED',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: card.green ? '#16A34A' : '#E8620A',
                    marginBottom: '8px',
                  }}
                >
                  {card.icon}
                </div>
                <p style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {card.title}
                </p>
                <p style={{ fontWeight: '700', color: '#1C1C1E', fontSize: '1.05rem' }}>{card.content}</p>
                <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>{card.subContent}</p>
                {card.href && card.cta && (
                  <a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      marginTop: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: card.green ? '#16A34A' : '#E8620A',
                      fontWeight: '600',
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                    }}
                  >
                    {card.cta}
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-pad" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(24px, 5vw, 48px)' }}>
            {/* Form */}
            <div>
              <SectionHeading
                eyebrow="Get in Touch"
                title="Book an Appointment"
                subtitle="Fill out the form and we will contact you to confirm your appointment time."
              />
              <ContactForm />
            </div>

            {/* Map + Info */}
            <div>
              <SectionHeading
                eyebrow="Find Us"
                title="Clinic Location"
                subtitle="We are conveniently located in Rawalpindi, accessible from all parts of the city."
              />

              {/* Map embed */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #E5E7EB',
                  backgroundColor: '#F3F4F6',
                  marginBottom: '24px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.9!2d73.05!3d33.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM2JzAwLjAiTiA3M8KwMDMnMDAuMCJF!5e0!3m2!1sen!2spk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '280px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Umer Clinic Location – Rawalpindi"
                />
              </div>

              {/* Directions card */}
              <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #E5E7EB', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <MapPin size={18} color="#E8620A" />
                  <h4 style={{ fontWeight: '700', color: '#1C1C1E', fontSize: '1rem' }}>
                    Clinic Address
                  </h4>
                </div>
                <p style={{ color: '#6B7280', fontSize: '0.9375rem', lineHeight: '1.7', marginBottom: '16px' }}>
                  J-333 Hamroz Dhok Alyas<br />
                  Rawalpindi, Punjab, Pakistan
                </p>
                <a
                  href="https://maps.google.com/?q=J-333+Hamroz+Dhok+Alyas+Rawalpindi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: '0.875rem', padding: '10px 20px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  Open in Google Maps
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Hours */}
              <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #E5E7EB' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <Clock size={18} color="#E8620A" />
                  <h4 style={{ fontWeight: '700', color: '#1C1C1E', fontSize: '1rem' }}>
                    Clinic Hours
                  </h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { day: 'Monday', hours: '2:30 PM – 6:30 PM', open: true },
                    { day: 'Tuesday', hours: '2:30 PM – 6:30 PM', open: true },
                    { day: 'Wednesday', hours: '2:30 PM – 6:30 PM', open: true },
                    { day: 'Thursday', hours: '2:30 PM – 6:30 PM', open: true },
                    { day: 'Friday', hours: '2:30 PM – 6:30 PM', open: true },
                    { day: 'Saturday', hours: '2:30 PM – 6:30 PM', open: true },
                    { day: 'Sunday', hours: 'Closed', open: false },
                  ].map((item) => (
                    <div
                      key={item.day}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '8px 0',
                        borderBottom: '1px solid #F3F4F6',
                      }}
                    >
                      <span style={{ fontSize: '0.875rem', color: '#374151', fontWeight: '500' }}>{item.day}</span>
                      <span style={{ fontSize: '0.875rem', color: item.open ? '#16A34A' : '#EF4444', fontWeight: '600' }}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Banner */}
      <section style={{ backgroundColor: '#25D366', padding: '36px 24px' }}>
        <div className="container-custom" style={{ display: 'flex', gap: '24px', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '52px', height: '52px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
              <MessageCircle size={28} />
            </div>
            <div>
              <p style={{ fontWeight: '700', color: 'white', fontSize: '1.125rem', marginBottom: '4px' }}>
                Prefer WhatsApp?
              </p>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9375rem' }}>
                Send us a message directly at <strong>0333-5896721</strong>
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/923335896721?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Umer%20Clinic."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'white',
              color: '#16A34A',
              padding: '14px 28px',
              borderRadius: '6px',
              fontWeight: '700',
              fontSize: '0.9375rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.2s ease',
            }}
          >
            Start WhatsApp Chat
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </section>
    </>
  );
}
