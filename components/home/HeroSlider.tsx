'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, PhoneCall } from 'lucide-react';

const slides = [
  {
    id: 1,
    eyebrow: 'Trusted Medical Care',
    title: 'Professional Care You Can Trust',
    subtitle: 'Experienced physician providing comprehensive medical consultations, diagnosis, and treatment with a personal touch.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1400&q=85&fit=crop&auto=format',
    imageAlt: 'Doctor at a medical consultation',
    primaryCta: { label: 'Book Appointment', href: '/contact' },
    secondaryCta: { label: 'View Services', href: '/services' },
  },
  {
    id: 2,
    eyebrow: 'Comprehensive Diagnosis',
    title: 'Thorough Examination & Consultation',
    subtitle: 'We take the time to understand your health concerns and provide clear, evidence-based medical guidance for your wellbeing.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=85&fit=crop&auto=format',
    imageAlt: 'Medical examination and consultation',
    primaryCta: { label: 'Meet Our Doctor', href: '/about' },
    secondaryCta: { label: 'Our Services', href: '/services' },
  },
  {
    id: 3,
    eyebrow: 'Patient-Centered Care',
    title: 'Quality Healthcare for Every Patient',
    subtitle: 'At Umer Clinic, every patient receives personalized attention, proper diagnosis, and a clear treatment plan tailored to their needs.',
    image: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=1400&q=85&fit=crop&auto=format',
    imageAlt: 'Quality healthcare patient care',
    primaryCta: { label: 'Contact Us Today', href: '/contact' },
    secondaryCta: { label: 'Learn About Us', href: '/about' },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 100);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="hero-slider" aria-label="Hero carousel">
      {/* Background Image */}
      <div
        key={slide.id}
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 1,
          transition: 'opacity 0.6s ease-in-out',
        }}
      >
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority={current === 0}
          style={{
            objectFit: 'cover',
            objectPosition: 'center 25%',
          }}
          sizes="100vw"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(17,24,39,0.92) 0%, rgba(17,24,39,0.80) 50%, rgba(17,24,39,0.55) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 'min(450px, 100%)',
            height: '450px',
            background: 'radial-gradient(circle, rgba(232,98,10,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container-custom hero-content-wrap">
        <div
          key={`content-${slide.id}`}
          style={{
            maxWidth: '620px',
            width: '100%',
            animation: 'fadeInUp 0.6s ease-out forwards',
          }}
        >
          <h1 className="hero-title">
            {slide.title}
          </h1>

          <p className="hero-subtitle">
            {slide.subtitle}
          </p>

          <div className="hero-ctas">
            <Link href={slide.primaryCta.href} className="btn-primary">
              {slide.primaryCta.label}
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link href={slide.secondaryCta.href} className="btn-secondary">
              {slide.secondaryCta.label}
            </Link>
          </div>

          <div className="hero-phone">
            <div className="hero-phone-icon">
              <PhoneCall size={18} />
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2px' }}>Call for appointment</p>
              <a href="tel:+923335896721" style={{ color: 'white', fontWeight: '700', fontSize: '1.05rem', textDecoration: 'none' }}>
                0333-5896721
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? '32px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: i === current ? '#E8620A' : 'rgba(255,255,255,0.5)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
