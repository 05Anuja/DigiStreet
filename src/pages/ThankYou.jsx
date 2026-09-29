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
          <div className="w-20 h-20 bg-[#FFDF01]/20 rounded-full flex items-center justify-center mx-auto text-black">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>

          <div className="inline-block px-3.5 py-1 rounded-full bg-black text-[#FFDF01] text-xs font-semibold uppercase tracking-wider">
            Inquiry Submitted Successfully
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
            Thank You for Connecting with Silgate!
          </h1>

          <p className="text-zinc-600 text-base leading-relaxed max-w-lg mx-auto">
            Our strategic account director has received your details and is
            reviewing your requirement. We typically respond within 2-4 business
            hours.
          </p>

          <div className="p-6 bg-zinc-50 border border-zinc-200/80 rounded-2xl max-w-md mx-auto text-left space-y-3 text-sm">
            <div className="font-semibold text-zinc-900">
              Need immediate assistance?
            </div>
            <div className="flex items-center gap-2 text-zinc-600">
              <Phone className="w-4 h-4 text-[#FFDF01]" />
              <a
                href="tel:+918108810916"
                className="font-medium text-black hover:underline"
              >
                +91 81088 10916
              </a>
            </div>
            <div className="flex items-center gap-2 text-zinc-600">
              <Calendar className="w-4 h-4 text-[#FFDF01]" />
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
