import React from 'react';
import { motion } from 'motion/react';
import { Shield, MessageCircle, AlertTriangle, CheckCircle, Zap, UserPlus, Search } from 'lucide-react';

export default function WhatsAppView() {
  return (
    <div className="p-8 md:p-16 flex flex-col gap-16 overflow-hidden">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-3 h-3 bg-[#25D366] rounded-full animate-pulse"></span>
            <span className="font-mono text-[10px] font-black text-[#25D366] tracking-[0.3em] uppercase">Instant Chat Protection Active</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Your Shield inside <span className="text-[#25D366]">WhatsApp.</span>
          </h1>
          <p className="text-lg text-white/50 leading-relaxed mb-12 max-w-xl">
            Real-time AI surveillance for your most private conversations. Cyber-Guard scans every link, file, and suspicious pattern to block scammers before they even say 'Hello'.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#25D366] text-black px-10 py-5 rounded-2xl font-mono text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(37,211,102,0.2)] hover:scale-[1.02] transition-all">
              <UserPlus size={20} />
              Add to Contacts
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-mono text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all">
              View Documentation
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="relative flex justify-center"
        >
          {/* Phone Mockup */}
          <div className="relative z-10 w-[300px] h-[600px] bg-[#0e0e0e] rounded-[3rem] p-4 border-[6px] border-[#1e1e1e] shadow-[0_0_100px_rgba(210,240,0,0.1)]">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-[#1e1e1e] rounded-b-3xl"></div>
             
             <div className="h-full bg-[#050505] rounded-[2.5rem] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="bg-[#075e54] p-5 flex items-center gap-3">
                   <div className="w-10 h-10 bg-brand-lime rounded-full flex items-center justify-center border border-white/10 shrink-0">
                      <Shield className="text-black" size={20} />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-white">Cyber-Guard Bot</p>
                      <p className="text-[10px] text-white/60">Active Protection</p>
                   </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 space-y-4">
                   <div className="bg-[#202c33] p-4 rounded-2xl rounded-tl-none max-w-[85%] text-white text-xs leading-relaxed">
                      Hello! Secure channel established. I'm monitoring this thread for suspicious activity.
                   </div>
                   <div className="self-end ml-auto bg-[#005c4b] p-4 rounded-2xl rounded-tr-none max-w-[85%] text-white text-xs break-all">
                      https://secure-bank-login-update.verify-account-xyz.com/auth
                   </div>
                   <div className="bg-brand-red/10 border border-brand-red/40 p-4 rounded-2xl text-white">
                      <div className="flex items-center gap-2 mb-2 text-brand-red">
                         <AlertTriangle size={14} />
                         <span className="font-mono text-[10px] font-black uppercase tracking-widest">Threat Detected</span>
                      </div>
                      <p className="text-[10px] leading-relaxed text-white/80">MALICIOUS LINK: Phishing attempt identified as 'Bank Credential Harvester'. Access blocked.</p>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lime/10 rounded-full blur-[120px]"></div>
        </motion.div>
      </section>

      {/* Architecture */}
      <section>
        <div className="mb-12">
          <p className="font-mono text-[10px] font-black text-brand-lime uppercase tracking-[0.4em] mb-4">Architecture</p>
          <h2 className="font-display text-4xl font-bold tracking-tight">Zero-Trust Interception</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <ArchitectureCard icon={<Search />} color="brand-lime" title="Scan" description="Continuous heuristic analysis of incoming data packets, identifying suspicious metadata before it hits your screen." />
           <ArchitectureCard icon={<Zap />} color="brand-purple" title="Alert" description="Instant push notification triggers if a malicious URL or infected attachment is detected within any chat thread." />
           <ArchitectureCard icon={<AlertTriangle />} color="brand-red" title="Block" description="Automated blacklisting of threat origins. Cyber-Guard prevents the execution of harmful code at the application layer." />
        </div>
      </section>

      {/* Live Feed */}
      <section className="glass-card p-12 rounded-[3rem] border-white/5">
         <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div>
              <p className="font-mono text-[10px] font-black text-brand-purple uppercase tracking-[0.4em] mb-4">Vigilance Stream</p>
              <h2 className="font-display text-4xl font-bold tracking-tight">Real-time Bot Interventions</h2>
            </div>
            <div className="flex items-center gap-4 font-mono text-[10px] font-black text-white/40 uppercase">
               <span>System Load: 14%</span>
               <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="bg-brand-lime h-full w-[14%]"></div>
               </div>
            </div>
         </div>

         <div className="space-y-3">
            <BotLogItem label="Threat Intercepted" detail="Target: User_8829... Blocked: Phishing Link" time="2s ago" type="danger" />
            <BotLogItem label="Scan Complete" detail="Target: User_1021... Clean: 1.2MB PDF" time="14s ago" type="success" />
            <BotLogItem label="Pattern Detected" detail="Target: User_4451... Warning: Impersonation" time="1m ago" type="danger" />
         </div>
      </section>
    </div>
  );
}

function ArchitectureCard({ icon, color, title, description }) {
  return (
    <div className={`glass-card p-10 rounded-[2.5rem] border-t-2 border-${color} transition-all duration-500 hover:scale-[1.02]`}>
      <div className={`w-14 h-14 bg-${color}/10 rounded-2xl flex items-center justify-center mb-8 text-${color}`}>
        {icon}
      </div>
      <h3 className="font-display text-2xl font-bold mb-4">{title}</h3>
      <p className="text-white/40 leading-relaxed">{description}</p>
    </div>
  );
}

function BotLogItem({ label, detail, time, type }) {
  return (
    <div className="glass-card bg-black/20 p-5 rounded-2xl flex items-center justify-between border-white/5">
       <div className="flex items-center gap-6">
          <div className={`w-2 h-2 rounded-full ${type === 'danger' ? 'bg-brand-red animate-pulse' : 'bg-cyan-400'}`}></div>
          <div>
            <p className="font-mono text-[10px] font-black uppercase tracking-widest text-[#e5e2e1]">{label}</p>
            <p className="font-sans text-sm text-white/40">{detail}</p>
          </div>
       </div>
       <span className="font-mono text-[10px] text-white/20">{time}</span>
    </div>
  );
}
