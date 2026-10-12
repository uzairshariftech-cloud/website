import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIntro from './components/TrustIntro';
import ProductCategoriesPreview from './components/ProductCategoriesPreview';
import WhyChooseUs from './components/WhyChooseUs';
import GlobalExportNetwork from './components/GlobalExportNetwork';
import CustomizationShowcase from './components/CustomizationShowcase';
import HomeCTA from './components/HomeCTA';
import AboutSection from './components/AboutSection';
import ProductsCatalogue from './components/ProductsCatalogue';
import CapabilitiesSection from './components/CapabilitiesSection';
import ProcessPage from './components/ProcessPage';
import ComplianceSection from './components/ComplianceSection';
import ContactSection from './components/ContactSection';
import QuoteModal from './components/QuoteModal';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  const getInitialPage = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      const validPages = ['home', 'about', 'products', 'capabilities', 'process', 'compliance', 'contact'];
      if (validPages.includes(hash)) return hash;
    }
    return 'home';
  };

  const [activePage, setActivePage] = useState(getInitialPage);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedCategory, setPreselectedCategory] = useState('');
  const [initialCatalogueCategory, setInitialCatalogueCategory] = useState('all');

  // Listen to browser hash changes (back/forward or deep links)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      const validPages = ['home', 'about', 'products', 'capabilities', 'process', 'compliance', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      } else if (!hash) {
        setActivePage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Synchronize document.title, meta description, and URL hash on page change
  useEffect(() => {
    const seoMap = {
      home: {
        title: 'Uzair Sharif Enterprises | Custom Garment Exporter & Apparel Manufacturer Pakistan',
        desc: 'Uzair Sharif Enterprises (SMC-Private) Limited coordinates custom apparel product development, sampling, manufacturing, quality testing, and worldwide export from Pakistan.'
      },
      about: {
        title: 'About Us | Uzair Sharif Enterprises (SMC-Pvt) Ltd Pakistan',
        desc: 'Uzair Sharif Enterprises (SMC-Private) Limited is an SECP-registered Pakistani garment export and supply partner for international apparel brands.'
      },
      products: {
        title: 'Custom Garments & Apparel Catalogue | Uzair Sharif Enterprises Pakistan',
        desc: 'Explore custom t-shirts, fleece hoodies, denim jeans, knitwear, activewear, and workwear manufactured according to buyer specifications in Pakistan.'
      },
      capabilities: {
        title: 'Apparel Manufacturing & Fabric Sourcing Capabilities | Uzair Sharif Enterprises',
        desc: 'Yarn sourcing, fabric circular knitting, computerized pattern cutting, screen printing, embroidery, and export finishing in Pakistan.'
      },
      process: {
        title: 'Garment Manufacturing & Export Process | Uzair Sharif Enterprises',
        desc: 'Streamlined 6-step apparel export production process from tech pack evaluation and golden sampling to QA inspection and ocean container dispatch.'
      },
      compliance: {
        title: 'Garment Quality Testing & Export Documentation | Uzair Sharif Enterprises',
        desc: 'In-house quality testing (GSM, color fastness, shrinkage, stitching check) and SECP/Chamber export documentation.'
      },
      contact: {
        title: 'Contact Us & Request Export Quotation | Uzair Sharif Enterprises',
        desc: 'Contact Uzair Sharif Enterprises (SMC-Pvt) Ltd for bulk garment production orders, tech pack reviews, and fast golden sample couriers.'
      }
    };

    const currentSeo = seoMap[activePage] || seoMap.home;
    document.title = currentSeo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentSeo.desc);
    }

    if (activePage === 'home') {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    } else {
      window.history.replaceState(null, '', `#${activePage}`);
    }
  }, [activePage]);

  const openQuoteModal = (categoryName = '') => {
    setPreselectedCategory(typeof categoryName === 'string' ? categoryName : '');
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setPreselectedCategory('');
  };

  const handleSelectCategoryFromHome = (categoryId) => {
    setInitialCatalogueCategory(categoryId);
    setActivePage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Persistent Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        openQuoteModal={() => openQuoteModal('')} 
      />

      {/* Main Page Content */}
      <main style={{ flex: 1 }}>
        {activePage === 'home' && (
          <div className="fade-in">
            <Hero 
              openQuoteModal={() => openQuoteModal('')} 
              navigateToProducts={() => {
                setActivePage('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
            />
            <TrustIntro />
            <ProductCategoriesPreview 
              onSelectCategory={handleSelectCategoryFromHome} 
              openQuoteModal={openQuoteModal} 
            />

            <WhyChooseUs openQuoteModal={() => openQuoteModal('')} />
            <GlobalExportNetwork openQuoteModal={() => openQuoteModal('')} />
            <CustomizationShowcase openQuoteModal={() => openQuoteModal('')} />
            <HomeCTA openQuoteModal={() => openQuoteModal('')} />
          </div>
        )}

        {activePage === 'about' && (
          <div className="fade-in">
            <AboutSection openQuoteModal={() => openQuoteModal('')} />
          </div>
        )}

        {activePage === 'products' && (
          <div className="fade-in">
            <ProductsCatalogue 
              initialCategoryId={initialCatalogueCategory}
              openQuoteModal={openQuoteModal} 
            />
          </div>
        )}

        {activePage === 'capabilities' && (
          <div className="fade-in">
            <CapabilitiesSection openQuoteModal={() => openQuoteModal('')} />
          </div>
        )}

        {activePage === 'process' && (
          <div className="fade-in">
            <ProcessPage openQuoteModal={() => openQuoteModal('')} />
          </div>
        )}

        {activePage === 'compliance' && (
          <div className="fade-in">
            <ComplianceSection openQuoteModal={() => openQuoteModal('')} />
          </div>
        )}

        {activePage === 'contact' && (
          <div className="fade-in">
            <ContactSection openQuoteModal={() => openQuoteModal('')} />
          </div>
        )}
      </main>

      {/* Persistent Footer */}
      <Footer 
        setActivePage={setActivePage} 
        openQuoteModal={() => openQuoteModal('')} 
      />

      {/* Floating WhatsApp Desk (Bottom-Right) */}
      <WhatsAppButton />

      {/* Global Request a Quote Engine Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={closeQuoteModal} 
        preselectedCategory={preselectedCategory} 
      />

    </div>
  );
}
