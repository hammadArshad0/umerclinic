import type { Metadata } from 'next';
import HeroSlider from '@/components/home/HeroSlider';
import QuickContact from '@/components/home/QuickContact';
import ClinicIntro from '@/components/home/ClinicIntro';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ServicesPreview from '@/components/home/ServicesPreview';
import DoctorSection from '@/components/home/DoctorSection';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Umer Clinic – General Physician & Surgeon | Rawalpindi',
  description: 'Professional medical clinic in Rawalpindi. Trusted general physician and surgeon providing quality healthcare. Book your appointment today.',
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <QuickContact />
      <ClinicIntro />
      <WhyChooseUs />
      <ServicesPreview />
      <DoctorSection />
      <Testimonials />
      <CTASection
        title="Ready to Take Care of Your Health?"
        subtitle="Book an appointment today and experience professional, compassionate medical care at Umer Clinic."
        primaryBtn={{ label: 'Book Appointment', href: '/contact' }}
        secondaryBtn={{ label: 'View Services', href: '/services' }}
      />
    </>
  );
}
