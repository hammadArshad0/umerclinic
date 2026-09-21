'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import { Award, HeartHandshake, MessageSquareText, ShieldCheck, Clock, BadgePercent } from 'lucide-react';

const reasons = [
  {
    icon: <Award size={24} strokeWidth={2} />,
    title: 'Qualified & Registered',
    description: 'Fully registered with the Punjab Healthcare Commission (PHCIL&A/2022/63389), ensuring care that meets all regulatory standards.',
  },
  {
    icon: <HeartHandshake size={24} strokeWidth={2} />,
    title: 'Patient-Centered Approach',
    description: 'Every patient receives individualized attention. We listen carefully to understand your health concerns before offering guidance.',
  },
  {
    icon: <MessageSquareText size={24} strokeWidth={2} />,
    title: 'Clear Communication',
    description: 'We explain diagnoses and treatment plans in plain language, ensuring you fully understand your health situation and options.',
  },
  {
    icon: <ShieldCheck size={24} strokeWidth={2} />,
    title: 'Hygienic Environment',
    description: 'Our clinic maintains strict hygiene and cleanliness standards, providing a safe and comfortable environment for all patients.',
  },
  {
    icon: <Clock size={24} strokeWidth={2} />,
    title: 'Punctual & Efficient',
    description: 'We respect your time. Our clinic runs on schedule with minimal wait times, so you can get care without unnecessary delays.',
  },
  {
    icon: <BadgePercent size={24} strokeWidth={2} />,
    title: 'Affordable Care',
    description: 'Quality healthcare should be accessible. We offer professional medical services at fair, transparent fees without hidden charges.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="container-custom">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="What Sets Umer Clinic Apart"
          subtitle="We combine professional medical expertise with genuine care for our patients, creating a healthcare experience built on trust."
          center
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '24px',
          }}
        >
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '28px',
                border: '1px solid #E5E7EB',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = '0 12px 32px rgba(232,98,10,0.09)';
                el.style.borderColor = 'rgba(232,98,10,0.3)';
                el.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = 'none';
                el.style.borderColor = '#E5E7EB';
                el.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#FFF7ED',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E8620A',
                  marginBottom: '18px',
                }}
              >
                {reason.icon}
              </div>
              <h3 style={{ fontWeight: '700', fontSize: '1.05rem', color: '#1C1C1E', marginBottom: '10px' }}>
                {reason.title}
              </h3>
              <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: '1.7' }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
