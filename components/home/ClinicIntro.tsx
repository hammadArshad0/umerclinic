import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function ClinicIntro() {
  const stats = [
    { number: '5+', label: 'Years of Service' },
    { number: '10K+', label: 'Patients Treated' },
    { number: '98%', label: 'Patient Satisfaction' },
    { number: '6', label: 'Days a Week' },
  ];

  return (
    <section className="section-pad" style={{ backgroundColor: 'white' }}>
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Image */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                aspectRatio: '4/5',
                boxShadow: '0 12px 36px rgba(0,0,0,0.08)',
              }}
            >
              <Image
                src="/clinic-front.jpg"
                alt="Doctor at Umer Clinic consultation"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Floating stats card */}
            <div
              style={{
                position: 'absolute',
                bottom: '-24px',
                right: '-24px',
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '18px 22px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                border: '1px solid #E5E7EB',
                maxWidth: '220px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div style={{ width: '34px', height: '34px', backgroundColor: '#FFF7ED', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E8620A' }}>
                  <ShieldCheck size={20} strokeWidth={2.2} />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1F2937' }}>Verified Clinic</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#6B7280', lineHeight: '1.5' }}>
                PHCIL&amp;A/2022/63389<br />
                Registered &amp; Certified
              </p>
            </div>
            {/* Orange accent square */}
            <div
              style={{
                position: 'absolute',
                top: '-16px',
                left: '-16px',
                width: '80px',
                height: '80px',
                backgroundColor: '#FFF7ED',
                borderRadius: '8px',
                zIndex: -1,
                border: '3px solid #FFEDD5',
              }}
            />
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="About Umer Clinic"
              title="Dedicated to Your Health & Wellbeing"
              subtitle="Umer Clinic is a registered general physician and surgeon practice in Rawalpindi, offering professional medical care with a patient-centered approach."
            />

            <p style={{ color: '#6B7280', lineHeight: '1.8', marginBottom: '24px', fontSize: '0.9375rem' }}>
              Our clinic is equipped to handle a wide range of medical conditions, providing accurate diagnosis and effective treatment plans. We believe in transparent communication with our patients, explaining every step of the diagnosis and treatment process clearly.
            </p>
            <p style={{ color: '#6B7280', lineHeight: '1.8', marginBottom: '36px', fontSize: '0.9375rem' }}>
              Located in Rawalpindi, our modern, clean facility is welcoming and comfortable for patients of all ages. We pride ourselves on delivering timely, efficient care without compromising on quality.
            </p>

            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '36px' }}>
              {stats.map((stat) => (
                <div key={stat.label} style={{ borderLeft: '3px solid #E8620A', paddingLeft: '16px' }}>
                  <p style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1C1C1E', lineHeight: '1', marginBottom: '4px', fontFamily: "'Merriweather', serif" }}>
                    {stat.number}
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: '#9CA3AF', fontWeight: '500' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
