import React from "react";
import { motion } from "motion/react";
import {
  LayoutDashboard,
  ShieldAlert,
  FileSearch,
  MessageSquare,
  BrainCircuit,
  Lock,
  User,
} from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "dashboard", label: "Overview", icon: LayoutDashboard },
    { id: "analysis", label: "File Analysis", icon: FileSearch },   
    { id: "whatsapp", label: "WhatsApp Bot", icon: MessageSquare },
    { id: "intelligence", label: "Intelligence", icon: BrainCircuit },

  ];

  return (
    <aside className="hidden md:flex flex-col h-screen sticky left-0 top-0 w-64 bg-[#0e0e0e]/90 backdrop-blur-2xl border-r border-white/5 p-6 gap-8 z-50">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-lime tracking-tight">
          SusScan
        </h1>
        
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
              activeTab === tab.id
                ? "bg-brand-lime text-brand-obsidian font-bold shadow-[0_0_20px_rgba(210,240,0,0.2)]"
                : "text-white/60 hover:bg-white/5 hover:text-brand-lime"
            }`}
          >
            <tab.icon size={20} />
            <span className="font-mono text-xs font-bold uppercase tracking-widest">
              {tab.label}
            </span>
          </button>
        ))}
      </nav>

    </aside>
  );
}
