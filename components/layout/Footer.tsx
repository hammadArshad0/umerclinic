'use client';

import Link from 'next/link';
import { Activity, ChevronRight, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#111827', color: '#D1D5DB' }}>
      {/* Main footer */}
      <div className="container-custom" style={{ padding: '64px 24px 48px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '48px',
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#E8620A', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                <Activity size={22} strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '1.125rem', color: 'white', lineHeight: '1.1', fontFamily: "'Merriweather', serif" }}>Umer Clinic</div>
                <div style={{ fontSize: '0.7rem', color: '#9CA3AF', fontWeight: '400' }}>General Physician &amp; Surgeon</div>
              </div>
            </Link>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: '#9CA3AF', marginBottom: '24px' }}>
              Providing trusted, compassionate medical care in Rawalpindi. Your health is our top priority.
            </p>
            <div style={{ backgroundColor: '#1F2937', padding: '8px 12px', borderRadius: '6px', display: 'inline-block' }}>
              <p style={{ fontSize: '0.75rem', color: '#D1D5DB', fontWeight: '500' }}>
                Reg. No. PHCIL&amp;A/2022/63389
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontWeight: '600', fontSize: '0.9375rem', marginBottom: '20px', letterSpacing: '0.02em' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/contact', label: 'Book Appointment' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      color: '#9CA3AF',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#E8620A')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#9CA3AF')}
                  >
                    <ChevronRight size={14} color="#E8620A" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'white', fontWeight: '600', fontSize: '0.9375rem', marginBottom: '20px', letterSpacing: '0.02em' }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
              {[
                'General Consultation',
                'Comprehensive Checkup',
                'Chronic Disease Care',
                'Preventive Medicine',
                'Minor Procedures',
                'Lab Referrals',
                'Patient Follow-up',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    style={{
                      color: '#9CA3AF',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#E8620A')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#9CA3AF')}
                  >
                    <ChevronRight size={14} color="#E8620A" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontWeight: '600', fontSize: '0.9375rem', marginBottom: '20px', letterSpacing: '0.02em' }}>
              Contact Info
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#E8620A" style={{ marginTop: '3px', flexShrink: 0 }} />
                <p style={{ fontSize: '0.9rem', color: '#9CA3AF', lineHeight: '1.6' }}>
                  J-333 Hamroz Dhok Alyas<br />
                  Rawalpindi, Pakistan
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={18} color="#E8620A" style={{ flexShrink: 0 }} />
                <a href="tel:+923335896721" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#E8620A')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#9CA3AF')}
                >
                  0333-5896721
                </a>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Clock size={18} color="#E8620A" style={{ marginTop: '3px', flexShrink: 0 }} />
                <div style={{ fontSize: '0.9rem', color: '#9CA3AF', lineHeight: '1.6' }}>
                  <p>Mon–Sat: 2:30 PM – 6:30 PM</p>
                  <p style={{ color: '#EF4444', fontSize: '0.8125rem', marginTop: '2px' }}>Closed on Sundays</p>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923335896721"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#25D366',
                  color: 'white',
                  padding: '10px 18px',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s ease',
                  width: 'fit-content',
                }}
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #1F2937', padding: '20px 24px' }}>
        <div className="container-custom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '0.85rem', color: '#6B7280' }}>
            &copy; {currentYear} Umer Clinic. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>Rawalpindi, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
