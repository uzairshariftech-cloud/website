import React, { useState } from 'react';
import { 
  Ship, 
  Plane, 
  ShieldCheck, 
  FileCheck2, 
  Globe2, 
  CheckCircle2, 
  ArrowRight,
  MapPin,
  Anchor,
  Layers,
  Award,
  Clock,
  Sparkles,
  Building2
} from 'lucide-react';
import { useScrollReveal } from '../utils/useScrollReveal';
import BrandLogo from './BrandLogo';

export default function GlobalExportNetwork({ openQuoteModal }) {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState('maritime');

  const pillars = [
    {
      id: 'maritime',
      label: 'Ocean Freight & Seaports',
      icon: Ship,
      badge: 'FOB / CIF / CFR Trade Terms',
      title: 'Containerized Ocean Freight via Pakistan Deep-Sea Ports',
      tagline: 'Reliable bulk shipment execution through Port of Karachi and Port Qasim terminals.',
      desc: 'Our strategic coordination links Pakistan’s primary industrial garment clusters (Faisalabad, Lahore, and Karachi) with premier ocean shipping lines for seamless international container dispatches.',
      stats: [
        { label: 'Primary Seaports', value: 'Karachi & Port Qasim' },
        { label: 'Container Types', value: '20ft, 40ft & 40ft HC' },
        { label: 'Packing Standard', value: '5-Ply Export Master Cartons' },
        { label: 'Handling Terms', value: 'FOB, CIF, CFR, EXW' }
      ],
      points: [
        'Direct sailings connecting to major international seaports across North America, Europe, UK, Gulf, and Australasia.',
        'Moisture-controlled silica desiccant barrier and heavy-duty poly-strapping on all sea cargo cartons.',
        'Carton barcode labels, purchase order markings, and buyer-specific ratio packing verified before container seal.'
      ]
    },
    {
      id: 'aircargo',
      label: 'Air Cargo & Express',
      icon: Plane,
      badge: 'Rapid Global Courier',
      title: 'Time-Critical Air Freight & Express Courier Lines',
      tagline: 'Fast prototype couriers and scheduled air cargo via major international air hubs.',
      desc: 'For buyer approval samples, rush retail launches, and high-value merchandise, we coordinate priority air freight allocations via Allama Iqbal International (Lahore) and Jinnah International (Karachi).',
      stats: [
        { label: 'Courier Partners', value: 'DHL, FedEx, UPS' },
        { label: 'Air Hubs', value: 'Lahore (LHE) & Karachi (KHI)' },
        { label: 'Sample Tracking', value: '100% Online Air Waybill' },
        { label: 'Customs Gate', value: 'Fast-Track Air Clearance' }
      ],
      points: [
        'Door-to-door courier dispatch for physical golden counter samples and lab dips with daily tracking.',
        'Commercial consolidated air cargo for seasonal boutique collections and expedited purchase orders.',
        'Lightweight volumetric carton engineering to optimize buyer air freight costs.'
      ]
    },
    {
      id: 'quality',
      label: 'Quality & Testing Lab',
      icon: ShieldCheck,
      badge: 'Core Quality Testing',
      title: 'Quality & Testing Lab',
      tagline: 'Standard quality verification tests for export-grade garments.',
      desc: 'To ensure top-grade quality and buyer satisfaction, we conduct 4 essential quality tests on every production order:',
      pointsTitle: 'Core Testing Checklist',
      metricsTitle: 'Standard Quality Tests',
      stats: [
        { label: '1. Fabric Weight', value: 'GSM Test' },
        { label: '2. Color Fastness', value: 'Color Fastness Test' },
        { label: '3. Fabric Stability', value: 'Shrinkage Test' },
        { label: '4. Fit & Construction', value: 'Measurements & Stitching Check' }
      ],
      points: [
        'GSM test - Verifies fabric weight and density to meet required buyer specifications.',
        'Color fastness test - Checks washing, rubbing, and light resistance to ensure colors do not fade or bleed.',
        'Shrinkage test - Wash and dry cycle testing to ensure garments keep their original shape and size.',
        'Measurements and stitching check - Complete sizing tolerance verification and durable seam inspection.'
      ]
    },
    {
      id: 'compliance',
      label: 'Export Clearances',
      icon: FileCheck2,
      badge: 'Single Direct Legal Contract',
      title: 'Legitimate Customs & Pakistan Export Documentation',
      tagline: 'Complete banking, customs, and Chamber of Commerce export formalities handled under one entity.',
      desc: 'Uzair Sharif Enterprises (SMC-Private) Limited operates as your registered corporate Pakistani partner, removing the uncertainty of fragmented middlemen and unverified factory claims.',
      stats: [
        { label: 'Corporate Entity', value: 'SECP Registered SMC-Pvt Ltd' },
        { label: 'Origin Document', value: 'Chamber Certificate of Origin' },
        { label: 'Export Clearance', value: 'Form-E Commercial Bank Clearing' },
        { label: 'Payment Channels', value: 'Verified International Wire / L/C' }
      ],
      points: [
        'Formal Commercial Invoices and packing lists itemized per carton, colorway, and size breakdown.',
        'Bill of Lading (B/L) and Air Waybill (AWB) coordinated with certified Pakistani freight forwarders.',
        'Comprehensive buyer non-disclosure agreement (NDA) protecting your brand tech packs and designs.'
      ]
    }
  ];

  const tradeLanes = [
    {
      region: 'North America',
      countries: 'United States • Canada',
      ports: 'New York, Los Angeles, Savannah, Vancouver',
      mode: 'Ocean FCL/LCL & Air Freight',
      badge: 'Key Export Market'
    },
    {
      region: 'United Kingdom & Europe',
      countries: 'UK • Germany • Netherlands • France',
      ports: 'Felixstowe, Rotterdam, Hamburg, Le Havre',
      mode: 'Direct Ocean & Express Air',
      badge: 'High Volume Knits'
    },
    {
      region: 'Middle East & GCC',
      countries: 'UAE • Saudi Arabia • Qatar • Kuwait',
      ports: 'Jebel Ali, Dammam, Hamad Port',
      mode: 'Rapid Maritime & Air Hubs',
      badge: 'Fast Transit'
    },
    {
      region: 'Australia & New Zealand',
      countries: 'Australia • New Zealand',
      ports: 'Sydney, Melbourne, Brisbane, Auckland',
      mode: 'Standard Sea Container Lanes',
      badge: 'Expanding Route'
    }
  ];

  const currentPillar = pillars.find(p => p.id === activeTab) || pillars[0];
  const PillarIcon = currentPillar.icon;

  return (
    <section 
      ref={sectionRef}
      style={{ 
        backgroundColor: '#FAF7F5', 
        paddingTop: '5.5rem', 
        paddingBottom: '5.5rem',
        borderBottom: '1px solid #EAE1DD',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom">
        
        {/* Section Header */}
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '3.5rem' }} className={`reveal-init ${isVisible ? 'reveal-active' : ''}`}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <BrandLogo variant="dark" size="sm" showSubtitle={false} />
          </div>
          <span className="badge-pill badge-cobalt" style={{ marginBottom: '1rem', backgroundColor: '#FDF2F4', color: '#800020', border: '1px solid #F0CBD3' }}>
            Global Sourcing Infrastructure
          </span>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 3.4vw, 2.7rem)', 
            fontWeight: '800', 
            color: '#1A0A10',
            letterSpacing: '-0.025em',
            lineHeight: '1.2',
            marginBottom: '1rem'
          }}>
            Global Export & Logistics Network
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#5E5055', lineHeight: '1.7', margin: '0 auto' }}>
            From premier spinning and knitting clusters across Pakistan to deep-sea container terminals and international air routes, we manage your commercial supply chain with institutional precision.
          </p>
        </div>

        {/* Tab Navigation Pill Selector */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.6rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }} className={`reveal-init ${isVisible ? 'reveal-active delay-1' : ''}`}>
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.75rem 1.35rem',
                  borderRadius: '12px',
                  border: isActive ? '1.5px solid #800020' : '1px solid #EAE1DD',
                  backgroundColor: isActive ? '#800020' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#1A0A10',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 6px 20px rgba(128, 0, 32, 0.25)' : '0 2px 6px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={18} color={isActive ? '#FFFFFF' : '#800020'} />
                <span>{pillar.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Pillar Interactive Showcase Card */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          border: '1px solid #EAE1DD',
          boxShadow: '0 16px 45px rgba(26, 10, 16, 0.06)',
          overflow: 'hidden',
          marginBottom: '4rem'
        }} className={`reveal-init ${isVisible ? 'reveal-active delay-2' : ''}`}>
          
          {/* Card Top Title Banner */}
          <div className="gen-card-banner" style={{
            background: 'linear-gradient(135deg, #240713 0%, #360C1E 100%)',
            color: '#FFFFFF',
            padding: '2rem 2.5rem',
            borderBottom: '1px solid #4F162C',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{
                width: '52px',
                height: '52px',
                minWidth: '52px',
                minHeight: '52px',
                flexShrink: 0,
                borderRadius: '14px',
                backgroundColor: '#800020',
                border: '1px solid #A0183A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(128, 0, 32, 0.5)'
              }}>
                <PillarIcon size={26} color="#FFFFFF" />
              </div>
              <div>
                <span style={{ 
                  fontSize: '0.78rem', 
                  fontWeight: '700', 
                  color: '#D4AF37', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.08em'
                }}>
                  {currentPillar.badge}
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#FFFFFF', marginTop: '0.2rem' }}>
                  {currentPillar.title}
                </h3>
              </div>
            </div>

            <div style={{ fontSize: '0.86rem', color: '#FAF7F5', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.45rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)' }}>
              Corporate Export Standard
            </div>
          </div>

          {/* Card Content Grid */}
          <div className="gen-card-body" style={{
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2.5rem'
          }}>
            
            {/* Left: Narrative & Key Checkpoints */}
            <div>
              <p style={{ fontSize: '1.05rem', color: '#1A0A10', fontWeight: '600', lineHeight: '1.6', marginBottom: '0.85rem' }}>
                {currentPillar.tagline}
              </p>
              <p style={{ fontSize: '0.94rem', color: '#5E5055', lineHeight: '1.75', marginBottom: '2rem' }}>
                {currentPillar.desc}
              </p>

              <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#800020', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
                {currentPillar.pointsTitle || 'Operational Execution Standards'}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {currentPillar.points.map((pt, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="#800020" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.9rem', color: '#1A0A10', lineHeight: '1.55' }}>
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technical Parameter Matrix */}
            <div style={{
              backgroundColor: '#FAF7F5',
              borderRadius: '16px',
              border: '1px solid #EAE1DD',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ 
                  fontSize: '0.78rem', 
                  fontWeight: '800', 
                  color: '#7A686F', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.06em', 
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Layers size={15} color="#800020" />
                  <span>{currentPillar.metricsTitle || 'Technical Coordination Metrics'}</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}>
                  {currentPillar.stats.map((st, i) => (
                    <div key={i} style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '10px',
                      padding: '1rem 1.25rem',
                      border: '1px solid #EAE1DD',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{ fontSize: '0.84rem', color: '#5E5055', fontWeight: '600' }}>
                        {st.label}
                      </span>
                      <span style={{ fontSize: '0.92rem', color: '#800020', fontWeight: '800' }}>
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid #EAE1DD', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: '#7A686F' }}>
                  Have custom shipping constraints?
                </span>
                <button
                  onClick={openQuoteModal}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#800020',
                    fontWeight: '800',
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <span>Inquire Now</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Global Trade Routes & Export Footprint */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge-pill badge-slate" style={{ marginBottom: '0.75rem', backgroundColor: '#FFFFFF', border: '1px solid #EAE1DD', color: '#800020' }}>
              International Coverage
            </span>
            <h3 style={{ fontSize: '1.65rem', fontWeight: '800', color: '#1A0A10' }}>
              Global Destination Gateways
            </h3>
            <p style={{ fontSize: '0.94rem', color: '#5E5055' }}>
              Regular sea and air cargo dispatches routed to premier international freight hubs.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}>
            {tradeLanes.map((lane, idx) => (
              <div 
                key={idx}
                className="subtle-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: '16px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EAE1DD',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ 
                      fontSize: '0.72rem', 
                      fontWeight: '800', 
                      backgroundColor: '#FDF2F4', 
                      color: '#800020', 
                      padding: '0.2rem 0.6rem', 
                      borderRadius: '6px',
                      border: '1px solid #F0CBD3'
                    }}>
                      {lane.badge}
                    </span>
                    <Globe2 size={16} color="#800020" />
                  </div>

                  <h4 style={{ fontSize: '1.18rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.35rem' }}>
                    {lane.region}
                  </h4>
                  <div style={{ fontSize: '0.84rem', fontWeight: '600', color: '#800020', marginBottom: '0.85rem' }}>
                    {lane.countries}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#5E5055', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    <strong>Key Entry Ports:</strong> {lane.ports}
                  </p>
                </div>

                <div style={{ 
                  backgroundColor: '#FAF7F5', 
                  padding: '0.55rem 0.85rem', 
                  borderRadius: '8px', 
                  fontSize: '0.78rem', 
                  fontWeight: '700', 
                  color: '#1A0A10',
                  border: '1px solid #EAE1DD',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}>
                  <Anchor size={14} color="#800020" />
                  <span>{lane.mode}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Section Bottom Call to Action */}
          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={openQuoteModal}
              className="btn-cobalt"
              style={{ 
                padding: '0.95rem 2.4rem', 
                fontSize: '1rem', 
                borderRadius: '12px',
                backgroundColor: '#800020',
                border: '1px solid #A0183A',
                boxShadow: '0 8px 24px rgba(128, 0, 32, 0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}
            >
              <span>Request Custom Export Quotation</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
