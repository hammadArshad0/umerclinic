import SectionHeading from '@/components/ui/SectionHeading';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Raza',
    location: 'Rawalpindi',
    rating: 5,
    text: 'Dr. sahib listened patiently to my symptoms and gave a very clear explanation of my condition. The treatment worked perfectly. The clinic is clean and professional. Highly recommended.',
    initials: 'AR',
    color: '#E8620A',
  },
  {
    name: 'Fatima Bibi',
    location: 'Rawalpindi',
    rating: 5,
    text: 'Very professional and caring doctor. I was worried about my chronic illness but he explained everything so clearly and reassured me. I have been coming here for 2 years now.',
    initials: 'FB',
    color: '#0369A1',
  },
  {
    name: 'Muhammad Usman',
    location: 'Saddar, Rawalpindi',
    rating: 5,
    text: 'Excellent clinic, very clean and organized. The doctor is knowledgeable and takes proper time with each patient. I never feel rushed. Fair fees and genuine care.',
    initials: 'MU',
    color: '#059669',
  },
  {
    name: 'Kiran Malik',
    location: 'Rawalpindi',
    rating: 5,
    text: 'Brought my elderly mother here for consultation. The doctor was very respectful and thorough. Prescribed the right medications and she improved significantly. Jazak Allah.',
    initials: 'KM',
    color: '#7C3AED',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < count ? '#F59E0B' : 'transparent'}
          color={i < count ? '#F59E0B' : '#D1D5DB'}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-pad" style={{ backgroundColor: 'white' }}>
      <div className="container-custom">
        <SectionHeading
          eyebrow="Patient Reviews"
          title="What Our Patients Say"
          subtitle="Real feedback from real patients. We are proud to have earned the trust of families across Rawalpindi."
          center
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              {/* Quote icon */}
              <div style={{ marginBottom: '16px', color: '#E8620A' }}>
                <Quote size={28} strokeWidth={1.8} style={{ transform: 'rotate(180deg)' }} />
              </div>

              <StarRating count={t.rating} />

              <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: '1.7', margin: '14px 0 20px' }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid #F3F4F6' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: t.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '0.875rem',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p style={{ fontWeight: '700', fontSize: '0.9rem', color: '#1C1C1E' }}>{t.name}</p>
                  <p style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div
          style={{
            marginTop: '48px',
            backgroundColor: '#F9FAFB',
            borderRadius: '12px',
            padding: '32px',
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
            border: '1px solid #E5E7EB',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '3rem', fontWeight: '800', color: '#1C1C1E', lineHeight: '1', fontFamily: "'Merriweather', serif" }}>4.9</p>
            <StarRating count={5} />
            <p style={{ fontSize: '0.8125rem', color: '#9CA3AF', marginTop: '6px' }}>Overall Rating</p>
          </div>
          <div style={{ width: '1px', height: '60px', backgroundColor: '#E5E7EB' }} />
          <div>
            <p style={{ fontWeight: '600', color: '#1C1C1E', fontSize: '1rem', marginBottom: '8px' }}>Patients love Umer Clinic for:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Professional Care', 'Clean Environment', 'Accurate Diagnosis', 'Fair Fees', 'Friendly Staff'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    backgroundColor: '#FFF7ED',
                    color: '#E8620A',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '0.8125rem',
                    fontWeight: '600',
                    border: '1px solid #FFEDD5',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <CheckCircle2 size={13} strokeWidth={2.5} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
