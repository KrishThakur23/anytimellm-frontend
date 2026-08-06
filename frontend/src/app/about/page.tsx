"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════ */

const mainTeamMembers = [
  {
    name: "Vikram Sharma",
    role: "Chief Executive Officer",
    description: "Guiding the vision and ensuring we stay true to our core principles.",
  },
  {
    name: "Aarti Patel",
    role: "Chief Technology Officer",
    description: "Designing the architecture that makes our products reliable and scalable.",
  },
  {
    name: "Rohan Desai",
    role: "Head of Product",
    description: "Bridging the gap between human needs and technical possibilities.",
  },
  {
    name: "Neha Gupta",
    role: "Head of Design",
    description: "Crafting beautiful interfaces that disappear into the experience.",
  },
  {
    name: "Siddharth Verma",
    role: "Head of Operations",
    description: "Ensuring our internal engine runs as smoothly as the software we build.",
  }
];

const internMembers = [
  {
    name: "Ankit Kumar",
    role: "Founder's Office (Intern)",
    description: "Setting the vision where craft meets intelligence.",
    quote: "We don't just build software. We build the kind of product we'd want to use ourselves. The best work happens when people have the space to think deeply, live fully, and create without burnout.",
    image: "/ankitasli.jfif",
  },
  {
    name: "Bhupesh Tayal",
    role: "Full-Stack Engineering (Intern)",
    description: "Architecting systems that turn conversations into outcomes.",
    quote: "I write code during the day and play guitar in the evenings. That balance is what keeps the code honest. When your systems handle thousands of customer conversations automatically, your clients get that same freedom.",
    image: "/new_bhupesh.png",
  },
  {
    name: "Heena Bathyal",
    role: "Data Engineering (Intern)",
    description: "Designing reliable infrastructure for intelligent products.",
    quote: "Infrastructure should be invisible, like oxygen. I build pipelines that never sleep so that business owners can. The best technology is the kind you never have to worry about.",
    image: "/new_heena.jpg",
  },
  {
    name: "Riya Goel",
    role: "Data Analytics (Intern)",
    description: "Turning data into decisions that shape the product.",
    quote: "Numbers tell stories that humans sometimes miss. Every insight I uncover helps a small business owner understand their customers a little better, and spend a little more time doing what they love.",
    image: "/new_riya.png",
  },
  {
    name: "Krish Thakur",
    role: "Backend Engineering (Intern)",
    description: "Building scalable systems that power every conversation.",
    quote: "I believe in systems that carry the weight so people don't have to. A shopkeeper shouldn't lose a customer at 2 AM because they were asleep. That's the problem worth solving.",
    image: "",
  },
];

/* ═══════════════════════════════════════════════════════════════════
   ANIMATION
   ═══════════════════════════════════════════════════════════════════ */

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: i * 0.08 },
  }),
};

/* ═══════════════════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════════════════ */

// A new grid layout for the Main Team
function MainTeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: true });

  return (
    <section className="py-12 md:py-20 px-6 md:px-16" ref={ref}>
      <div className="max-w-[1080px] mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-[12px] tracking-[0.25em] text-[#999] uppercase block mb-12"
          style={{ fontFamily: "'SF Mono', 'Fira Code', monospace" }}
        >
          Leadership
        </motion.span>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {mainTeamMembers.map((member, i) => (
            <motion.div key={member.name} variants={fadeUp} custom={i} className="flex flex-col border-t border-[#eaeaea] pt-6 group">
              <span className="font-display text-[1.4rem] tracking-[-0.02em] font-semibold text-[#111] mb-1 group-hover:text-[#555] transition-colors">
                {member.name}
              </span>
              <span className="text-[13px] text-[#888] mb-4 uppercase tracking-wider font-medium" style={{ fontFamily: "'SF Mono', 'Fira Code', monospace" }}>
                {member.role}
              </span>
              <p className="text-[15px] leading-[1.6] text-[#777]">
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// The original interactive selector for the Interns
function InteractiveTeamSection({ title, members }: { title: string; members: typeof internMembers }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const teamRef = useRef<HTMLDivElement>(null);
  const teamInView = useInView(teamRef, { amount: 0.2, once: true });

  return (
    <section className="py-12 md:py-20 px-6 md:px-16" ref={teamRef}>
      <div className="max-w-[1080px] mx-auto">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={teamInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-[12px] tracking-[0.25em] text-[#999] uppercase block mb-10"
          style={{ fontFamily: "'SF Mono', 'Fira Code', monospace" }}
        >
          {title}
        </motion.span>

        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-14 items-start">
          {/* Left: Name list */}
          <motion.div
            className="flex flex-col gap-1 md:w-[340px] shrink-0"
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
            }}
          >
            {members.map((member, i) => (
              <motion.button
                key={member.name}
                variants={fadeUp}
                custom={i}
                onClick={() => setActiveIndex(i)}
                className={`group text-left py-3.5 px-4 rounded-xl transition-all duration-400 cursor-pointer ${
                  activeIndex === i
                    ? "bg-[#111]"
                    : "bg-transparent hover:bg-[#EEEDE8]"
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className={`text-[11px] tabular-nums transition-colors duration-300 ${
                      activeIndex === i ? "text-[#666]" : "text-[#ccc]"
                    }`}
                    style={{ fontFamily: "'SF Mono', 'Fira Code', monospace" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span
                      className={`font-display text-[clamp(1.1rem,2vw,1.35rem)] tracking-[-0.02em] font-semibold transition-colors duration-300 block leading-tight ${
                        activeIndex === i ? "text-white" : "text-[#111]"
                      }`}
                    >
                      {member.name}
                    </span>
                    <span
                      className={`text-[13px] transition-colors duration-300 block mt-0.5 ${
                        activeIndex === i ? "text-[#888]" : "text-[#aaa]"
                      }`}
                    >
                      {member.role}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Right: Portrait + Description */}
          <div className="flex-1 relative min-h-[360px] md:min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.97, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -8 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex flex-col gap-5"
              >
                {/* Portrait */}
                {members[activeIndex].image && (
                  <div className="relative w-full aspect-[3/2.8] max-w-[480px] overflow-hidden rounded-2xl">
                    <Image
                      src={members[activeIndex].image}
                      alt={`Portrait of ${members[activeIndex].name}`}
                      fill
                      className="object-cover grayscale hover:grayscale-[50%] transition-all duration-700"
                      sizes="480px"
                    />
                  </div>
                )}

                {/* Description */}
                <p className="text-[17px] leading-[1.6] text-[#888] max-w-[400px]">
                  {members[activeIndex].description}
                </p>

                {/* Philosophical quote */}
                <div className="max-w-[440px] mt-1">
                  <div className="flex gap-3">
                    <span
                      className="text-[32px] leading-none text-[#ccc] font-display select-none shrink-0 -mt-1"
                      aria-hidden="true"
                    >
                      "
                    </span>
                    <p className="text-[15px] leading-[1.75] text-[#777] italic">
                      {members[activeIndex].quote}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════════ */

export default function AboutPage() {
  const philRef = useRef<HTMLDivElement>(null);
  const philInView = useInView(philRef, { amount: 0.3, once: true });

  const closingRef = useRef<HTMLDivElement>(null);
  const closingInView = useInView(closingRef, { amount: 0.4, once: true });

  return (
    <div
      className="min-h-screen relative flex flex-col overflow-x-hidden"
      style={{
        backgroundColor: "#FAFAF7",
        color: "#111",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      <Header />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-[12px] tracking-[0.3em] text-[#999] uppercase mb-6"
          style={{ fontFamily: "'SF Mono', 'Fira Code', monospace" }}
        >
          About
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.08] tracking-[-0.04em] text-[#111] font-semibold max-w-[700px] mx-auto"
        >
          Software that
          <br />
          feels human.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          className="mt-6 text-[17px] leading-[1.7] text-[#999] max-w-[420px] mx-auto"
        >
          A small team obsessed with craft, building tools
          that empower businesses to serve customers better.
        </motion.p>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-20 md:py-28 px-6 md:px-16" style={{ backgroundColor: "#F4F4F0" }}>
        <div ref={philRef} className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <motion.span
            initial={{ opacity: 0 }}
            animate={philInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="md:col-span-3 text-[12px] tracking-[0.25em] text-[#999] uppercase"
            style={{ fontFamily: "'SF Mono', 'Fira Code', monospace" }}
          >
            Philosophy
          </motion.span>
          <motion.div
            className="md:col-span-9 flex flex-col gap-6"
            initial="hidden"
            animate={philInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-display text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.2] tracking-[-0.02em] text-[#111] font-semibold max-w-[560px]"
            >
              Technology should disappear into the experience it creates.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-[17px] leading-[1.75] text-[#777] max-w-[520px]"
            >
              AI should amplify human capability, not replace it.
              Simplicity is the result of immense effort, not its absence.
              We care about details most people won't notice, but everyone feels.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN TEAM ── */}
      <MainTeamSection />

      {/* ── INTERNS ── */}
      <InteractiveTeamSection title="Interns" members={internMembers} />

      {/* ── CLOSING ── */}
      <section className="py-24 md:py-32 px-6 text-center" style={{ backgroundColor: "#F4F4F0" }}>
        <motion.div
          ref={closingRef}
          className="max-w-[600px] mx-auto"
          initial="hidden"
          animate={closingInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="font-display text-[clamp(1.3rem,3vw,1.85rem)] leading-[1.4] tracking-[-0.02em] text-[#111] font-medium"
          >
            Great products aren't built by individuals.
          </motion.p>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="font-display text-[clamp(1.3rem,3vw,1.85rem)] leading-[1.4] tracking-[-0.02em] text-[#999] font-medium mt-2"
          >
            They're built by teams who care
            <br className="hidden md:block" />
            about every detail.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="mt-12">
            <Link
              href="/pricing"
              className="inline-flex items-center text-[13px] font-medium text-[#111] border-b border-[#111] pb-0.5 hover:text-[#666] hover:border-[#666] transition-colors duration-300"
            >
              See what we're building
              <svg className="ml-1.5 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
