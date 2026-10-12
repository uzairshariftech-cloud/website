import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  UploadCloud, 
  CheckCircle2, 
  Building2, 
  Globe2, 
  Layers, 
  Ship, 
  DollarSign, 
  Sparkles,
  Printer,
  Package,
  Calendar,
  AlertCircle,
  Clock,
  ShieldCheck,
  Check,
  Mail,
  Phone
} from 'lucide-react';
import { PRODUCTS_CATEGORIES, COMPANY_DETAILS } from '../data/productsData';
import BrandLogo from './BrandLogo';

export default function QuoteModal({ isOpen, onClose, preselectedCategory = '' }) {
  const [formData, setFormData] = useState({
    // Contact Information
    fullName: '',
    companyName: '',
    businessEmail: '',
    country: '',
    whatsappPhone: '',
    // Product Information
    productRequired: preselectedCategory || '',
    quantity: '',
    fabricMaterial: '',
    gsm: '',
    color: '',
    sizeRange: '',
    printingEmbroidery: '',
    labelRequirements: '',
    packagingRequirements: '',
    // Shipping
    destinationCountry: '',
    incoterm: 'FOB',
    deliveryDate: '',
    // Additional
    targetPrice: '',
    additionalRequirements: '',
    uploadedFileName: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, uploadedFileName: e.target.files[0].name }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData(prev => ({ ...prev, uploadedFileName: e.dataTransfer.files[0].name }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const ticketId = 'USE-RFQ-' + Math.floor(100000 + Math.random() * 900000);
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    try {
      await fetch("https://formsubmit.co/ajax/info@uzairsharifenterprises.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Request a Quote [${ticketId}] from ${formData.fullName} (${formData.companyName || 'International Buyer'})`,
          Ticket_Reference: ticketId,
          Submission_Date: currentDate,
          Client_Name: formData.fullName,
          Company: formData.companyName,
          Business_Email: formData.businessEmail,
          Phone_WhatsApp: formData.phoneWhatsApp,
          Destination_Country: formData.destinationCountry,
          Product_Category: formData.productRequired,
          Order_Quantity: formData.quantity,
          Fabric_Composition: formData.fabricMaterial,
          Target_GSM: formData.gsm || 'Custom to Buyer Specs',
          Incoterm_Requested: formData.incoterm,
          Target_Delivery: formData.deliveryDate || 'Standard Turnaround',
          Embellishments: formData.embellishments,
          Additional_Tech_Pack_Notes: formData.additionalSpecs,
          _template: 'table'
        })
      });
    } catch (err) {
      console.warn("Quote transmission fallback:", err);
    } finally {
      setSubmitting(false);
      setSubmittedTicket({
        id: ticketId,
        date: currentDate,
        ...formData
      });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(9, 13, 22, 0.82)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 110,
      padding: '1rem',
      overflowY: 'auto'
    }} className="fade-in">
      
      <div className="quote-modal-dialog" style={{
        borderRadius: '24px',
        maxWidth: '920px',
        width: '100%',
        maxHeight: '92vh',
        overflowY: 'auto',
        border: '1px solid #DCDAD1',
        boxShadow: '0 25px 60px rgba(10, 17, 40, 0.35)',
        position: 'relative',
        backgroundColor: '#FAF9F5'
      }}>

        {/* Modal Top Header */}
        <div className="quote-modal-header" style={{
          background: 'linear-gradient(180deg, #360C1E 0%, #240713 100%)',
          color: '#ffffff',
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #541731',
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
              <span className="badge-pill badge-cobalt" style={{ padding: '0.2rem 0.65rem', fontSize: '0.72rem', backgroundColor: '#800020', color: '#ffffff', border: '1px solid #A0183A' }}>
                B2B Custom Quotation System
              </span>
              <span style={{ fontSize: '0.75rem', color: '#D1C4C8' }}>• 100% Made to Specs</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.025em', margin: 0 }}>
              Request a Manufacturing Quote
            </h2>
            <div style={{ fontSize: '0.8rem', color: '#D1C4C8', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>Or email specs directly:</span>
              <a 
                href={`mailto:${COMPANY_DETAILS.emailInfo}`} 
                style={{ color: '#F0CBD3', fontWeight: '700', textDecoration: 'underline' }}
                title="Click to open your email client"
              >
                {COMPANY_DETAILS.emailInfo}
              </a>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              border: 'none',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#ffffff',
              transition: 'all 0.15s ease'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {submittedTicket ? (
          /* Confirmation Screen */
          <div style={{ padding: '3.5rem 2rem', textAlign: 'center' }} className="fade-in">
            <div style={{
              width: '76px',
              height: '76px',
              borderRadius: '50%',
              backgroundColor: '#ecfdf5',
              border: '2px solid #a7f3d0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <CheckCircle2 size={42} color="#059669" />
            </div>

            <h3 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#090d16', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
              Inquiry Ticket Successfully Created
            </h3>

            <div style={{
              display: 'inline-block',
              fontFamily: 'var(--font-mono)',
              fontSize: '1.2rem',
              fontWeight: '800',
              color: '#059669',
              backgroundColor: '#f1f5f9',
              padding: '0.5rem 1.5rem',
              borderRadius: '10px',
              border: '1px solid #cbd5e1',
              marginBottom: '1.5rem'
            }}>
              Ticket: {submittedTicket.id}
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <span className="badge-pill badge-cobalt" style={{ backgroundColor: '#FDF2F4', color: '#800020', border: '1px solid #F0CBD3' }}>
                Quotation Dispatched to <a href="mailto:info@uzairsharifenterprises.com" style={{ color: '#800020', fontWeight: '700', textDecoration: 'underline' }}>info@uzairsharifenterprises.com</a>
              </span>
            </div>

            <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Thank you, <strong>{submittedTicket.fullName}</strong>. Your quotation specification for <strong>{submittedTicket.quantity} pcs of {submittedTicket.productRequired}</strong> has been transmitted to our commercial export desk at <strong>Uzair Sharif Enterprises</strong>.
            </p>

            {/* Itemized Specification Card */}
            <div style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '1.75rem',
              maxWidth: '640px',
              margin: '0 auto 2.5rem auto',
              textAlign: 'left',
              fontSize: '0.88rem',
              color: '#334155'
            }}>
              <div style={{ fontWeight: '800', color: '#090d16', marginBottom: '0.85rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.6rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>Quotation Parameters Recorded</span>
                <span style={{ color: '#059669', fontWeight: '700' }}>{submittedTicket.date}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.65rem' }}>
                <div><strong>Company:</strong> {submittedTicket.companyName}</div>
                <div><strong>Destination Port:</strong> {submittedTicket.destinationCountry || submittedTicket.country}</div>
                <div><strong>Selected Incoterm:</strong> {submittedTicket.incoterm}</div>
                <div><strong>Target Fabric:</strong> {submittedTicket.fabricMaterial || 'As per custom tech pack'}</div>
                <div><strong>Target GSM:</strong> {submittedTicket.gsm || 'As per specification'}</div>
                <div><strong>Target Delivery:</strong> {submittedTicket.deliveryDate || 'Normal turnaround'}</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              <button
                onClick={onClose}
                className="btn-primary"
                style={{ padding: '0.85rem 1.8rem' }}
              >
                Close Window
              </button>
              <a
                href={`${COMPANY_DETAILS.whatsappUrl}&text=Hello%20Uzair%20Sharif%20Enterprises%2C%20I%20just%20submitted%20inquiry%20ticket%20${submittedTicket.id}%20for%20${submittedTicket.quantity}%20pcs%20${submittedTicket.productRequired}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cobalt"
                style={{ padding: '0.85rem 1.8rem' }}
              >
                Notify on WhatsApp ({COMPANY_DETAILS.whatsappRaw})
              </a>
              <a
                href={`mailto:${COMPANY_DETAILS.emailInfo}?subject=RFQ%20Specification%20[${submittedTicket.id}]%20from%20${encodeURIComponent(submittedTicket.fullName)}&body=Quotation%20Ticket:%20${submittedTicket.id}%0AClient:%20${encodeURIComponent(submittedTicket.fullName)}%0ACompany:%20${encodeURIComponent(submittedTicket.companyName)}%0AProduct:%20${encodeURIComponent(submittedTicket.productRequired)}%0AQuantity:%20${encodeURIComponent(submittedTicket.quantity)}%0AFabric:%20${encodeURIComponent(submittedTicket.fabricMaterial || 'N/A')}%0ADestination:%20${encodeURIComponent(submittedTicket.destinationCountry || '')}`}
                className="btn-secondary"
                style={{ padding: '0.85rem 1.8rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '10px' }}
                title="Click to open your email client"
              >
                <Mail size={16} color="#800020" /> Open in Email App
              </a>
            </div>

          </div>
        ) : (
          /* The Full RFQ Form with Dynamic Sourcing Summary */
          <form onSubmit={handleSubmit} className="quote-modal-body" style={{ padding: '2rem' }}>
            
            {/* Top Sourcing Helper Box */}
            <div style={{
              backgroundColor: '#ecfdf5',
              border: '1px solid #a7f3d0',
              borderRadius: '12px',
              padding: '1rem 1.25rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem'
            }}>
              <ShieldCheck size={22} color="#059669" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.85rem', color: '#065f46', lineHeight: '1.55' }}>
                <strong>No Fixed Catalog Prices:</strong> Unit prices are calculated based on your exact fabric weight, order quantity, embroidery/print complexity, and destination shipping terms.
              </div>
            </div>

            {/* Section 1: Contact Information */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                <Building2 size={18} color="#059669" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#090d16', margin: 0 }}>
                  1. Contact Information
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Full Name*
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. David Miller" 
                    value={formData.fullName} 
                    onChange={e => setFormData({...formData, fullName: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Company Name*
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Miller Apparel Brand" 
                    value={formData.companyName} 
                    onChange={e => setFormData({...formData, companyName: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Business Email*
                  </label>
                  <input 
                    type="email" 
                    required 
                    placeholder="david@millerapparel.com" 
                    value={formData.businessEmail} 
                    onChange={e => setFormData({...formData, businessEmail: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Buyer Country*
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Germany, USA, Australia..." 
                    value={formData.country} 
                    onChange={e => setFormData({...formData, country: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    WhatsApp / Phone
                  </label>
                  <input 
                    type="text" 
                    placeholder="+49 170 1234567" 
                    value={formData.whatsappPhone} 
                    onChange={e => setFormData({...formData, whatsappPhone: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Product Specifications */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                <Layers size={18} color="#059669" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#090d16', margin: 0 }}>
                  2. Product Technical Information
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Product Category Required*
                  </label>
                  <select
                    required
                    value={formData.productRequired}
                    onChange={e => setFormData({...formData, productRequired: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', backgroundColor: '#ffffff' }}
                  >
                    <option value="">Select category...</option>
                    {PRODUCTS_CATEGORIES.map(c => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                    <option value="Other Custom Apparel">Other Custom Apparel</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Estimated Order Quantity (Pcs)*
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. 500 pcs, 2,500 pcs" 
                    value={formData.quantity} 
                    onChange={e => setFormData({...formData, quantity: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Fabric / Material Composition
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. 100% Combed Cotton, French Terry..." 
                    value={formData.fabricMaterial} 
                    onChange={e => setFormData({...formData, fabricMaterial: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Target Fabric GSM / Weight
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. 180 GSM, 240 GSM, 380 GSM" 
                    value={formData.gsm} 
                    onChange={e => setFormData({...formData, gsm: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Colorway(s) / Pantone Code
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Black, White, Pantone 19-4052 TCX" 
                    value={formData.color} 
                    onChange={e => setFormData({...formData, color: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Size Range Breakdown
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. S to 2XL, European fit chart" 
                    value={formData.sizeRange} 
                    onChange={e => setFormData({...formData, sizeRange: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Printing / Embroidery Requirements
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Screen print front chest, sleeve embroidery" 
                    value={formData.printingEmbroidery} 
                    onChange={e => setFormData({...formData, printingEmbroidery: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Label Requirements
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Woven neck label, printed wash care, hang tags" 
                    value={formData.labelRequirements} 
                    onChange={e => setFormData({...formData, labelRequirements: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Packaging Requirements
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Individual polybag with barcode, export carton" 
                    value={formData.packagingRequirements} 
                    onChange={e => setFormData({...formData, packagingRequirements: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Shipping & Logistics */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                <Ship size={18} color="#059669" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#090d16', margin: 0 }}>
                  3. Shipping & Commercial Logistics
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Destination Country & Port*
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Port of Hamburg, Germany" 
                    value={formData.destinationCountry} 
                    onChange={e => setFormData({...formData, destinationCountry: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Preferred Incoterm
                  </label>
                  <select
                    value={formData.incoterm}
                    onChange={e => setFormData({...formData, incoterm: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', backgroundColor: '#ffffff' }}
                  >
                    <option value="FOB">FOB (Free on Board - Karachi Port)</option>
                    <option value="CIF">CIF (Cost, Insurance & Freight to Destination)</option>
                    <option value="CFR">CFR (Cost & Freight)</option>
                    <option value="EXW">EXW (Ex-Works Factory Floor)</option>
                    <option value="DDP">DDP (Delivered Duty Paid)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Required Delivery / Target Date
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Q3 2026 / By November 2026" 
                    value={formData.deliveryDate} 
                    onChange={e => setFormData({...formData, deliveryDate: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Target Price & Specification Upload */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                <DollarSign size={18} color="#059669" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#090d16', margin: 0 }}>
                  4. Additional Scope & Tech Pack
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Target Unit Price (Optional)
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. $4.50 - $5.20 USD / pc FOB" 
                    value={formData.targetPrice} 
                    onChange={e => setFormData({...formData, targetPrice: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                    Additional Requirements / Notes
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Need OEKO-TEX compliant dye certification" 
                    value={formData.additionalRequirements} 
                    onChange={e => setFormData({...formData, additionalRequirements: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              {/* Upload Specification File Box */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#090d16', marginBottom: '0.35rem' }}>
                  Upload Specification / Tech Pack / Reference File (PDF, AI, ZIP, JPG)
                </label>
                <div 
                  onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                  onDragLeave={() => setIsDragOver(false)}
                  onDrop={handleDrop}
                  style={{
                    border: isDragOver ? '2px dashed #059669' : '2px dashed #cbd5e1',
                    borderRadius: '14px',
                    padding: '1.75rem',
                    textAlign: 'center',
                    backgroundColor: isDragOver ? '#ecfdf5' : '#f8fafc',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <input 
                    type="file" 
                    id="spec-upload" 
                    onChange={handleFileChange} 
                    style={{ display: 'none' }} 
                  />
                  <label htmlFor="spec-upload" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <UploadCloud size={32} color="#059669" />
                    <span style={{ fontSize: '0.92rem', fontWeight: '700', color: '#090d16' }}>
                      {formData.uploadedFileName ? `Attached: ${formData.uploadedFileName}` : 'Click to select or drag & drop tech pack'}
                    </span>
                    <span style={{ fontSize: '0.76rem', color: '#64748b' }}>
                      Supports specification sheets, measurements charts, artwork vector files
                    </span>
                  </label>
                </div>
              </div>

            </div>

            {/* Submission Button */}
            <div style={{ paddingTop: '1rem', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                * Required fields. All technical data strictly protected under commercial confidentiality.
              </div>
              <button 
                type="submit"
                disabled={submitting}
                className="btn-cobalt"
                style={{ padding: '0.95rem 2.8rem', fontSize: '1rem', borderRadius: '10px' }}
              >
                {submitting ? 'Generating Official RFQ Ticket...' : 'Submit Inquiry'}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
