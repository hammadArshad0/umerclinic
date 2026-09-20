'use client';

import { Phone, Clock, MapPin, MessageCircle } from 'lucide-react';

export default function QuickContact() {
  const items = [
    {
      icon: <Phone size={20} strokeWidth={2.2} />,
      label: 'Call Us',
      value: '0333-5896721',
      href: 'tel:+923335896721',
    },
    {
      icon: <Clock size={20} strokeWidth={2.2} />,
      label: 'Clinic Hours',
      value: 'Mon–Sat: 2:30 PM – 6:30 PM',
      href: null,
    },
    {
      icon: <MapPin size={20} strokeWidth={2.2} />,
      label: 'Location',
      value: 'J-333 Hamroz Dhok Alyas, Rawalpindi',
      href: 'https://maps.google.com/?q=Rawalpindi+Umer+Clinic',
    },
    {
      icon: <MessageCircle size={20} strokeWidth={2.2} />,
      label: 'WhatsApp',
      value: 'Chat with Us',
      href: 'https://wa.me/923335896721',
    },
  ];

  return (
    <div style={{ backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 0,
          }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '20px 24px',
                borderRight: idx < items.length - 1 ? '1px solid #E5E7EB' : 'none',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  backgroundColor: '#FFF7ED',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E8620A',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: '600', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ color: '#1C1C1E', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#E8620A')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#1C1C1E')}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p style={{ color: '#1C1C1E', fontWeight: '600', fontSize: '0.9rem' }}>{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
