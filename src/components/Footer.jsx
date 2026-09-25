import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Phone, 
  Mail, 
  MapPin, 
  Heart
} from 'lucide-react';
import { Youtube, Linkedin, Instagram, Twitter, Facebook } from '../assets/icons/SocialIcons';
import logoImg from '../assets/images/logo.webp';

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-zinc-300 pt-16 pb-8 border-t border-zinc-800">
      
      {/* Pre-Footer Call to Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFDF01]/10 text-[#FFDF01] text-xs font-semibold uppercase tracking-wider mb-3">
              Let's Collaborate
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Let's make something great together.
            </h3>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-xl">
              Walk the digital talk with DigiStreet Media. Tailored strategies, relentless creativity, and proven ROI for brands that want to win.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFDF01] text-black font-semibold text-sm hover:bg-[#ebd000] transition-colors shadow-md"
            >
              <span>Discuss Your Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a 
              href="tel:+918108810916" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-sm transition-colors border border-zinc-700"
            >
              <Phone className="w-4 h-4 text-[#FFDF01]" />
              <span>+91 81088 10916</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-zinc-800 text-sm">
          
          {/* Column 1: Search & SEO */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4 text-[#FFDF01]">
              Search & SEO
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li><Link to="/services/seo-services" className="hover:text-white transition-colors">SEO Services</Link></li>
              <li><Link to="/aeo-services-company-in-india" className="hover:text-white transition-colors">AEO Services</Link></li>
              <li><Link to="/generative-engine-optimization-india" className="hover:text-white transition-colors">GEO Services</Link></li>
              <li><Link to="/performance-marketing-agency" className="hover:text-white transition-colors">Performance Marketing</Link></li>
              <li><Link to="/services/b2b-seo-company-in-india" className="hover:text-white transition-colors">B2B SEO</Link></li>
              <li><Link to="/services/local-seo-company-in-india" className="hover:text-white transition-colors">Local SEO & GMB</Link></li>
              <li><Link to="/services/search-engine-marketing" className="hover:text-white transition-colors">SEM & Paid Search</Link></li>
            </ul>
          </div>

          {/* Column 2: Digital Marketing */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4 text-[#FFDF01]">
              Digital Marketing
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li><Link to="/services/social-media-marketing" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/services/influencer-marketing-agency" className="hover:text-white transition-colors">Influencer Marketing</Link></li>
              <li><Link to="/services/brand-video-production-agency" className="hover:text-white transition-colors">Brand Video Production</Link></li>
              <li><Link to="/services/ai-video-production-agency" className="hover:text-white transition-colors">AI Generated Videos</Link></li>
              <li><Link to="/services/ugc-video-agency" className="hover:text-white transition-colors">UGC Video Agency</Link></li>
              <li><Link to="/services/online-reputation-management" className="hover:text-white transition-colors">Reputation Management</Link></li>
              <li><Link to="/services/content-marketing" className="hover:text-white transition-colors">Content Marketing</Link></li>
              <li><Link to="/services/ad-management" className="hover:text-white transition-colors">Ad Management</Link></li>
            </ul>
          </div>

          {/* Column 3: Creative & Web */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4 text-[#FFDF01]">
              Creative & Web
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li><Link to="/services/website-development-india" className="hover:text-white transition-colors">Website Development</Link></li>
              <li><Link to="/services/website-development-india/corporate-website-design" className="hover:text-white transition-colors">Corporate Web Design</Link></li>
              <li><Link to="/services/web-application-development" className="hover:text-white transition-colors">Web App Development</Link></li>
              <li><Link to="/services/creative-communication" className="hover:text-white transition-colors">Creative Communication</Link></li>
              <li><Link to="/services/creative-communication/brand-strategy" className="hover:text-white transition-colors">Brand Strategy</Link></li>
              <li><Link to="/services/creative-communication/logo-identity-design" className="hover:text-white transition-colors">Logo & Identity Design</Link></li>
              <li><Link to="/services/creative-communication/product-packaging" className="hover:text-white transition-colors">Product Packaging</Link></li>
              <li><Link to="/rankstreet" className="hover:text-white transition-colors">RankStreet SEO Suite</Link></li>
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4 text-[#FFDF01]">
              Industries
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li><Link to="/automotive-digital-marketing-agency" className="hover:text-white transition-colors">Automotive</Link></li>
              <li><Link to="/beauty-skin-care-digital-marketing-agency" className="hover:text-white transition-colors">Beauty & Skin Care</Link></li>
              <li><Link to="/digital-marketing-agency-for-business-to-business" className="hover:text-white transition-colors">B2B Companies</Link></li>
              <li><Link to="/digital-marketing-agency-for-education-industry" className="hover:text-white transition-colors">Education</Link></li>
              <li><Link to="/digital-marketing-agency-for-food-beverage" className="hover:text-white transition-colors">Food & Beverage</Link></li>
              <li><Link to="/digital-marketing-services-for-healthcare" className="hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link to="/digital-marketing-agency-for-real-estate" className="hover:text-white transition-colors">Real Estate</Link></li>
              <li><Link to="/digital-marketing-for-ecommerce-2" className="hover:text-white transition-colors">E-Commerce</Link></li>
            </ul>
          </div>

          {/* Column 5: Locations */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4 text-[#FFDF01]">
              Locations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li><Link to="/seo-company-in-delhi" className="hover:text-white transition-colors">Delhi NCR Agency</Link></li>
              <li><Link to="/social-media-marketing-agency-in-noida" className="hover:text-white transition-colors">Noida Marketing</Link></li>
              <li><Link to="/social-media-marketing-agency-in-gurgaon" className="hover:text-white transition-colors">Gurgaon Marketing</Link></li>
              <li><Link to="/seo-company-in-mumbai" className="hover:text-white transition-colors">Mumbai Agency</Link></li>
              <li><Link to="/performance-marketing-agency-in-bangalore" className="hover:text-white transition-colors">Bangalore Agency</Link></li>
              <li><Link to="/dubai-digital-marketing-agency" className="hover:text-white transition-colors">Dubai, UAE</Link></li>
              <li><Link to="/san-francisco-digital-marketing-agency" className="hover:text-white transition-colors">San Francisco, USA</Link></li>
              <li><Link to="/uk-digital-marketing-agency" className="hover:text-white transition-colors">London, UK</Link></li>
            </ul>
          </div>

          {/* Column 6: Company & Resources */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4 text-[#FFDF01]">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About DigiStreet</Link></li>
              <li><Link to="/about/life-at-digistreet" className="hover:text-white transition-colors">Life at DigiStreet</Link></li>
              <li><Link to="/about/credo-at-digistreet" className="hover:text-white transition-colors">Our Credo</Link></li>
              <li><Link to="/career" className="hover:text-white transition-colors">Careers (Hiring!)</Link></li>
              <li><Link to="/clients" className="hover:text-white transition-colors">Clients & Partners</Link></li>
              <li><Link to="/news-awards" className="hover:text-white transition-colors">News & Awards</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Insights</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>

        </div>

        {/* Office Locations & Contact Grid */}
        <div className="py-10 border-b border-zinc-800 grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-zinc-400">
          <div>
            <div className="text-white font-semibold mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FFDF01]" />
              <span>Noida Office (HQ)</span>
            </div>
            <p>Express Trade Tower 2, B-36, Sector 132, Noida, Uttar Pradesh 201301</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FFDF01]" />
              <span>Delhi Office</span>
            </div>
            <p>Dwarka, New Delhi 110045, India</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FFDF01]" />
              <span>USA Presence</span>
            </div>
            <p>Rochester, NY, USA · Tel: +1-585-309-7815</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-1 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#FFDF01]" />
              <span>Direct Inquiries</span>
            </div>
            <p className="space-y-0.5">
              <a href="mailto:manoj@silgatehiring.com" className="hover:text-[#FFDF01] block">manoj@silgatehiring.com</a>
              <a href="tel:+918108810916" className="hover:text-[#FFDF01] block">+91 81088 10916</a>
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Social */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-block">
              <img src={logoImg} alt="DigiStreet" className="h-6 w-auto brightness-0 invert opacity-70" />
            </Link>
            <span>&copy; {new Date().getFullYear()} DigiStreet Media Pvt. Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <a href="https://youtube.com/@DigiStreetMedia" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://in.linkedin.com/company/digistreet-media-pvt-ltd" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/DigiStreet.media/" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://x.com/DigiStreet" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="X (Twitter)">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/digistreetmedia" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
