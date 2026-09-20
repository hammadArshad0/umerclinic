interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, center = false, light = false }: SectionHeadingProps) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: '48px' }}>
      {eyebrow && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: center ? 'center' : 'flex-start', marginBottom: '12px' }}>
          <span
            style={{
              display: 'inline-block',
              width: '36px',
              height: '2px',
              backgroundColor: '#E8620A',
              borderRadius: '2px',
            }}
          />
          <span
            style={{
              fontSize: '0.8125rem',
              fontWeight: '600',
              color: '#E8620A',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {eyebrow}
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '36px',
              height: '2px',
              backgroundColor: '#E8620A',
              borderRadius: '2px',
            }}
          />
        </div>
      )}
      <h2
        style={{
          fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
          fontWeight: '800',
          color: light ? 'white' : '#1C1C1E',
          lineHeight: '1.2',
          marginBottom: subtitle ? '16px' : '0',
          fontFamily: "'Merriweather', serif",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: '1.0625rem',
            color: light ? 'rgba(255,255,255,0.8)' : '#6B7280',
            lineHeight: '1.7',
            maxWidth: center ? '560px' : 'none',
            margin: center ? '0 auto' : '0',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
