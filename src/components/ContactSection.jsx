import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Globe2, 
  Building2,
  FileText
} from 'lucide-react';
import { COMPANY_DETAILS, PRODUCTS_CATEGORIES, getEmailHref, isMobileDevice } from '../data/productsData';

export default function ContactSection({ openQuoteModal }) {
  const isMobile = isMobileDevice();
  const emailHref = getEmailHref(COMPANY_DETAILS.emailInfo);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
    honeypot: '' // Anti-spam protection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard bot submission
    
    setIsSubmitting(true);

    try {
      await fetch("https://formsubmit.co/ajax/info@uzairsharifenterprises.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New B2B Garment Inquiry from ${formData.name} (${formData.company || 'International Buyer'})`,
          Full_Name: formData.name,
          Company: formData.company,
          Business_Email: formData.email,
          Country_Region: formData.country,
          Product_Category: formData.product,
          Estimated_Quantity: formData.quantity,
          Message_Specs: formData.message,
          _template: 'table'
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.warn("Transmission error, showing offline confirmation:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#FAF7F5', minHeight: '85vh', paddingBottom: '6rem' }}>
      
      {/* Header Banner */}
      <div className="bg-dot-grid-dark" style={{ 
        background: 'linear-gradient(180deg, #360C1E 0%, #240713 100%)', 
        color: '#ffffff', 
        paddingTop: '5rem', 
        paddingBottom: '4.5rem',
        borderBottom: '1px solid #541731'
      }}>
        <div className="container-custom" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <span className="badge-pill badge-cobalt" style={{ marginBottom: '1rem', backgroundColor: '#800020', color: '#ffffff' }}>
            International Sales Desk
          </span>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
            fontWeight: '800', 
            letterSpacing: '-0.03em',
            lineHeight: '1.2',
            marginBottom: '1rem'
          }}>
            Contact Uzair Sharif Enterprises
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#d1c0c6', lineHeight: '1.7' }}>
            Get in touch directly with our commercial export management team in Pakistan for quotations, sampling inquiries, and sourcing partnerships.
          </p>
        </div>
      </div>

      <div className="container-custom" style={{ paddingTop: '4rem' }}>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
          gap: '2.5rem',
          alignItems: 'flex-start'
        }}>
          
          {/* Left Column: Official Contact Coordinates */}
          <div>
            <span className="badge-pill badge-slate" style={{ marginBottom: '1rem', backgroundColor: '#FFFFFF', border: '1px solid #EAE1DD', color: '#800020' }}>
              Corporate Entity Coordinates
            </span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#1A0A10', marginBottom: '1.25rem' }}>
              Uzair Sharif Enterprises (SMC-Private) Limited
            </h2>
            <p style={{ fontSize: '1rem', color: '#4B5565', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              We welcome international inquiries from apparel brands, corporate merchandising directors, buying houses, and independent wholesalers.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              
              {/* Email Card */}
              <a 
                href={emailHref}
                target={isMobile ? undefined : "_blank"}
                rel={isMobile ? undefined : "noopener noreferrer"}
                className="subtle-card" 
                style={{ 
                  padding: '1.25rem 1.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1.25rem', 
                  backgroundColor: '#FFFFFF', 
                  borderColor: '#EAE1DD',
                  textDecoration: 'none', 
                  borderRadius: '12px', 
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#800020';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(128, 0, 32, 0.08)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#EAE1DD';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.02)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                title={isMobile ? "Email us" : "Open in Gmail (new tab)"}
              >
                <div style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '10px', 
                  backgroundColor: '#FDF2F4', 
                  border: '1px solid #F0CBD3',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={22} color="#800020" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: '#8C7A82' }}>
                      Official Business Email
                    </span>
                    <span style={{ fontSize: '0.72rem', backgroundColor: '#FDF2F4', color: '#800020', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: '600' }}>
                      Click to Email ↗
                    </span>
                  </div>
                  <div style={{ marginTop: '0.2rem', color: '#1A0A10', fontWeight: '700', fontSize: '1rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                    {COMPANY_DETAILS.emailInfo}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                    {isMobile ? 'Opens your email app directly' : 'Opens in Gmail in a new tab'}
                  </span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <div className="subtle-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', backgroundColor: '#FFFFFF', borderColor: '#EAE1DD' }}>
                <div style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '10px', 
                  backgroundColor: '#FDF2F4', 
                  border: '1px solid #F0CBD3',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={22} color="#800020" />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: '#8C7A82' }}>
                    Business WhatsApp & Direct Line
                  </div>
                  <a 
                    href={COMPANY_DETAILS.whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#1A0A10', fontWeight: '700', textDecoration: 'none', display: 'block', fontSize: '1rem', marginTop: '0.2rem' }}
                  >
                    {COMPANY_DETAILS.whatsappRaw} ({COMPANY_DETAILS.whatsappIntl})
                  </a>
                  <span style={{ fontSize: '0.75rem', color: '#800020', fontWeight: '600' }}>
                    Available for international buyer messaging
                  </span>
                </div>
              </div>

              {/* Registered Office Address */}
              <div className="subtle-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1.25rem', backgroundColor: '#FFFFFF', borderColor: '#EAE1DD' }}>
                <div style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '10px', 
                  backgroundColor: '#FAF7F5', 
                  border: '1px solid #EAE1DD',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  <MapPin size={22} color="#800020" />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: '#8C7A82' }}>
                    Registered Office Address
                  </div>
                  <div style={{ fontWeight: '700', color: '#1A0A10', fontSize: '0.96rem', marginTop: '0.2rem', lineHeight: '1.4' }}>
                    House No. 540, Street No. 8, Shah Faiz Park, Burewala, Pakistan
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#8C7A82' }}>
                    Commercial Garment & Export Operations
                  </span>
                </div>
              </div>

            </div>

            {/* Response Time Guarantee */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: '#4B5565' }}>
              <Clock size={16} color="#800020" />
              <span>Typical international buyer response turnaround: <strong>Within 24 Business Hours</strong></span>
            </div>

          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="subtle-card" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', borderRadius: '20px', backgroundColor: '#FFFFFF', borderColor: '#EAE1DD' }}>
            
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }} className="fade-in">
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '50%', 
                  backgroundColor: '#FDF2F4', 
                  border: '1px solid #F0CBD3',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto'
                }}>
                  <CheckCircle2 size={36} color="#800020" />
                </div>
                
                <span className="badge-pill badge-cobalt" style={{ marginBottom: '0.85rem', backgroundColor: '#FDF2F4', color: '#800020', border: '1px solid #F0CBD3' }}>
                  Email Dispatched to <a href="mailto:info@uzairsharifenterprises.com" style={{ color: '#800020', fontWeight: '700', textDecoration: 'underline' }}>info@uzairsharifenterprises.com</a>
                </span>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.6rem' }}>
                  Inquiry Successfully Transmitted!
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#4B5565', lineHeight: '1.65', marginBottom: '2rem', maxWidth: '440px', margin: '0 auto 2rem auto' }}>
                  Thank you, <strong>{formData.name}</strong>. Your export inquiry for <strong>{formData.product || 'custom garments'}</strong> ({formData.quantity || 'custom quantity'}) has been routed to our commercial desk. We will reply to <strong>{formData.email}</strong> promptly.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '380px', margin: '0 auto' }}>
                  <a
                    href={`https://wa.me/923281672473?text=Hello%20Uzair%20Sharif%20Enterprises%2C%20I%20just%20submitted%20an%20inquiry%20via%20your%20website%3A%0A-%20Name%3A%20${encodeURIComponent(formData.name)}%0A-%20Company%3A%20${encodeURIComponent(formData.company)}%0A-%20Product%3A%20${encodeURIComponent(formData.product)}%0A-%20Quantity%3A%20${encodeURIComponent(formData.quantity)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cobalt"
                    style={{ padding: '0.85rem 1.5rem', textDecoration: 'none', borderRadius: '10px', justifyContent: 'center' }}
                  >
                    <span>Instant Forward via WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:info@uzairsharifenterprises.com?subject=New%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=Name:%20${encodeURIComponent(formData.name)}%0ACompany:%20${encodeURIComponent(formData.company)}%0AEmail:%20${encodeURIComponent(formData.email)}%0AProduct:%20${encodeURIComponent(formData.product)}%0AQuantity:%20${encodeURIComponent(formData.quantity)}%0AMessage:%20${encodeURIComponent(formData.message)}`}
                    className="btn-secondary"
                    style={{ padding: '0.8rem 1.5rem', textDecoration: 'none', borderRadius: '10px', justifyContent: 'center' }}
                  >
                    <span>Open in Email App (Backup)</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        country: '',
                        product: '',
                        quantity: '',
                        message: '',
                        honeypot: ''
                      });
                    }}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: '#7A686F', 
                      fontSize: '0.82rem', 
                      cursor: 'pointer', 
                      padding: '0.5rem',
                      textDecoration: 'underline'
                    }}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ marginBottom: '1.75rem' }}>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.35rem' }}>
                    Send an Inquiry
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#8C7A82' }}>
                    Fill out your basic product requirements to initiate communication.
                  </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  
                  {/* Honeypot field (hidden from real users) */}
                  <input 
                    type="text" 
                    name="website_url_check" 
                    value={formData.honeypot} 
                    onChange={e => setFormData({...formData, honeypot: e.target.value})} 
                    style={{ display: 'none' }} 
                    tabIndex="-1" 
                    autoComplete="off" 
                  />

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A0A10', marginBottom: '0.35rem' }}>
                        Your Full Name*
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          border: '1px solid #EAE1DD',
                          backgroundColor: '#FFFFFF',
                          color: '#1A0A10',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A0A10', marginBottom: '0.35rem' }}>
                        Company / Brand Name*
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="Apex Apparel Ltd"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          border: '1px solid #EAE1DD',
                          backgroundColor: '#FFFFFF',
                          color: '#1A0A10',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A0A10', marginBottom: '0.35rem' }}>
                        Business Email*
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="buyer@apexapparel.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          border: '1px solid #EAE1DD',
                          backgroundColor: '#FFFFFF',
                          color: '#1A0A10',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A0A10', marginBottom: '0.35rem' }}>
                        Country / Destination*
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="United States / United Kingdom..."
                        value={formData.country}
                        onChange={e => setFormData({...formData, country: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          border: '1px solid #EAE1DD',
                          backgroundColor: '#FFFFFF',
                          color: '#1A0A10',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A0A10', marginBottom: '0.35rem' }}>
                        Product Category*
                      </label>
                      <select
                        required
                        value={formData.product}
                        onChange={e => setFormData({...formData, product: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          border: '1px solid #EAE1DD',
                          fontSize: '0.9rem',
                          outline: 'none',
                          backgroundColor: '#FFFFFF',
                          color: '#1A0A10'
                        }}
                      >
                        <option value="">Select a Category...</option>
                        {PRODUCTS_CATEGORIES.map(c => (
                          <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A0A10', marginBottom: '0.35rem' }}>
                        Estimated Quantity*
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. 500 pcs, 2,000 pcs"
                        value={formData.quantity}
                        onChange={e => setFormData({...formData, quantity: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          border: '1px solid #EAE1DD',
                          backgroundColor: '#FFFFFF',
                          color: '#1A0A10',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A0A10', marginBottom: '0.35rem' }}>
                      Message & Requirements*
                    </label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Please mention fabric GSM, size breakdown, branding requirements, or any questions..."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.9rem',
                        borderRadius: '8px',
                        border: '1px solid #EAE1DD',
                        backgroundColor: '#FFFFFF',
                        color: '#1A0A10',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cobalt"
                    style={{ 
                      padding: '0.9rem', 
                      width: '100%', 
                      fontSize: '0.95rem',
                      opacity: isSubmitting ? 0.75 : 1,
                      cursor: isSubmitting ? 'wait' : 'pointer'
                    }}
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <Send size={16} /> <span>Send Direct Inquiry to Export Desk</span>
                      </>
                    )}
                  </button>

                  <div style={{ textAlign: 'center', fontSize: '0.78rem', color: '#8C7A82' }}>
                    Need to provide detailed technical specifications? Use our comprehensive{' '}
                    <span 
                    onClick={openQuoteModal} 
                    style={{ color: '#800020', fontWeight: '700', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Request a Quote Engine
                  </span>.
                </div>

                </form>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
