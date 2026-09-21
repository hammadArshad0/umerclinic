import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  Stethoscope,
  Thermometer,
  HeartPulse,
  ShieldCheck,
  Scissors,
  CalendarCheck,
  FileText,
  Home,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: <Stethoscope size={24} strokeWidth={2} />,
    title: 'General Consultation',
    description: 'Comprehensive evaluation of your health concerns with proper diagnosis and a clear treatment plan tailored to your needs.',
  },
  {
    icon: <Thermometer size={24} strokeWidth={2} />,
    title: 'Fever & Infections',
    description: 'Diagnosis and management of fever, bacterial and viral infections, seasonal flu, and acute respiratory conditions.',
  },
  {
    icon: <HeartPulse size={24} strokeWidth={2} />,
    title: 'Chronic Disease Care',
    description: 'Ongoing management and monitoring of chronic conditions including hypertension, diabetes, and related complications.',
  },
  {
    icon: <ShieldCheck size={24} strokeWidth={2} />,
    title: 'Preventive Medicine',
    description: 'Health screenings, lifestyle counseling, and preventive care guidance to help you stay healthy and avoid illness.',
  },
  {
    icon: <Scissors size={24} strokeWidth={2} />,
    title: 'Minor Procedures',
    description: 'Safe and professionally performed minor surgical procedures, stitches, and sterile wound care in-clinic.',
  },
  {
    icon: <CalendarCheck size={24} strokeWidth={2} />,
    title: 'Patient Follow-up',
    description: 'Structured follow-up visits to monitor your recovery progress and adjust treatment plans as needed for best outcomes.',
  },
  {
    icon: <FileText size={24} strokeWidth={2} />,
    title: 'Lab Referrals & Reports',
    description: 'Professional referrals for diagnostic laboratory tests with thorough interpretation of results and clear explanations.',
  },
  {
    icon: <Home size={24} strokeWidth={2} />,
    title: 'Home Visit Advice',
    description: 'Medical guidance for home-care of patients, including care instructions for recovering patients and elderly individuals.',
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-pad" style={{ backgroundColor: 'white' }}>
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Medical Services"
          subtitle="From routine consultations to specialized care, Umer Clinic provides a range of general medical services to address your health needs."
          center
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="service-card"
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 style={{ fontWeight: '700', fontSize: '1.05rem', color: '#1C1C1E', marginBottom: '10px' }}>
                {service.title}
              </h3>
              <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '18px' }}>
                {service.description}
              </p>
              <Link
                href="/contact"
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: '600',
                  color: '#E8620A',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'gap 0.2s ease',
                }}
              >
                Book Appointment
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/services" className="btn-outline">
            View All Services
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
