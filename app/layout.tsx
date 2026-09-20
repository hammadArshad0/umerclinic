import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: '%s | Umer Clinic – General Physician & Surgeon, Rawalpindi',
    default: 'Umer Clinic – General Physician & Surgeon | Rawalpindi',
  },
  description: 'Umer Clinic is a registered general physician and surgeon clinic in Rawalpindi. Professional medical consultations, diagnosis, and treatment. Call 0333-5896721.',
  keywords: ['Umer Clinic', 'doctor Rawalpindi', 'general physician Rawalpindi', 'surgeon Rawalpindi', 'medical clinic Rawalpindi', 'PHCIL'],
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://umerclinic.pk',
    siteName: 'Umer Clinic',
    title: 'Umer Clinic – General Physician & Surgeon | Rawalpindi',
    description: 'Professional medical care in Rawalpindi. Registered clinic offering general consultations, chronic disease management, and more.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Merriweather:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ paddingTop: '0' }}>
        <Navbar />
        <main style={{ paddingTop: '73px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
