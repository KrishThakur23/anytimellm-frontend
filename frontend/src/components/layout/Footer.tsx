"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/#features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Demo", href: "/demo" },
        { name: "Use Cases", href: "/use-cases" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Security", href: "/security" },
        { name: "Contact", href: "/about#contact" },
        { name: "Privacy", href: "/privacy-policy" },
        { name: "Terms", href: "/terms-of-service" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "WhatsApp Setup", href: "/demo" },
        { name: "API Reference", href: "/docs" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-slate-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand & Address Column */}
          <div className="md:col-span-5 flex flex-col">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-[15px] font-extrabold tracking-[0.12em] text-slate-900">
                ANYTIMELLM
              </span>
            </Link>
            
            {/* Minimal Location/Contact Card */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100/50 transition-colors p-5 max-w-[280px]">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <MapPin className="w-20 h-20 text-slate-600 -mr-6 -mt-6" strokeWidth={1} />
              </div>
              <div className="relative z-10 flex flex-col gap-4">
                <a 
                  href="https://maps.google.com/?q=D-11/322,+Sector-7,+Rohini,+Delhi,+110085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/map cursor-pointer"
                >
                  <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1.5 flex items-center gap-1.5">
                    Headquarters
                    <svg className="w-3 h-3 opacity-0 -translate-x-2 group/map-hover:opacity-100 group/map-hover:translate-x-0 transition-all text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                  <div className="text-[13px] font-medium text-slate-700 leading-relaxed group/map-hover:text-slate-900 transition-colors">
                    D-11/322, Sector-7, Rohini<br />
                    Delhi, 110085
                  </div>
                </a>
                
                <div className="flex flex-col gap-2 pt-4 border-t border-slate-200/60">
                  <a href="mailto:anytimellm10@gmail.com" className="flex items-center gap-2 text-[12px] font-medium text-slate-500 hover:text-slate-900 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                    anytimellm10@gmail.com
                  </a>
                  <a href="tel:+919315549695" className="flex items-center gap-2 text-[12px] font-medium text-slate-500 hover:text-slate-900 transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                    +91 93155 49695
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-[12px] font-semibold text-slate-900 mb-5">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[12px] font-medium text-slate-500">
              All systems operational
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-[12px] text-slate-400">
              © {currentYear} AnytimeLLM
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
