import React from "react";
import { motion } from "motion/react";
import { Search, User } from "lucide-react";

export default function Header({ activeTab }) {
  const getTitle = () => {
    switch (activeTab) {
      case "dashboard":
        return "Verify Anything. Trust Nothing";
      case "intelligence":
        return "Threat Intelligence Hub";
      case "analysis":
        return "Think It's Legit? Check First";
      case "whatsapp":
        return "WhatsApp Security";
      default:
        return "Cyber-Guard";
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-brand-obsidian/80 backdrop-blur-lg border-b border-white/5 px-6 md:px-16 py-4 flex justify-between items-center shadow-[0_0_20px_rgba(210,240,0,0.05)]">
      <div className="flex items-center gap-8">
        <h1 className="font-display text-xl md:text-2xl font-bold text-white tracking-tight">
          {getTitle()}
        </h1>

        <nav className="hidden lg:flex gap-6">
         
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className=" flex items-center gap-4 py-1 px-5 rounded-xl bg-white/5 border border-white/5">
          <div className="w-9 h-9 rounded-lg bg-brand-lime/10 flex items-center justify-center border border-brand-lime/20 overflow-hidden shrink-0">
            <User className="text-brand-lime" size={20} />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-xs font-bold text-brand-lime truncate">
              User001
            </p>
            <p className="font-mono text-[10px] text-white/40 flex items-center gap-1.5 uppercase tracking-tighter">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse"></span>
              Active
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
