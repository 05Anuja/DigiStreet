import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { Compass, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mx-auto text-zinc-800">
            <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '8s' }} />
          </div>

          <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold uppercase tracking-wider">
            Page Not Found · 404
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
            Lost on DigiStreet?
          </h1>

          <p className="text-zinc-600 text-base leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let's get you back on track.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Button to="/" variant="primary" size="lg" icon="none">
              <Home className="w-4 h-4 mr-2" />
              <span>Back to Home</span>
            </Button>
            <Button to="/services" variant="outline" size="lg">
              <span>View All Services</span>
            </Button>
          </div>

          <div className="pt-8 border-t border-zinc-100 text-xs text-zinc-400">
            Looking for something specific? Call us directly at <a href="tel:+918108810916" className="text-zinc-700 underline font-medium">+91 81088 10916</a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
