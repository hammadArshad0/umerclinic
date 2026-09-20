import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/ui/CTASection';
import { ChevronRight, ArrowRight, Heart, ShieldCheck, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Umer Clinic – a registered general physician and surgeon practice in Rawalpindi. Trusted healthcare since 2022.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#111827',
          padding: '80px 24px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=80&fit=crop&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.18,
          }}
        />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.4)" />
            <span style={{ color: '#E8620A', fontSize: '0.875rem', fontWeight: '500' }}>About</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: 'white',
              fontFamily: "'Merriweather', serif",
              marginBottom: '16px',
            }}
          >
            About Umer Clinic
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.0625rem', maxWidth: '520px', lineHeight: '1.7' }}>
            A trusted general physician and surgeon practice serving the community of Rawalpindi with professional, patient-centered care.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-pad" style={{ backgroundColor: 'white' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'start' }}>
            {/* Image */}
            <div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/5', position: 'relative', boxShadow: '0 12px 36px rgba(0,0,0,0.08)' }}>
                <Image
                  src="/clinic-front.jpg"
                  alt="Umer Clinic front view – Rawalpindi"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Reg info below image */}
              <div style={{ backgroundColor: '#F9FAFB', borderRadius: '10px', padding: '20px', marginTop: '20px', border: '1px solid #E5E7EB' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <ShieldCheck size={18} color="#E8620A" />
                  <p style={{ fontSize: '0.8125rem', fontWeight: '700', color: '#1F2937', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Clinic Registration
                  </p>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: '1.7' }}>
                  Registration No: <strong style={{ color: '#1C1C1E' }}>PHCIL&amp;A/2022/63389</strong><br />
                  Registered with the Punjab Healthcare Commission<br />
                  Licensed General Physician &amp; Surgeon Clinic
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="A Clinic Built on Trust & Quality Care"
              />
              <p style={{ color: '#6B7280', lineHeight: '1.8', marginBottom: '20px', fontSize: '0.9375rem' }}>
                Umer Clinic was established with a clear mission: to make quality healthcare accessible to every person in the community. Located in Rawalpindi, our clinic has grown into a trusted medical practice serving hundreds of families with dedication and professionalism.
              </p>
              <p style={{ color: '#6B7280', lineHeight: '1.8', marginBottom: '20px', fontSize: '0.9375rem' }}>
                Our clinic is registered with the Punjab Healthcare Commission under registration number PHCIL&amp;A/2022/63389, confirming our compliance with all healthcare standards and regulations in Pakistan.
              </p>
              <p style={{ color: '#6B7280', lineHeight: '1.8', marginBottom: '32px', fontSize: '0.9375rem' }}>
                We are open 6 days a week (Monday through Saturday, excluding Sundays) from 2:30 PM to 6:30 PM. Our location at J-333 Hamroz Dhok Alyas is easily accessible to residents of Rawalpindi and surrounding areas.
              </p>

              <div style={{ backgroundColor: '#FFF7ED', borderLeft: '4px solid #E8620A', borderRadius: '0 8px 8px 0', padding: '20px 24px', marginBottom: '32px' }}>
                <p style={{ fontStyle: 'italic', color: '#374151', lineHeight: '1.7', fontSize: '0.9375rem' }}>
                  &ldquo;Our commitment is to provide every patient with the level of medical care and attention we would want for our own families.&rdquo;
                </p>
              </div>

              <Link href="/contact" className="btn-primary">
                Book an Appointment
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-pad" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Approach"
            title="How We Deliver Patient-Centered Care"
            subtitle="At Umer Clinic, medical care is never rushed. We follow a structured approach to ensure accuracy and patient satisfaction."
            center
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              {
                step: '01',
                title: 'Listen First',
                desc: 'We take time to fully understand your health concerns, medical history, and symptoms before any assessment.',
              },
              {
                step: '02',
                title: 'Thorough Examination',
                desc: 'A comprehensive physical examination helps us identify the root cause of your health issue accurately.',
              },
              {
                step: '03',
                title: 'Clear Diagnosis',
                desc: 'We explain your diagnosis in plain, understandable language so you always know what\'s happening with your health.',
              },
              {
                step: '04',
                title: 'Effective Treatment',
                desc: 'Evidence-based treatment plans are prescribed, tailored to your specific condition and health profile.',
              },
              {
                step: '05',
                title: 'Follow-Up Care',
                desc: 'We schedule appropriate follow-up visits to monitor your progress and adjust treatment if needed.',
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '28px',
                  border: '1px solid #E5E7EB',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    fontSize: '3rem',
                    fontWeight: '900',
                    color: '#F3F4F6',
                    position: 'absolute',
                    top: '12px',
                    right: '16px',
                    lineHeight: '1',
                    fontFamily: "'Merriweather', serif",
                  }}
                >
                  {item.step}
                </div>
                <div style={{ width: '36px', height: '3px', backgroundColor: '#E8620A', borderRadius: '2px', marginBottom: '16px' }} />
                <h3 style={{ fontWeight: '700', fontSize: '1.05rem', color: '#1C1C1E', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="section-pad" style={{ backgroundColor: 'white' }}>
        <div className="container-custom">
          <SectionHeading eyebrow="Our Team" title="Meet Our Physician" center />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '48px',
              alignItems: 'center',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {/* Doctor Image */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '3/4', boxShadow: '0 12px 36px rgba(0,0,0,0.1)' }}>
                <Image
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=85&fit=crop&auto=format"
                  alt="Physician at Umer Clinic"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Doctor Info */}
            <div>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1C1C1E', marginBottom: '4px', fontFamily: "'Merriweather', serif" }}>
                  Dr. Umar – MBBS
                </h3>
                <p style={{ color: '#E8620A', fontWeight: '600', fontSize: '0.9375rem', marginBottom: '16px' }}>
                  General Physician &amp; Surgeon
                </p>
                <p style={{ color: '#6B7280', lineHeight: '1.8', fontSize: '0.9375rem', marginBottom: '20px' }}>
                  A dedicated and experienced medical professional with expertise in general medicine and surgical procedures. Dr. Umar is known for his compassionate bedside manner, thorough approach to diagnosis, and commitment to patient education.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {[
                  { label: 'Qualification', value: 'MBBS, General Physician' },
                  { label: 'Specialization', value: 'General Medicine & Surgery' },
                  { label: 'Experience', value: '5+ Years Clinical Practice' },
                  { label: 'Registration', value: 'PHCIL&A/2022/63389' },
                  { label: 'Clinic Hours', value: 'Mon–Sat: 2:30–6:30 PM (Sun Closed)' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ fontSize: '0.875rem', color: '#9CA3AF', fontWeight: '500', minWidth: '120px', flexShrink: 0 }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize: '0.875rem', color: '#374151', fontWeight: '600' }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary">
                Book Appointment
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        className="section-pad"
        style={{
          background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
          borderTop: '1px solid #FFEDD5',
          borderBottom: '1px solid #FFEDD5',
        }}
      >
        <div className="container-custom">
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#E8620A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <Heart size={22} fill="white" />
              </div>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: '800', color: '#1C1C1E', marginBottom: '20px', fontFamily: "'Merriweather', serif" }}>
              Our Medical Philosophy
            </h2>
            <p style={{ color: '#4B5563', fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '20px' }}>
              We believe that excellent healthcare is built on three pillars: accurate diagnosis, honest communication, and genuine concern for the patient&apos;s wellbeing.
            </p>
            <p style={{ color: '#4B5563', fontSize: '1.0625rem', lineHeight: '1.8' }}>
              At Umer Clinic, we do not simply prescribe medications — we take the time to educate our patients about their conditions, empowering them to make informed decisions about their health. We treat every patient with the dignity and respect they deserve.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Your Health Matters to Us"
        subtitle="Visit Umer Clinic and experience the difference that professional, caring medical treatment makes."
        primaryBtn={{ label: 'Book Appointment', href: '/contact' }}
        secondaryBtn={{ label: 'Our Services', href: '/services' }}
      />
    </>
  );
}
