'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '48px 24px',
          backgroundColor: '#F0FDF4',
          borderRadius: '12px',
          border: '1px solid #BBF7D0',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            backgroundColor: '#22C55E',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            color: 'white',
          }}
        >
          <CheckCircle2 size={32} strokeWidth={2.5} />
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#166534', marginBottom: '10px' }}>
          Message Sent Successfully!
        </h3>
        <p style={{ color: '#16A34A', lineHeight: '1.7', marginBottom: '24px' }}>
          Thank you for contacting Umer Clinic. We will reach out to you at <strong>{form.phone}</strong> shortly to confirm your appointment.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '' }); }}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '20px' }}>
        <div>
          <label htmlFor="name" className="form-label">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="form-label">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="03XX-XXXXXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="form-label">Email Address <span style={{ color: '#9CA3AF', fontWeight: '400' }}>(optional)</span></label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="form-input"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="form-label">Reason for Visit</label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="form-input"
          style={{ cursor: 'pointer' }}
        >
          <option value="">Select a service (optional)</option>
          <option value="general">General Consultation</option>
          <option value="fever">Fever / Infection</option>
          <option value="chronic">Chronic Disease Management</option>
          <option value="checkup">Health Checkup / Screening</option>
          <option value="minor-procedure">Minor Procedure</option>
          <option value="lab">Lab Referral / Report Review</option>
          <option value="followup">Follow-up Visit</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="form-label">Additional Information</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="form-input"
          rows={4}
          placeholder="Briefly describe your concern or any additional details..."
          style={{ resize: 'vertical', minHeight: '100px' }}
        />
      </div>

      <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', minWidth: '200px', justifyContent: 'center' }}>
        Send Message
        <Send size={16} strokeWidth={2.2} />
      </button>

      <p style={{ fontSize: '0.8125rem', color: '#9CA3AF' }}>
        * Required fields. We will contact you to confirm your appointment. Your information is kept private and confidential.
      </p>
    </form>
  );
}
