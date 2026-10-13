export const PRODUCTS_CATEGORIES = [
  {
    id: 't-shirts',
    name: 'T-Shirts',
    subtitle: 'Custom Single Jersey, Interlock & Heavyweight Knits',
    description: 'Developed to exact buyer specifications. From lightweight breathable summer tees to luxury heavyweight streetwear silhouettes engineered to your target fabric density.',
    badge: 'Custom Production Only',
    images: [
      {
        url: '/images/products/t-shirts-1.jpg',
        fallbackUrl: '/images/products/t-shirts-1.jpg',
        caption: '100% Combed Cotton Crewneck Flat-Lay (Representative Sample)'
      },
      {
        url: '/images/products/t-shirts-2.jpg',
        fallbackUrl: '/images/products/t-shirts-2.jpg',
        caption: 'Heavyweight Cotton Crewneck Flat-Lay (Representative Sample)'
      },
      {
        url: '/images/products/t-shirts-3.jpg',
        fallbackUrl: '/images/products/t-shirts-1.jpg',
        caption: 'Custom Production Streetwear Tee (Representative Sample)'
      }
    ],
    fabricOptions: ['100% Combed Cotton', 'Carded Cotton', '60/40 Cotton-Poly Blend', 'Organic BCI Cotton', 'Bamboo Cotton', 'Modal Blends'],
    gsmRange: 'Custom to Buyer Specs (All Weights Available)',
    fitOptions: ['Regular Fit', 'Slim Fit', 'Oversized / Boxy Fit', 'Drop Shoulder', 'Tailored European Fit'],
    customizations: ['Screen Printing (Water-based, Plastisol, Discharge)', 'High-Density Print', 'Direct-to-Garment (DTG)', 'Computerized Embroidery', 'Custom Neck Ribbing', 'Woven / Satin Neck Labels', 'Custom Hang Tags & Polybags']
  },
  {
    id: 'polo-shirts',
    name: 'Polo Shirts',
    subtitle: 'Pique Knit, Mercerized & Performance Cotton Polos',
    description: 'Refined corporate, casual and athletic polos engineered with dimensional stability, non-curling collars, and customized button plackets.',
    badge: 'Custom Production Only',
    images: [
      {
        url: '/images/products/polo-shirts-1.jpg',
        fallbackUrl: '/images/products/polo-shirts-2.jpg',
        caption: 'Classic Honeycomb Pique Polo (Representative Sample)'
      },
      {
        url: '/images/products/polo-shirts-2.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1000&auto=format&fit=crop',
        caption: 'Fine Gauge Mercerized Luxury Cotton Polo (Representative Sample)'
      },
      {
        url: '/images/products/polo-shirts-3.jpg',
        fallbackUrl: '/images/products/polo-shirts-2.jpg',
        caption: 'Engineered Rib Collar & Custom Engraved Buttons (Representative Sample)'
      }
    ],
    fabricOptions: ['100% Combed Cotton Pique', 'Cotton/Polyester (65/35, 50/50)', 'Mercerized Cotton', 'Performance Dry-Fit Pique', 'Double Pique'],
    gsmRange: 'Custom to Buyer Specs (All Weights Available)',
    fitOptions: ['Classic Fit', 'Modern Slim Fit', 'Athletic Fit', 'Long Sleeve Placket'],
    customizations: ['Chest & Sleeve Embroidery', 'Custom Engraved Horn / Pearl Buttons', 'Jacquard Rib Collars & Cuffs', 'Side Vent Herringbone Taping', 'Woven Neck Labels']
  },
  {
    id: 'hoodies-sweatshirts',
    name: 'Hoodies & Sweatshirts',
    subtitle: 'Brushed Fleece, French Terry & Loopback Cotton',
    description: 'Heavyweight fleece loungewear and outerwear developed to client weight, hand-feel, and construction standards.',
    badge: 'Custom Production Only',
    images: [
      {
        url: '/images/products/hoodies-sweatshirts-1.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop',
        caption: 'Heavyweight Brushed Fleece Pullover Hoodie (Representative Sample)'
      },
      {
        url: '/images/products/hoodies-sweatshirts-2.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop',
        caption: 'Minimalist Clean Crewneck Sweatshirt — French Terry (Representative Sample)'
      },
      {
        url: '/images/products/hoodies-sweatshirts-3.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop',
        caption: 'Full-Zip Hoodie with Custom Metal Hardware & Eyelets (Representative Sample)'
      }
    ],
    fabricOptions: ['100% Cotton Fleece', 'Cotton/Polyester Fleece (80/20, 70/30)', 'French Terry (Loopback)', 'Carbon Peach Finish Fleece', 'Organic Brushed Cotton'],
    gsmRange: 'Custom to Buyer Specs (All Weights Available)',
    fitOptions: ['Relaxed Fit', 'Boxy Streetwear Fit', 'Drop Shoulder', 'Standard Athletic Fit'],
    customizations: ['Double-layer Hood Construction', 'Custom Color Drawcords & Metal Aglets', 'Chenille & Applique Embroidery', 'Puff Print / Screen Print', 'Heavy 2x2 Spandex Ribbed Cuffs & Hem']
  },
  {
    id: 'jackets',
    name: 'Jackets',
    subtitle: 'Bomber, Windbreakers & Light Outerwear',
    description: 'Precision-tailored jackets with weather-resistant shells, custom linings, durable YKK hardware, and branding options.',
    badge: 'Custom Production Only',
    images: [
      {
        url: '/images/products/jackets-1.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1000&auto=format&fit=crop',
        caption: 'Classic Bomber Jacket with Custom Contrast Lining (Representative Sample)'
      },
      {
        url: '/images/products/jackets-2.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop',
        caption: 'Lightweight Technical Windbreaker Shell Jacket (Representative Sample)'
      },
      {
        url: '/images/products/jackets-3.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop',
        caption: 'Structured Utility Coach Jacket with Branded Snaps (Representative Sample)'
      }
    ],
    fabricOptions: ['Nylon Taslan / Oxford', '100% Polyester Microfiber', 'Cotton Twill Canvas', 'Water-Repellent DWR Coated Polyester', 'Quilted Taffeta Lining'],
    gsmRange: 'Custom to Buyer Specs (All Weights Available)',
    fitOptions: ['Bomber Silhouette', 'Coach / Utility Cut', 'Athletic Windrunner', 'Harrington Cut'],
    customizations: ['Custom Printed / Dyed Inner Linings', 'Branded Metal Snap Buttons & Zippers', 'Silicon / Rubberized Patch Badging', 'Reflective Piping / Prints', 'Custom Pullers & Elastic Cords']
  },
  {
    id: 'trousers-bottoms',
    name: 'Trousers & Bottoms',
    subtitle: 'Joggers, Track Pants, Chinos & Casual Bottoms',
    description: 'Comfortable knits and woven trousers produced with reinforced pockets, tailored waistband systems, and custom washes.',
    badge: 'Custom Production Only',
    images: [
      {
        url: '/images/products/trousers-bottoms-1.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=1000&auto=format&fit=crop',
        caption: 'Tapered Heavy Fleece Joggers with Deep Welt Pockets (Representative Sample)'
      },
      {
        url: '/images/products/trousers-bottoms-2.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1000&auto=format&fit=crop',
        caption: 'Cotton Twill Chino Trousers with Clean Stitching (Representative Sample)'
      },
      {
        url: '/images/products/trousers-bottoms-3.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=1000&auto=format&fit=crop',
        caption: 'Multi-Pocket Tactical Utility Cargo Bottoms (Representative Sample)'
      }
    ],
    fabricOptions: ['Heavyweight Cotton/Poly Fleece', 'French Terry', 'Cotton Twill (Rigid & Stretch)', 'Ripstop Poly-Cotton', 'Poly-Cotton Spandex Blends'],
    gsmRange: 'Custom to Buyer Specs (All Weights Available)',
    fitOptions: ['Tapered Jogger', 'Straight Leg Casual', 'Slim Chino Fit', 'Relaxed Wide-Leg Streetwear'],
    customizations: ['Concealed Zipper Pockets', 'Custom Elastic Ribbed Waistband with Flat Drawcord', 'Reinforced Knee & Crotch Gusseting', 'Custom Woven Pocket Labels', 'Bar-Tacked Stress Points']
  },
  {
    id: 'jeans-denim',
    name: 'Jeans & Denim',
    subtitle: 'Rigid, Stretch & Washed Denim Apparel',
    description: 'Authentic denim craftsmanship developed with selected Pakistani weaving and washing partners, offering authentic vintage and modern washes.',
    badge: 'Custom Production Only',
    images: [
      {
        url: '/images/products/jeans-denim-1.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop',
        caption: '5-Pocket Indigo Denim Jeans with Vintage Hand-Sand Wash (Representative Sample)'
      },
      {
        url: '/images/products/jeans-denim-2.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop',
        caption: 'Classic Raw Indigo Denim Trucker Jacket (Representative Sample)'
      },
      {
        url: '/images/products/jeans-denim-3.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1000&auto=format&fit=crop',
        caption: 'Precision Chain-Stitch Hem & Custom Embossed Leather Patch (Representative Sample)'
      }
    ],
    fabricOptions: ['100% Cotton Rigid Denim', 'Cotton-Spandex Stretch Denim (98/2, 97/3)', 'Slub & Cross-Hatch Denim', 'Raw Indigo Selvedge', 'Recycled Cotton Denim Blends'],
    gsmRange: 'Custom to Buyer Specs (All Denim Weights Available)',
    fitOptions: ['Slim Straight', 'Relaxed Dad Fit', 'Skinny Fit', 'Tapered Fit', 'Classic Bootcut'],
    customizations: ['Enzyme Wash, Stone Wash, Bleach Wash, Acid Wash', 'Whiskering, Hand Scraping & Destroy Effects', 'Custom Embossed Genuine/PU Leather Back Patches', 'Custom Engraved Shank Buttons & Rivets', 'Signature Back Pocket Arcuate Embroidery']
  },
  {
    id: 'sportswear',
    name: 'Sportswear & Activewear',
    subtitle: 'Performance Dry-Fit, Tracksuits & Training Knits',
    description: 'Technical athletic apparel engineered for breathability, moisture management, 4-way stretch, and endurance during sports training.',
    badge: 'Custom Production Only',
    images: [
      {
        url: '/images/products/sportswear-1.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
        caption: 'Dry-Fit Breathable Training Athletic T-Shirt (Representative Sample)'
      },
      {
        url: '/images/products/sportswear-2.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1000&auto=format&fit=crop',
        caption: 'Poly-Spandex Athletic Tracksuit 2-Piece Set (Representative Sample)'
      },
      {
        url: '/images/products/sportswear-3.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
        caption: 'Ergonomic Flatlock Stitching & Reflective Branding (Representative Sample)'
      }
    ],
    fabricOptions: ['100% Polyester Micro-Mesh / Interlock', 'Poly-Spandex 4-Way Stretch (88/12, 85/15)', 'Nylon-Spandex Compression', 'Dry-Tech Moisture Wicking Knit', 'Anti-Bacterial / Odor-Resistant Finish'],
    gsmRange: 'Custom to Buyer Specs (All Weights Available)',
    fitOptions: ['Athletic Compression Fit', 'Ergonomic Raglan Cut', 'Semi-Fitted Training Cut', 'Regular Track Fit'],
    customizations: ['Flatlock Seam Construction (Zero Friction)', 'Heat Transfer Reflective Brand Logos', 'Sublimation Printing / Panel Cut & Sew', 'Custom Jacquard Waistbands', 'Laser-Cut Ventilation Eyelets']
  },
  {
    id: 'workwear',
    name: 'Workwear & Uniforms',
    subtitle: 'Industrial Twill, Utility Shirts & Safety Apparel',
    description: 'Rugged utility clothing built for durability, industrial washing tolerance, color fastness, and occupational comfort.',
    badge: 'Custom Production Only',
    images: [
      {
        url: '/images/products/workwear-1.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
        caption: 'Reinforced Industrial Service Work Shirt (Representative Sample)'
      },
      {
        url: '/images/products/workwear-2.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?q=80&w=1000&auto=format&fit=crop',
        caption: 'Multi-Tool Pocket Heavy Twill Cargo Work Trousers (Representative Sample)'
      },
      {
        url: '/images/products/workwear-3.jpg',
        fallbackUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
        caption: 'High-Visibility / Utility Overalls with Reflective Tape (Representative Sample)'
      }
    ],
    fabricOptions: ['Poly-Cotton Twill (65/35, 60/40)', '100% Cotton Heavy Twill (Drill)', 'Ripstop Work Fabric', 'Flame-Retardant Finish (Buyer Spec)', 'Water & Oil Repellent Treated Fabric'],
    gsmRange: 'Custom to Buyer Specs (All Weights Available)',
    fitOptions: ['Action-Back Industrial Work Cut', 'Reinforced Cargo Cut', 'Standard Field Uniform', 'Coverall / Overall Fit'],
    customizations: ['Triple-Needle Stitching on Main Seams', 'Cordura Reinforced Knee Pad Pockets', 'Hi-Vis EN 20471 Compliant Reflective Tapes', 'Durable Melamine / Metal Snap Buttons', 'Heavy Duty Pen Pockets & Tool Loops']
  },
  {
    id: 'kidswear',
    name: 'Kidswear & Children\'s Apparel',
    subtitle: 'Organic Cotton, Soft Knits & Playwear Sets',
    description: 'Gentle, skin-friendly garments manufactured with extra attention to softness, non-toxic dyes, safe snaps, and child safety compliance.',
    badge: 'Custom Production Only',
    images: [
      {
        url: '/images/products/kidswear-1.jpg',
        fallbackUrl: '/images/products/kidswear-1.jpg',
        caption: 'Soft Organic Combed Cotton Kids Playwear Set (Representative Sample)'
      },
      {
        url: '/images/products/kidswear-2.jpg',
        fallbackUrl: '/images/products/kidswear-2.jpg',
        caption: 'Cozy Organic Cotton Kids Hoodie & Joggers Set (Representative Sample)'
      },
      {
        url: '/images/products/kidswear-3.jpg',
        fallbackUrl: '/images/products/kidswear-1.jpg',
        caption: 'Coordinated Children’s Organic Knitwear (Representative Sample)'
      }
    ],
    fabricOptions: ['100% Organic Combed Cotton', 'OEKO-TEX Compliant Knits (Buyer coordinated)', 'Bamboo-Cotton Extra Soft', 'Cotton Interlock & Baby Rib', 'Breathable Summer Knits'],
    gsmRange: 'Custom to Buyer Specs (All Weights Available)',
    fitOptions: ['Toddler (2T - 5T)', 'Junior Youth (6 - 14 Years)', 'Comfort Playwear Cut', 'Snug Fit Pajama Styles'],
    customizations: ['Nickel-Free Brass Popper Snaps', 'Water-Based Eco Soft Touch Inks', 'Tagless Heat Transfer Neck Labels (No Scratch)', 'Enclosed Flat Seam Construction', 'Child Safety Drawstring Standards']
  }
];

export const COMPANY_DETAILS = {
  name: 'Uzair Sharif Enterprises (SMC-Private) Limited',
  tagline: 'Pakistan-Based Garment Exporter & Supply Partner',
  specialization: 'Custom Apparel • Private Label • Global Supply Network',
  country: 'Pakistan',
  address: 'House No. 540, Street No. 8, Shah Faiz Park, Burewala, Pakistan',
  officeAddress: 'House No. 540, Street No. 8, Shah Faiz Park, Burewala',
  emailSales: 'info@uzairsharifenterprises.com',
  emailInfo: 'info@uzairsharifenterprises.com',
  email: 'info@uzairsharifenterprises.com',
  domain: 'uzairsharifenterprises.com',
  gmailUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=info@uzairsharifenterprises.com',
  whatsappRaw: '03281672473',
  whatsappIntl: '+923281672473',
  whatsappUrl: 'https://wa.me/923281672473?text=Hello%20Uzair%20Sharif%20Enterprises%2C%20I%20am%20an%20international%20buyer%20interested%20in%20custom%20garment%20production%20and%20quotation.'
};

export const isMobileDevice = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const getEmailHref = (email = COMPANY_DETAILS.emailInfo, subject = '', body = '') => {
  if (!isMobileDevice()) {
    let url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    if (subject) url += `&su=${encodeURIComponent(subject)}`;
    if (body) url += `&body=${encodeURIComponent(body)}`;
    return url;
  }
  let mailto = `mailto:${email}`;
  const params = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  if (params.length > 0) {
    mailto += `?${params.join('&')}`;
  }
  return mailto;
};
