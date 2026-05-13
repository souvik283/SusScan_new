import React, { useState } from "react";
import { motion } from "motion/react";
import axios from "axios";

import {
  UploadCloud,
  FileText,
  AlertCircle,
  CheckCircle2,
  Clock,
  Globe,
} from "lucide-react";
// import { style } from "motion/react-client";

export default function AnalysisView() {
 
  const fetchdata = async () => {
    const response = await fetch(
          `${"https://botanical-famished-stillness.ngrok-free.dev/"}`,
          {
            method: "GET",
            // headers: { "Content-Type": "application/json" },
            // body: JSON.stringify({ input: "you are accecpected. come to dubai .alhabibi" }),
          },
        );
    console.log(response);
  };

  fetchdata()

  const [object, setObject] = useState("file");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle File Selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  // Handle Upload Button
  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploaded File:", selectedFile);

      // Close popup after upload
      setShowPopup(false);
    }
  };

  return (
    <div className="p-16 flex flex-col gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Analysis Input Column */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="glass-card p-8 rounded-3xl flex flex-col gap-6 border-white/5">
            <div className="flex justify-between items-center">
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Data Verification
              </h2>
              <div className="flex gap-2">
                <span
                  onClick={() => {
                    setObject("file");
                    // console.log(object)
                  }}
                  className=" cursor-pointer bg-white/5 text-brand-lime px-3 py-1 text-[10px] font-mono font-bold rounded-lg border border-brand-lime/20"
                >
                  FILE
                </span>
                <span
                  onClick={() => {
                    setObject("text");
                    // console.log(object)
                  }}
                  className="bg-white/5 cursor-pointer text-white/40 px-3 py-1 text-[10px] font-mono font-bold rounded-lg border border-white/10"
                >
                  TEXT
                </span>
              </div>
            </div>

            {/* <div
            style={{
              display: object=="file" ? "block" : "none"
            }}
             className="border-2 border-dashed border-white/10 rounded-2xl p-16 flex flex-col items-center justify-center gap-6 hover:border-brand-lime/50 hover:bg-brand-lime/5 transition-all cursor-pointer group">
              <div className="w-20 h-20 rounded-full bg-brand-lime/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <UploadCloud className="text-brand-lime" size={32} />
              </div>
              <div className="text-center">
                <p className="font-display text-xl font-bold text-brand-lime mb-2">
                  Drop malicious assets here
                </p>
                <p className="text-white/40 text-sm">
                  Supports images, documents, and code fragments
                </p>
              </div>
            </div> */}

            <div
              onClick={() => setShowPopup(true)}
              style={{
                display: object == "file" ? "block" : "none",
              }}
              className="border-2 border-dashed border-white/10 rounded-2xl p-16 flex flex-col items-center justify-center gap-6 hover:border-brand-lime/50 hover:bg-brand-lime/5 transition-all cursor-pointer group"
            >
              <div className="w-20 h-20 rounded-full bg-brand-lime/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <UploadCloud className="text-brand-lime" size={32} />
              </div>

              <div className="text-center">
                <p className="font-display text-xl font-bold text-brand-lime mb-2">
                  Drop malicious assets here
                </p>

                <p className="text-white/40 text-sm">
                  Supports images, documents, and code fragments
                </p>
              </div>

              {/* Show Uploaded File Name */}
              {selectedFile && (
                <div className="mt-4 text-brand-lime text-sm bg-brand-lime/10 px-4 py-2 rounded-lg">
                  Uploaded: {selectedFile.name}
                </div>
              )}
            </div>

            {/* Popup Modal */}
            {showPopup && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                <div className="bg-[#111] border border-white/10 rounded-2xl p-8 w-[400px]">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Upload File
                  </h2>

                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="w-full text-white mb-6"
                  />

                  {/* Selected File Name */}
                  {selectedFile && (
                    <p className="text-brand-lime text-sm mb-4">
                      Selected: {selectedFile.name}
                    </p>
                  )}

                  <div className="flex justify-end gap-4">
                    <button
                      onClick={() => setShowPopup(false)}
                      className="px-4 py-2 rounded-lg bg-red-500 text-white"
                    >
                      Close
                    </button>

                    <button
                      onClick={handleUpload}
                      className="px-4 py-2 rounded-lg bg-brand-lime text-black font-semibold"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div
              style={{
                display: object == "text" ? "block" : "none",
              }}
              className="flex flex-col gap-3"
            >
              <label
                style={{
                  display: object == "text" ? "block" : "none",
                }}
                className="font-mono text-[10px] mb-1.5 font-bold text-white/40 uppercase tracking-[0.2em]"
              >
                SMS / Email Content
              </label>
              <textarea
                className="bg-[#050505] border border-white/10 rounded-xl p-5 font-mono text-xs focus:border-brand-lime/50 focus:ring-1 focus:ring-brand-lime/20 outline-none transition-all placeholder:text-white/10 min-h-[160px] uppercase text-white shadow-inner w-full"
                placeholder="Paste suspicious communications for deep linguistic analysis..."
              />
            </div>

            <button className="w-full bg-brand-lime text-brand-obsidian font-mono text-xs font-bold py-5 rounded-xl hover:brightness-110 transition-all font-black tracking-[0.3em] shadow-[0_0_30px_rgba(210,240,0,0.2)]">
              EXECUTE SCAN
            </button>
          </div>
        </div>

        {/* Results Sidebar */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="glass-card p-8 rounded-3xl h-full flex flex-col border-t-4 border-brand-purple">
            <h2 className="font-display text-2xl font-bold mb-8">
              Analysis Results
            </h2>

            <div className="flex-1 flex flex-col items-center justify-center py-8 relative">
              <div className="relative w-72 h-72 flex items-center justify-center">
                {/* Gauge Visualization */}
                <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_15px_rgba(255,0,60,0.2)]">
                  <circle
                    className="text-white/5"
                    cx="144"
                    cy="144"
                    r="110"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="8"
                  />
                  <circle
                    className="text-brand-red"
                    cx="144"
                    cy="144"
                    r="110"
                    fill="transparent"
                    stroke="currentColor"
                    strokeDasharray="700"
                    strokeDashoffset="100"
                    strokeLinecap="round"
                    strokeWidth="12"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="font-display text-7xl text-brand-red font-black">
                   28%
                  </span>
                  <span className="font-mono text-[10px] text-brand-red font-bold tracking-[0.3em] animate-pulse">
                    HIGH THREAT
                  </span>
                </div>
              </div>

              <div className="w-full mt-12 grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-1">
                    Duration
                  </p>
                  <p className="font-mono text-lg font-bold text-brand-lime">
                    142ms
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-1">
                    Engine
                  </p>
                  <p className="font-mono text-lg font-bold text-brand-purple">
                    NEURAL_DEEP
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto space-y-4 pt-8 border-t border-white/10">
              <StatusUpdate
                type="danger"
                message="Phishing pattern detected in URL structure."
              />
              <StatusUpdate
                type="danger"
                message="Social engineering markers identified."
              />
              <StatusUpdate
                type="success"
                message="Metadata sanitization complete."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="glass-card p-8 rounded-3xl border-white/5">
        <div className="flex justify-between items-center mb-8 px-2">
          <h3 className="font-display text-xl font-bold uppercase tracking-tighter">
            Recent Scans
          </h3>
          <button className="font-mono text-[10px] font-bold text-brand-lime hover:underline underline-offset-8 uppercase tracking-widest opacity-60 hover:opacity-100 transition-all">
            View Full Logs
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 font-mono text-[10px] text-white/30 uppercase tracking-[0.3em]">
                <th className="pb-4 px-4 font-bold">Timestamp</th>
                <th className="pb-4 px-4 font-bold">Target</th>
                <th className="pb-4 px-4 font-bold">Identifier</th>
                <th className="pb-4 px-4 font-bold">Status</th>
                <th className="pb-4 px-4 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="font-mono text-xs text-white/60">
              <AnalysisRow
                timestamp="2024-05-24 14:22:01"
                type="IMAGE/JPEG"
                id="IMG_9921_PH.jpg"
                status="danger"
              />
              <AnalysisRow
                timestamp="2024-05-24 13:45:12"
                type="DOC/PDF"
                id="Invoice_SEC_88.pdf"
                status="safe"
              />
              <AnalysisRow
                timestamp="2024-05-24 12:10:59"
                type="TEXT/SMS"
                id="+1 (555) 012-9900"
                status="warning"
              />
              <AnalysisRow
                timestamp="2024-05-24 11:02:44"
                type="FILE/ZIP"
                id="Update_Package.zip"
                status="danger"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatusUpdate({ type, message }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-2 h-2 rounded-full ${
          type === "danger"
            ? "bg-brand-red shadow-[0_0_10px_#ff003c]"
            : type === "success"
              ? "bg-brand-lime shadow-[0_0_10px_#d2f000]"
              : "bg-yellow-400"
        }`}
      ></div>
      <p
        className={`font-mono text-xs ${type === "danger" ? "text-brand-red" : "text-white/60"}`}
      >
        {message}
      </p>
    </div>
  );
}

function AnalysisRow({ timestamp, type, id, status }) {
  return (
    <tr className="border-b border-white/5 transition-colors hover:bg-white/[0.02] group">
      <td className="py-5 px-4 font-bold">{timestamp}</td>
      <td className="py-5 px-4 text-white/40">{type}</td>
      <td className="py-5 px-4 text-white font-bold">{id}</td>
      <td className="py-5 px-4">
        <span
          className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
            status === "danger"
              ? "bg-brand-red/10 text-brand-red border-brand-red/20"
              : status === "safe"
                ? "bg-brand-lime/10 text-brand-lime border-brand-lime/20"
                : "bg-yellow-400/10 text-yellow-400 border-yellow-400/20"
          }`}
        >
          {status === "danger"
            ? "Danger"
            : status === "safe"
              ? "Safe"
              : "Suspicious"}
        </span>
      </td>
      <td className="py-5 px-4 text-right">
        <button className="text-white/20 group-hover:text-brand-lime transition-all">
          View
        </button>
      </td>
    </tr>
  );
}
