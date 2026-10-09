"use client";
import { motion } from "framer-motion";
import {
  C,
  EASE,
  Slide,
  R,
  Eyebrow,
  Title,
  Hl,
  Lead,
  Head,
  Card,
  Accent,
  IconBox,
  Icon,
  Pill,
  Window,
  Fit,
  useCycle,
  useNarrow,
  useT,
  usePrefs,
  type IconName,
  type Tx,
} from "./primitives";
import { Logo, LogoMark } from "./logo";

/* =============================== 01 · HERO =============================== */

type Chip = { label: Tx; icon: IconName; color: string };
const ORBIT_DUR = 160;
const RINGS: { r: number; offset: number; chips: Chip[] }[] = [
  {
    r: 180,
    offset: 30,
    chips: [
      { label: ["Kadr", "HR", "Кадры"], icon: "users", color: C.brand },
      { label: ["Maliyyə", "Finance", "Финансы"], icon: "landmark", color: C.ok },
      { label: ["Satış", "Sales", "Продажи"], icon: "tag", color: C.info },
    ],
  },
  {
    r: 285,
    offset: 0,
    chips: [
      { label: ["Davamiyyət", "Attendance", "Табель"], icon: "clock", color: C.brand },
      { label: ["Anbar", "Warehouse", "Склад"], icon: "box", color: C.info },
      { label: ["Əməkhaqqı", "Payroll", "Зарплата"], icon: "wallet", color: C.ok },
      { label: ["GPS", "GPS", "GPS"], icon: "map", color: C.brand },
      { label: ["Müştərilər", "Clients", "Клиенты"], icon: "handshake", color: C.info },
      { label: ["Sənədlər", "Documents", "Документы"], icon: "sign", color: C.warn },
    ],
  },
  {
    r: 390,
    offset: 30,
    chips: [
      { label: ["Struktur", "Structure", "Структура"], icon: "building", color: C.brand },
      { label: ["Satınalma", "Purchasing", "Закупки"], icon: "cart", color: C.info },
      { label: ["İşə qəbul", "Hiring", "Найм"], icon: "briefcase", color: C.brand },
      { label: ["Kassa və bank", "Cash & bank", "Касса и банк"], icon: "coins", color: C.ok },
      { label: ["Performans", "Performance", "KPI"], icon: "target", color: C.brand },
      { label: ["Hesabat", "Reports", "Отчёты"], icon: "report", color: C.warn },
    ],
  },
];

function OrbitChip({ chip }: { chip: Chip }) {
  const t = useT();
  return (
    <div className="flex items-center gap-2.5 rounded-full pl-1.5 pr-4 py-1.5 whitespace-nowrap surface">
      <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `${chip.color}1a`, color: chip.color }}>
        <Icon name={chip.icon} size={17} />
      </span>
      <span className="text-[16px] font-medium text-ink/85">{t(chip.label)}</span>
    </div>
  );
}

function Orbit() {
  return (
    <div className="absolute" style={{ left: 1270, top: 426, width: 0, height: 0 }}>
      {RINGS.map((ring, ri) => (
        <motion.div
          key={ri}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3 + ri * 0.2, ease: EASE }}
          className={`absolute rounded-full border ${ri === 2 ? "border-dashed border-ink/[0.12]" : "border-ink/[0.09]"}`}
          style={{ width: ring.r * 2, height: ring.r * 2, left: -ring.r, top: -ring.r }}
        />
      ))}
      <div className="absolute rounded-full" style={{ width: 300, height: 300, left: -150, top: -150, background: `radial-gradient(circle, ${C.brand}22, transparent 70%)` }} />
      <motion.div className="absolute" style={{ left: 0, top: 0 }} animate={{ rotate: 360 }} transition={{ duration: ORBIT_DUR, repeat: Infinity, ease: "linear" }}>
        {RINGS.map((ring, ri) =>
          ring.chips.map((chip, ci) => {
            const a = ((ci / ring.chips.length) * 360 + ring.offset) * (Math.PI / 180);
            return (
              <div key={chip.label[0]} className="absolute" style={{ left: Math.round(Math.cos(a) * ring.r), top: Math.round(Math.sin(a) * ring.r) }}>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: ORBIT_DUR, repeat: Infinity, ease: "linear" }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 + ri * 0.25 + ci * 0.06, ease: EASE }}
                    style={{ x: "-50%", y: "-50%" }}
                  >
                    <OrbitChip chip={chip} />
                  </motion.div>
                </motion.div>
              </div>
            );
          })
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
        className="absolute w-[176px] h-[176px] rounded-full flex items-center justify-center"
        style={{
          x: "-50%",
          y: "-50%",
          background: `linear-gradient(150deg, #8a80f4, ${C.brand} 55%, #5b4fe0)`,
          boxShadow: `0 30px 70px -20px ${C.brand}99, inset 0 2px 0 rgba(255,255,255,0.3)`,
        }}
      >
        <motion.div
          className="absolute inset-[-14px] rounded-full"
          style={{ border: `1px solid ${C.brand}66` }}
          animate={{ scale: [1, 1.28], opacity: [0.8, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
        />
        <LogoMark h={82} color="#fff" />
      </motion.div>
    </div>
  );
}

const HERO_LINES: Record<string, string[]> = {
  az: ["İnsan, iş, pul", "və əməliyyat —", "bir sistemdə."],
  en: ["People, money,", "work, operations —", "one system."],
  ru: ["Люди, деньги,", "работа, операции —", "одна система."],
};
const HERO_SIZE: Record<string, number> = { az: 104, en: 94, ru: 84 };

export function SlideHero() {
  const t = useT();
  const { lang } = usePrefs();
  const narrow = useNarrow();
  const lines = HERO_LINES[lang];
  const stats: { v: string; l: Tx }[] = [
    { v: "17", l: ["modul", "modules", "модулей"] },
    { v: "3", l: ["kabinet", "cabinets", "кабинета"] },
    { v: "1", l: ["vahid baza", "single database", "единая база"] },
    { v: "3", l: ["platforma", "platforms", "платформы"] },
  ];
  return (
    <Slide>
      {!narrow && <Orbit />}
      <div className="relative w-[880px] h-full flex flex-col justify-center n:w-full n:h-auto">
        <R d={0.1} className="text-ink">
          <Logo h={narrow ? 38 : 56} />
        </R>
        <R d={0.25} className="mt-14 mb-7 flex items-center gap-4 n:mt-8 n:mb-4">
          <span className="h-[2px] w-12 rounded-full" style={{ background: C.brand }} />
          <span className="text-[17px] font-semibold uppercase tracking-[0.3em] text-ink/55 n:text-[11px] n:tracking-[0.2em]">
            {t(["Şirkətin idarəetmə sistemi", "Company management system", "Система управления компанией"])}
          </span>
        </R>
        <R d={0.35}>
          <h1
            className="font-display font-semibold tracking-[-0.045em] leading-[1] text-[length:var(--fs)] n:text-[38px] n:leading-[1.08]"
            style={{ "--fs": `${HERO_SIZE[lang]}px` } as React.CSSProperties}
          >
            {lines[0]}
            <br />
            {lines[1]}
            <br />
            <Hl>{lines[2]}</Hl>
          </h1>
        </R>
        <R d={0.55}>
          <p className="mt-9 text-[25px] leading-[1.55] text-ink/65 max-w-[780px] n:mt-5 n:text-[16px]">
            {t([
              "Kadrdan maliyyəyə, anbardan müştəriyə qədər bütün şirkət bir paneldə. Hər kəs öz roluna görə eyni mənzərənin ona aid hissəsini görür.",
              "From HR to finance, from warehouse to client — the whole company in one panel. Everyone sees their own part of the same picture, according to their role.",
              "От кадров до финансов, от склада до клиента — вся компания в одной панели. Каждый видит свою часть общей картины — согласно своей роли.",
            ])}
          </p>
        </R>
        <R d={0.75} className="mt-14 flex gap-12 n:mt-8 n:grid n:grid-cols-2 n:gap-x-6 n:gap-y-5">
          {stats.map((s, i) => (
            <div key={i} className="relative pl-5 n:pl-4">
              <span className="absolute left-0 top-1 bottom-1 w-[2px] rounded-full bg-ink/10" />
              <div className="font-display text-[52px] font-semibold leading-none tracking-tight n:text-[34px]">{s.v}</div>
              <div className="mt-2 text-[15px] uppercase tracking-[0.18em] text-ink/50 n:text-[11px]">{t(s.l)}</div>
            </div>
          ))}
        </R>
        {narrow && (
          <R d={0.9} className="mt-9 flex flex-wrap gap-2">
            {RINGS.flatMap((r) => r.chips).map((c) => (
              <OrbitChip key={c.label[0]} chip={c} />
            ))}
          </R>
        )}
      </div>
    </Slide>
  );
}

/* =============================== 02 · PROBLEM =============================== */

const ISLANDS: { label: Tx; where: Tx; icon: IconName; x: number; y: number; rot: number }[] = [
  { label: ["Kadr", "HR", "Кадры"], where: ["Excel cədvəli", "Excel sheet", "Таблица Excel"], icon: "users", x: 30, y: 20, rot: -3 },
  { label: ["Davamiyyət", "Attendance", "Табель"], where: ["Ayrıca proqram", "Separate app", "Отдельная программа"], icon: "clock", x: 560, y: 0, rot: 2 },
  { label: ["Əməkhaqqı", "Payroll", "Зарплата"], where: ["Mühasibin kompüteri", "Accountant's PC", "Компьютер бухгалтера"], icon: "wallet", x: 300, y: 235, rot: -2 },
  { label: ["Satış", "Sales", "Продажи"], where: ["Çat mesajları", "Chat messages", "Сообщения в чате"], icon: "tag", x: 0, y: 450, rot: 2 },
  { label: ["Anbar", "Warehouse", "Склад"], where: ["Ayrıca dəftər", "Paper notebook", "Отдельная тетрадь"], icon: "box", x: 590, y: 430, rot: -2 },
];
const LINKS = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 3],
  [2, 4],
  [3, 4],
];

function IslandCard({ it, h }: { it: (typeof ISLANDS)[number]; h?: number }) {
  const t = useT();
  return (
    <Card className="p-6 flex items-center gap-5 n:p-4 n:gap-3" style={{ height: h }}>
      <IconBox name={it.icon} color={C.slate} size={58} />
      <div className="min-w-0">
        <div className="text-[25px] font-semibold n:text-[16px]">{t(it.label)}</div>
        <div className="text-[18px] text-ink/50 mt-0.5 n:text-[13px]">{t(it.where)}</div>
      </div>
    </Card>
  );
}

export function SlideProblem() {
  const t = useT();
  const narrow = useNarrow();
  const cw = 330;
  const ch = 124;
  const center = (i: number) => ({ x: ISLANDS[i].x + cw / 2, y: ISLANDS[i].y + ch / 2 });
  const pains: { t: Tx; d: Tx; i: IconName }[] = [
    { t: ["Gecikmə", "Delays", "Задержки"], d: ["Sənəd mesajdan mesaja dolaşır", "Documents wander between chats", "Документы блуждают по чатам"], i: "clock" },
    { t: ["Unudulan təsdiq", "Lost approvals", "Забытые согласования"], d: ["Kimdə qaldığı bilinmir", "Nobody knows who has it", "Неясно, у кого застряло"], i: "bell" },
    { t: ["Təkrar iş", "Double work", "Двойная работа"], d: ["Eyni məlumat üç yerə yazılır", "Same data typed three times", "Одни данные вводят трижды"], i: "copy" },
  ];
  return (
    <Slide>
      <Eyebrow n="01" color={C.warn}>
        {t(["Problem", "The problem", "Проблема"])}
      </Eyebrow>
      <Title>
        {t(["Bir şirkət. ", "One company. ", "Одна компания. "])}
        <Hl color={C.warn}>{t(["Beş ayrı dünya.", "Five separate worlds.", "Пять разных миров."])}</Hl>
      </Title>
      <div className="flex-1 flex gap-16 mt-12 min-h-0 n:flex-col n:gap-6 n:mt-6">
        {narrow ? (
          <div className="grid grid-cols-2 gap-3">
            {ISLANDS.map((it, i) => (
              <R key={i} d={0.2 + i * 0.08} className={i === 4 ? "col-span-2" : ""}>
                <IslandCard it={it} />
              </R>
            ))}
          </div>
        ) : (
          <div className="relative w-[930px] h-[580px] shrink-0">
            <svg className="absolute inset-0 overflow-visible" width={930} height={580}>
              {LINKS.map(([a, b], i) => {
                const p = center(a);
                const q = center(b);
                const mx = (p.x + q.x) / 2;
                const my = (p.y + q.y) / 2;
                return (
                  <g key={i}>
                    <motion.line
                      x1={p.x}
                      y1={p.y}
                      x2={q.x}
                      y2={q.y}
                      stroke={C.warn}
                      strokeOpacity={0.45}
                      strokeWidth={1.5}
                      strokeDasharray="6 10"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 0.6 + i * 0.1 }}
                    />
                    <motion.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4 + i * 0.1 }} style={{ transformOrigin: `${mx}px ${my}px` }}>
                      <circle cx={mx} cy={my} r={14} style={{ fill: "rgb(var(--card))" }} stroke={C.warn} strokeWidth={1.5} />
                      <path d={`M${mx - 4.5} ${my - 4.5}l9 9M${mx + 4.5} ${my - 4.5}l-9 9`} stroke={C.warn} strokeWidth={2} strokeLinecap="round" />
                    </motion.g>
                  </g>
                );
              })}
            </svg>
            {ISLANDS.map((it, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: it.x, top: it.y, width: cw }}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: it.rot, y: [0, -9, 0] }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.2 + i * 0.12 },
                  scale: { duration: 0.8, delay: 0.2 + i * 0.12, ease: EASE },
                  rotate: { duration: 0.8, delay: 0.2 + i * 0.12 },
                  y: { duration: 4 + i * 0.6, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <IslandCard it={it} h={ch} />
              </motion.div>
            ))}
          </div>
        )}
        <div className="flex-1 flex flex-col justify-center gap-4 min-w-0">
          <Lead d={0.4} className="!text-[23px] mb-3 n:!text-[15px]">
            {t([
              "Kadr Excel-də, davamiyyət başqa proqramda, maaş mühasibdə, satış çatda, anbar isə ayrıca dəftərdə qalır.",
              "HR lives in Excel, attendance in another app, payroll on the accountant's PC, sales in chats and stock in a separate notebook.",
              "Кадры — в Excel, табель — в другой программе, зарплата — у бухгалтера, продажи — в чатах, склад — в отдельной тетради.",
            ])}
          </Lead>
          {pains.map((r, i) => (
            <R key={i} d={0.7 + i * 0.12} x={30} y={0}>
              <div className="flex items-center gap-5 py-4 border-b border-ink/[0.08] n:gap-3 n:py-3">
                <IconBox name={r.i} color={C.warn} size={48} />
                <span className="text-[24px] font-semibold w-[290px] shrink-0 n:text-[15px] n:w-auto">{t(r.t)}</span>
                <span className="text-[19px] text-ink/55 n:text-[13px] n:ml-auto n:text-right">{t(r.d)}</span>
              </div>
            </R>
          ))}
          <R d={1.2} className="mt-5">
            <Card className="px-9 py-7 n:px-5 n:py-5">
              <Accent color={C.warn} />
              <div className="font-display text-[40px] font-semibold tracking-tight leading-tight n:text-[22px]">
                {t(["“Bu rəqəm ", "“Where did ", "«Откуда "])}
                <Hl color={C.warn}>{t(["haradan", "this number", "взялась"])}</Hl>
                {t([" gəldi?”", " come from?”", " эта цифра?»"])}
              </div>
              <div className="mt-2 text-[18px] text-ink/50 n:text-[13px]">
                {t(["Hər ay sonu, hər iclasda eyni sual.", "Every month-end, every meeting — the same question.", "Каждый конец месяца, на каждом совещании — один и тот же вопрос."])}
              </div>
            </Card>
          </R>
        </div>
      </div>
    </Slide>
  );
}

/* =============================== 03 · WHAT IS =============================== */

const HUB: { l: Tx; i: IconName; c: string }[] = [
  { l: ["Struktur", "Structure", "Структура"], i: "building", c: C.brand },
  { l: ["Kadr", "HR", "Кадры"], i: "users", c: C.brand },
  { l: ["Davamiyyət", "Attendance", "Табель"], i: "clock", c: C.brand },
  { l: ["Əməkhaqqı", "Payroll", "Зарплата"], i: "wallet", c: C.ok },
  { l: ["Maliyyə", "Finance", "Финансы"], i: "landmark", c: C.ok },
  { l: ["Satınalma", "Purchasing", "Закупки"], i: "cart", c: C.info },
  { l: ["Anbar", "Warehouse", "Склад"], i: "box", c: C.info },
  { l: ["Satış", "Sales", "Продажи"], i: "tag", c: C.info },
  { l: ["Müştəri", "Clients", "Клиенты"], i: "handshake", c: C.info },
  { l: ["Sənəd", "Documents", "Документы"], i: "sign", c: C.warn },
  { l: ["Hesabat", "Reports", "Отчёты"], i: "report", c: C.warn },
  { l: ["GPS", "GPS", "GPS"], i: "map", c: C.brand },
];

function HubDiagram() {
  const t = useT();
  const W = 860;
  const H = 780;
  const cx = W / 2;
  const cy = H / 2;
  const nodes = HUB.map((n, i) => {
    const a = (i / HUB.length) * Math.PI * 2 - Math.PI / 2;
    return { ...n, x: Math.round(cx + Math.cos(a) * 335), y: Math.round(cy + Math.sin(a) * 318) };
  });
  return (
    <Fit w={W} h={H}>
      <svg className="absolute inset-0" width={W} height={H}>
        <circle cx={cx} cy={cy} r={230} fill="none" style={{ stroke: "rgb(var(--ink) / 0.07)" }} strokeDasharray="4 8" />
        {nodes.map((n, i) => (
          <g key={i}>
            <motion.line x1={n.x} y1={n.y} x2={cx} y2={cy} stroke={n.c} strokeOpacity={0.35} strokeWidth={1.5} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 + i * 0.05 }} />
            <circle r={4} fill={n.c}>
              <animateMotion dur="2.6s" begin={`${1.2 + i * 0.21}s`} repeatCount="indefinite" path={`M${n.x} ${n.y} L${cx} ${cy}`} />
              <animate attributeName="opacity" values="0;1;1;0" dur="2.6s" begin={`${1.2 + i * 0.21}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
      {nodes.map((n, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: n.x, top: n.y, x: "-50%", y: "-50%" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 + i * 0.05, ease: EASE }}
        >
          <div className="flex items-center gap-2.5 rounded-2xl pl-2 pr-4 py-2 whitespace-nowrap surface">
            <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${n.c}1a`, color: n.c }}>
              <Icon name={n.i} size={19} />
            </span>
            <span className="text-[18px] font-medium">{t(n.l)}</span>
          </div>
        </motion.div>
      ))}
      <motion.div
        className="absolute w-[220px] h-[220px] rounded-full flex flex-col items-center justify-center text-white"
        style={{ left: cx, top: cy, x: "-50%", y: "-50%", background: `linear-gradient(150deg, #8a80f4, ${C.brand} 55%, #5b4fe0)`, boxShadow: `0 40px 90px -30px ${C.brand}` }}
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: EASE }}
      >
        <LogoMark h={78} color="#fff" />
        <div className="mt-3 text-[14px] uppercase tracking-[0.28em] text-white/80">{t(["Bir panel", "One panel", "Одна панель"])}</div>
      </motion.div>
    </Fit>
  );
}

export function SlideWhatIs() {
  const t = useT();
  const narrow = useNarrow();
  return (
    <Slide>
      <div className="flex h-full items-center gap-10 n:flex-col n:items-stretch n:gap-7">
        <div className="w-[780px] shrink-0 n:w-full">
          <Eyebrow n="02">{t(["Həll · Arbione nədir", "Solution · What is Arbione", "Решение · Что такое Arbione"])}</Eyebrow>
          <Title size={76}>
            {t(["Şirkətin gündəlik ", "Your company’s daily ", "Ежедневная "])}
            <Hl>{t(["idarəetmə sistemi.", "management system.", "система управления компанией."])}</Hl>
          </Title>
          <Lead className="mt-7 n:mt-4">
            {t([
              "Şirkət strukturundan işçinin məzuniyyətinə, sahədəki hərəkətindən maaş hesabına, alış-satışdan rəhbərin təsdiqinə qədər — bütün proseslər bir paneldə.",
              "From company structure to an employee’s leave, from field movement to payroll, from purchasing and sales to the director’s approval — every process in one panel.",
              "От структуры компании до отпуска сотрудника, от перемещений в поле до расчёта зарплаты, от закупок и продаж до визы руководителя — все процессы в одной панели.",
            ])}
          </Lead>
          <R d={0.35} className="mt-9 n:mt-5">
            <Card className="p-7 flex gap-6 items-start n:p-4 n:gap-4">
              <Accent color={C.ok} />
              <IconBox name="coins" color={C.ok} size={60} />
              <p className="tx-body text-ink/75">
                {t([
                  "Pulun haradan gəldiyi, hara getdiyi və mühasibatda necə əks olunduğu da həmin panelin içindədir.",
                  "Where money comes from, where it goes and how it is reflected in accounting — all inside the same panel.",
                  "Откуда приходят деньги, куда уходят и как это отражается в бухгалтерии — всё в той же панели.",
                ])}
              </p>
            </Card>
          </R>
        </div>
        {narrow ? (
          <div className="grid grid-cols-3 gap-2">
            {HUB.map((n, i) => (
              <R key={i} d={0.3 + i * 0.03}>
                <div className="surface rounded-2xl p-3 flex flex-col items-center gap-2 text-center">
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${n.c}1a`, color: n.c }}>
                    <Icon name={n.i} size={19} />
                  </span>
                  <span className="text-[12px] font-medium leading-tight">{t(n.l)}</span>
                </div>
              </R>
            ))}
          </div>
        ) : (
          <HubDiagram />
        )}
      </div>
    </Slide>
  );
}

/* =============================== 04 · BEFORE / AFTER =============================== */

const BA: { k: Tx; i: IconName; b: Tx; a: Tx }[] = [
  {
    k: ["İşçi məlumatı", "Employee data", "Данные сотрудников"],
    i: "id",
    b: ["Bir neçə Excel faylı, köhnə versiyalar", "Several Excel files, outdated copies", "Несколько файлов Excel, устаревшие копии"],
    a: ["Bir işçi kartı — hər modulda eyni", "One employee record — the same everywhere", "Одна карточка — одинаковая во всех модулях"],
  },
  {
    k: ["Məzuniyyət sorğusu", "Leave request", "Заявка на отпуск"],
    i: "calendar",
    b: ["Zəng, kağız, mesaj", "Calls, paper, messages", "Звонки, бумага, сообщения"],
    a: ["Kabinetdən bir kliklə, status görünür", "One click in the cabinet, status visible", "В один клик из кабинета, статус виден"],
  },
  {
    k: ["Maaş hesabı", "Payroll", "Расчёт зарплаты"],
    i: "wallet",
    b: ["Tabel əllə köçürülür, səhv riski", "Timesheets retyped by hand, risk of errors", "Табель переносят вручную, риск ошибок"],
    a: ["Davamiyyətdən avtomatik, qaydaya görə", "Automatic from attendance, by your rules", "Автоматически из табеля, по правилам"],
  },
  {
    k: ["Təsdiq və əmr", "Approvals & orders", "Согласования и приказы"],
    i: "sign",
    b: ["“Sənəd kimdə qaldı?”", "“Who has the document now?”", "«У кого сейчас документ?»"],
    a: ["Rəqəmsal imza zənciri, hər addım izlənir", "Digital signing chain, every step tracked", "Цифровая цепочка подписей, каждый шаг виден"],
  },
  {
    k: ["Anbar və satış", "Stock & sales", "Склад и продажи"],
    i: "box",
    b: ["Ayrı dəftər, qalıq dəqiq bilinmir", "Separate notebook, stock never exact", "Отдельная тетрадь, остаток неточен"],
    a: ["Eyni məhsul kartı, qalıq özü yenilənir", "One product card, stock updates itself", "Одна карточка товара, остаток обновляется сам"],
  },
  {
    k: ["Rəhbər hesabatı", "Management report", "Отчёт руководителю"],
    i: "chart",
    b: ["Ay sonunda əllə toplanır", "Compiled by hand at month-end", "Собирается вручную в конце месяца"],
    a: ["Bu günün rəqəmləri — bir ekranda", "Today’s numbers — on one screen", "Цифры на сегодня — на одном экране"],
  },
];

export function SlideBeforeAfter() {
  const t = useT();
  const narrow = useNarrow();
  return (
    <Slide>
      <Head
        n="03"
        eyebrow={t(["Əvvəl və sonra", "Before and after", "До и после"])}
        title={
          <>
            {t(["Gündəlik iş ", "What changes ", "Что меняется "])}
            <Hl>{t(["necə dəyişir.", "day to day.", "каждый день."])}</Hl>
          </>
        }
        lead={t([
          "Eyni işlər görülür — sadəcə dağınıqlıq, təkrar və gözləmə aradan qalxır.",
          "The same work gets done — without the chaos, the retyping and the waiting.",
          "Работа та же — но без хаоса, повторного ввода и ожидания.",
        ])}
      />
      <div className="mt-10 flex-1 flex flex-col min-h-0 n:mt-6">
        <div className="grid grid-cols-[300px_1fr_64px_1fr] gap-x-5 px-2 pb-3 tx-cap text-ink/45 n:hidden">
          <span />
          <span className="flex items-center gap-2">
            <Icon name="x" size={16} stroke={2.2} /> {t(["Arbione-siz", "Without Arbione", "Без Arbione"])}
          </span>
          <span />
          <span className="flex items-center gap-2" style={{ color: C.brand }}>
            <Icon name="check" size={16} stroke={2.4} /> {t(["Arbione ilə", "With Arbione", "С Arbione"])}
          </span>
        </div>
        <div className="flex-1 flex flex-col justify-between gap-3 n:gap-3">
          {BA.map((r, i) => (
            <R key={i} d={0.25 + i * 0.09} y={14}>
              <div className={`grid grid-cols-[300px_1fr_64px_1fr] gap-x-5 items-center n:grid-cols-1 n:gap-2 ${narrow ? "surface rounded-[18px] p-4" : ""}`}>
                <div className="flex items-center gap-4 n:gap-3">
                  <IconBox name={r.i} color={C.brand} size={50} />
                  <span className="tx-h4">{t(r.k)}</span>
                </div>
                <div className="rounded-2xl px-6 py-[18px] well flex items-center gap-3 text-ink/55 tx-body n:px-3 n:py-2.5 n:rounded-xl">
                  <span className="shrink-0 text-ink/35">
                    <Icon name="x" size={18} stroke={2.2} />
                  </span>
                  {t(r.b)}
                </div>
                <motion.div
                  className="flex justify-center n:hidden"
                  style={{ color: C.brand }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.09 }}
                >
                  <Icon name="arrow" size={26} stroke={2} />
                </motion.div>
                <div
                  className="relative rounded-2xl px-6 py-[18px] flex items-center gap-3 tx-body font-medium surface n:px-3 n:py-2.5 n:rounded-xl"
                  style={{ boxShadow: `inset 3px 0 0 ${C.brand}` }}
                >
                  <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white" style={{ background: C.brand }}>
                    <Icon name="check" size={14} stroke={3} />
                  </span>
                  {t(r.a)}
                </div>
              </div>
            </R>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* =============================== 05 · THREE VIEWS =============================== */

function Scope({ level, color }: { level: 1 | 2 | 3; color: string }) {
  const rings = [80, 55, 29];
  return (
    <svg width={176} height={176} viewBox="-88 -88 176 176" className="n:w-[96px] n:h-[96px]">
      {rings.map((r, i) => {
        const lit = i >= 3 - level;
        return (
          <motion.circle
            key={r}
            r={r}
            fill={lit ? color : "transparent"}
            fillOpacity={lit ? 0.08 + i * 0.06 : 0}
            stroke={lit ? color : undefined}
            style={lit ? undefined : { stroke: "rgb(var(--ink) / 0.18)" }}
            strokeDasharray={lit ? undefined : "3 6"}
            strokeWidth={1.5}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 + (2 - i) * 0.12, ease: EASE }}
          />
        );
      })}
      <circle r={6} fill={color} />
    </svg>
  );
}

export function SlideThreeViews() {
  const t = useT();
  const cols: { who: Tx; scope: Tx; level: 1 | 2 | 3; color: string; icon: IconName; items: Tx[]; d: Tx }[] = [
    {
      who: ["Rəhbər · Kadr · Maliyyə", "Director · HR · Finance", "Руководитель · Кадры · Финансы"],
      scope: ["Bütün şirkəti görür", "Sees the whole company", "Видит всю компанию"],
      level: 3,
      color: C.warn,
      icon: "eye",
      items: [
        ["Struktur", "Structure", "Структура"],
        ["İşçilər", "Employees", "Сотрудники"],
        ["Qaydalar", "Rules", "Правила"],
        ["Pul", "Money", "Деньги"],
        ["Anbar", "Stock", "Склад"],
        ["Hesabat", "Reports", "Отчёты"],
      ],
      d: [
        "Şirkətin tam şəkli: kim harada işləyir, hansı qayda keçərlidir, pul və mal haradadır.",
        "The full picture: who works where, which rules apply, where the money and goods are.",
        "Полная картина: кто где работает, какие правила действуют, где деньги и товар.",
      ],
    },
    {
      who: ["Menecer", "Manager", "Менеджер"],
      scope: ["Öz komandasını görür", "Sees their own team", "Видит свою команду"],
      level: 2,
      color: C.brand,
      icon: "users",
      items: [
        ["Məzuniyyət", "Leave", "Отпуска"],
        ["Tapşırıq", "Tasks", "Задачи"],
        ["İş vaxtı", "Work hours", "Рабочее время"],
        ["Performans", "Performance", "KPI"],
        ["Sahədəki yer", "Field location", "Геолокация"],
      ],
      d: [
        "Komandanı idarə edir: sorğunu təsdiqləyir, iş vaxtına baxır, nəticəni qiymətləndirir.",
        "Runs the team: approves requests, checks work hours, evaluates results.",
        "Управляет командой: согласует заявки, следит за временем, оценивает результат.",
      ],
    },
    {
      who: ["İşçi", "Employee", "Сотрудник"],
      scope: ["Öz işini görür", "Sees their own work", "Видит свою работу"],
      level: 1,
      color: C.info,
      icon: "user",
      items: [
        ["Profil", "Profile", "Профиль"],
        ["Elanlar", "News", "Объявления"],
        ["Məzuniyyət", "Leave", "Отпуск"],
        ["İş vaxtı", "Hours", "Время"],
        ["Tapşırıq", "Tasks", "Задачи"],
        ["Təlim", "Training", "Обучение"],
      ],
      d: [
        "Sorğusunu özü göndərir, statusunu görür — kadra zəng etmədən.",
        "Sends their own requests and sees the status — no calls to HR.",
        "Сам отправляет заявки и видит статус — без звонков в отдел кадров.",
      ],
    },
  ];
  return (
    <Slide>
      <Head
        n="04"
        color={C.warn}
        eyebrow={t(["Üç kabinet", "Three cabinets", "Три кабинета"])}
        title={
          <>
            {t(["Bir sistem. ", "One system. ", "Одна система. "])}
            <Hl>{t(["Üç baxış bucağı.", "Three points of view.", "Три точки зрения."])}</Hl>
          </>
        }
        lead={t([
          "Məlumat bir dəfə yazılır — hər kəs onu öz roluna uyğun görür.",
          "Data is entered once — everyone sees it according to their role.",
          "Данные вносятся один раз — каждый видит их согласно своей роли.",
        ])}
      />
      <div className="grid grid-cols-3 gap-7 mt-11 flex-1 min-h-0 n:grid-cols-1 n:gap-4 n:mt-6">
        {cols.map((c, i) => (
          <R key={i} d={0.3 + i * 0.12} className="h-full">
            <Card className="h-full p-9 flex flex-col n:p-5">
              <Accent color={c.color} />
              <div className="flex items-start justify-between">
                <div>
                  <IconBox name={c.icon} color={c.color} size={58} />
                  <div className="mt-6 text-[30px] font-semibold tracking-tight leading-tight n:mt-3 n:text-[19px]">{t(c.who)}</div>
                  <div className="mt-2 text-[19px] font-semibold n:text-[14px]" style={{ color: c.color }}>
                    {t(c.scope)}
                  </div>
                </div>
                <div className="-mr-4 -mt-4 n:-mr-2 n:-mt-2">
                  <Scope level={c.level} color={c.color} />
                </div>
              </div>
              <p className="mt-5 tx-body text-ink/60">{t(c.d)}</p>
              <div className="mt-auto pt-6 flex flex-wrap gap-2.5 n:pt-4 n:gap-1.5">
                {c.items.map((it, k) => (
                  <span key={k} className="rounded-xl px-4 py-2 tx-sm text-ink/80 well n:px-2.5 n:py-1">
                    {t(it)}
                  </span>
                ))}
              </div>
            </Card>
          </R>
        ))}
      </div>
      <R d={0.8} className="mt-7 flex items-center justify-center gap-4 text-[23px] n:text-[14px] n:mt-5 n:gap-2.5 n:justify-start">
        <span style={{ color: C.ok }}>
          <Icon name="lock" size={26} />
        </span>
        <span className="text-ink/80">
          {t(["Hər kəsə lazım olan ", "Everyone gets what they need ", "Каждому открыто "])}
          <b className="font-semibold text-ink">{t(["açılır", "opened", "нужное"])}</b>
          {t([". Lazım olmayan ", ". Everything else stays ", ", а лишнее — "])}
          <b className="font-semibold text-ink">{t(["bağlanır", "closed", "закрыто"])}</b>.
        </span>
      </R>
    </Slide>
  );
}

/* =============================== 06 · WRITE ONCE =============================== */

const OUTPUTS: { t: Tx; s: Tx; i: IconName; c: string }[] = [
  { t: ["Əmək müqaviləsi", "Employment contract", "Трудовой договор"], s: ["Vəzifə, şərtlər, imtiyazlar", "Position, terms, benefits", "Должность, условия, льготы"], i: "sign", c: C.brand },
  { t: ["Tabel", "Timesheet", "Табель"], s: ["İş günləri və saatlar", "Working days and hours", "Рабочие дни и часы"], i: "calendar", c: C.brand },
  { t: ["Əmr", "Order", "Приказ"], s: ["İmza zəncirinə düşür", "Goes to the signing chain", "Уходит на подпись"], i: "file", c: C.warn },
  { t: ["Maaş və bank", "Payroll & bank", "Зарплата и банк"], s: ["Bank hesabına köçürmə", "Transfer to bank account", "Перевод на счёт"], i: "coins", c: C.ok },
  { t: ["Hesabat", "Report", "Отчёт"], s: ["Rəhbər üçün yekun", "Summary for the director", "Итог для руководителя"], i: "report", c: C.info },
];

export function SlideWriteOnce() {
  const t = useT();
  const narrow = useNarrow();
  const rowH = 100;
  const gap = 18;
  const total = OUTPUTS.length * rowH + (OUTPUTS.length - 1) * gap;
  const ys = OUTPUTS.map((_, i) => i * (rowH + gap) + rowH / 2);
  const curve = (y: number) => `M0 ${total / 2} C 170 ${total / 2}, 190 ${y}, 360 ${y}`;
  const rows: [Tx, string][] = [
    [["Şöbə", "Department", "Отдел"], t(["Satış · Bakı filialı", "Sales · Baku branch", "Продажи · Бакинский филиал"])],
    [["Müqavilə", "Contract", "Договор"], t(["Müddətsiz · tam gün", "Permanent · full-time", "Бессрочный · полный день"])],
    [["Əsas maaş", "Base salary", "Оклад"], "2 400 ₼"],
    [["Bank hesabı", "Bank account", "Банковский счёт"], "AZ•• •••• 4821"],
    [["Rəhbər", "Manager", "Руководитель"], "Rauf Əliyev"],
  ];
  return (
    <Slide>
      <Head
        n="05"
        eyebrow={t(["Vahid məlumat", "Single source of data", "Единые данные"])}
        title={
          <>
            {t(["Bir dəfə yazılır. ", "Entered once. ", "Вносится один раз. "])}
            <Hl>{t(["Hər yerdə işləyir.", "Works everywhere.", "Работает везде."])}</Hl>
          </>
        }
        lead={t([
          "Məlumat yenidən daxil edilmir — sənəddən sənədə özü keçir.",
          "No retyping — data flows from document to document by itself.",
          "Никакого повторного ввода — данные сами переходят из документа в документ.",
        ])}
      />
      <div className="flex-1 flex items-center mt-10 n:flex-col n:items-stretch n:mt-6 n:gap-4">
        <R d={0.3} className="w-[560px] shrink-0 n:w-full">
          <Window title={t(["İşçi kartı", "Employee record", "Карточка сотрудника"])}>
            <div className="p-8 n:p-5">
              <div className="flex items-center gap-5 mb-6 n:mb-4">
                <div className="w-[68px] h-[68px] rounded-2xl flex items-center justify-center text-[26px] font-semibold text-white n:w-12 n:h-12 n:text-[18px]" style={{ background: C.brand }}>
                  LM
                </div>
                <div>
                  <div className="text-[25px] font-semibold n:text-[17px]">Leyla Məmmədova</div>
                  <div className="tx-sm text-ink/50">{t(["Regional satış meneceri", "Regional sales manager", "Региональный менеджер по продажам"])}</div>
                </div>
              </div>
              {rows.map(([k, v], i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="flex justify-between gap-4 py-3.5 border-t border-ink/[0.07] text-[18px] n:text-[13px] n:py-2.5"
                >
                  <span className="text-ink/50">{t(k)}</span>
                  <span className="font-medium text-right">{v}</span>
                </motion.div>
              ))}
            </div>
          </Window>
        </R>
        {!narrow && (
          <svg width={360} height={total} className="shrink-0 overflow-visible">
            {ys.map((y, i) => (
              <g key={i}>
                <motion.path d={curve(y)} fill="none" stroke={OUTPUTS[i].c} strokeOpacity={0.45} strokeWidth={2} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 + i * 0.1 }} />
                <circle r={5} fill={OUTPUTS[i].c}>
                  <animateMotion dur="2.2s" begin={`${1.4 + i * 0.35}s`} repeatCount="indefinite" path={curve(y)} />
                  <animate attributeName="opacity" values="0;1;1;0" dur="2.2s" begin={`${1.4 + i * 0.35}s`} repeatCount="indefinite" />
                </circle>
              </g>
            ))}
            <circle cx={0} cy={total / 2} r={8} fill={C.brand} />
            <circle cx={0} cy={total / 2} r={16} fill={C.brand} fillOpacity={0.15} />
          </svg>
        )}
        {narrow && (
          <div className="flex justify-center" style={{ color: C.brand }}>
            <Icon name="arrow" size={26} className="rotate-90" />
          </div>
        )}
        <div className="flex-1 flex flex-col n:gap-2.5" style={{ gap: narrow ? undefined : gap }}>
          {OUTPUTS.map((o, i) => (
            <R key={i} d={1 + i * 0.1} x={30} y={0}>
              <Card className="px-7 flex items-center gap-6 n:px-4 n:py-3 n:gap-3" style={{ height: narrow ? undefined : rowH }}>
                <IconBox name={o.i} color={o.c} size={54} />
                <div className="flex-1 min-w-0">
                  <div className="tx-h3">{t(o.t)}</div>
                  <div className="tx-sm text-ink/50">{t(o.s)}</div>
                </div>
                <Pill color={C.ok}>
                  <Icon name="check" size={15} stroke={2.4} /> {t(["Avtomatik", "Automatic", "Автоматически"])}
                </Pill>
              </Card>
            </R>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* =============================== 07 · FLOW =============================== */

const STEPS: { t: Tx; tag: Tx; c: string; i: IconName }[] = [
  { t: ["İnsan şirkətə qəbul olunur.", "A person is hired.", "Человека принимают на работу."], tag: ["İşə qəbul", "Hiring", "Найм"], c: C.brand, i: "briefcase" },
  { t: ["Vəzifəsi, şöbəsi və müqaviləsi qeydə alınır.", "Position, department and contract are recorded.", "Фиксируются должность, отдел и договор."], tag: ["Kadr", "HR", "Кадры"], c: C.brand, i: "id" },
  { t: ["İşə gəlişi, məzuniyyəti və izahatı izlənir.", "Attendance, leave and explanations are tracked.", "Учитываются приходы, отпуска и объяснительные."], tag: ["Davamiyyət", "Attendance", "Табель"], c: C.brand, i: "clock" },
  { t: ["Maaş bu məlumatla hesablanır və maliyyə təsdiqinə düşür.", "Salary is calculated from this data and sent for approval.", "Зарплата считается по этим данным и уходит на утверждение."], tag: ["Əməkhaqqı", "Payroll", "Зарплата"], c: C.ok, i: "wallet" },
  { t: ["Alış, anbar və satış eyni məhsul və tərəfdaş kartı ilə gedir.", "Purchasing, stock and sales share one product and partner card.", "Закупки, склад и продажи работают с одной карточкой товара и партнёра."], tag: ["Mal axını", "Goods flow", "Товарный поток"], c: C.info, i: "box" },
  { t: ["Pul hərəkəti, jurnal və hesabat bir-birinə bağlanır.", "Cash flow, journal and reports are linked together.", "Движение денег, журнал и отчёты связаны между собой."], tag: ["Maliyyə", "Finance", "Финансы"], c: C.ok, i: "landmark" },
  { t: ["Əmr və təsdiq rəqəmsal imza zənciri ilə gedir.", "Orders and approvals move through a digital signing chain.", "Приказы и согласования идут по цифровой цепочке подписей."], tag: ["Sənəd", "Documents", "Документы"], c: C.warn, i: "sign" },
  { t: ["Rəhbər eyni gündə işi, pulu və nəticəni görür.", "The director sees work, money and results the same day.", "Руководитель в тот же день видит работу, деньги и результат."], tag: ["Nəticə", "Result", "Результат"], c: C.brand, i: "chart" },
];

export function SlideFlow() {
  const t = useT();
  const active = useCycle(STEPS.length, 1600, 1400);
  return (
    <Slide>
      <Head
        n="06"
        eyebrow={t(["Bir axın", "One flow", "Единый поток"])}
        title={
          <>
            {t(["Qəbuldan hesabata — ", "From hiring to reporting — ", "От найма до отчёта — "])}
            <Hl>{t(["bir xətt.", "one line.", "одна линия."])}</Hl>
          </>
        }
        lead={t([
          "Hər addım əvvəlkinin məlumatı üzərində qurulur. Heç nə yenidən yazılmır.",
          "Each step builds on the data of the previous one. Nothing is typed twice.",
          "Каждый шаг опирается на данные предыдущего. Ничего не вводится дважды.",
        ])}
      />
      <div className="grid grid-cols-4 gap-6 mt-12 flex-1 content-center n:grid-cols-1 n:gap-3 n:mt-6">
        {STEPS.map((s, i) => {
          const on = i === active;
          const done = i < active;
          return (
            <R key={i} d={0.3 + i * 0.07}>
              <motion.div
                animate={{ y: on ? -6 : 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="relative h-[262px] rounded-[24px] p-7 flex flex-col overflow-hidden surface n:h-auto n:p-4 n:flex-row n:items-center n:gap-4 n:rounded-[18px]"
              >
                <motion.div
                  className="absolute inset-0 rounded-[24px] pointer-events-none n:rounded-[18px]"
                  animate={{ opacity: on ? 1 : 0 }}
                  style={{ boxShadow: `inset 0 0 0 2px ${s.c}`, background: `radial-gradient(circle at 85% 0%, ${s.c}1c, transparent 60%)` }}
                />
                <div className="relative flex items-center justify-between n:contents">
                  <span
                    className="font-mono text-[42px] font-semibold leading-none transition-colors duration-500 n:text-[22px] n:w-8 n:shrink-0"
                    style={{ color: on || done ? s.c : "rgb(var(--ink) / 0.2)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="n:hidden" style={{ color: s.c, opacity: on ? 1 : 0.6 }}>
                    <Icon name={s.i} size={30} />
                  </span>
                </div>
                <div className="relative mt-auto n:mt-0">
                  <div className="tx-cap mb-2.5 n:mb-1" style={{ color: s.c }}>
                    {t(s.tag)}
                  </div>
                  <div className="text-[21px] leading-[1.38] font-medium text-ink/85 n:text-[14px]">{t(s.t)}</div>
                </div>
                <div className="absolute left-0 bottom-0 h-[3px] w-full bg-ink/[0.05]">
                  <motion.div className="h-full" style={{ background: s.c }} animate={{ width: on || done ? "100%" : "0%" }} transition={{ duration: on ? 1.5 : 0.3 }} />
                </div>
              </motion.div>
            </R>
          );
        })}
      </div>
    </Slide>
  );
}
