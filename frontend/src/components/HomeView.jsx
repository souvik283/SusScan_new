import React from "react";
import { motion } from "motion/react";
import AnalysisView from "./AnalysisView";
import {
  Search,
  BrainCircuit,
  Zap,
  MessageSquare,
  ShieldCheck,
  LogIn,
} from "lucide-react";
// import { log } from "console";

export default function HomeView( { activeTab, setActiveTab }) {
  // console.log(activeTab, setActiveTab)
  
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 overflow-hidden py-16">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-lime rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-purple rounded-full blur-[100px]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl w-full"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse-green"></span>
            <span className="font-mono text-[10px] font-bold text-brand-lime uppercase tracking-[0.2em]">
              Vigilance Active
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-8xl leading-tight mb-8 tracking-tighter font-bold">
            UNMASK{" "}
            <span className="text-brand-lime italic font-light italic text-shadow-neon uppercase">
              THE VOID.
            </span>
          </h1>

          <div className="w-full max-w-xl mx-auto glass-card p-2 rounded-2xl border-brand-lime/20 shadow-2xl mb-12">
            <div className="flex flex-col md:flex-row gap-2">
              
              <button
              onClick={()=>{
                setActiveTab('analysis')
              }}
               className="px-12 py-5 w-full bg-brand-lime text-brand-obsidian font-display cursor-pointer font-bold text-xl rounded-xl hover:shadow-[0_0_30px_rgba(210,240,0,0.4)] transition-all uppercase tracking-tighter">
                Universal Scan
              </button>
            </div>
          </div>

          <p className="mt-8 font-sans text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            The next-gen perimeter. Real-time threat detection powered by AI and
            designed for the instant digital age.
          </p>
        </motion.div>
      </section>

      {/* Primary Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-1.5 md:px-0">
        <FeatureCard
          icon={<BrainCircuit className="text-brand-lime" size={32} />}
          title="AI-First Defense"
          description="Our neural models don't just react; they predict. Every bit of data is analyzed through millions of threat patterns in milliseconds."
          accent="purple"
        />
        <FeatureCard
          icon={<Zap className="text-brand-lime" size={32} />}
          title="Gen Z Speed"
          description="Designed for the instant-feedback generation. Zero lag, zero friction. Security that moves at the speed of your social feed."
          active
        />
        <FeatureCard
          icon={<MessageSquare className="text-brand-lime" size={32} />}
          title="WhatsApp Native"
          description="Forward suspicious links or files directly to our bot. Security lives where you communicate. No apps, no logins, just safety."
          accent="purple"
        />
      </section>

      {/* Stats Section */}
      <section className="bg-white/[0.02] border-y border-white/5 py-24 rounded-[4rem]">
        <div className="grid md:grid-cols-2 gap-16 items-center mx-9">
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Zero Compromise. <br />
              <span className="text-brand-purple italic">
                Total Transparency.
              </span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed max-w-lg">
              We've built a security ecosystem that doesn't hide behind jargon.
              See what we see. Understand the threats. Take control of your
              digital perimeter with tools that feel like a high-performance
              ecosystem.
            </p>
            <div className="flex gap-12 border-t border-white/5 pt-12">
              <div className="flex flex-col">
                <span className="font-display text-5xl font-bold text-brand-lime">
                  99.9%
                </span>
                <span className="font-mono text-[10px] text-white/40 font-bold uppercase tracking-widest mt-2">
                  Threat Block Rate
                </span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-12">
                <span className="font-display text-5xl font-bold text-brand-purple italic">
                  12ms
                </span>
                <span className="font-mono text-[10px] text-white/40 font-bold uppercase tracking-widest mt-2">
                  Avg Scan Time
                </span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden glass-card p-3 shadow-2xl border-white/10">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
              alt="Cyber Core"
              className="w-full h-full object-cover rounded-2xl opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass-card bg-black/60 p-4 rounded-xl flex items-center justify-between border-brand-lime/20 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></div>
                  <span className="font-mono text-[10px] font-bold text-white uppercase tracking-widest">
                    Scanning........
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold text-brand-lime uppercase">
                  Secure
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  active = false,
  accent = "lime",
}) {
  return (
    <div
      className={`glass-card p-10 rounded-[2rem] flex flex-col gap-6 transition-all duration-500 hover:scale-[1.02] ${
        active
          ? "border-t-2 border-brand-lime shadow-lg shadow-brand-lime/5"
          : accent === "purple"
            ? "border-t-2 border-brand-purple"
            : ""
      }`}
    >
      <div className="w-14 h-14 flex items-center justify-center bg-brand-lime/10 rounded-2xl transition-transform duration-500 group-hover:rotate-12">
        {icon}
      </div>
      <h3 className="font-display text-2xl font-bold">{title}</h3>
      <p className="font-sans text-white/50 leading-relaxed">{description}</p>
    </div>
  );
}
