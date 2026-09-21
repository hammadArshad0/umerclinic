'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, Clock, Phone, Activity, Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(112);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const updateHeight = () => setHeaderHeight(el.offsetHeight);
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, [isScrolled]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        ref={headerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: 'white',
          borderBottom: isScrolled ? '1px solid #E5E7EB' : '1px solid transparent',
          boxShadow: isScrolled ? '0 2px 16px rgba(0,0,0,0.07)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Top info bar */}
        <div
          className="top-info-bar"
          style={{
            backgroundColor: '#1C1C1E',
            color: '#d1d5db',
            fontSize: '0.8125rem',
            padding: '8px 0',
            display: isScrolled ? 'none' : 'block',
            transition: 'all 0.3s ease',
          }}
        >
          <div className="container-custom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} color="#E8620A" />
              J-333 Hamroz Dhok Alyas, Rawalpindi
            </span>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} color="#E8620A" />
                Mon–Sat: 2:30 PM – 6:30 PM
              </span>
              <a
                href="tel:+923335896721"
                style={{ color: '#F97316', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
              >
                <Phone size={13} color="#F97316" />
                0333-5896721
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav
          className="container-custom"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: isScrolled ? '12px' : '16px',
            paddingBottom: isScrolled ? '12px' : '16px',
            paddingLeft: 0,
            paddingRight: 0,
            transition: 'padding 0.3s ease',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#E8620A',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexShrink: 0,
              }}
            >
              <Activity size={22} strokeWidth={2.5} />
            </div>
            <div>
              <div style={{ fontWeight: '800', fontSize: '1.125rem', color: '#1C1C1E', lineHeight: '1.1', fontFamily: "'Merriweather', serif" }}>
                Umer Clinic
              </div>
              <div style={{ fontSize: '0.7rem', color: '#6B7280', fontWeight: '500', letterSpacing: '0.03em' }}>
                General Physician &amp; Surgeon
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }} className="desktop-nav">
            <a
              href="tel:+923335896721"
              style={{
                color: '#374151',
                fontWeight: '600',
                fontSize: '0.875rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Phone size={15} color="#E8620A" />
              0333-5896721
            </a>
            <Link href="/contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.875rem' }}>
              Book Appointment
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              color: '#1C1C1E',
              display: 'none',
            }}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>
      <div aria-hidden="true" style={{ height: headerHeight }} />

      {/* Mobile drawer */}
      {isMobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(0,0,0,0.45)',
          }}
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '290px',
          backgroundColor: 'white',
          zIndex: 1001,
          transform: isMobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          boxShadow: '-8px 0 32px rgba(0,0,0,0.12)',
          overflowY: 'auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => setIsMobileOpen(false)}>
            <div style={{ width: '32px', height: '32px', backgroundColor: '#E8620A', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <Activity size={18} strokeWidth={2.5} />
            </div>
            <span style={{ fontWeight: '700', fontSize: '1rem', color: '#1C1C1E', fontFamily: "'Merriweather', serif" }}>Umer Clinic</span>
          </Link>
          <button
            onClick={() => setIsMobileOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#374151' }}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '32px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                color: pathname === link.href ? '#E8620A' : '#374151',
                backgroundColor: pathname === link.href ? '#FFF7ED' : 'transparent',
                transition: 'all 0.2s ease',
              }}
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <a
            href="tel:+923335896721"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#374151',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.9375rem',
            }}
          >
            <Phone size={18} color="#E8620A" />
            0333-5896721
          </a>
          <Link href="/contact" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }} onClick={() => setIsMobileOpen(false)}>
            Book Appointment
          </Link>
          <a
            href="https://wa.me/923335896721"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: '#25D366',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '6px',
              fontWeight: '600',
              fontSize: '0.9375rem',
              textDecoration: 'none',
            }}
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid #E5E7EB' }}>
          <p style={{ fontSize: '0.8125rem', color: '#9CA3AF', textAlign: 'center' }}>
            Reg. No. PHCIL&amp;A/2022/63389
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
