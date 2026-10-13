import React from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Globe2, 
  ArrowRight,
  FileText
} from 'lucide-react';
import { COMPANY_DETAILS, PRODUCTS_CATEGORIES, getEmailHref, isMobileDevice } from '../data/productsData';
import BrandLogo from './BrandLogo';

export default function Footer({ setActivePage, openQuoteModal }) {
  const isMobile = isMobileDevice();
  const emailHref = getEmailHref(COMPANY_DETAILS.emailInfo);
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products Catalogue' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'process', label: 'Our Process' },
    { id: 'compliance', label: 'Compliance & Standards' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNav = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #2D0A18 0%, #1A050E 100%)',
      color: '#ffffff',
      borderTop: '1px solid #4F162C',
      paddingTop: '5rem',
      paddingBottom: '2.5rem'
    }}>
      <div className="container-custom">
        
        {/* Main Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* Col 1: Corporate Identity */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <BrandLogo variant="light" size="md" />
            </div>

            <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#E8A8B8', marginBottom: '0.5rem' }}>
              Pakistan-Based Garment Exporter
            </div>
            <div style={{ fontSize: '0.82rem', color: '#B8A8AD', marginBottom: '1.25rem' }}>
              Custom Apparel • Private Label • Global Supply Network
            </div>
            
            <p style={{ fontSize: '0.82rem', color: '#8C7D82', lineHeight: '1.6' }}>
              We develop and supply custom garments according to buyer specifications through selected manufacturing partners in Pakistan.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#ffffff', marginBottom: '1.25rem' }}>
              Quick Navigation
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#D1C4C8',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      padding: 0,
                      textAlign: 'left',
                      transition: 'color 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#F0CBD3'}
                    onMouseLeave={(e) => e.target.style.color = '#D1C4C8'}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Apparel Categories */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#ffffff', marginBottom: '1.25rem' }}>
              Manufacturing Categories
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {PRODUCTS_CATEGORIES.slice(0, 7).map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => handleNav('products')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#D1C4C8',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      padding: 0,
                      textAlign: 'left',
                      transition: 'color 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#F0CBD3'}
                    onMouseLeave={(e) => e.target.style.color = '#D1C4C8'}
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Contacts */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#ffffff', marginBottom: '1.25rem' }}>
              Commercial Desk
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.84rem' }}>
              <div>
                <a 
                  href={emailHref}
                  target={isMobile ? undefined : "_blank"}
                  rel={isMobile ? undefined : "noopener noreferrer"}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.6rem', 
                    color: '#ffffff', 
                    textDecoration: 'none', 
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    padding: '0.2rem 0'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#F0CBD3';
                    e.currentTarget.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.textDecoration = 'none';
                  }}
                  title={isMobile ? "Email us" : "Open in Gmail (new tab)"}
                >
                  <Mail size={16} color="#E8A8B8" style={{ flexShrink: 0 }} />
                  <span>{COMPANY_DETAILS.emailInfo}</span>
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#D1C4C8' }}>
                <Phone size={16} color="#A0183A" style={{ flexShrink: 0 }} />
                <a href={COMPANY_DETAILS.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>
                  {COMPANY_DETAILS.whatsappRaw} ({COMPANY_DETAILS.whatsappIntl})
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#D1C4C8' }}>
                <MapPin size={16} color="#A0183A" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div style={{ lineHeight: '1.4' }}>
                  <span style={{ color: '#ffffff', fontWeight: '600', display: 'block', marginBottom: '0.15rem' }}>Office Address:</span>
                  <span style={{ color: '#D1C4C8', fontSize: '0.82rem', display: 'block' }}>
                    House No. 540, Street No. 8, Shah Faiz Park, Burewala, Pakistan
                  </span>
                </div>
              </div>

              <div style={{ paddingTop: '0.5rem' }}>
                <button
                  onClick={openQuoteModal}
                  className="btn-cobalt"
                  style={{ width: '100%', padding: '0.65rem', fontSize: '0.82rem', borderRadius: '6px', backgroundColor: '#800020', border: '1px solid #A0183A' }}
                >
                  <FileText size={14} /> Request a Quote
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Transparent Compliance Statement Box */}
        <div style={{
          backgroundColor: '#251019',
          border: '1px solid #441F2F',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          fontSize: '0.78rem',
          color: '#B8A8AD',
          lineHeight: '1.65',
          marginBottom: '2.5rem'
        }}>
          <strong style={{ color: '#FAF7F5' }}>International Buyer Notice:</strong> Uzair Sharif Enterprises (SMC-Private) Limited coordinates custom bulk garment production exclusively according to verified buyer technical specifications and pre-production approved samples. We do not sell retail items, stock lots, or pre-made inventory. All representative product photographs illustrate technical capability.
        </div>

        {/* Bottom Legal Copyright Strip */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #441F2F',
          fontSize: '0.76rem',
          color: '#8C7D82'
        }}>
          <div>
            © {new Date().getFullYear()} <strong>Uzair Sharif Enterprises (SMC-Private) Limited</strong>. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ color: '#B8A8AD' }}>Privacy Policy</span>
            <span style={{ color: '#B8A8AD' }}>Terms & Conditions</span>
            <span style={{ color: '#B8A8AD' }}>Pakistan Export Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
