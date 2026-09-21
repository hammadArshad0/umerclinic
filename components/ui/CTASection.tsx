import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryBtn?: { label: string; href: string };
  secondaryBtn?: { label: string; href: string };
  phone?: boolean;
}

export default function CTASection({ title, subtitle, primaryBtn, secondaryBtn, phone = true }: CTASectionProps) {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)',
        padding: 'clamp(48px, 8vw, 80px) 16px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative subtle glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(232,98,10,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <span style={{ display: 'inline-block', width: '48px', height: '3px', backgroundColor: '#E8620A', borderRadius: '2px' }} />
        </div>
        <h2
          style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
            fontWeight: '800',
            color: 'white',
            lineHeight: '1.2',
            marginBottom: '16px',
            fontFamily: "'Merriweather', serif",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.78)', lineHeight: '1.7', maxWidth: '520px', margin: '0 auto 36px' }}>
            {subtitle}
          </p>
        )}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          {primaryBtn && (
            <Link href={primaryBtn.href} className="btn-primary">
              {primaryBtn.label}
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          )}
          {secondaryBtn && (
            <Link href={secondaryBtn.href} className="btn-secondary">
              {secondaryBtn.label}
            </Link>
          )}
          {phone && (
            <a
              href="tel:+923335896721"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                fontWeight: '600',
                backgroundColor: 'rgba(255,255,255,0.08)',
                padding: '12px 20px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.15)',
                transition: 'background 0.2s ease',
              }}
            >
              <Phone size={16} color="#F97316" />
              0333-5896721
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
