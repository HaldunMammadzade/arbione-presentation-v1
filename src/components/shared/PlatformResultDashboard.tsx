"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArbioneLogo } from "./Icons";

const SidebarIconPanel = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor" />
    <rect x="9" y="1" width="6" height="6" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="1" y="9" width="6" height="6" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" opacity="0.3" />
  </svg>
);

const SidebarIconUsers = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 14c0-3 2.5-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SidebarIconBriefcase = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="5" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 5V3.5A1.5 1.5 0 016.5 2h3A1.5 1.5 0 0111 3.5V5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const SidebarIconOrg = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="3" r="2" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="4" cy="11" r="2" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.2" />
    <path d="M8 5v2M8 7L4 9M8 7l4 2" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const SidebarIconClock = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SidebarIconDoc = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="3" y="1" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 5h4M6 8h4M6 11h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const SidebarIconCheckSquare = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SidebarIconCRM = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 14s-5-3.5-5-7a3.5 3.5 0 017 0 3.5 3.5 0 017 0c0 3.5-5 7-5 7h-4z" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <circle cx="8" cy="7" r="1.5" fill="currentColor" opacity="0.5" />
  </svg>
);

const SidebarIconWallet = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1 7h14" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="10" r="1" fill="currentColor" />
  </svg>
);

const SidebarIconChart = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="9" width="3" height="5" rx="0.5" fill="currentColor" opacity="0.5" />
    <rect x="6.5" y="5" width="3" height="9" rx="0.5" fill="currentColor" opacity="0.7" />
    <rect x="11" y="2" width="3" height="12" rx="0.5" fill="currentColor" />
  </svg>
);

const SidebarIconStar = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1l2 4.5 5 .5-3.8 3.3L12.3 14 8 11.5 3.7 14l1.1-4.7L1 6l5-.5z" stroke="currentColor" strokeWidth="1.2" fill="none" />
  </svg>
);

const SidebarIconSettings = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.5 1.5M11.5 11.5L13 13M13 3l-1.5 1.5M4.5 11.5L3 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const SidebarIconMegaphone = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M12 3L4 6H2a1 1 0 00-1 1v2a1 1 0 001 1h2l8 3V3z" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M14 6.5c1 .5 1 2.5 0 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const SidebarIconBox = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1L14 4v8l-6 3L2 12V4l6-3z" stroke="currentColor" strokeWidth="1.2" />
    <path d="M8 8v7M2 4l6 4 6-4" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const SidebarIconChevron = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M3 2l4 3-4 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function PlatformResultDashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = {
    bg: isDarkMode ? "#0d1028" : "#ffffff",
    sidebarBg: isDarkMode ? "#0a0c1f" : "#f8fafc",
    border: isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(99,102,241,0.08)",
    borderStrong: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(99,102,241,0.15)",
    textHeading: isDarkMode ? "text-white" : "text-slate-800",
    textSecondary: isDarkMode ? "text-white/55" : "text-slate-500",
    textTertiary: isDarkMode ? "text-white/25" : "text-slate-400",
    menuActiveBg: isDarkMode
      ? "bg-gradient-to-r from-primary/20 to-accent/10 border border-primary/20"
      : "bg-gradient-to-r from-primary/10 to-accent/5 border border-primary/15",
    menuHoverBg: isDarkMode ? "hover:bg-white/[0.03]" : "hover:bg-slate-200/50",
    cardBg: isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.015)",
    cardBorder: isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(99,102,241,0.06)",
    tableRowBg: isDarkMode ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.005)",
    tableRowHover: isDarkMode ? "hover:bg-white/[0.02]" : "hover:bg-slate-100/50",
    iconBg: isDarkMode ? "bg-white/[0.04]" : "bg-slate-200/50",
    iconColor: isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)",
  };

  const menuItems = [
    { icon: <SidebarIconPanel />, label: "Panel", active: false },
    { icon: <SidebarIconUsers />, label: "İşçi portalı", hasChevron: true },
    { icon: <SidebarIconBriefcase />, label: "Menecer portalı", hasChevron: true },
    { icon: <SidebarIconOrg />, label: "Təşkilat", hasChevron: true },
    { icon: <SidebarIconClock />, label: "Davamiyyət", hasChevron: true },
    { icon: <SidebarIconDoc />, label: "Əmək münasibətləri", hasChevron: true },
    { icon: <SidebarIconDoc />, label: "Əmrlər və Təsdiqlər", hasChevron: true },
    { icon: <SidebarIconCheckSquare />, label: "İşə qəbul", active: true },
    { icon: <SidebarIconCRM />, label: "CRM", hasChevron: false },
    { icon: <SidebarIconWallet />, label: "Maliyyə", hasChevron: true },
    { icon: <SidebarIconStar />, label: "Satınalma", hasChevron: true },
    { icon: <SidebarIconWallet />, label: "Əməkhaqqı Üçotu", hasChevron: true },
    { icon: <SidebarIconChart />, label: "Performans", hasChevron: true },
    { icon: <SidebarIconMegaphone />, label: "Anonslar", hasChevron: true },
    { icon: <SidebarIconBox />, label: "Anbar", hasChevron: true },
    { icon: <SidebarIconSettings />, label: "Təlim", hasChevron: true },
  ];

  const employees = [
    { name: "Elməddin Huseynov Murad", date: "17.06.2000", fin: "8ABC1B", age: "26 yaş", gender: "Kişi", phone: "+994 55 444 44 33", email: "elmeddin.huseynov1@gmail.c..", city: "Bakı şəhəri", status: "Aktiv", id: "3" },
    { name: "Aygun Mammadli Eldaniz", date: "20.08.1999", fin: "1111A", age: "26 yaş", gender: "Qadın", phone: "+994 99 999 99 99", email: "aygun.hasanzada.2020@gmail..", city: "Bakı şəhəri", status: "İşə qəbul prosesi", id: "—" },
    { name: "Əli Mammadov Etibar", date: "21.08.1992", fin: "8ABC1A", age: "33 yaş", gender: "Kişi", phone: "+994 51 333 33 22", email: "ali.mammadov@gmail.com", city: "Bakı şəhəri", status: "Aktiv", id: "5" },
    { name: "Azar Mammadzade Huseyin", date: "16.08.1975", fin: "2ABC127", age: "51 yaş", gender: "Kişi", phone: "+994 10 323 43 23", email: "azer@gmail.com", city: "Bakı şəhəri", status: "Aktiv", id: "4" },
    { name: "Murad Fataliyev Osgar", date: "09.01.2007", fin: "6F1CR13", age: "19 yaş", gender: "Kişi", phone: "+994 55 441 48 23", email: "murad.feteliyev.2020@gmail.c..", city: "Bakı şəhəri", status: "Aktiv", id: "2" },
  ];

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden transition-colors duration-300" style={{ background: theme.bg, border: `1px solid ${theme.border}` }}>
      <div className="flex h-full">
        <div className="w-[160px] flex-shrink-0 flex flex-col border-r transition-colors duration-300" style={{ background: theme.sidebarBg, borderColor: theme.border }}>
          <div className="px-3 py-2.5 flex items-center justify-between border-b transition-colors duration-300" style={{ borderColor: theme.border }}>
            <ArbioneLogo height={22} className={`transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`} />
            <div className="w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors duration-300" style={{ borderColor: theme.border }}>
              <span className={`transition-colors duration-300 ${theme.textSecondary}`}><SidebarIconSettings /></span>
            </div>
          </div>

          <div className="px-2.5 py-1.5">
            <div className="flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-300" style={{ background: isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)", border: `1px solid ${theme.border}` }}>
              <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                <circle cx="5" cy="5" r="4" stroke={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} strokeWidth="1.5" />
                <path d="M8.5 8.5L11 11" stroke={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className={`text-[6px] transition-colors duration-300 ${theme.textTertiary}`}>Axtar [CTRL + K]</span>
            </div>
          </div>

          <div className="flex-1 overflow-hidden px-1.5 py-0.5 space-y-[1px]">
            {menuItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.04, duration: 0.4 }}
                className={`flex items-center gap-1.5 px-2 py-[3px] rounded-md text-[6.5px] cursor-default transition-all duration-300 ${
                  item.active
                    ? `${theme.menuActiveBg} text-white`
                    : `${theme.textSecondary} ${theme.menuHoverBg}`
                }`}
              >
                <span className={item.active ? "text-accent" : `transition-colors duration-300 ${theme.textSecondary}`}>{item.icon}</span>
                <span className="flex-1 truncate">{item.label}</span>
                {item.hasChevron && <span className={`transition-colors duration-300 ${theme.textTertiary}`}><SidebarIconChevron /></span>}
              </motion.div>
            ))}
          </div>

          <div className="px-2.5 py-2 border-t transition-colors duration-300 space-y-[1px]" style={{ borderColor: theme.border }}>
            {[
              { icon: <SidebarIconSettings />, label: "Layihənin İdarə olunması" },
              { icon: <SidebarIconSettings />, label: "Əsas vasitələr" },
              { icon: <SidebarIconSettings />, label: "Sənəd dövriyyəsi" },
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-1.5 px-2 py-[3px] rounded-md text-[6.5px] transition-colors duration-300 ${theme.textSecondary}`}>
                <span className={`transition-colors duration-300 ${theme.textTertiary}`}>{item.icon}</span>
                <span className="flex-1 truncate">{item.label}</span>
                <span className={`transition-colors duration-300 ${theme.textTertiary}`}><SidebarIconChevron /></span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex items-center justify-between px-4 py-2 border-b transition-colors duration-300" style={{ borderColor: theme.border }}>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md flex items-center justify-center transition-colors duration-300" style={{ background: isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <rect x="1" y="1" width="3.5" height="3.5" rx="0.5" fill={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} />
                    <rect x="5.5" y="1" width="3.5" height="3.5" rx="0.5" fill={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} />
                    <rect x="1" y="5.5" width="3.5" height="3.5" rx="0.5" fill={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} />
                    <rect x="5.5" y="5.5" width="3.5" height="3.5" rx="0.5" fill={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} />
                  </svg>
                </div>
                <div className="w-5 h-5 rounded-md flex items-center justify-center transition-colors duration-300" style={{ background: isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 3h6M2 5h6M2 7h6" stroke={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} strokeWidth="1" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-300 border"
                style={{ background: isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)", borderColor: theme.borderStrong }}
                title="Açıq/Tünd rejim keçidi"
              >
                {isDarkMode ? (
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                ) : (
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2.5">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                )}
              </button>

              <div className="w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-300" style={{ background: isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)" }}>
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1v3M6 8v3M1 6h3M8 6h3" stroke={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="w-5 h-5 rounded-full flex items-center justify-center relative transition-colors duration-300" style={{ background: isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)" }}>
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4a4 4 0 018 0v2l1 2H1l1-2V4z" stroke={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} strokeWidth="1.2" />
                  <path d="M4.5 10a1.5 1.5 0 003 0" stroke={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} strokeWidth="1" />
                </svg>
              </div>

              <div className="flex items-center gap-1.5 pl-1">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center">
                  <span className="text-white text-[6px] font-bold">MF</span>
                </div>
                <div>
                  <div className={`text-[6px] font-medium transition-colors duration-300 ${theme.textHeading}`}>Fətaliyev Murad</div>
                  <div className={`text-[5px] transition-colors duration-300 ${theme.textTertiary}`}>HR Manager</div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 pt-3 pb-2">
            <div className="flex items-center justify-between mb-2">
              <div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className={`text-[11px] font-bold transition-colors duration-300 ${theme.textHeading}`}>
                  İşçilər
                </motion.div>
                <div className={`text-[5px] transition-colors duration-300 ${theme.textTertiary}`}>
                  Cari verilənlər, namizədlər və yaxın ad günləri
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button className={`px-2 py-0.5 rounded text-[5px] font-medium border transition-colors duration-300 ${isDarkMode ? "text-white/50 bg-white/[0.04] border-white/[0.06]" : "text-slate-600 bg-slate-100 border-slate-200"}`}>
                  İxrac et
                </button>
                <button className="px-2 py-0.5 rounded text-[5px] font-medium text-white bg-gradient-to-r from-primary to-accent">+ Əlavə et</button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 mb-3">
              {[
                { value: "5", label: "Ümumi İşçilər", color: "#6366f1" },
                { value: "0", label: "Namizədlər", color: "#f97316" },
                { value: "4", label: "Aktiv İşçilər", color: "#22d3ee" },
                { value: "1", label: "Yaxın ad günləri", color: "#10b981" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.0 + i * 0.1 }}
                  className="rounded-lg p-2 transition-all duration-300"
                  style={{ background: theme.cardBg, border: `1px solid ${theme.cardBorder}` }}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-4 h-4 rounded-md flex items-center justify-center" style={{ background: `${stat.color}20` }}>
                      <div className="w-2 h-2 rounded-sm" style={{ background: stat.color }} />
                    </div>
                    <span className="font-black text-[12px]" style={{ color: stat.color }}>{stat.value}</span>
                  </div>
                  <div className={`text-[5px] transition-colors duration-300 ${theme.textSecondary}`}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 px-4 pb-3 overflow-hidden">
            <div className="rounded-lg overflow-hidden transition-all duration-300" style={{ background: theme.tableRowBg, border: `1px solid ${theme.cardBorder}` }}>
              <div className="flex items-center justify-between px-3 py-1.5 border-b transition-colors duration-300" style={{ borderColor: theme.border }}>
                <div className={`text-[7px] font-semibold transition-colors duration-300 ${theme.textHeading}`}>İşçilərin siyahısı</div>
                <div className="flex items-center gap-1.5">
                  <button className={`px-1.5 py-0.5 rounded text-[5px] border transition-colors duration-300 ${isDarkMode ? "text-white/40 bg-white/[0.04] border-white/[0.06]" : "text-slate-500 bg-slate-100 border-slate-200"}`}>Görünüşlər</button>
                  <button className={`px-1.5 py-0.5 rounded text-[5px] border transition-colors duration-300 ${isDarkMode ? "text-white/40 bg-white/[0.04] border-white/[0.06]" : "text-slate-500 bg-slate-100 border-slate-200"}`}>Filter</button>
                  <button className={`px-1.5 py-0.5 rounded text-[5px] border transition-colors duration-300 ${isDarkMode ? "text-white/40 bg-white/[0.04] border-white/[0.06]" : "text-slate-500 bg-slate-100 border-slate-200"}`}>Sütunlar</button>
                </div>
              </div>

              <div className="grid grid-cols-[1.2fr_0.6fr_0.5fr_0.4fr_0.9fr_0.9fr_0.6fr_0.5fr_0.3fr] gap-0 px-3 py-1 border-b text-[5px] font-medium transition-colors duration-300" style={{ borderColor: theme.border, color: isDarkMode ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.4)" }}>
                <span>İŞÇİ</span>
                <span>FİN</span>
                <span>YAŞ</span>
                <span>CİNS</span>
                <span>TELEFON</span>
                <span>E-MAİL</span>
                <span>ŞƏHƏR</span>
                <span>STATUS</span>
                <span>ID</span>
              </div>

              {employees.map((emp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + i * 0.08 }}
                  className={`grid grid-cols-[1.2fr_0.6fr_0.5fr_0.4fr_0.9fr_0.9fr_0.6fr_0.5fr_0.3fr] gap-0 px-3 py-1.5 border-b text-[5px] items-center transition-colors duration-300 ${theme.tableRowHover}`}
                  style={{ borderColor: isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.05)" }}
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[5px] font-bold">{emp.name.charAt(0)}</span>
                    </div>
                    <div className="min-w-0">
                      <div className={`text-[5.5px] font-medium truncate transition-colors duration-300 ${theme.textHeading}`}>{emp.name}</div>
                      <div className={`text-[4px] transition-colors duration-300 ${theme.textTertiary}`}>{emp.date}</div>
                    </div>
                  </div>
                  <span className={`text-[5px] font-mono transition-colors duration-300 ${theme.textSecondary}`}>{emp.fin}</span>
                  <span className="text-cyan-500 font-medium text-[5px]">{emp.age}</span>
                  <span className={emp.gender === "Qadın" ? "text-pink-500 font-medium text-[5px]" : `text-[5px] transition-colors duration-300 ${theme.textSecondary}`}>{emp.gender}</span>
                  <span className={`text-[5px] transition-colors duration-300 ${theme.textSecondary}`}>{emp.phone}</span>
                  <span className={`text-[5px] truncate transition-colors duration-300 ${theme.textSecondary}`}>{emp.email}</span>
                  <span className={`text-[5px] transition-colors duration-300 ${theme.textTertiary}`}>{emp.city}</span>
                  <span>
                    <span className={`inline-block px-1 py-[1px] rounded text-[4.5px] font-medium ${emp.status === "Aktiv" ? "bg-emerald-500/15 text-emerald-500" : "bg-orange-500/15 text-orange-500"}`}>
                      {emp.status}
                    </span>
                  </span>
                  <span className={`text-[5px] transition-colors duration-300 ${theme.textTertiary}`}>{emp.id}</span>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className={`flex items-center justify-between pt-1.5 text-[5px] transition-colors duration-300 ${theme.textTertiary}`}>
              <span>Göstərilir 1-5 (5) · Seçilmiş 0 sətr · Müşayiət: max 3</span>
              <span>© 2026, Made with by ARBINEX TECH SOLUTIONS</span>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute left-[160px] right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)" }}
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
