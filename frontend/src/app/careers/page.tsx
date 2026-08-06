"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CtaBanner from "@/components/layout/CtaBanner";
import { CheckCircle2, UploadCloud, FileText, ArrowRight, Zap, Globe, Heart, Cpu, Code2, Users, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const perks = [
  { title: "Work Anywhere", description: "We are a remote-first team. Work from anywhere in the world with flexible hours.", icon: <Globe className="w-6 h-6 text-[#128C7E]" /> },
  { title: "Top-tier Health", description: "Comprehensive health, dental, and vision coverage for you and your dependents.", icon: <Heart className="w-6 h-6 text-rose-500" /> },
  { title: "Extreme Autonomy", description: "We hire smart people and get out of their way. Zero micro-management.", icon: <Zap className="w-6 h-6 text-amber-500" /> },
];

const openRoles = [
  { id: 1, title: "Senior AI Engineer", department: "Engineering", location: "Remote", icon: <Cpu className="w-5 h-5" /> },
  { id: 2, title: "Full Stack Developer", department: "Engineering", location: "Remote", icon: <Code2 className="w-5 h-5" /> },
  { id: 3, title: "Product Designer", department: "Design", location: "Remote", icon: <Users className="w-5 h-5" /> },
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    portfolio: ""
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeRole, setActiveRole] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role) return;
    
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const handleApplyClick = (roleTitle: string) => {
    setFormData({ ...formData, role: roleTitle });
    setActiveRole(roleTitle);
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div 
      className="min-h-screen relative flex flex-col justify-between overflow-x-hidden selection:bg-[#128C7E] selection:text-white"
      style={{
        backgroundColor: "#FAFAF7",
        color: "#111",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      <Header />

      {/* ── DYNAMIC BACKGROUND ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#128C7E]/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[60%] h-[60%] rounded-full bg-emerald-400/10 blur-[150px]" />
      </div>

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#128C7E] animate-pulse" />
          <span className="text-[12px] tracking-[0.15em] text-slate-600 font-mono uppercase font-medium">We are hiring</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.04em] font-extrabold max-w-[800px] mx-auto text-slate-900"
        >
          Shape the future of <br className="hidden md:block"/> 
          <span className="relative whitespace-nowrap">
            autonomous AI
            <Sparkles className="absolute -top-6 -right-8 w-8 h-8 text-[#128C7E] opacity-50" />
          </span>.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          className="mt-8 text-[18px] md:text-[21px] leading-[1.6] text-slate-500 max-w-[600px] mx-auto font-medium"
        >
          Join a team of extraordinary builders. We're on a mission to craft software that feels human and fundamentally changes how businesses operate.
        </motion.p>
      </section>

      {/* ── PERKS & CULTURE ── */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-display font-bold tracking-[-0.02em] text-slate-900 mb-4">
              Why AnytimeLLM?
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              We believe in giving our team the best environment, tools, and freedom to do their life's best work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {perks.map((perk, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-[24px] bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{perk.title}</h3>
                <p className="text-slate-500 leading-relaxed">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section className="py-24 px-6 relative z-10 max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 bg-slate-900 text-white p-10 rounded-[32px] overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#128C7E]/30 blur-[80px] rounded-full" />
          <div className="relative z-10">
            <h2 className="text-[32px] md:text-[40px] font-display font-bold tracking-[-0.02em] mb-4">
              Open Positions
            </h2>
            <p className="text-slate-300 text-lg">Join our growing team and make a massive impact.</p>
          </div>
          <p className="relative z-10 text-[14px] font-mono bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">
            {openRoles.length} roles available
          </p>
        </div>

        <div className="space-y-4 px-2">
          {openRoles.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 sm:p-8 rounded-[24px] bg-white border border-slate-200 hover:border-[#128C7E]/50 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => handleApplyClick(role.title)}
            >
              <div className="flex items-center gap-6 mb-4 sm:mb-0">
                <div className="hidden sm:flex w-14 h-14 rounded-full bg-slate-50 items-center justify-center text-slate-400 group-hover:text-[#128C7E] group-hover:bg-[#128C7E]/10 transition-colors duration-300">
                  {role.icon}
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-slate-900 group-hover:text-[#128C7E] transition-colors mb-2">
                    {role.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-slate-500 font-mono">
                    <span className="bg-slate-100 px-2.5 py-1 rounded-md">{role.department}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <span className="bg-slate-100 px-2.5 py-1 rounded-md">{role.location}</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleApplyClick(role.title);
                }}
                className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-slate-50 hover:bg-[#128C7E] hover:text-white px-6 py-3.5 rounded-full transition-all duration-300 border border-slate-200 hover:border-[#128C7E]"
              >
                Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section id="application-form" className="py-24 px-6 md:px-12 max-w-3xl mx-auto w-full z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="bg-white border border-slate-200 p-8 md:p-14 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] relative rounded-[32px] overflow-hidden"
        >
          {/* Subtle gradient accent for the form */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#128C7E] via-emerald-400 to-blue-500" />
          
          <AnimatePresence mode="wait">
            {formSubmitted ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="font-display text-[28px] tracking-[-0.02em] text-slate-900 mb-4 font-bold">
                  Application Received.
                </h3>
                <p className="text-[16px] text-slate-500 leading-relaxed mb-10 max-w-[400px] mx-auto">
                  Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. We've received your application and resume. Our hiring team reviews every profile carefully.
                </p>
                
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl mb-8 relative overflow-hidden text-left">
                  <p className="text-[12px] font-mono tracking-[0.1em] text-[#128C7E] uppercase mb-3 font-bold">
                    Fast-Track Your Application
                  </p>
                  <p className="text-[15px] text-slate-600 leading-relaxed mb-6">
                    Want to stand out? Send a 1-minute intro explaining why you're a perfect fit directly to our founder's WhatsApp.
                  </p>
                  <a 
                    href="https://wa.me/919315549695?text=Hi! I just applied for the role and wanted to introduce myself."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-12 bg-[#25D366] hover:bg-[#1ebd5a] text-white text-[13px] tracking-[0.1em] font-bold uppercase px-8 transition-all duration-300 rounded-full shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5"
                  >
                    WhatsApp Us
                  </a>
                </div>

                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", role: "", portfolio: "" });
                    setFileName(null);
                    setActiveRole("");
                  }}
                  className="text-[12px] font-mono tracking-[0.15em] uppercase border border-slate-300 px-8 py-3.5 hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-700 font-semibold transition-all duration-300 rounded-full"
                >
                  Submit another
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="mb-12 text-center sm:text-left">
                  <h3 className="font-display text-[32px] tracking-[-0.02em] text-slate-900 mb-3 font-bold">
                    Open Application
                  </h3>
                  <p className="text-[16px] text-slate-500 leading-[1.6]">
                    Upload your resume and tell us what you're exceptional at.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[12px] font-mono tracking-[0.1em] text-slate-500 font-medium uppercase mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#128C7E] focus:ring-4 focus:ring-[#128C7E]/10 rounded-xl px-5 py-4 text-[15px] text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-300 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-mono tracking-[0.1em] text-slate-500 font-medium uppercase mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#128C7E] focus:ring-4 focus:ring-[#128C7E]/10 rounded-xl px-5 py-4 text-[15px] text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-300 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-mono tracking-[0.1em] text-slate-500 font-medium uppercase mb-2">
                      Role You're Applying For
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Frontend Engineer, Product Designer"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className={`w-full bg-slate-50 border ${activeRole ? 'border-[#128C7E] ring-4 ring-[#128C7E]/10' : 'border-slate-200'} focus:border-[#128C7E] focus:ring-4 focus:ring-[#128C7E]/10 rounded-xl px-5 py-4 text-[15px] text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-300 font-medium`}
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-mono tracking-[0.1em] text-slate-500 font-medium uppercase mb-2">
                      Resume / CV
                    </label>
                    <div className="relative group">
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className={`w-full border-2 border-dashed rounded-xl px-4 py-10 flex flex-col items-center justify-center transition-all duration-300 ${fileName ? 'border-[#128C7E] bg-[#128C7E]/5' : 'border-slate-200 bg-slate-50 group-hover:border-[#128C7E]/50 group-hover:bg-[#128C7E]/5'}`}>
                        {fileName ? (
                          <>
                            <FileText className="w-8 h-8 text-[#128C7E] mb-3" />
                            <span className="text-[15px] text-slate-900 font-bold">{fileName}</span>
                            <span className="text-[13px] text-slate-500 mt-2 font-medium">Click to replace file</span>
                          </>
                        ) : (
                          <>
                            <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-[#128C7E] transition-colors mb-3" />
                            <span className="text-[15px] text-slate-700 font-bold">Upload your resume</span>
                            <span className="text-[13px] text-slate-500 mt-2 font-medium">PDF, DOC, DOCX (Max 5MB)</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-mono tracking-[0.1em] text-slate-500 font-medium uppercase mb-2">
                      Portfolio / LinkedIn (Optional)
                    </label>
                    <input
                      type="url"
                      placeholder="https://"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#128C7E] focus:ring-4 focus:ring-[#128C7E]/10 rounded-xl px-5 py-4 text-[15px] text-slate-900 placeholder-slate-400 focus:outline-none transition-all duration-300 font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-[56px] mt-8 bg-slate-900 hover:bg-slate-800 text-white text-[13px] tracking-[0.15em] font-bold uppercase flex items-center justify-center transition-all duration-300 cursor-pointer disabled:opacity-50 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    {submitting ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}
