import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { CheckCircle2, ArrowRight, Award } from 'lucide-react';

export default function DoctorSection() {
  const credentials = [
    'MBBS – General Physician',
    'Registered General Surgeon',
    'Punjab Healthcare Commission (PHCIL&A/2022/63389)',
    '5+ Years Clinical Experience & Patient Care',
  ];

  return (
    <section className="section-pad" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="Our Doctor"
              title="Expert Medical Care from an Experienced Physician"
            />

            <p style={{ color: '#6B7280', lineHeight: '1.8', marginBottom: '20px', fontSize: '0.9375rem' }}>
              At Umer Clinic, patients are seen by a qualified and registered General Physician and Surgeon with years of hands-on clinical experience. Our doctor is committed to delivering evidence-based medical care in a compassionate, professional manner.
            </p>
            <p style={{ color: '#6B7280', lineHeight: '1.8', marginBottom: '32px', fontSize: '0.9375rem' }}>
              Whether you are visiting for a routine checkup, managing a chronic condition, or addressing an acute health concern, you can be confident that you are in experienced hands.
            </p>

            {/* Credentials */}
            <div style={{ marginBottom: '36px' }}>
              {credentials.map((cred, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 0',
                    borderBottom: idx < credentials.length - 1 ? '1px solid #E5E7EB' : 'none',
                  }}
                >
                  <div style={{ color: '#E8620A', display: 'flex', alignItems: 'center' }}>
                    <CheckCircle2 size={18} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '0.9375rem', color: '#374151', fontWeight: '500' }}>{cred}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">
                Book a Consultation
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link href="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
          </div>

          {/* Doctor Image */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '3/4', boxShadow: '0 12px 36px rgba(0,0,0,0.1)' }}>
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=85&fit=crop&auto=format"
                alt="Doctor at Umer Clinic"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Experience badge */}
            <div
              style={{
                position: 'absolute',
                top: '24px',
                left: '-20px',
                backgroundColor: '#E8620A',
                color: 'white',
                borderRadius: '10px',
                padding: '16px 20px',
                boxShadow: '0 8px 24px rgba(232,98,10,0.35)',
                textAlign: 'center',
              }}
            >
              <p style={{ fontSize: '1.75rem', fontWeight: '800', lineHeight: '1', marginBottom: '4px', fontFamily: "'Merriweather', serif" }}>5+</p>
              <p style={{ fontSize: '0.7rem', fontWeight: '600', opacity: 0.9, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Years<br />Experience</p>
            </div>
            {/* Open hours badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                right: '-20px',
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '14px 18px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                border: '1px solid #E5E7EB',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#22C55E', borderRadius: '50%' }} />
                <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#374151' }}>Clinic Open Today</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: '4px' }}>Mon–Sat: 2:30 PM – 6:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
