"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CtaBanner from "@/components/layout/CtaBanner";
import { Play, CheckCircle2, ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    whatsappNumber: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.businessType || !formData.whatsappNumber) return;
    
    setSubmitting(true);
    // Simulate booking submission
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <div 
      className="min-h-screen relative flex flex-col justify-between overflow-x-hidden selection:bg-[#111] selection:text-white"
      style={{
        backgroundColor: "#FAFAF7",
        color: "#111",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      <Header />

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-[12px] tracking-[0.3em] text-[#999] uppercase mb-6"
          style={{ fontFamily: "'SF Mono', 'Fira Code', monospace" }}
        >
          Interactive Preview
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.08] tracking-[-0.04em] text-[#111] font-semibold max-w-[700px] mx-auto"
        >
          See how it works.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          className="mt-6 text-[17px] leading-[1.7] text-[#999] max-w-[440px] mx-auto"
        >
          Watch the system autonomously read catalogs and answer complex requests, turning conversations into outcomes.
        </motion.p>
      </section>

      {/* ── SIMULATOR SECTION ── */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto w-full z-10 mb-28">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.4 }}
          className="bg-white border border-[#E5E5E0] p-4 md:p-8 rounded-[2rem] relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex items-center justify-center"
        >
          
          <div className="w-full max-w-md aspect-[9/16] md:aspect-[9/18] bg-[#0b141a] relative flex flex-col justify-between overflow-hidden shadow-2xl rounded-[1.5rem] ring-1 ring-black/10">
            
            {isPlaying ? (
              // Live Interactive Mockup
              <div className="w-full h-full relative flex flex-col text-left text-xs select-none animate-in fade-in duration-500">
                
                {/* Custom Mobile Header */}
                <div className="bg-[#202c33] p-4 border-b border-white/5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#111] border border-white/10 flex items-center justify-center font-display font-bold text-white text-[11px] tracking-widest">
                    AL
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-[13px] text-white/95 leading-tight">AnytimeLLM Assistant</span>
                    <span className="text-[10px] text-[#00a884] font-medium mt-0.5 leading-none">Online</span>
                  </div>
                </div>

                {/* Chat Log Window */}
                <div className="space-y-4 overflow-y-auto flex-1 p-5 font-body text-[13px] leading-[1.5]">
                  
                  {/* Customer Msg 1 */}
                  <div className="p-3.5 bg-[#202c33] text-white/90 max-w-[85%] border border-white/5 shadow-sm animate-in fade-in duration-500 delay-300" style={{ borderRadius: '0 12px 12px 12px' }}>
                    <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1.5">Customer</p>
                    Do you have a deep cleaning service available for tomorrow? And what is the price?
                  </div>
                  
                  {/* Agent Msg 1 */}
                  <div className="p-3.5 bg-[#005c4b] text-white max-w-[85%] ml-auto border border-white/5 shadow-sm animate-in fade-in duration-500 delay-[1200ms]" style={{ borderRadius: '12px 0 12px 12px' }}>
                    <p className="font-mono text-[9px] text-white/60 uppercase tracking-widest mb-1.5">AI Assistant</p>
                    Yes! We have our Deep Cleaning Package available. The price is ₹2,499. Would you like me to book this for tomorrow?
                  </div>

                  {/* Customer Msg 2 */}
                  <div className="p-3.5 bg-[#202c33] text-white/90 max-w-[85%] border border-white/5 shadow-sm animate-in fade-in duration-500 delay-[2400ms]" style={{ borderRadius: '0 12px 12px 12px' }}>
                    <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1.5">Customer</p>
                    Yes please, book it. Email is customer@example.com
                  </div>

                  {/* Agent Msg 2 */}
                  <div className="p-3.5 bg-[#005c4b] text-white max-w-[85%] ml-auto border border-white/5 shadow-sm animate-in fade-in duration-500 delay-[3600ms]" style={{ borderRadius: '12px 0 12px 12px' }}>
                    <p className="font-mono text-[9px] text-white/60 uppercase tracking-widest mb-1.5">AI Assistant</p>
                    Perfect. Order created for Deep Cleaning for tomorrow. Order ID: #ORD-7392. We sent details to customer@example.com.
                  </div>

                </div>

                {/* Mock Input Bar */}
                <div className="bg-[#202c33] p-3 flex items-center gap-3 border-t border-white/5">
                  <div className="flex-1 bg-[#2a3942] rounded-full py-2.5 px-5 text-white/30 text-[12px]">
                    Type a message...
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center text-white shrink-0">
                    <Send className="w-4 h-4 ml-0.5" />
                  </div>
                </div>

                {/* Close Button overlay */}
                <button 
                  onClick={() => setIsPlaying(false)} 
                  className="absolute bottom-20 right-4 bg-white hover:bg-slate-100 text-[#111] px-4 py-2 font-mono text-[10px] tracking-widest uppercase transition-all rounded-full shadow-lg"
                >
                  Reset Demo
                </button>

              </div>
            ) : (
              // Cover Layout
              <>
                <div className="absolute inset-0 bg-[#0b141a]/40 flex items-center justify-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b141a]/90 via-transparent to-transparent" />
                
                {/* Play Trigger */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 w-20 h-20 rounded-full bg-white text-[#111] hover:scale-105 flex items-center justify-center transition-all duration-500 shadow-2xl cursor-pointer"
                  aria-label="Play video demo"
                >
                  <Play className="w-7 h-7 fill-current ml-1" />
                </button>

                <div className="absolute bottom-8 left-8 z-10 text-left">
                  <span className="text-[10px] tracking-[0.2em] text-white/60 uppercase block mb-2 font-mono">
                    Interactive Preview
                  </span>
                  <span className="text-[17px] tracking-tight text-white font-medium block">
                    Launch WhatsApp simulator
                  </span>
                </div>
              </>
            )}

          </div>
        </motion.div>
      </section>

      {/* ── BOOKING FORM ── */}
      <section className="py-16 px-6 md:px-12 max-w-xl mx-auto w-full z-10 mb-28" style={{ backgroundColor: "#FAFAF7" }}>
        <div className="bg-white border border-[#E5E5E0] p-10 md:p-14 shadow-sm relative rounded-[2rem]">
          
          {formSubmitted ? (
            // Success State
            <div className="text-center py-8 animate-in zoom-in-95 duration-500">
              <div className="w-16 h-16 bg-[#FAFAF7] border border-[#E5E5E0] rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-6 h-6 text-[#111]" />
              </div>
              <h3 className="font-display text-[24px] tracking-[-0.02em] text-[#111] mb-3 font-semibold">
                Request received.
              </h3>
              <p className="text-[15px] text-[#777] leading-relaxed mb-8 max-w-[320px] mx-auto">
                Thank you, {formData.name}. Our team will contact you at {formData.whatsappNumber} to arrange a live, tailored walkthrough.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: "", businessType: "", whatsappNumber: "" });
                }}
                className="text-[11px] font-mono tracking-[0.2em] uppercase border border-[#111] px-6 py-3 hover:bg-[#111] hover:text-white text-[#111] transition-colors rounded-full"
              >
                Book another
              </button>
            </div>
          ) : (
            // Booking Form
            <>
              <div className="mb-10 text-center sm:text-left">
                <div className="inline-flex items-center text-[11px] font-mono tracking-[0.2em] text-[#999] uppercase mb-4">
                  Schedule a Walkthrough
                </div>
                <h3 className="font-display text-[32px] tracking-[-0.02em] text-[#111] mb-4 font-semibold">
                  See it in action.
                </h3>
                <p className="text-[15px] text-[#777] leading-[1.6]">
                  Enter your details and a solutions expert will reach out to schedule a live demonstration.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[11px] font-mono tracking-[0.15em] text-[#999] uppercase mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAFAF7] border border-[#E5E5E0] focus:border-[#111] rounded-xl px-4 py-3.5 text-[15px] text-[#111] placeholder-[#ccc] focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-[0.15em] text-[#999] uppercase mb-2">
                    Business Type
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Retail, Agency, SaaS..."
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full bg-[#FAFAF7] border border-[#E5E5E0] focus:border-[#111] rounded-xl px-4 py-3.5 text-[15px] text-[#111] placeholder-[#ccc] focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-[0.15em] text-[#999] uppercase mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    className="w-full bg-[#FAFAF7] border border-[#E5E5E0] focus:border-[#111] rounded-xl px-4 py-3.5 text-[15px] text-[#111] placeholder-[#ccc] focus:outline-none transition-colors duration-300"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-[52px] mt-4 bg-[#111] hover:bg-[#333] text-white text-[12px] tracking-[0.2em] font-mono uppercase flex items-center justify-center transition-all duration-300 cursor-pointer disabled:opacity-50 rounded-xl"
                >
                  {submitting ? "Booking..." : "Request Demo"}
                </button>
              </form>
            </>
          )}

        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}
