"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconSparkle, ArbioneLogo } from "../shared/Icons";
import { useLocale } from "@/contexts/LocaleContext";
import InteractiveTiltCard from "../shared/InteractiveTiltCard";

/* ── Sidebar menu icon SVGs ── */
const SidebarIconPanel = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor"/><rect x="9" y="1" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/><rect x="1" y="9" width="6" height="6" rx="1" fill="currentColor" opacity="0.5"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" opacity="0.3"/></svg>
);
const SidebarIconUsers = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M2 14c0-3 2.5-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
);
const SidebarIconBriefcase = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="5" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M5 5V3.5A1.5 1.5 0 016.5 2h3A1.5 1.5 0 0111 3.5V5" stroke="currentColor" strokeWidth="1.5"/></svg>
);
const SidebarIconOrg = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="3" r="2" stroke="currentColor" strokeWidth="1.2"/><circle cx="4" cy="11" r="2" stroke="currentColor" strokeWidth="1.2"/><circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.2"/><path d="M8 5v2M8 7L4 9M8 7l4 2" stroke="currentColor" strokeWidth="1.2"/></svg>
);
const SidebarIconClock = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/><path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
);
const SidebarIconDoc = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="1" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M6 5h4M6 8h4M6 11h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
);
const SidebarIconCheckSquare = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const SidebarIconCRM = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 14s-5-3.5-5-7a3.5 3.5 0 017 0 3.5 3.5 0 017 0c0 3.5-5 7-5 7h-4z" stroke="currentColor" strokeWidth="1.2" fill="none"/><circle cx="8" cy="7" r="1.5" fill="currentColor" opacity="0.5"/></svg>
);
const SidebarIconWallet = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M1 7h14" stroke="currentColor" strokeWidth="1.2"/><circle cx="12" cy="10" r="1" fill="currentColor"/></svg>
);
const SidebarIconChart = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="9" width="3" height="5" rx="0.5" fill="currentColor" opacity="0.5"/><rect x="6.5" y="5" width="3" height="9" rx="0.5" fill="currentColor" opacity="0.7"/><rect x="11" y="2" width="3" height="12" rx="0.5" fill="currentColor"/></svg>
);
const SidebarIconStar = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1l2 4.5 5 .5-3.8 3.3L12.3 14 8 11.5 3.7 14l1.1-4.7L1 6l5-.5z" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg>
);
const SidebarIconSettings = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.5 1.5M11.5 11.5L13 13M13 3l-1.5 1.5M4.5 11.5L3 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
);
const SidebarIconMegaphone = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 3L4 6H2a1 1 0 00-1 1v2a1 1 0 001 1h2l8 3V3z" stroke="currentColor" strokeWidth="1.2" fill="none"/><path d="M14 6.5c1 .5 1 2.5 0 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
);
const SidebarIconBox = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L14 4v8l-6 3L2 12V4l6-3z" stroke="currentColor" strokeWidth="1.2"/><path d="M8 8v7M2 4l6 4 6-4" stroke="currentColor" strokeWidth="1.2"/></svg>
);
const SidebarIconGraduation = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L1 6l7 4 7-4-7-4z" stroke="currentColor" strokeWidth="1.2" fill="none"/><path d="M3 7.5v4c0 1.5 2.5 3 5 3s5-1.5 5-3v-4" stroke="currentColor" strokeWidth="1.2"/><path d="M14 6v5" stroke="currentColor" strokeWidth="1.2"/></svg>
);
const SidebarIconChevron = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 2l4 3-4 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

/* ── Quick-access card icons for portal ── */
const QAIconUser = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
);
const QAIconBell = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6a4 4 0 018 0v2l2 2H2l2-2V6z" stroke="currentColor" strokeWidth="1.3"/><path d="M6 12a2 2 0 004 0" stroke="currentColor" strokeWidth="1.2"/></svg>
);
const QAIconCalendar = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.3"/><path d="M2 7h12M5 1v3M11 1v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
);
const QAIconClock2 = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3"/><path d="M8 5v3l2.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
);
const QAIconDoor = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="2" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M8 5v6M6 8h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
);
const QAIconSuitcase = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="5" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.3"/><path d="M5 5V3.5A1.5 1.5 0 016.5 2h3A1.5 1.5 0 0111 3.5V5" stroke="currentColor" strokeWidth="1.3"/></svg>
);
const QAIconClipboard = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="2" width="10" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/><path d="M6 5h4M6 8h4M6 11h2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg>
);
const QAIconCalendarCheck = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.3"/><path d="M2 7h12" stroke="currentColor" strokeWidth="1.2"/><path d="M6 10l1.5 1.5L10 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

/* ── Employee Portal Fake UI ── */
function FakeEmployeePortalUI() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = {
    bg: isDarkMode ? "#0d1028" : "#ffffff",
    sidebarBg: isDarkMode ? "#0a0c1f" : "#f8fafc",
    border: isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(99,102,241,0.08)",
    borderStrong: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(99,102,241,0.15)",
    textHeading: isDarkMode ? "text-white" : "text-slate-800",
    textSecondary: isDarkMode ? "text-white/55" : "text-slate-500",
    textTertiary: isDarkMode ? "text-white/25" : "text-slate-400",
    menuActiveBg: isDarkMode ? "bg-gradient-to-r from-primary/20 to-accent/10 border border-primary/20" : "bg-gradient-to-r from-primary/10 to-accent/5 border border-primary/15",
    menuHoverBg: isDarkMode ? "hover:bg-white/[0.03]" : "hover:bg-slate-200/50",
    cardBg: isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.015)",
    cardBorder: isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(99,102,241,0.06)",
    iconBg: isDarkMode ? "bg-white/[0.04]" : "bg-slate-200/50",
    iconColor: isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"
  };

  const menuItems = [
    { icon: <SidebarIconPanel/>, label: "Panel", active: false },
    { icon: <SidebarIconUsers/>, label: "İşçi portalı", hasChevron: true, active: true },
    { icon: <SidebarIconBriefcase/>, label: "Menecer portalı", hasChevron: true },
    { icon: <SidebarIconOrg/>, label: "Təşkilat", hasChevron: true },
    { icon: <SidebarIconClock/>, label: "Davamiyyət", hasChevron: true },
    { icon: <SidebarIconDoc/>, label: "Əmək münasibətləri", hasChevron: true },
    { icon: <SidebarIconDoc/>, label: "Əmrlər və Təsdiqlər", hasChevron: true },
    { icon: <SidebarIconCheckSquare/>, label: "İşə qəbul" },
    { icon: <SidebarIconCRM/>, label: "CRM" },
    { icon: <SidebarIconWallet/>, label: "Maliyyə", hasChevron: true },
    { icon: <SidebarIconStar/>, label: "Satınalma", hasChevron: true },
    { icon: <SidebarIconWallet/>, label: "Əməkhaqqı Üçotu", hasChevron: true },
    { icon: <SidebarIconChart/>, label: "Performans", hasChevron: true },
    { icon: <SidebarIconMegaphone/>, label: "Anonslar", hasChevron: true },
    { icon: <SidebarIconBox/>, label: "Anbar", hasChevron: true },
    { icon: <SidebarIconGraduation/>, label: "Təlim", hasChevron: true },
  ];

  const quickAccessItems = [
    { icon: <QAIconUser/>, title: "Şəxsi məlumatlar", desc: "Profil, müqavilə və əlaqə məlumatları", color: "#6366f1" },
    { icon: <QAIconBell/>, title: "Elanlar", desc: "Şirkət elanları və bildirişlər", color: "#22d3ee" },
    { icon: <QAIconSuitcase/>, title: "Məzuniyyət", desc: "İcazə sorğuları və məzuniyyət balansı", color: "#a78bfa" },
    { icon: <QAIconClock2/>, title: "İş vaxtı cədvəli", desc: "Timesheet və davamiyyət", color: "#10b981" },
    { icon: <QAIconDoor/>, title: "Giriş-çıxış", desc: "Bugünkü status, tarixçə və düzəliş sorğuları", color: "#f97316" },
    { icon: <QAIconCalendar/>, title: "Aktivlərim", desc: "Təhkim olunmuş aktivlər və qəbul", color: "#818cf8" },
    { icon: <QAIconClipboard/>, title: "Tapşırıqlar", desc: "Layihə tapşırıqları və status", color: "#64748b" },
    { icon: <QAIconCalendarCheck/>, title: "Təqvim", desc: "Şirkət təqvimi və bayramlar", color: "#ef4444" },
  ];

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden transition-colors duration-300" style={{ background: theme.bg, border: `1px solid ${theme.border}` }}>
      <div className="flex h-full">
        {/* ── Sidebar ── */}
        <div className="w-[145px] flex-shrink-0 flex flex-col border-r transition-colors duration-300" style={{ background: theme.sidebarBg, borderColor: theme.border }}>
          {/* Logo */}
          <div className="px-3 py-2.5 flex items-center border-b transition-colors duration-300" style={{ borderColor: theme.border }}>
            <ArbioneLogo height={22} className={`transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`} />
          </div>

          {/* Search */}
          <div className="px-2.5 py-1.5">
            <div className="flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-300" style={{ background: isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)", border: `1px solid ${theme.border}` }}>
              <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><circle cx="5" cy="5" r="4" stroke={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} strokeWidth="1.5"/><path d="M8.5 8.5L11 11" stroke={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} strokeWidth="1.5" strokeLinecap="round"/></svg>
              <span className={`text-[6px] transition-colors duration-300 ${theme.textTertiary}`}>Axtar [CTRL + K]</span>
            </div>
          </div>

          {/* Menu */}
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
                {item.hasChevron && <span className={`transition-colors duration-300 ${theme.textTertiary}`}><SidebarIconChevron/></span>}
              </motion.div>
            ))}
          </div>

          {/* Sidebar footer */}
          <div className="px-2.5 py-2 border-t transition-colors duration-300 space-y-[1px]" style={{ borderColor: theme.border }}>
            {[
              { icon: <SidebarIconSettings/>, label: "Layihənin İdarə olunması" },
              { icon: <SidebarIconSettings/>, label: "Əsas vasitələr" },
              { icon: <SidebarIconSettings/>, label: "Sənəd dövriyyəsi" },
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-1.5 px-2 py-[3px] rounded-md text-[6.5px] transition-colors duration-300 ${theme.textSecondary}`}>
                <span className={`transition-colors duration-300 ${theme.textTertiary}`}>{item.icon}</span>
                <span className="flex-1 truncate">{item.label}</span>
                <span className={`transition-colors duration-300 ${theme.textTertiary}`}><SidebarIconChevron/></span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b transition-colors duration-300" style={{ borderColor: theme.border }}>
            <div className="flex items-center gap-2">
              <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><circle cx="5" cy="5" r="4" stroke={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} strokeWidth="1.5"/><path d="M8.5 8.5L11 11" stroke={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} strokeWidth="1.5" strokeLinecap="round"/></svg>
              <span className={`text-[6px] transition-colors duration-300 ${theme.textTertiary}`}>Axtar [CTRL + K]</span>
            </div>
            <div className="flex items-center gap-2">
              {/* Dark/Light mode toggle switch */}
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-300 border"
                style={{ 
                  background: isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
                  borderColor: theme.borderStrong
                }}
                title="Açıq/Tünd rejim keçidi"
              >
                {isDarkMode ? (
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                ) : (
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2.5"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
                )}
              </button>

              <div className="flex items-center gap-1.5">
                {[1,2,3].map(i => (
                  <div key={i} className="w-4 h-4 rounded flex items-center justify-center transition-colors duration-300" style={{ background: isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)" }}>
                    <div className="w-2 h-2 rounded-sm bg-white/10"/>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5 pl-1">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center">
                  <span className="text-white text-[6px] font-bold">MF</span>
                </div>
                <div>
                  <div className={`text-[6px] font-medium transition-colors duration-300 ${theme.textHeading}`}>Fətaliyev Murad Ö...</div>
                  <div className={`text-[5px] transition-colors duration-300 ${theme.textTertiary}`}>HR Manager</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Portal Content */}
          <div className="flex-1 px-4 pt-3 pb-2 overflow-hidden">
            {/* Welcome Banner */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="rounded-lg px-3 py-2 mb-3 flex items-center gap-2"
              style={{ background: isDarkMode ? "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(167,139,250,0.15))" : "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(167,139,250,0.05))", border: `1px solid ${theme.borderStrong}` }}
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[6px] font-bold">👋</span>
              </div>
              <div>
                <div className={`text-[8px] font-bold transition-colors duration-300 ${theme.textHeading}`}>Xoş gəldiniz, Murad!</div>
                <div className={`text-[5px] transition-colors duration-300 ${theme.textSecondary}`}>Bütün şəxsi HR məlumatlarınızı bir yerdən idarə edin</div>
              </div>
            </motion.div>

            {/* Three Info Cards */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {[
                { icon: "💼", title: "HR Menecer", sub1: "Vəzifə", sub2: "İnsan Resursları", color: "#6366f1" },
                { icon: "🏢", title: "Arbinex MMC", sub1: "Şirkət", sub2: "FM-000001", color: "#10b981" },
                { icon: "📅", title: "17.08.2026 - 16.08.2027", sub1: "İş ili", sub2: "0 ay staj", color: "#22d3ee" },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="rounded-lg p-2.5 transition-all duration-300"
                  style={{ background: theme.cardBg, border: `1px solid ${theme.cardBorder}` }}
                >
                  <div className="flex items-start gap-1.5 mb-1">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center text-[8px]" style={{ background: `${card.color}15` }}>
                      {card.icon}
                    </div>
                  </div>
                  <div className={`text-[7px] font-bold mb-0.5 transition-colors duration-300 ${theme.textHeading}`}>{card.title}</div>
                  <div className={`text-[5px] transition-colors duration-300 ${theme.textTertiary}`}>{card.sub1}</div>
                  <div className={`text-[5.5px] transition-colors duration-300 ${theme.textSecondary}`}>{card.sub2}</div>
                </motion.div>
              ))}
            </div>

            {/* Sürətli keçidlər section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mb-2"
            >
              <div className={`text-[7px] font-semibold mb-2 transition-colors duration-300 ${theme.textSecondary}`}>Sürətli keçidlər</div>
              <div className="grid grid-cols-3 gap-2">
                {quickAccessItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.6 + i * 0.06 }}
                    className={`flex items-center gap-2 rounded-lg p-2 cursor-default transition-all duration-300 ${theme.menuHoverBg}`}
                    style={{ background: theme.cardBg, border: `1px solid ${theme.cardBorder}` }}
                  >
                    <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}18`, color: item.color }}>
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className={`text-[6px] font-semibold truncate transition-colors duration-300 ${theme.textHeading}`}>{item.title}</div>
                      <div className={`text-[4.5px] truncate transition-colors duration-300 ${theme.textTertiary}`}>{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className={`text-center text-[5px] transition-colors duration-300 ${theme.textTertiary} pt-1`}>
              © 2026, Made with by ARBINEX TECH SOLUTIONS
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle animated scanning line */}
      <motion.div
        className="absolute left-[145px] right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.25), transparent)" }}
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export default function SlideStory() {
  const { t } = useLocale();

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-16 overflow-hidden" style={{ background: "#0a0b1e" }}>
      <div className="absolute inset-0 mesh-gradient opacity-30"/>
      <div className="absolute inset-0 grid-bg opacity-40"/>
      <div className="aurora-blob" style={{ width: 600, height: 600, background: "#6366f1", top: "-20%", left: "-20%", opacity: 0.3 }}/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#a78bfa", bottom: "-20%", right: "-20%", opacity: 0.25, animationDelay: "-10s" }}/>
      
      {[...Array(40)].map((_, i) => (
        <motion.div key={i} className="absolute w-1 h-1 bg-white rounded-full" style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%` }} animate={{ opacity: [0.1, 0.8, 0.1], scale: [1, 1.5, 1] }} transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}/>
      ))}

      <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="relative z-10 text-center mb-10">
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
          <IconSparkle size={14} className="text-accent"/>
          <span className="text-white/80 text-xs tracking-[0.3em] uppercase font-semibold">{t.badges.ourStory}</span>
        </motion.div>
        
        <h2 className="text-5xl font-black text-white mb-3 tracking-[-0.02em] leading-tight">
          {t.slide7.titlePart1}
        </h2>
        <p className="text-3xl gradient-text-premium font-bold">
          {t.slide7.titlePart2}
        </p>
      </motion.div>

      <div className="relative z-10 max-w-6xl grid grid-cols-[1fr_1.1fr] gap-16 items-center">
        <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="space-y-5 text-white/85 text-lg leading-relaxed">
          <p>{t.slide7.p1Prefix} <span className="gradient-text-premium font-semibold">Arbione</span>{t.slide7.p1Suffix}</p>
          <p>{t.slide7.p2}</p>
          <div className="relative p-5 rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(167,139,250,0.1))", border: "1px solid rgba(167,139,250,0.2)" }}>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-primary"/>
            <p className="italic text-white/90">{t.slide7.p3}</p>
          </div>
        </motion.div>

        <InteractiveTiltCard delay={0.6} glowColor="rgba(99, 102, 241, 0.35)" maxTilt={5}>
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -inset-4 rounded-3xl blur-3xl opacity-30 pointer-events-none"
            style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa, #22d3ee)" }}
          />
          <div className="relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <FakeEmployeePortalUI />
          </div>
        </InteractiveTiltCard>
      </div>
    </div>
  );
}
