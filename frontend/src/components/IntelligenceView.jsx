import React from "react";
import { motion } from "motion/react";
import {
  Globe,
  Shield,
  Bot,
  AlertTriangle,
  TrendingUp,
  RefreshCcw,
} from "lucide-react";

export default function IntelligenceView() {
  return (
    <div className="p-8 md:p-16 flex flex-col gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Global Threat Map */}
        <section className="lg:col-span-8 glass-card rounded-3xl p-8 relative overflow-hidden min-h-[500px] border-white/5">
          <div className="flex justify-between items-center mb-8 relative z-10">
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-lime tracking-tight">
                Global Threat Map
              </h2>
              <p className="font-mono text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mt-2">
                Live Detection Nodes
              </p>
            </div>
            <div className="bg-black/40 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse-green"></span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-lime">
                Real-time Feed
              </span>
            </div>
          </div>

          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="w-full h-full opacity-30 grayscale relative">
              {/* World map placeholder */}
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070"
                alt="Tactical Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-obsidian/40 backdrop-blur-[2px]"></div>

              {/* Pulsing nodes */}
              <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-brand-lime rounded-full shadow-[0_0_15px_#d2f000] animate-pulse"></div>
              <div className="absolute top-[45%] left-[40%] w-2 h-2 bg-brand-red rounded-full shadow-[0_0_15px_#ff003c] animate-pulse"></div>
              <div className="absolute top-[60%] right-[30%] w-3 h-3 bg-brand-lime rounded-full shadow-[0_0_15px_#d2f000] animate-pulse"></div>
              <div className="absolute bottom-[20%] right-[15%] w-2 h-2 bg-brand-purple rounded-full shadow-[0_0_15px_#74009f] animate-pulse"></div>
            </div>
          </div>

          {/* Stats Overlay */}
          <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 md:grid-cols-3 gap-6 z-10">
            <StatCard label="Intercepted" value="14.2k" color="brand-lime" />
            <StatCard
              label="AI Neutralized"
              value="98.2%"
              color="brand-purple"
            />
            <StatCard
              label="High Alert"
              value="04"
              color="brand-red"
              hideOnMobile
            />
          </div>
        </section>

        {/* Live Scam Feed */}
        <section className="lg:col-span-4 glass-card border-t-4 border-brand-purple rounded-3xl flex flex-col max-h-[600px] overflow-hidden">
          <div className="p-8 border-b border-white/5">
            <h2 className="font-display text-2xl font-bold text-brand-purple">
              Live Scam Feed
            </h2>
            <p className="font-mono text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mt-2">
              Community Reported
            </p>
          </div>

          <div className="flex-grow overflow-y-auto p-6 space-y-4 custom-scrollbar">
            <ScamEvent
              severity="critical"
              title="Phishing Wave #402"
              description="Spoofed IRS domains targeting tax season refunds via SMS."
              likes="842"
              time="2 mins ago"
            />
            <ScamEvent
              severity="moderate"
              title="Crypto Drainer v3"
              description="Deepfake video of CEO promoting fake airdrop on Twitter."
              likes="1.2k"
              time="14 mins ago"
            />
            <ScamEvent
              severity="critical"
              title="Auth Bypass Alpha"
              description="Zero-day vulnerability in popular CMS login components."
              likes="315"
              time="45 mins ago"
            />
          </div>
        </section>
      </div>

      {/* Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <AnalysisSummary
          icon={<TrendingUp size={20} />}
          label="Botnet Activity"
          value="High Surge"
          trend="+12.5%"
          color="brand-lime"
        />
        <AnalysisSummary
          icon={<Shield size={20} />}
          label="AI Defense Grid"
          value="Optimal"
          trend="Active"
          color="brand-lime"
        />
        <AnalysisSummary
          icon={<RefreshCcw size={20} />}
          label="Global Sync"
          value="99.9% Up"
          trend="Syncing"
          color="brand-purple"
        />
        <AnalysisSummary
          icon={<Bot size={20} />}
          label="Deep Scan"
          value="Initiate Scan"
          trend="NEW"
          color="brand-lime"
          highlight
        />
      </div>
    </div>
  );
}

function StatCard({ label, value, color, hideOnMobile = false }) {
  return (
    <div
      className={`glass-card bg-black/40 p-5 rounded-2xl border-l-4 border-${color} ${hideOnMobile ? "hidden md:block" : ""}`}
    >
      <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.2em] mb-1">
        {label}
      </p>
      <p className="font-display text-3xl font-black">{value}</p>
    </div>
  );
}

function ScamEvent({ severity, title, description, likes, time }) {
  return (
    <div className="bg-white/[0.03] p-5 rounded-2xl border border-white/5 hover:border-brand-purple transition-all group cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <span
          className={`px-2 py-0.5 rounded font-mono text-[8px] font-black uppercase tracking-widest border ${
            severity === "critical"
              ? "bg-brand-red/20 text-brand-red border-brand-red/30"
              : "bg-cyan-500/20 text-cyan-400 border-cyan-400/30"
          }`}
        >
          {severity}
        </span>
        <div className="flex items-center gap-1.5 text-white/40 group-hover:text-white transition-colors">
          <TrendingUp size={12} />
          <span className="font-mono text-[10px] font-bold">{likes}</span>
        </div>
      </div>
      <h3 className="font-display text-lg font-bold mb-2 group-hover:text-brand-purple transition-colors">
        {title}
      </h3>
      <p className="font-sans text-sm text-white/40 leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <span className="font-mono text-[9px] text-white/20">{time}</span>
        <button className="text-white/40 font-mono text-[9px] font-black uppercase hover:text-brand-purple transition-colors">
          View Intel
        </button>
      </div>
    </div>
  );
}

function AnalysisSummary({
  icon,
  label,
  value,
  trend,
  color,
  highlight = false,
}) {
  return (
    <div
      className={`glass-card p-6 rounded-3xl group cursor-pointer hover:border-brand-lime transition-all ${highlight ? "bg-brand-lime/10 border-brand-lime/30" : "border-white/5"}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={`text-${color} transition-transform group-hover:scale-110 duration-500`}
        >
          {icon}
        </div>
        <span className={`font-mono text-[10px] font-black text-${color}`}>
          {trend}
        </span>
      </div>
      <p className="font-mono text-[9px] font-bold text-white/30 uppercase tracking-widest mb-1">
        {label}
      </p>
      <h4 className="font-display text-xl font-bold">{value}</h4>
    </div>
  );
}
