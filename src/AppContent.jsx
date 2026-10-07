import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Core Pages
import Home from "./pages/Home";
import About from "./pages/AboutSilgate";
import LifeAtSilgate from "./pages/LifeAtSilgate";
import Credo from "./pages/Credo";
import Founder from "./pages/Founder";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Clients from "./pages/Clients";
import NewsAwards from "./pages/NewsAwards";
import OtherCompanies from "./pages/OtherCompanies";
import Products from "./pages/Products";
import InfluencerPortfolio from "./pages/InfluencerPortfolio";
import Showcase from "./pages/Showcase";
import Faq from "./pages/Faq";
import Sitemap from "./pages/Sitemap";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import FloatingContactButtons from "./components/FloatingContactButtons";

// Service Sub-Pages
import SEOServices from "./pages/services/SEOServices";
import AEOServices from "./pages/services/AEOServices";
import GEOServices from "./pages/services/GEOServices";
import PerformanceMarketing from "./pages/services/PerformanceMarketing";
import B2BSEO from "./pages/services/B2BSEO";
import LocalSEO from "./pages/services/LocalSEO";
import SearchEngineMarketing from "./pages/services/SearchEngineMarketing";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import InfluencerMarketing from "./pages/services/InfluencerMarketing";
import BrandVideoProduction from "./pages/services/BrandVideoProduction";
import AIVideoProduction from "./pages/services/AIVideoProduction";
import UGCVideoAgency from "./pages/services/UGCVideoAgency";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import CorporateWebsiteDesign from "./pages/services/CorporateWebsiteDesign";
import WebApplicationDevelopment from "./pages/services/WebApplicationDevelopment";
import CreativeCommunication from "./pages/services/CreativeCommunication";
import ContentMarketing from "./pages/services/ContentMarketing";
import ORM from "./pages/services/ORM";
import AdManagement from "./pages/services/AdManagement";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import RankStreet from "./pages/services/RankStreet";
import ManagedITServices from "./pages/services/ManagedITServices";

// Industry Sub-Pages
import Automotive from "./pages/industries/Automotive";
import BeautySkincare from "./pages/industries/BeautySkincare";
import B2BIndustry from "./pages/industries/B2BIndustry";
import Education from "./pages/industries/Education";
import FoodBeverage from "./pages/industries/FoodBeverage";
import Healthcare from "./pages/industries/Healthcare";
import RealEstate from "./pages/industries/RealEstate";
import FinancialServices from "./pages/industries/FinancialServices";
import TravelTourism from "./pages/industries/TravelTourism";
import ElectricVehicle from "./pages/industries/ElectricVehicle";
import HomeDecor from "./pages/industries/HomeDecor";
import EcommerceIndustry from "./pages/industries/EcommerceIndustry";

// Location & International Sub-Pages
import LocationDelhi from "./pages/locations/LocationDelhi";
import LocationNoida from "./pages/locations/LocationNoida";
import LocationGurgaon from "./pages/locations/LocationGurgaon";
import LocationMumbai from "./pages/locations/LocationMumbai";
import LocationBangalore from "./pages/locations/LocationBangalore";
import LocationHyderabad from "./pages/locations/LocationHyderabad";
import LocationDubai from "./pages/locations/LocationDubai";
import InternationalUSA from "./pages/locations/InternationalUSA";
import InternationalUK from "./pages/locations/InternationalUK";
import InternationalCanada from "./pages/locations/InternationalCanada";
import InternationalAustralia from "./pages/locations/InternationalAustralia";
import InternationalGulf from "./pages/locations/InternationalGulf";
import InternationalSingapore from "./pages/locations/InternationalSingapore";
import InternationalLanguage from "./pages/locations/InternationalLanguage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function AppContent() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Core Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about/" element={<AboutUs />} />
        <Route path="/about/life-at-Silgate" element={<LifeAtSilgate />} />
        <Route path="/about/life-at-Silgate/" element={<LifeAtSilgate />} />
        <Route path="/life-at-Silgate" element={<LifeAtSilgate />} />
        <Route path="/about/credo-at-Silgate" element={<Credo />} />
        <Route path="/about/credo-at-Silgate/" element={<Credo />} />
        <Route path="/credo-at-Silgate" element={<Credo />} />
        <Route path="/founder-kavish-arora" element={<Founder />} />
        <Route path="/about/founder" element={<Founder />} />

        {/* Services Hub */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/" element={<Services />} />

        {/* Contact & Careers */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/" element={<Careers />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/career/" element={<Careers />} />

        {/* Blogs & Blog Details */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/" element={<Blogs />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />

        {/* Company & Portfolio */}
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/" element={<Clients />} />
        <Route path="/news-awards" element={<NewsAwards />} />
        <Route path="/news-awards/" element={<NewsAwards />} />
        <Route path="/other-companies" element={<OtherCompanies />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/influencer-marketing-portfolio"
          element={<InfluencerPortfolio />}
        />
        <Route path="/influencer-portfolio" element={<InfluencerPortfolio />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/portfolio" element={<Showcase />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/sitemap/" element={<Sitemap />} />
        <Route path="/thank-you" element={<ThankYou />} />

        {/* Service Sub-Pages */}
        <Route path="/services/seo-services" element={<SEOServices />} />
        <Route path="/services/seo-services/" element={<SEOServices />} />
        <Route
          path="/aeo-services-company-in-india"
          element={<AEOServices />}
        />
        <Route
          path="/aeo-services-company-in-india/"
          element={<AEOServices />}
        />
        <Route path="/services/aeo-services" element={<AEOServices />} />
        <Route
          path="/generative-engine-optimization-india"
          element={<GEOServices />}
        />
        <Route
          path="/generative-engine-optimization-india/"
          element={<GEOServices />}
        />
        <Route
          path="/services/generative-engine-optimization-india"
          element={<GEOServices />}
        />
        <Route
          path="/performance-marketing-agency"
          element={<PerformanceMarketing />}
        />
        <Route
          path="/performance-marketing-agency/"
          element={<PerformanceMarketing />}
        />
        <Route
          path="/services/performance-marketing"
          element={<PerformanceMarketing />}
        />
        <Route path="/services/b2b-seo-company-in-india" element={<B2BSEO />} />
        <Route
          path="/services/b2b-seo-company-in-india/"
          element={<B2BSEO />}
        />
        <Route path="/services/b2b-seo" element={<B2BSEO />} />
        <Route path="/services/local-seo-services" element={<LocalSEO />} />
        <Route
          path="/services/search-engine-marketing/local-seo"
          element={<LocalSEO />}
        />
        <Route
          path="/services/search-engine-marketing"
          element={<SearchEngineMarketing />}
        />
        <Route
          path="/services/search-engine-marketing/"
          element={<SearchEngineMarketing />}
        />
        <Route
          path="/services/search-engine-marketing/ecommerce-seo"
          element={<SearchEngineMarketing />}
        />
        <Route
          path="/services/social-media-marketing"
          element={<SocialMediaMarketing />}
        />
        <Route
          path="/services/social-media-marketing/"
          element={<SocialMediaMarketing />}
        />
        <Route
          path="/services/influencer-marketing-agency"
          element={<InfluencerMarketing />}
        />
        <Route
          path="/services/influencer-marketing-agency/"
          element={<InfluencerMarketing />}
        />
        <Route
          path="/services/brand-video-production-agency"
          element={<BrandVideoProduction />}
        />
        <Route
          path="/services/brand-video-production-agency/"
          element={<BrandVideoProduction />}
        />
        <Route
          path="/services/ai-video-production-agency"
          element={<AIVideoProduction />}
        />
        <Route
          path="/services/ai-video-production-agency/"
          element={<AIVideoProduction />}
        />
        <Route path="/services/ugc-video-agency" element={<UGCVideoAgency />} />
        <Route
          path="/services/ugc-video-agency/"
          element={<UGCVideoAgency />}
        />
        <Route
          path="/services/website-development-india"
          element={<WebsiteDevelopment />}
        />
        <Route
          path="/services/website-development-india/"
          element={<WebsiteDevelopment />}
        />
        <Route
          path="/services/website-development-india/corporate-website-design"
          element={<CorporateWebsiteDesign />}
        />
        <Route
          path="/services/web-application-development"
          element={<WebApplicationDevelopment />}
        />
        <Route
          path="/services/creative-communication"
          element={<CreativeCommunication />}
        />
        <Route
          path="/services/creative-communication/*"
          element={<CreativeCommunication />}
        />
        <Route
          path="/services/content-marketing"
          element={<ContentMarketing />}
        />
        <Route
          path="/services/content-marketing/*"
          element={<ContentMarketing />}
        />
        <Route
          path="/services/online-reputation-management"
          element={<ORM />}
        />
        <Route
          path="/services/online-reputation-management/*"
          element={<ORM />}
        />
        <Route path="/services/ad-management" element={<AdManagement />} />
        <Route
          path="/services/digital-marketing-agency"
          element={<DigitalMarketing />}
        />
        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route path="/rankstreet" element={<RankStreet />} />
        <Route
          path="/managed-it-services-usa"
          element={<ManagedITServices />}
        />

        {/* Industry Vertical Sub-Pages */}
        <Route
          path="/automotive-digital-marketing-agency"
          element={<Automotive />}
        />
        <Route
          path="/beauty-skin-care-digital-marketing-agency"
          element={<BeautySkincare />}
        />
        <Route
          path="/digital-marketing-agency-for-business-to-business"
          element={<B2BIndustry />}
        />
        <Route
          path="/digital-marketing-agency-for-education-industry"
          element={<Education />}
        />
        <Route
          path="/digital-marketing-agency-for-food-beverage"
          element={<FoodBeverage />}
        />
        <Route
          path="/digital-marketing-services-for-healthcare"
          element={<Healthcare />}
        />
        <Route
          path="/digital-marketing-agency-for-real-estate"
          element={<RealEstate />}
        />
        <Route
          path="/digital-marketing-for-financial-services"
          element={<FinancialServices />}
        />
        <Route
          path="/digital-marketing-for-travel-tourism"
          element={<TravelTourism />}
        />
        <Route
          path="/digital-marketing-services-for-ev"
          element={<ElectricVehicle />}
        />
        <Route
          path="/digital-marketing-services-for-home-decor"
          element={<HomeDecor />}
        />
        <Route
          path="/digital-marketing-for-ecommerce-2"
          element={<EcommerceIndustry />}
        />
        <Route
          path="/digital-marketing-for-ecommerce"
          element={<EcommerceIndustry />}
        />

        {/* Regional & City Location Pages */}
        <Route path="/seo-company-in-delhi" element={<LocationDelhi />} />
        <Route path="/location/delhi" element={<LocationDelhi />} />
        <Route
          path="/social-media-marketing-agency-in-noida"
          element={<LocationNoida />}
        />
        <Route path="/location/noida" element={<LocationNoida />} />
        <Route
          path="/social-media-marketing-agency-in-gurgaon"
          element={<LocationGurgaon />}
        />
        <Route path="/location/gurgaon" element={<LocationGurgaon />} />
        <Route path="/seo-company-in-mumbai" element={<LocationMumbai />} />
        <Route path="/location/mumbai" element={<LocationMumbai />} />
        <Route
          path="/performance-marketing-agency-in-bangalore"
          element={<LocationBangalore />}
        />
        <Route path="/location/bangalore" element={<LocationBangalore />} />
        <Route
          path="/digital-marketing-agency-in-hyderabad"
          element={<LocationHyderabad />}
        />
        <Route path="/location/hyderabad" element={<LocationHyderabad />} />
        <Route
          path="/dubai-digital-marketing-agency"
          element={<LocationDubai />}
        />
        <Route path="/location/dubai" element={<LocationDubai />} />

        {/* International & Global Hubs */}
        <Route
          path="/san-francisco-digital-marketing-agency"
          element={<InternationalUSA city="San Francisco" />}
        />
        <Route
          path="/seo-services-in-newyork"
          element={<InternationalUSA city="New York" />}
        />
        <Route
          path="/usa-digital-marketing-agency"
          element={<InternationalUSA city="United States" />}
        />
        <Route
          path="/canada-digital-marketing-agency"
          element={<InternationalCanada city="Canada" />}
        />
        <Route
          path="/toronto-digital-marketing-agency"
          element={<InternationalCanada city="Toronto" />}
        />
        <Route
          path="/uk-digital-marketing-agency"
          element={<InternationalUK city="United Kingdom" />}
        />
        <Route
          path="/london-digital-marketing-agency"
          element={<InternationalUK city="London" />}
        />
        <Route
          path="/saudi-arabia-digital-marketing-agency"
          element={<InternationalGulf country="Saudi Arabia" />}
        />
        <Route
          path="/bahrain-digital-marketing-agency"
          element={<InternationalGulf country="Bahrain" />}
        />
        <Route
          path="/digital-marketing-agency-in-australia"
          element={<InternationalAustralia />}
        />
        <Route
          path="/australia-digital-marketing-agency"
          element={<InternationalAustralia />}
        />
        <Route
          path="/singapore-digital-marketing-agency"
          element={<InternationalSingapore />}
        />

        {/* Multilingual Market Entry */}
        <Route path="/es" element={<InternationalLanguage lang="es" />} />
        <Route path="/de" element={<InternationalLanguage lang="de" />} />
        <Route path="/ja" element={<InternationalLanguage lang="ja" />} />

        {/* 404 Catch-All (Requirement 9: Never fallback * to Home) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <FloatingContactButtons />
    </BrowserRouter>
  );
}
