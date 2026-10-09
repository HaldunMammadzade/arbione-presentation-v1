import type { ComponentType } from "react";
import { C, type IconName, type Tx } from "./primitives";
import { SlideHero, SlideProblem, SlideWhatIs, SlideBeforeAfter, SlideThreeViews, SlideWriteOnce, SlideFlow } from "./slides-intro";
import { SlideModules, SlideDashboard, SlideStructure, SlideAttendance, SlidePayroll, SlideTalent } from "./slides-people";
import { SlideFinance, SlideSupply, SlideCRM, SlideDocuments, SlideReports, SlideIntegrations, SlideDay, SlideGains } from "./slides-business";
import { SlideMobileApp, SlideDownload } from "./slides-mobile";
import { SlideXCard, SlideClosing } from "./slides-final";

export type DeckTag = "intro" | "platform" | "modules" | "final";
export type DeckSlide = { C: ComponentType; name: Tx; tag: DeckTag; icon: IconName; color: string };

export const DECK: DeckSlide[] = [
  { C: SlideHero, name: ["Arbione", "Arbione", "Arbione"], tag: "intro", icon: "spark", color: C.brand },
  { C: SlideProblem, name: ["Problem", "The problem", "Проблема"], tag: "intro", icon: "unlink", color: C.slate },
  { C: SlideWhatIs, name: ["Arbione nədir", "What is Arbione", "Что такое Arbione"], tag: "intro", icon: "layers", color: C.brand },
  { C: SlideBeforeAfter, name: ["Əvvəl və sonra", "Before & after", "До и после"], tag: "intro", icon: "scale", color: C.brand },
  { C: SlideThreeViews, name: ["Üç kabinet", "Three cabinets", "Три кабинета"], tag: "platform", icon: "monitor", color: C.brand },
  { C: SlideWriteOnce, name: ["Vahid məlumat", "Single data", "Единые данные"], tag: "platform", icon: "infinity", color: C.info },
  { C: SlideFlow, name: ["Bir axın", "One flow", "Единый поток"], tag: "platform", icon: "flow", color: C.brand },
  { C: SlideModules, name: ["17 modul", "17 modules", "17 модулей"], tag: "modules", icon: "layout", color: C.brand },
  { C: SlideDashboard, name: ["İdarə paneli", "Dashboard", "Панель"], tag: "modules", icon: "chart", color: C.warn },
  { C: SlideStructure, name: ["Struktur və işçilər", "Structure & staff", "Структура и кадры"], tag: "modules", icon: "building", color: C.brand },
  { C: SlideAttendance, name: ["Davamiyyət və GPS", "Attendance & GPS", "Табель и GPS"], tag: "modules", icon: "clock", color: C.brand },
  { C: SlidePayroll, name: ["Əməkhaqqı", "Payroll", "Зарплата"], tag: "modules", icon: "wallet", color: C.brand },
  { C: SlideTalent, name: ["İstedad", "Talent", "Таланты"], tag: "modules", icon: "graduation", color: C.brand },
  { C: SlideFinance, name: ["Maliyyə", "Finance", "Финансы"], tag: "modules", icon: "landmark", color: C.ok },
  { C: SlideSupply, name: ["Mal axını", "Goods flow", "Товарный поток"], tag: "modules", icon: "truck", color: C.info },
  { C: SlideCRM, name: ["Müştərilər", "Clients", "Клиенты"], tag: "modules", icon: "handshake", color: C.info },
  { C: SlideDocuments, name: ["Sənədlər", "Documents", "Документы"], tag: "modules", icon: "sign", color: C.warn },
  { C: SlideReports, name: ["Hesabatlar", "Reports", "Отчёты"], tag: "modules", icon: "report", color: C.warn },
  { C: SlideIntegrations, name: ["İnteqrasiyalar", "Integrations", "Интеграции"], tag: "modules", icon: "plug", color: C.warn },
  { C: SlideMobileApp, name: ["Mobil tətbiq", "Mobile app", "Мобильное приложение"], tag: "platform", icon: "phone", color: C.brand },
  { C: SlideDay, name: ["Adi bir gün", "An ordinary day", "Обычный день"], tag: "final", icon: "sunrise", color: C.warn },
  { C: SlideGains, name: ["Nə qazandırır", "What you gain", "Что вы получаете"], tag: "final", icon: "trend", color: C.ok },
  { C: SlideXCard, name: ["XCard hədiyyə", "XCard gift", "Подарок XCard"], tag: "final", icon: "nfc", color: C.brand },
  { C: SlideDownload, name: ["Tətbiqi yüklə", "Get the app", "Скачать приложение"], tag: "final", icon: "download", color: C.info },
  { C: SlideClosing, name: ["Bağlanış", "Closing", "Завершение"], tag: "final", icon: "star", color: C.brand },
];

export const DECK_TAGS: { id: DeckTag | "all"; name: Tx }[] = [
  { id: "all", name: ["Hamısı", "All", "Все"] },
  { id: "intro", name: ["Giriş", "Intro", "Введение"] },
  { id: "platform", name: ["Platforma", "Platform", "Платформа"] },
  { id: "modules", name: ["Modullar", "Modules", "Модули"] },
  { id: "final", name: ["Yekun", "Summary", "Итоги"] },
];
