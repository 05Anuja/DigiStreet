import React from 'react';
import mahindraLogo from '../assets/images/Mahindra-EV.png';
import mgLogo from '../assets/images/MG-logo-1.png';
import amityLogo from '../assets/images/Amity-logo.png';
import sircaLogo from '../assets/images/sirca.webp';
import vegaLogo from '../assets/images/vega.webp';
import xonLogo from '../assets/images/xon-logo.webp';
import metsoLogo from '../assets/images/metso.png.webp';
import jaksonLogo from '../assets/images/jakson.png.webp';
import sudhirLogo from '../assets/images/sudhir-power-1.png.webp';
import omaxeLogo from '../assets/images/omaxe.webp';
import dearLogo from '../assets/images/dear.webp';
import jbmLogo from '../assets/images/jbm-group.webp';

export default function ClientMarquee({ title = "Not Just Clients, They Are More Like Partners" }) {
  const clients = [
    { name: 'Mahindra EV', logo: mahindraLogo },
    { name: 'MG Motor', logo: mgLogo },
    { name: 'Amity Online', logo: amityLogo },
    { name: 'Sirca Paints', logo: sircaLogo },
    { name: 'Vega', logo: vegaLogo },
    { name: 'XONN', logo: xonLogo },
    { name: 'Metso Outotec', logo: metsoLogo },
    { name: 'Jakson Solar', logo: jaksonLogo },
    { name: 'Sudhir Power', logo: sudhirLogo },
    { name: 'Omaxe Real Estate', logo: omaxeLogo },
    { name: 'Dear', logo: dearLogo },
    { name: 'JBM Group', logo: jbmLogo },
  ];

  return (
    <section className="py-12 bg-white border-y border-zinc-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-6 text-center">
        <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-400">
          {title}
        </h3>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap">
        {/* Repeating two rows for infinite scroll */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 flex-shrink-0">
          {[...clients, ...clients].map((client, idx) => (
            <div 
              key={idx} 
              className="h-10 sm:h-12 w-32 sm:w-40 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              title={client.name}
            >
              {client.logo ? (
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
              ) : null}
              <span className="hidden font-bold text-sm text-zinc-500 tracking-tight">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
