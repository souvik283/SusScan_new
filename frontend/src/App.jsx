import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import HomeView from "./components/HomeView";
import IntelligenceView from "./components/IntelligenceView";
import AnalysisView from "./components/AnalysisView";
import WhatsAppView from "./components/WhatsAppView";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderView = () => {
    switch (activeTab) {
      case "dashboard":
        return <HomeView activeTab={activeTab} setActiveTab={setActiveTab} />;
      case "intelligence":
        return <IntelligenceView />;
      case "analysis":
        return <AnalysisView />;
      case "whatsapp":
        return <WhatsAppView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-brand-obsidian overflow-x-hidden selection:bg-brand-lime selection:text-brand-obsidian">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header activeTab={activeTab} />

        <main className="flex-1 custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-[1600px] mx-auto px-4 md:px-16"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
          <Footer />
        </main>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-24 w-full border-t border-brand-lime/10 bg-brand-obsidian/80 backdrop-blur-xl">
      <div className="max-w-[1600px] mx-auto px-16 py-16 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-2xl font-display font-black text-brand-lime tracking-tighter">
            SusScan
          </span>
          <p className=" leading-5 font-mono text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] max-w-xs">
            © 2026 SusScan. <br />
            Protecting the void through artificial neural defense.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {["Privacy Protocol", "Service Terms", "API Status", "Support"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="font-mono text-[10px] font-black text-white/40 hover:text-brand-lime transition-all uppercase tracking-widest underline underline-offset-8 decoration-white/10 hover:decoration-brand-lime"
              >
                {link}
              </a>
            ),
          )}
        </div>
      </div>

      {/* Ticker Bar */}
      <div className="w-full bg-brand-lime/5 border-t border-white/5 py-4 overflow-hidden">
        <div className="flex whitespace-nowrap gap-16 animate-infinite-scroll">
          <TickerItem
            type="danger"
            label="CRITICAL THREAT DETECTED:"
            value="HEURISTIC_EXPLOIT_B12 - SOURCE: 192.168.1.1 - NULLIFIED"
          />
          <TickerItem
            type="safe"
            label="LIVE STATUS:"
            value="GLOBAL PROTECTIVE MESH AT 100% CAPACITY"
          />
          <TickerItem
            type="warning"
            label="RECENT SCAN:"
            value="WAV_ASSET_44 - CLEAN - TRUST SCORE: 0.99"
          />
          <TickerItem type="safe" label="UPTIME:" value="365:00:00:00" />
          {/* Duplicate for seamless scrolling */}
          <TickerItem
            type="danger"
            label="CRITICAL THREAT DETECTED:"
            value="HEURISTIC_EXPLOIT_B12 - SOURCE: 192.168.1.1 - NULLIFIED"
          />
          <TickerItem
            type="safe"
            label="LIVE STATUS:"
            value="GLOBAL PROTECTIVE MESH AT 100% CAPACITY"
          />
        </div>
      </div>
    </footer>
  );
}

function TickerItem({ type, label, value }) {
  const colorClass =
    type === "danger"
      ? "text-brand-red"
      : type === "safe"
        ? "text-brand-lime"
        : "text-brand-purple";
  return (
    <div className="flex items-center gap-3 shrink-0">
      <span
        className={`font-mono text-[9px] font-black uppercase tracking-widest ${colorClass}`}
      >
        {label}
      </span>
      <span className="font-mono text-[9px] text-white/60 font-bold uppercase">
        {value}
      </span>
    </div>
  );
}
