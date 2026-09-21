import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/ui/CTASection';
import {
  Stethoscope,
  Thermometer,
  HeartPulse,
  Activity,
  Scissors,
  FileText,
  CalendarCheck,
  Users,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Umer Clinic offers comprehensive medical services including general consultation, chronic disease management, minor procedures, and more in Rawalpindi.',
};

const services = [
  {
    icon: <Stethoscope size={26} strokeWidth={2} />,
    title: 'General Medical Consultation',
    description: 'Our primary service — a comprehensive consultation for any health concern. The doctor will listen to your symptoms, review your history, perform an examination, and provide an accurate diagnosis along with a clear treatment plan.',
    tags: ['All Ages', 'Walk-ins Welcome', 'Evidence-Based'],
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=700&q=80&fit=crop&auto=format',
    imageAlt: 'Doctor conducting a general medical consultation',
  },
  {
    icon: <Thermometer size={26} strokeWidth={2} />,
    title: 'Fever, Infections & Acute Illness',
    description: 'Rapid assessment and management of acute conditions including fever, bacterial and viral infections, cough, flu, sore throat, urinary tract infections, and seasonal illnesses. We provide appropriate prescription-based treatment for fast recovery.',
    tags: ['Rapid Assessment', 'Infection Control', 'Prescription-Based'],
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=700&q=80&fit=crop&auto=format',
    imageAlt: 'Medical examination for fever and infections',
  },
  {
    icon: <HeartPulse size={26} strokeWidth={2} />,
    title: 'Chronic Disease Management',
    description: 'Ongoing medical supervision and treatment of long-term conditions such as hypertension (high blood pressure), type 2 diabetes, thyroid disorders, and gastrointestinal conditions. Regular monitoring to keep your conditions well-controlled.',
    tags: ['Hypertension', 'Diabetes', 'Long-Term Care'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80&fit=crop&auto=format',
    imageAlt: 'Chronic disease monitoring and management',
  },
  {
    icon: <Activity size={26} strokeWidth={2} />,
    title: 'Preventive Health Screenings',
    description: 'Proactive health assessments to identify risk factors before they become serious conditions. We offer blood pressure checks, blood sugar screening guidance, BMI assessment, and general wellness evaluations with personalized health advice.',
    tags: ['Blood Pressure', 'Screening', 'Health Advice'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80&fit=crop&auto=format',
    imageAlt: 'Preventive health screening and checkup',
  },
  {
    icon: <Scissors size={26} strokeWidth={2} />,
    title: 'Minor Surgical Procedures',
    description: 'Safe, professionally performed minor procedures within the clinic setting. This includes wound assessment and dressing, incision and drainage of minor abscesses, suturing of minor lacerations, and other small-scale surgical interventions.',
    tags: ['Wound Care', 'Suturing', 'Safe Environment'],
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=700&q=80&fit=crop&auto=format',
    imageAlt: 'Minor surgical procedure at clinic',
  },
  {
    icon: <FileText size={26} strokeWidth={2} />,
    title: 'Laboratory Referrals & Report Review',
    description: 'When investigations are required, we provide professional referrals to reputable diagnostic labs. Upon receiving your results, we offer thorough report interpretation in a language you can understand, with appropriate follow-up care.',
    tags: ['Lab Referrals', 'Report Review', 'Follow-Up'],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=700&q=80&fit=crop&auto=format',
    imageAlt: 'Laboratory test results and medical reports',
  },
  {
    icon: <CalendarCheck size={26} strokeWidth={2} />,
    title: 'Patient Follow-Up & Monitoring',
    description: 'Regular follow-up consultations are essential to ensure your recovery is progressing correctly and your treatment is working effectively. We maintain clear patient records to track progress and adjust plans as needed.',
    tags: ['Progress Tracking', 'Record Keeping', 'Adjustments'],
    image: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=700&q=80&fit=crop&auto=format',
    imageAlt: 'Patient follow-up consultation with doctor',
  },
  {
    icon: <Users size={26} strokeWidth={2} />,
    title: 'Family Healthcare',
    description: 'We cater to patients of all ages — children, adults, and the elderly. Our family-friendly approach means your whole family can receive their medical care at one trusted clinic with a doctor who knows your family\'s medical history.',
    tags: ['All Ages', 'Family Records', 'Trusted Care'],
    image: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?w=700&q=80&fit=crop&auto=format',
    imageAlt: 'Family healthcare consultation',
  },
];

export default function ServicesPage() {
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1400&q=80&fit=crop&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
          }}
        />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.4)" />
            <span style={{ color: '#E8620A', fontSize: '0.875rem', fontWeight: '500' }}>Services</span>
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
            Medical Services
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.0625rem', maxWidth: '520px', lineHeight: '1.7' }}>
            Comprehensive primary healthcare and surgical consultation services tailored to each patient&apos;s individual needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-pad" style={{ backgroundColor: 'white' }}>
        <div className="container-custom">
          <SectionHeading
            eyebrow="What We Offer"
            title="Comprehensive Medical Services"
            subtitle="Explore the range of clinical services provided at Umer Clinic by our registered General Physician & Surgeon."
            center
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {services.map((service, idx) => (
              <div
                key={service.title}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: '24px',
                  alignItems: 'center',
                  padding: 'clamp(16px, 4vw, 32px)',
                  borderRadius: '16px',
                  border: '1px solid #E5E7EB',
                  backgroundColor: idx % 2 === 0 ? 'white' : '#F9FAFB',
                }}
              >
                {/* Image - alternating layout on desktop */}
                <div
                  style={{
                    order: idx % 2 === 1 ? 2 : 1,
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    aspectRatio: '16/10',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div style={{ order: idx % 2 === 1 ? 1 : 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
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
                        flexShrink: 0,
                      }}
                    >
                      {service.icon}
                    </div>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#1C1C1E', fontFamily: "'Merriweather', serif" }}>
                      {service.title}
                    </h2>
                  </div>

                  <p style={{ color: '#6B7280', lineHeight: '1.8', fontSize: '0.9375rem', marginBottom: '20px' }}>
                    {service.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          backgroundColor: '#FFF7ED',
                          color: '#E8620A',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.8125rem',
                          fontWeight: '600',
                          border: '1px solid #FFEDD5',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                        }}
                      >
                        <CheckCircle2 size={12} strokeWidth={2.5} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href="/contact" className="btn-primary" style={{ fontSize: '0.875rem', padding: '10px 22px' }}>
                    Book for This Service
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Facilities */}
      <section className="section-pad" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Clinic"
            title="Modern, Clean & Welcoming Facilities"
            subtitle="Our clinic environment is designed to be comfortable, hygienic, and professional — creating a positive experience for every visit."
            center
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '20px' }}>
            {[
              {
                image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80&fit=crop&auto=format',
                label: 'Clean Reception Area',
                alt: 'Clean and modern clinic reception area',
              },
              {
                image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80&fit=crop&auto=format',
                label: 'Consultation Room',
                alt: 'Professional medical consultation room',
              },
              {
                image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&fit=crop&auto=format',
                label: 'Patient Examination & Diagnosis',
                alt: 'Doctor conducting patient examination',
              },
              {
                image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80&fit=crop&auto=format',
                label: 'Medical Equipment & Sterile Care',
                alt: 'Medical diagnostic equipment',
              },
            ].map((facility, idx) => (
              <div
                key={idx}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '4/3',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                }}
              >
                <Image
                  src={facility.image}
                  alt={facility.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    padding: '20px 16px 14px',
                  }}
                >
                  <p style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>{facility.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Clinic exterior photo */}
          <div style={{ marginTop: '32px', borderRadius: '12px', overflow: 'hidden', position: 'relative', aspectRatio: '16/7', minHeight: '180px', border: '1px solid #E5E7EB', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
            <Image
              src="/clinic-front.jpg"
              alt="Umer Clinic exterior – Rawalpindi"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="100vw"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'flex-end',
                padding: 'clamp(16px, 4vw, 32px)',
                background: 'linear-gradient(transparent 40%, rgba(0,0,0,0.7))',
              }}
            >
              <div>
                <p style={{ color: 'white', fontWeight: '700', fontSize: '1.25rem', marginBottom: '4px', fontFamily: "'Merriweather', serif" }}>
                  Umer Clinic – Rawalpindi
                </p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem' }}>
                  J-333 Hamroz Dhok Alyas, Rawalpindi | Registration: PHCIL&amp;A/2022/63389
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Medical Attention?"
        subtitle="Don't wait. Book your appointment at Umer Clinic and get professional care today."
        primaryBtn={{ label: 'Book Appointment', href: '/contact' }}
        secondaryBtn={{ label: 'Call Us Now', href: 'tel:+923335896721' }}
      />
    </>
  );
}
