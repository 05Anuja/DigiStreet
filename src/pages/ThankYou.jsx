import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { CheckCircle2, Phone, Calendar } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="w-20 h-20 bg-[#00529B]/10 rounded-2xl flex items-center justify-center mx-auto text-[#00529B]">
            <CheckCircle2 className="w-10 h-10 text-[#00529B]" />
          </div>

          <div className="inline-block px-3.5 py-1.5 rounded-md bg-[#EBF3FB] text-[#00529B] border border-blue-200 text-xs font-semibold uppercase tracking-wider">
            Inquiry Submitted Successfully
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Thank You for Connecting with Silgate Solutions!
          </h1>

          <p className="text-slate-600 text-base leading-relaxed max-w-lg mx-auto">
            Our strategic account director has received your details and is
            reviewing your requirement. We typically respond within 2-4 business
            hours.
          </p>

          <div className="p-6 bg-[#F8FAFC] border border-slate-200/80 rounded-2xl max-w-md mx-auto text-left space-y-3 text-sm">
            <div className="font-semibold text-slate-900">
              Need immediate assistance?
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Phone className="w-4 h-4 text-[#F36C3D]" />
              <a
                href="tel:+918108810916"
                className="font-medium text-[#00529B] hover:text-[#F36C3D] hover:underline transition-colors"
              >
                +91 81088 10916
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar className="w-4 h-4 text-[#00529B]" />
              <span>Available Monday to Saturday, 9:30 AM – 7:00 PM IST</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Button to="/" variant="primary" size="md">
              Return to Homepage
            </Button>
            <Button to="/services" variant="outline" size="md">
              Explore Services
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
