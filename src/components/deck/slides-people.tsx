"use client";
import { motion } from "framer-motion";
import {
  C,
  EASE,
  Slide,
  R,
  Head,
  Hl,
  Card,
  Accent,
  IconBox,
  Icon,
  Pill,
  StatusPill,
  Window,
  Avatar,
  Counter,
  Mock,
  fmt,
  useCycle,
  useNarrow,
  useT,
  type IconName,
  type Status,
  type Tx,
} from "./primitives";

/* =============================== 07 · MODULES MAP =============================== */

type Mod = { n: string; t: Tx; d?: Tx; i: IconName; sub?: Tx[] };
const GROUPS: { name: Tx; color: string; icon: IconName; items: Mod[] }[] = [
  {
    name: ["İdarəetmə", "Management", "Управление"],
    color: C.warn,
    icon: "layout",
    items: [
      { n: "01", t: ["Başlanğıc", "Start", "Старт"], d: ["Rəhbər paneli, işçi və menecer kabineti", "Director panel, employee & manager cabinets", "Панель руководителя, кабинеты сотрудника и менеджера"], i: "layout" },
      { n: "15", t: ["Sənədlər və təsdiqlər", "Documents & approvals", "Документы и согласования"], d: ["Əmr, imza zənciri, şablon, elan", "Orders, signing chain, templates, news", "Приказы, подписи, шаблоны, объявления"], i: "sign" },
      { n: "16", t: ["Hesabatlar və uyğunluq", "Reports & compliance", "Отчёты и соответствие"], d: ["Maliyyə, kadr, anbar, vergi", "Finance, HR, stock, tax", "Финансы, кадры, склад, налоги"], i: "report" },
      { n: "17", t: ["İnteqrasiyalar və icazələr", "Integrations & access", "Интеграции и доступ"], d: ["1C, e-qaimə, bank-client, rollar", "1C, e-invoice, bank-client, roles", "1С, э-накладные, банк-клиент, роли"], i: "plug" },
    ],
  },
  {
    name: ["İnsan", "People", "Люди"],
    color: C.brand,
    icon: "users",
    items: [
      { n: "02", t: ["Şirkət strukturu", "Company structure", "Структура компании"], d: ["Şirkət, filial, departament, vəzifə", "Companies, branches, departments, positions", "Компании, филиалы, отделы, должности"], i: "building" },
      { n: "03", t: ["İşçilər və müqavilələr", "Employees & contracts", "Сотрудники и договоры"], d: ["Kart, müqavilə, aktiv, əmək mühafizəsi", "Records, contracts, assets, safety", "Карточки, договоры, активы, охрана труда"], i: "id" },
      { n: "04", t: ["Davamiyyət", "Attendance", "Учёт времени"], d: ["Tabel, giriş-çıxış, məzuniyyət", "Timesheets, check-ins, leave", "Табель, приход-уход, отпуска"], i: "clock" },
      { n: "05", t: ["GPS izləmə", "GPS tracking", "GPS-мониторинг"], d: ["Canlı xəritə, marşrut, iş zonası", "Live map, routes, work zones", "Живая карта, маршруты, рабочие зоны"], i: "map" },
      { n: "06", t: ["Əməkhaqqı", "Payroll", "Зарплата"], d: ["Dövr, element, hesablama qaydası", "Periods, pay items, calculation rules", "Периоды, начисления, правила расчёта"], i: "wallet" },
      { n: "07", t: ["İşə qəbul", "Recruitment", "Подбор персонала"], d: ["Vakansiya, müsahibə, iş təklifi", "Vacancies, interviews, offers", "Вакансии, интервью, офферы"], i: "briefcase" },
      { n: "08", t: ["Performans", "Performance", "Эффективность"], d: ["KPI, qiymətləndirmə, kalibrasiya", "KPIs, reviews, calibration", "KPI, оценка, калибровка"], i: "target" },
      { n: "09", t: ["Təlim", "Training", "Обучение"], d: ["Sessiya, təlimçi, inkişaf tarixçəsi", "Sessions, trainers, growth history", "Сессии, тренеры, история развития"], i: "graduation" },
    ],
  },
  {
    name: ["Pul", "Money", "Деньги"],
    color: C.ok,
    icon: "coins",
    items: [
      {
        n: "10",
        t: ["Maliyyə", "Finance", "Финансы"],
        i: "landmark",
        sub: [
          ["Kassa və bank", "Cash & bank", "Касса и банк"],
          ["Mühasibatlıq", "Accounting", "Бухгалтерия"],
          ["Debitor və kreditor", "Receivables & payables", "Дебиторы и кредиторы"],
          ["Əsas vəsaitlər", "Fixed assets", "Основные средства"],
          ["Maliyyə sazlamaları", "Finance settings", "Финансовые настройки"],
        ],
      },
    ],
  },
  {
    name: ["Mal və müştəri", "Goods & clients", "Товары и клиенты"],
    color: C.info,
    icon: "box",
    items: [
      { n: "11", t: ["Satınalma", "Purchasing", "Закупки"], d: ["Tələb, təklif, sifariş, qəbul", "Requests, quotes, orders, receiving", "Заявки, предложения, заказы, приёмка"], i: "cart" },
      { n: "12", t: ["Anbar", "Warehouse", "Склад"], d: ["Stok, hərəkət, sayım, köçürmə", "Stock, movements, counts, transfers", "Остатки, движения, инвентаризация"], i: "box" },
      { n: "13", t: ["Satış", "Sales", "Продажи"], d: ["Təklif, sifariş, faktura, ödəniş", "Quotes, orders, invoices, payments", "Предложения, заказы, счета, оплаты"], i: "tag" },
      { n: "14", t: ["Müştərilər", "Clients (CRM)", "Клиенты (CRM)"], d: ["Huni, fəaliyyət, proqnoz, layihə", "Pipeline, activities, forecast, projects", "Воронка, активности, прогноз, проекты"], i: "handshake" },
    ],
  },
];

export function SlideModules() {
  const t = useT();
  return (
    <Slide>
      <Head
        n="07"
        eyebrow={t(["Modullar", "Modules", "Модули"])}
        title={
          <>
            {t(["17 modul. ", "17 modules. ", "17 модулей. "])}
            <Hl>{t(["Bir ekosistem.", "One ecosystem.", "Одна экосистема."])}</Hl>
          </>
        }
        lead={t([
          "Hər modul ayrıca güclüdür. Əsl dəyər isə onların bir-birinə bağlı olmasındadır.",
          "Each module is strong on its own. The real value is that they are all connected.",
          "Каждый модуль силён сам по себе. Но настоящая ценность — в их связке.",
        ])}
      />
      <div className="grid grid-cols-4 gap-6 mt-11 flex-1 min-h-0 n:grid-cols-1 n:gap-4 n:mt-6">
        {GROUPS.map((g, gi) => (
          <R key={gi} d={0.25 + gi * 0.1} className="h-full">
            <Card className="h-full p-7 flex flex-col n:p-5">
              <Accent color={g.color} />
              <div className="flex items-center gap-4 pb-5 mb-3 border-b border-ink/[0.08] n:pb-3">
                <IconBox name={g.icon} color={g.color} size={50} />
                <div>
                  <div className="tx-h3">{t(g.name)}</div>
                  <div className="tx-cap mt-1" style={{ color: g.color }}>
                    {g.items.length === 1 ? t(["5 bölmə", "5 sections", "5 разделов"]) : `${g.items.length} ${t(["modul", "modules", "модуля"])}`}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                {g.items.map((it, ii) => (
                  <motion.div key={it.n} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + gi * 0.1 + ii * 0.05 }}>
                    <div className="flex items-center gap-3.5 py-[7px] n:py-1.5">
                      <span className="font-mono text-[14px] w-7 shrink-0 n:text-[11px] n:w-5" style={{ color: g.color }}>
                        {it.n}
                      </span>
                      <span className="text-ink/45 shrink-0">
                        <Icon name={it.i} size={21} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[19px] text-ink/90 leading-tight font-semibold n:text-[14px]">{t(it.t)}</span>
                        {it.d && <span className="block text-[15px] text-ink/50 leading-tight mt-1 n:text-[12px]">{t(it.d)}</span>}
                      </span>
                    </div>
                    {it.sub && (
                      <div className="ml-[20px] mt-3 pl-7 border-l border-ink/10 flex flex-col gap-5 py-1 n:gap-2.5 n:pl-5">
                        {it.sub.map((s, k) => (
                          <div key={k} className="flex items-center gap-3 text-[19px] text-ink/75 n:text-[14px]">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: g.color }} />
                            {t(s)}
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </Card>
          </R>
        ))}
      </div>
    </Slide>
  );
}

/* =============================== 08 · DASHBOARD =============================== */

const MONTHS: Tx[] = [
  ["May", "May", "Май"],
  ["İyn", "Jun", "Июн"],
  ["İyl", "Jul", "Июл"],
  ["Avq", "Aug", "Авг"],
  ["Sen", "Sep", "Сен"],
  ["Okt", "Oct", "Окт"],
];

function AreaChart() {
  const t = useT();
  const w = 600;
  const h = 200;
  const sales = [42, 55, 49, 63, 71, 86];
  const buys = [30, 36, 41, 38, 47, 52];
  const pts = (arr: number[]) => arr.map((v, i) => [(i / (arr.length - 1)) * w, h - (v / 100) * h] as const);
  const line = (arr: number[]) => pts(arr).map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ");
  const area = (arr: number[]) => `${line(arr)} L${w} ${h} L0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h + 30}`} className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="gs" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={C.brand} stopOpacity="0.28" />
          <stop offset="1" stopColor={C.brand} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="gb" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={C.info} stopOpacity="0.2" />
          <stop offset="1" stopColor={C.info} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1={0} x2={w} y1={h * f} y2={h * f} style={{ stroke: "rgb(var(--ink) / 0.07)" }} />
      ))}
      <motion.path d={area(sales)} fill="url(#gs)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} />
      <motion.path d={area(buys)} fill="url(#gb)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }} />
      <motion.path d={line(sales)} fill="none" stroke={C.brand} strokeWidth={3} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 1.4, ease: EASE }} />
      <motion.path d={line(buys)} fill="none" stroke={C.info} strokeWidth={3} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 1.4, ease: EASE }} />
      {MONTHS.map((m, i) => (
        <text key={i} x={(i / 5) * w} y={h + 24} style={{ fill: "rgb(var(--ink) / 0.45)" }} fontSize={14} textAnchor={i === 0 ? "start" : i === 5 ? "end" : "middle"}>
          {t(m)}
        </text>
      ))}
    </svg>
  );
}

export function SlideDashboard() {
  const t = useT();
  const kpis: { l: Tx; v: number; s: Tx; c: string; i: IconName }[] = [
    { l: ["İşçi sayı", "Headcount", "Сотрудники"], v: 248, s: ["+6 bu ay", "+6 this month", "+6 за месяц"], c: C.brand, i: "users" },
    { l: ["Gözləyən məzuniyyət", "Pending leave", "Отпуска на визе"], v: 7, s: ["3-ü bu gün", "3 today", "3 сегодня"], c: C.warn, i: "calendar" },
    { l: ["İmzasız əmr", "Unsigned orders", "Неподписанные"], v: 4, s: ["imza gözləyir", "awaiting signature", "ждут подписи"], c: C.info, i: "sign" },
    { l: ["Kassa və bank, ₼", "Cash & bank, ₼", "Касса и банк, ₼"], v: 184320, s: ["4 hesab", "4 accounts", "4 счёта"], c: C.ok, i: "coins" },
  ];
  const approvals: { t: Tx; who: string; s: Status; c: string }[] = [
    { t: ["Məzuniyyət · 5 gün", "Leave · 5 days", "Отпуск · 5 дней"], who: "Nigar Həsənova", s: "pending", c: C.brand },
    { t: ["Alış sifarişi · 12 450 ₼", "Purchase order · 12 450 ₼", "Заказ · 12 450 ₼"], who: "Satınalma", s: "pending", c: C.info },
    { t: ["Əmr №214 · işə qəbul", "Order #214 · hiring", "Приказ №214 · приём"], who: "Kadr şöbəsi", s: "approved", c: C.warn },
    { t: ["Avans · 600 ₼", "Advance · 600 ₼", "Аванс · 600 ₼"], who: "Elvin Quliyev", s: "draft", c: C.ok },
  ];
  return (
    <Slide>
      <div className="flex h-full gap-14 items-center n:flex-col n:items-stretch n:gap-6">
        <div className="w-[580px] shrink-0 n:w-full">
          <Head
            n="M01"
            color={C.warn}
            size={66}
            eyebrow={t(["Başlanğıc", "Start", "Старт"])}
            title={
              <>
                {t(["Rəhbərin ", "The director’s ", "Утренний экран "])}
                <Hl>{t(["səhər ekranı.", "morning screen.", "руководителя."])}</Hl>
              </>
            }
          />
          <p className="mt-6 text-[22px] leading-[1.5] text-ink/65 n:text-[15px] n:mt-3">
            {t([
              "Sabit hesabat deyil. Hansı rəqəm vacibdirsə, o kart seçilir və bir ekrana yığılır.",
              "Not a fixed report. You pick the numbers that matter and put them on one screen.",
              "Не застывший отчёт. Вы выбираете важные цифры и собираете их на одном экране.",
            ])}
          </p>
          <div className="mt-8 flex flex-col gap-4 n:mt-5 n:gap-3">
            {[
              {
                t: ["İşçi kabineti", "Employee cabinet", "Кабинет сотрудника"] as Tx,
                d: [
                  "Profil, elanlar, məzuniyyət, tabel, tapşırıq, təlim, aktivlər. Sorğu kadra zəng etmədən göndərilir.",
                  "Profile, news, leave, timesheet, tasks, training, assets. Requests sent without calling HR.",
                  "Профиль, объявления, отпуск, табель, задачи, обучение, активы. Заявки — без звонков в кадры.",
                ] as Tx,
                i: "user" as IconName,
                c: C.info,
              },
              {
                t: ["Menecer kabineti", "Manager cabinet", "Кабинет менеджера"] as Tx,
                d: [
                  "Komanda, məzuniyyət, izahat, layihə, iş vaxtı, performans və canlı xəritə.",
                  "Team, leave, explanations, projects, work hours, performance and a live map.",
                  "Команда, отпуска, объяснительные, проекты, время, KPI и живая карта.",
                ] as Tx,
                i: "users" as IconName,
                c: C.brand,
              },
            ].map((x, i) => (
              <R key={i} d={0.4 + i * 0.12}>
                <Card className="p-6 flex gap-5 n:p-4 n:gap-3">
                  <IconBox name={x.i} color={x.c} size={50} />
                  <div>
                    <div className="tx-h4">{t(x.t)}</div>
                    <div className="mt-1 tx-sm text-ink/55">{t(x.d)}</div>
                  </div>
                </Card>
              </R>
            ))}
          </div>
        </div>
        <Mock w={1000} h={790} className="flex-1 min-w-0">
          <R d={0.3} x={40} y={0} className="h-full">
            <Window
              title={t(["İdarə paneli", "Dashboard", "Панель управления"])}
              className="h-[790px]"
              right={
                <span className="flex items-center gap-2 text-[14px] text-ink/45">
                  <Icon name="layout" size={16} /> {t(["Kartları özün seç", "Pick your own cards", "Выберите карточки"])}
                </span>
              }
            >
              <div className="p-7 h-full flex flex-col gap-5">
                <div className="grid grid-cols-4 gap-4">
                  {kpis.map((k, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.08 }} className="rounded-2xl p-5 well">
                      <div className="flex items-center justify-between gap-2 text-ink/55 text-[14px]">
                        <span className="truncate">{t(k.l)}</span>
                        <span style={{ color: k.c }}>
                          <Icon name={k.i} size={18} />
                        </span>
                      </div>
                      <div className="mt-3 font-display text-[34px] font-semibold tracking-tight leading-none">
                        <Counter to={k.v} d={0.8} />
                      </div>
                      <div className="mt-2 text-[14px] font-medium" style={{ color: k.c }}>
                        {t(k.s)}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-5 flex-1 min-h-0">
                  <div className="flex-1 rounded-2xl p-6 well flex flex-col">
                    <div className="flex items-center justify-between">
                      <span className="text-[17px] font-semibold">{t(["Satış və alış · 6 ay", "Sales & purchases · 6 mo", "Продажи и закупки · 6 мес"])}</span>
                      <span className="flex gap-4 text-[14px] text-ink/55">
                        <span className="flex items-center gap-2">
                          <i className="w-2.5 h-2.5 rounded-full" style={{ background: C.brand }} />
                          {t(["Satış", "Sales", "Продажи"])}
                        </span>
                        <span className="flex items-center gap-2">
                          <i className="w-2.5 h-2.5 rounded-full" style={{ background: C.info }} />
                          {t(["Alış", "Purchases", "Закупки"])}
                        </span>
                      </span>
                    </div>
                    <div className="flex-1 mt-4 min-h-0">
                      <AreaChart />
                    </div>
                  </div>
                  <div className="w-[370px] rounded-2xl p-6 well">
                    <div className="text-[17px] font-semibold mb-4">{t(["Təsdiq gözləyənlər", "Awaiting approval", "Ждут согласования"])}</div>
                    <div className="flex flex-col gap-3.5">
                      {approvals.map((a, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 + i * 0.1 }} className="flex items-center gap-3">
                          <Avatar name={a.who} color={a.c} size={38} />
                          <div className="flex-1 min-w-0">
                            <div className="text-[15px] font-medium truncate">{t(a.t)}</div>
                            <div className="text-[13px] text-ink/50">{a.who}</div>
                          </div>
                          <StatusPill s={a.s} className="!text-[12px] !px-2.5 !py-1" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-2xl p-5 well">
                    <div className="flex justify-between text-[15px]">
                      <span className="text-ink/60">{t(["Maaş dövrü · Oktyabr", "Payroll · October", "Зарплата · Октябрь"])}</span>
                      <span className="font-semibold" style={{ color: C.ok }}>
                        72%
                      </span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-ink/[0.07] overflow-hidden">
                      <motion.div className="h-full rounded-full" style={{ background: C.ok }} initial={{ width: 0 }} animate={{ width: "72%" }} transition={{ delay: 1.2, duration: 1.2, ease: EASE }} />
                    </div>
                  </div>
                  <div className="rounded-2xl p-5 well flex items-center gap-3">
                    <span style={{ color: C.warn }}>
                      <Icon name="box" size={22} />
                    </span>
                    <span className="text-[15px] text-ink/70">{t(["Anbar: 3 məhsul minimumda", "Stock: 3 items at minimum", "Склад: 3 товара на минимуме"])}</span>
                  </div>
                  <div className="rounded-2xl p-5 well flex items-center gap-3">
                    <span style={{ color: C.info }}>
                      <Icon name="cart" size={22} />
                    </span>
                    <span className="text-[15px] text-ink/70">{t(["Alış: 5 açıq sifariş", "Purchasing: 5 open orders", "Закупки: 5 открытых заказов"])}</span>
                  </div>
                </div>
              </div>
            </Window>
          </R>
        </Mock>
      </div>
    </Slide>
  );
}

/* =============================== 09 · STRUCTURE + EMPLOYEES =============================== */

const TREE: { l: number; t: Tx; s: Tx; i: IconName; hl?: boolean }[] = [
  { l: 0, t: ["Holdinq", "Holding", "Холдинг"], s: ["2 şirkət · 214 işçi", "2 companies · 214 staff", "2 компании · 214 чел."], i: "building" },
  { l: 1, t: ["Ticarət MMC", "Trade LLC", "ООО «Торговля»"], s: ["3 filial", "3 branches", "3 филиала"], i: "building" },
  { l: 2, t: ["Bakı filialı", "Baku branch", "Филиал Баку"], s: ["96 işçi", "96 staff", "96 чел."], i: "map" },
  { l: 3, t: ["Satış departamenti", "Sales department", "Отдел продаж"], s: ["18 işçi", "18 staff", "18 чел."], i: "users" },
  { l: 4, t: ["Regional menecer", "Regional manager", "Рег. менеджер"], s: ["Dərəcə D3", "Grade D3", "Грейд D3"], i: "id", hl: true },
  { l: 2, t: ["Gəncə filialı", "Ganja branch", "Филиал Гянджа"], s: ["41 işçi", "41 staff", "41 чел."], i: "map" },
  { l: 1, t: ["Logistika MMC", "Logistics LLC", "ООО «Логистика»"], s: ["2 filial", "2 branches", "2 филиала"], i: "building" },
];

export function SlideStructure() {
  const t = useT();
  const narrow = useNarrow();
  const blocks: { h: Tx; i: IconName; c: string; rows: [Tx, Tx][]; chips?: Tx[] }[] = [
    {
      h: ["Təcrübə və bacarıq", "Experience & skills", "Опыт и навыки"],
      i: "graduation",
      c: C.brand,
      rows: [
        [["Təcrübə", "Experience", "Опыт"], ["7 il", "7 years", "7 лет"]],
        [["Təhsil", "Education", "Образование"], ["Magistr · İqtisadiyyat", "MSc · Economics", "Магистр · Экономика"]],
        [["Dillər", "Languages", "Языки"], ["AZ · EN · RU", "AZ · EN · RU", "AZ · EN · RU"]],
      ],
      chips: [
        ["Danışıqlar", "Negotiation", "Переговоры"],
        ["CRM", "CRM", "CRM"],
        ["Liderlik", "Leadership", "Лидерство"],
      ],
    },
    {
      h: ["Əmək müqaviləsi", "Employment contract", "Трудовой договор"],
      i: "sign",
      c: C.warn,
      rows: [
        [["Növ", "Type", "Тип"], ["Müddətsiz · tam gün", "Permanent · full-time", "Бессрочный · полный"]],
        [["İmtiyaz", "Benefit", "Льгота"], ["+3 gün məzuniyyət", "+3 days of leave", "+3 дня отпуска"]],
        [["Əvəzetmə", "Substitution", "Замещение"], ["R. Əliyev · 14 gün", "R. Aliyev · 14 days", "Р. Алиев · 14 дней"]],
      ],
    },
    {
      h: ["Təhkim olunmuş aktivlər", "Assigned assets", "Закреплённые активы"],
      i: "monitor",
      c: C.info,
      rows: [
        [["Noutbuk", "Laptop", "Ноутбук"], ["Qaytarma: 2027", "Return: 2027", "Возврат: 2027"]],
        [["Telefon", "Phone", "Телефон"], ["Mobil", "Mobile", "Мобильный"]],
        [["Giriş kartı", "Access card", "Пропуск"], ["Aktiv", "Active", "Активен"]],
      ],
    },
    {
      h: ["Əmək mühafizəsi", "Work safety", "Охрана труда"],
      i: "shield",
      c: C.ok,
      rows: [
        [["Əmək şəraiti", "Conditions", "Условия"], ["Normal", "Normal", "Нормальные"]],
        [["Fərdi mühafizə", "Protective gear", "СИЗ"], ["Verilib", "Issued", "Выданы"]],
        [["Təlimat", "Briefing", "Инструктаж"], ["Keçib ✓", "Completed ✓", "Пройден ✓"]],
      ],
    },
  ];
  const tabs: Tx[] = [
    ["Profil", "Profile", "Профиль"],
    ["Müqavilə", "Contract", "Договор"],
    ["Aktivlər", "Assets", "Активы"],
    ["Mühafizə", "Safety", "Охрана"],
    ["Bank", "Bank", "Банк"],
  ];
  return (
    <Slide>
      <Head
        n="M02 · M03"
        size={64}
        eyebrow={t(["Struktur və işçilər", "Structure & employees", "Структура и сотрудники"])}
        title={
          <>
            {t(["Struktur — ağac kimi. ", "Structure as a tree. ", "Структура — как дерево. "])}
            <Hl>{t(["İşçi — tam portret.", "Each employee — a full profile.", "Сотрудник — полный портрет."])}</Hl>
          </>
        }
      />
      <div className="flex gap-8 mt-10 flex-1 min-h-0 n:flex-col n:gap-5 n:mt-6">
        <R d={0.25} className="w-[660px] shrink-0 n:w-full">
          <Card className="h-full p-8 flex flex-col n:p-5">
            <Accent color={C.brand} />
            <div className="tx-cap text-ink/45 mb-5 n:mb-3">{t(["Kim kimin altındadır", "Who reports to whom", "Кто кому подчиняется"])}</div>
            <div className="flex flex-col gap-2.5 n:gap-1.5">
              {TREE.map((n, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, ease: EASE }}
                  className="relative flex items-center gap-4 rounded-2xl px-4 py-[11px] whitespace-nowrap n:gap-2 n:px-3 n:py-2 n:rounded-xl"
                  style={{
                    marginLeft: n.l * (narrow ? 14 : 38),
                    background: n.hl ? `${C.brand}14` : "rgb(var(--ink) / 0.03)",
                    boxShadow: `inset 0 0 0 1px ${n.hl ? `${C.brand}55` : "rgb(var(--ink) / 0.06)"}`,
                  }}
                >
                  {n.l > 0 && <span className="absolute -left-[22px] top-1/2 w-[18px] h-px bg-ink/20 n:hidden" />}
                  <span style={{ color: n.hl ? C.brand : "rgb(var(--ink) / 0.45)" }}>
                    <Icon name={n.i} size={20} />
                  </span>
                  <span className="text-[18px] font-semibold n:text-[13px]">{t(n.t)}</span>
                  <span className="ml-auto text-[15px] text-ink/50 n:text-[11px]">{t(n.s)}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto pt-6 border-t border-ink/[0.07] n:mt-5 n:pt-4">
              <div className="tx-sm text-ink/55 mb-3">{t(["Bütün modullar bu quruluşa söykənir:", "Every module builds on this structure:", "Все модули опираются на эту структуру:"])}</div>
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    ["İşçi", "Staff", "Сотрудники"],
                    ["İcazə", "Access", "Доступ"],
                    ["Elan", "News", "Объявления"],
                    ["Məzuniyyət", "Leave", "Отпуска"],
                    ["Maaş", "Payroll", "Зарплата"],
                    ["GPS", "GPS", "GPS"],
                    ["Hesabat", "Reports", "Отчёты"],
                  ] as Tx[]
                ).map((x, k) => (
                  <Pill key={k} color={C.brand}>
                    {t(x)}
                  </Pill>
                ))}
              </div>
            </div>
          </Card>
        </R>
        <Mock w={900} h={660} className="flex-1 min-w-0">
          <R d={0.4} x={30} y={0} className="h-full">
            <Window title={`${t(["İşçi kartı", "Employee record", "Карточка"])} · Leyla Məmmədova`} className="h-full">
              <div className="p-8 h-full flex flex-col">
                <div className="flex gap-2 mb-6">
                  {tabs.map((x, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-xl text-[16px] font-medium"
                      style={i === 0 ? { background: C.brand, color: "#fff" } : { color: "rgb(var(--ink) / 0.5)" }}
                    >
                      {t(x)}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-5 flex-1 min-h-0">
                  {blocks.map((b, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.1 }} className="rounded-2xl p-6 well">
                      <div className="flex items-center gap-3 mb-4">
                        <span style={{ color: b.c }}>
                          <Icon name={b.i} size={22} />
                        </span>
                        <span className="text-[18px] font-semibold">{t(b.h)}</span>
                      </div>
                      {b.rows.map(([k, v], ri) => (
                        <div key={ri} className="flex justify-between gap-3 py-2 text-[15px] border-t border-ink/[0.06]">
                          <span className="text-ink/50">{t(k)}</span>
                          <span className="text-ink/90 font-medium text-right">{t(v)}</span>
                        </div>
                      ))}
                      {b.chips && (
                        <div className="flex gap-2 mt-3">
                          {b.chips.map((c, ci) => (
                            <span key={ci} className="text-[13px] px-3 py-1 rounded-lg font-medium" style={{ background: `${C.brand}14`, color: C.brand }}>
                              {t(c)}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Window>
          </R>
        </Mock>
      </div>
    </Slide>
  );
}

/* =============================== 10 · ATTENDANCE + GPS =============================== */

const PEOPLE = ["Leyla M.", "Kamran S.", "Nigar H.", "Elvin Q.", "Aysel R.", "Tural B.", "Rauf Ə.", "Səbinə K."];
function cell(p: number, d: number) {
  if (d % 7 === 5 || d % 7 === 6) return "off";
  if (p === 2 && d >= 15 && d <= 19) return "leave";
  if ((p * 7 + d * 3) % 13 === 0) return "late";
  return "work";
}
const CELL_COLORS: Record<string, string> = { work: C.ok, late: C.warn, leave: C.brand, off: "rgb(var(--ink) / 0.07)" };

function MapView() {
  const t = useT();
  const route = "M70 520 C 150 470, 170 400, 250 380 S 380 330, 420 260 S 520 170, 600 190 S 700 240, 740 150";
  return (
    <svg viewBox="0 0 820 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="820" height="600" style={{ fill: "rgb(var(--ink) / 0.025)" }} />
      {Array.from({ length: 14 }).map((_, i) => (
        <line key={`h${i}`} x1={0} x2={820} y1={i * 46 + 10} y2={i * 46 + 30} style={{ stroke: "rgb(var(--ink) / 0.06)" }} strokeWidth={i % 4 ? 2 : 7} />
      ))}
      {Array.from({ length: 16 }).map((_, i) => (
        <line key={`v${i}`} y1={0} y2={600} x1={i * 56} x2={i * 56 - 30} style={{ stroke: "rgb(var(--ink) / 0.06)" }} strokeWidth={i % 5 ? 2 : 7} />
      ))}
      <path d="M0 470 C 200 430, 380 520, 820 420" stroke={C.info} strokeOpacity={0.14} strokeWidth={24} fill="none" />
      <motion.path d="M540 90 L760 70 L790 240 L620 280 Z" fill={`${C.info}18`} stroke={C.info} strokeWidth={2} strokeDasharray="8 8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
      <text x={560} y={122} fill={C.info} fontSize={16} fontWeight={600}>
        {t(["İş zonası · Anbar №2", "Work zone · Warehouse 2", "Рабочая зона · Склад №2"])}
      </text>
      <motion.path d={route} fill="none" stroke={C.brand} strokeWidth={4} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 2.4, ease: "easeInOut" }} />
      <circle cx={70} cy={520} r={8} fill={C.brand} />
      <circle r={11} fill="#fff" stroke={C.brand} strokeWidth={4}>
        <animateMotion dur="6s" begin="3s" repeatCount="indefinite" path={route} />
      </circle>
      {[
        { x: 300, y: 450, n: "KS", c: C.warn },
        { x: 160, y: 200, n: "AR", c: C.info },
      ].map((m) => (
        <g key={m.n}>
          <circle cx={m.x} cy={m.y} r={22} fill={m.c} fillOpacity={0.2}>
            <animate attributeName="r" values="18;30;18" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx={m.x} cy={m.y} r={16} fill={m.c} />
          <text x={m.x} y={m.y + 5} textAnchor="middle" fontSize={13} fontWeight={700} fill="#fff">
            {m.n}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function SlideAttendance() {
  const t = useT();
  const toast = useCycle(3, 2400, 2600);
  const toasts: { t: Tx; c: string }[] = [
    { t: ["10:42 · Elvin Q. iş zonasına daxil oldu", "10:42 · Elvin Q. entered the work zone", "10:42 · Эльвин К. вошёл в рабочую зону"], c: C.info },
    { t: ["13:05 · Aysel R. marşrutu tamamladı", "13:05 · Aysel R. completed the route", "13:05 · Айсель Р. завершила маршрут"], c: C.ok },
    { t: ["15:20 · Elvin Q. zonadan çıxdı", "15:20 · Elvin Q. left the zone", "15:20 · Эльвин К. покинул зону"], c: C.warn },
  ];
  const legend: [Tx, string][] = [
    [["İşləyib", "Worked", "Работал"], C.ok],
    [["Gecikmə", "Late", "Опоздание"], C.warn],
    [["Məzuniyyət", "Leave", "Отпуск"], C.brand],
    [["İstirahət", "Day off", "Выходной"], "rgb(var(--ink) / 0.15)"],
  ];
  const events: { tm: string; w: Tx; s: Status }[] = [
    { tm: "09:00", w: ["Leyla M. — giriş, vaxtında", "Leyla M. — on time", "Лейла М. — вовремя"], s: "approved" },
    { tm: "09:17", w: ["Kamran S. — 17 dəq gecikmə", "Kamran S. — 17 min late", "Камран С. — опоздал на 17 мин"], s: "pending" },
    { tm: "11:30", w: ["Tabel düzəlişi sorğusu", "Timesheet correction request", "Запрос на корректировку"], s: "draft" },
  ];
  return (
    <Slide>
      <Head
        n="M04 · M05"
        size={64}
        eyebrow={t(["Davamiyyət və GPS", "Attendance & GPS", "Учёт времени и GPS"])}
        title={
          <>
            {t(["Ofisdə tabel. Sahədə xəritə. ", "Timesheets in the office. Maps in the field. ", "В офисе — табель. В поле — карта. "])}
            <Hl>{t(["Bir sistemdə.", "One system.", "В одной системе."])}</Hl>
          </>
        }
      />
      <div className="flex gap-7 mt-10 flex-1 min-h-0 n:flex-col n:gap-4 n:mt-6">
        <Mock w={860} h={720} className="w-[860px] shrink-0">
          <R d={0.25} className="h-full">
            <Window title={t(["Davamiyyət · Oktyabr", "Attendance · October", "Табель · Октябрь"])} className="h-full">
              <div className="p-7 flex flex-col h-full">
                <div className="flex flex-col gap-[7px]">
                  {PEOPLE.map((p, pi) => (
                    <div key={p} className="flex items-center gap-4">
                      <span className="w-[100px] text-[15px] text-ink/65">{p}</span>
                      <div className="flex gap-[4px]">
                        {Array.from({ length: 22 }).map((_, d) => {
                          const k = cell(pi, d);
                          return (
                            <motion.span
                              key={d}
                              className="w-[27px] h-[27px] rounded-[6px]"
                              style={{ background: CELL_COLORS[k], opacity: k === "off" ? 1 : 0.85 }}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.5 + d * 0.025 + pi * 0.04 }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-6 mt-5 text-[14px] text-ink/60">
                  {legend.map(([l, c], i) => (
                    <span key={i} className="flex items-center gap-2">
                      <i className="w-3 h-3 rounded" style={{ background: c }} />
                      {t(l)}
                    </span>
                  ))}
                </div>
                <div className="mt-auto grid grid-cols-[1fr_210px] gap-5">
                  <div className="flex flex-col gap-2.5">
                    {events.map((e, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 + i * 0.12 }} className="flex items-center gap-4 rounded-xl px-4 py-3 well">
                        <span className="font-mono text-[15px] text-ink/50">{e.tm}</span>
                        <span className="text-[15px] flex-1">{t(e.w)}</span>
                        <StatusPill s={e.s} className="!text-[12px] !px-2.5 !py-1" />
                      </motion.div>
                    ))}
                  </div>
                  <div className="rounded-2xl well flex flex-col items-center justify-center">
                    <svg width={116} height={116} viewBox="0 0 120 120">
                      <circle cx={60} cy={60} r={50} style={{ stroke: "rgb(var(--ink) / 0.08)" }} strokeWidth={10} fill="none" />
                      <motion.circle cx={60} cy={60} r={50} stroke={C.brand} strokeWidth={10} fill="none" strokeLinecap="round" transform="rotate(-90 60 60)" initial={{ pathLength: 0 }} animate={{ pathLength: 14 / 21 }} transition={{ delay: 1, duration: 1.4, ease: EASE }} />
                      <text x={60} y={68} textAnchor="middle" fontSize={26} fontWeight={700} style={{ fill: "rgb(var(--ink))" }}>
                        14/21
                      </text>
                    </svg>
                    <div className="text-[14px] text-ink/55 mt-2 text-center px-2">{t(["Məzuniyyət qalığı", "Leave balance", "Остаток отпуска"])}</div>
                  </div>
                </div>
              </div>
            </Window>
          </R>
        </Mock>
        <Mock w={760} h={640} className="flex-1 min-w-0">
          <R d={0.4} x={30} y={0} className="h-full">
            <Window
              title={t(["GPS · Canlı xəritə", "GPS · Live map", "GPS · Живая карта"])}
              className="h-full"
              right={
                <span className="flex items-center gap-2 text-[14px] font-medium" style={{ color: C.ok }}>
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: C.ok }} /> {t(["Canlı", "Live", "Онлайн"])}
                </span>
              }
            >
              <div className="absolute inset-0">
                <MapView />
              </div>
              <div className="absolute left-6 bottom-6 right-6 flex items-end justify-between gap-3">
                <motion.div key={toast} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl px-5 py-3.5 text-[15px] flex items-center gap-3 surface">
                  <span style={{ color: toasts[toast].c }}>
                    <Icon name="map" size={18} />
                  </span>
                  {t(toasts[toast].t)}
                </motion.div>
                <div className="rounded-2xl px-5 py-3.5 text-[15px] text-ink/70 surface whitespace-nowrap">{t(["Marşrut · 38 km", "Route · 38 km", "Маршрут · 38 км"])}</div>
              </div>
            </Window>
          </R>
        </Mock>
      </div>
    </Slide>
  );
}

/* =============================== 11 · PAYROLL =============================== */

const PIPE: { t: Tx; d: Tx; i: IconName; c: string }[] = [
  { t: ["Davamiyyət", "Attendance", "Табель"], d: ["Tabel, gecikmə və məzuniyyət", "Timesheet, lateness and leave", "Табель, опоздания и отпуска"], i: "clock", c: C.brand },
  { t: ["Qaydalar", "Rules", "Правила"], d: ["Əlavə və tutulma — bir dəfə qurulur", "Bonuses and deductions — set up once", "Начисления и удержания — настраиваются один раз"], i: "flow", c: C.brand },
  { t: ["Hesablama", "Calculation", "Расчёт"], d: ["Dövr bağlananda avtomatik", "Automatic when the period closes", "Автоматически при закрытии периода"], i: "bolt", c: C.info },
  { t: ["Təsdiq və əmr", "Approval & order", "Утверждение и приказ"], d: ["Maliyyə təsdiqləyir, əmr çıxır", "Finance approves, an order is issued", "Финансы утверждают, выходит приказ"], i: "sign", c: C.warn },
  { t: ["Mühasibat və bank", "Accounting & bank", "Бухгалтерия и банк"], d: ["Jurnal yazılışı və bank köçürməsi", "Journal entry and bank transfer", "Проводка и банковский перевод"], i: "landmark", c: C.ok },
];

export function SlidePayroll() {
  const t = useT();
  const active = useCycle(PIPE.length, 1300, 1200);
  const rows: [Tx, string, string?][] = [
    [["Əsas maaş", "Base salary", "Оклад"], "2 400,00"],
    [["İş günü", "Working days", "Рабочие дни"], "22 / 22"],
    [["Satış bonusu", "Sales bonus", "Бонус за продажи"], "+350,00", C.ok],
    [["Gecikmə tutulması", "Lateness deduction", "Удержание за опоздание"], "−24,00", C.warn],
    [["Gəlir vergisi", "Income tax", "Подоходный налог"], "−190,82", C.slate],
    [["Sosial və tibbi sığorta", "Social & medical insurance", "Соц. и мед. страхование"], "−95,41", C.slate],
  ];
  return (
    <Slide>
      <Head
        n="M06"
        color={C.ok}
        size={64}
        eyebrow={t(["Əməkhaqqı", "Payroll", "Зарплата"])}
        title={
          <>
            {t(["Maaş qaydaya görə hesablanır, ", "Salaries follow the rules, ", "Зарплата считается по правилам, "])}
            <Hl color={C.ok}>{t(["təxminə görə yox.", "not guesswork.", "а не на глаз."])}</Hl>
          </>
        }
      />
      <div className="flex gap-12 mt-10 flex-1 min-h-0 n:flex-col n:gap-6 n:mt-6">
        <div className="flex-1 flex flex-col justify-between relative n:gap-4">
          <div className="absolute left-[33px] top-8 bottom-8 w-[2px] bg-ink/[0.08] n:left-[21px]">
            <motion.div className="w-full" style={{ background: C.ok }} animate={{ height: `${(active / (PIPE.length - 1)) * 100}%` }} transition={{ duration: 0.8, ease: EASE }} />
          </div>
          {PIPE.map((p, i) => {
            const on = i <= active;
            return (
              <R key={i} d={0.3 + i * 0.1} x={-20} y={0}>
                <div className="relative flex items-center gap-7 n:gap-4">
                  <motion.div
                    animate={{ scale: i === active ? 1.08 : 1 }}
                    className="w-[68px] h-[68px] rounded-2xl flex items-center justify-center shrink-0 z-10 transition-colors duration-500 n:w-11 n:h-11 n:rounded-xl"
                    style={{
                      background: on ? p.c : "rgb(var(--card))",
                      color: on ? "#fff" : "rgb(var(--ink) / 0.4)",
                      boxShadow: on ? `0 16px 30px -12px ${p.c}` : "inset 0 0 0 1px rgb(var(--ink) / 0.1)",
                    }}
                  >
                    <Icon name={p.i} size={28} className="n:w-5 n:h-5" />
                  </motion.div>
                  <div>
                    <div className="text-[26px] font-semibold transition-colors n:text-[16px]" style={{ color: on ? "rgb(var(--ink))" : "rgb(var(--ink) / 0.45)" }}>
                      {t(p.t)}
                    </div>
                    <div className="tx-body text-ink/50 mt-0.5">{t(p.d)}</div>
                  </div>
                </div>
              </R>
            );
          })}
        </div>
        <R d={0.5} className="w-[680px] shrink-0 n:w-full" x={30} y={0}>
          <Window
            title={t(["Əməkhaqqı vərəqi · Oktyabr 2026", "Payslip · October 2026", "Расчётный лист · Октябрь 2026"])}
            className="h-full"
            right={
              <Pill color={C.slate} className="!text-[12px] !py-1">
                {t(["Nümunə", "Sample", "Пример"])}
              </Pill>
            }
          >
            <div className="p-8 flex flex-col h-full n:p-4">
              <div className="flex items-center gap-4">
                <Avatar name="Leyla Məmmədova" size={52} />
                <div>
                  <div className="text-[22px] font-semibold n:text-[16px]">Leyla Məmmədova</div>
                  <div className="tx-sm text-ink/50">{t(["Regional satış meneceri", "Regional sales manager", "Региональный менеджер"])}</div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                {rows.map(([k, v, c], i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + i * 0.09 }} className="flex justify-between gap-3 py-3.5 border-b border-ink/[0.06] text-[18px] n:text-[13px] n:py-2.5">
                    <span className="text-ink/60">{t(k)}</span>
                    <span className="font-mono font-medium" style={{ color: c ?? "rgb(var(--ink))" }}>
                      {v}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl p-6 flex items-center justify-between gap-3 n:p-4" style={{ background: `${C.ok}12`, boxShadow: `inset 0 0 0 1px ${C.ok}40` }}>
                <div>
                  <div className="tx-cap text-ink/55">{t(["Ödəniləcək", "Net pay", "К выплате"])}</div>
                  <div className="font-display text-[46px] font-semibold tracking-tight leading-tight n:text-[28px]">
                    <Counter to={2439.77} d={1.4} format={(n) => fmt(n, 2)} /> ₼
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <StatusPill s="approved" />
                  <span className="tx-xs text-ink/50 text-right">{t(["Əmr №231 · bank köçürməsi", "Order #231 · bank transfer", "Приказ №231 · перевод"])}</span>
                </div>
              </div>
            </div>
          </Window>
        </R>
      </div>
    </Slide>
  );
}

/* =============================== 12 · TALENT =============================== */

export function SlideTalent() {
  const t = useT();
  const funnel: { t: Tx; v: number; w: number }[] = [
    { t: ["Vakansiya", "Vacancies", "Вакансии"], v: 3, w: 100 },
    { t: ["Müraciət", "Applications", "Отклики"], v: 42, w: 88 },
    { t: ["Müsahibə", "Interviews", "Интервью"], v: 8, w: 74 },
    { t: ["İş təklifi", "Offers", "Офферы"], v: 2, w: 60 },
    { t: ["Yeni işçi", "New hire", "Новый сотрудник"], v: 1, w: 48 },
  ];
  const kpi: { t: Tx; v: number }[] = [
    { t: ["Satış planı", "Sales plan", "План продаж"], v: 92 },
    { t: ["Müştəri məmnuniyyəti", "Client satisfaction", "Удовлетворённость"], v: 88 },
    { t: ["Vaxtında tapşırıq", "Tasks on time", "Задачи в срок"], v: 79 },
  ];
  const calib: { d: Tx; seg: number[] }[] = [
    { d: ["Satış", "Sales", "Продажи"], seg: [8, 22, 46, 24] },
    { d: ["Maliyyə", "Finance", "Финансы"], seg: [10, 24, 44, 22] },
    { d: ["Logistika", "Logistics", "Логистика"], seg: [9, 23, 45, 23] },
  ];
  const segColors = ["rgb(var(--ink) / 0.14)", `${C.info}80`, C.info, "#0090a3"];
  const sessions: { t: Tx; d: Tx; tag: Tx }[] = [
    { t: ["Satış danışıqları", "Sales negotiation", "Переговоры о продажах"], d: ["14 Okt · 12 nəfər", "Oct 14 · 12 people", "14 окт · 12 чел."], tag: ["Peşə", "Skills", "Навыки"] },
    { t: ["Təhlükəsizlik təlimatı", "Safety briefing", "Инструктаж по ТБ"], d: ["16 Okt · məcburi", "Oct 16 · mandatory", "16 окт · обязательно"], tag: ["Təhlükəsizlik", "Safety", "ТБ"] },
    { t: ["Liderlik əsasları", "Leadership basics", "Основы лидерства"], d: ["21 Okt · menecerlər", "Oct 21 · managers", "21 окт · менеджеры"], tag: ["İnkişaf", "Growth", "Развитие"] },
  ];
  return (
    <Slide>
      <Head
        n="M07 · M08 · M09"
        size={64}
        eyebrow={t(["İşə qəbul, performans, təlim", "Hiring, performance, training", "Найм, KPI, обучение"])}
        title={
          <>
            {t(["İstedadı tap. Ölç. ", "Find talent. Measure. ", "Найти. Оценить. "])}
            <Hl>{t(["Böyüt.", "Grow.", "Вырастить."])}</Hl>
          </>
        }
        lead={t([
          "Rəhbər kimin böyüdüyünü, kimin dəstəyə ehtiyacı olduğunu rəqəmlə görür.",
          "Leaders see in numbers who is growing and who needs support.",
          "Руководитель видит в цифрах, кто растёт, а кому нужна поддержка.",
        ])}
      />
      <div className="grid grid-cols-3 gap-7 mt-10 flex-1 min-h-0 n:grid-cols-1 n:gap-4 n:mt-6">
        <R d={0.25} className="h-full">
          <Card className="h-full p-8 flex flex-col n:p-5">
            <Accent color={C.brand} />
            <div className="flex items-center gap-4">
              <IconBox name="briefcase" color={C.brand} size={50} />
              <div className="tx-h3">{t(["İşə qəbul", "Recruitment", "Подбор"])}</div>
            </div>
            <div className="mt-7 flex flex-col gap-3 n:mt-4 n:gap-2">
              {funnel.map((f, i) => (
                <div key={i} className="h-[56px] n:h-10">
                  <motion.div
                    className="h-full rounded-xl flex items-center justify-between px-4"
                    style={{ background: i === 4 ? C.brand : `${C.brand}${["1a", "16", "12", "0f"][i]}`, color: i === 4 ? "#fff" : undefined, boxShadow: `inset 0 0 0 1px ${C.brand}33` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${f.w}%` }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.9, ease: EASE }}
                  >
                    <span className="text-[16px] font-medium whitespace-nowrap n:text-[13px]">{t(f.t)}</span>
                    <span className="font-mono text-[16px] font-semibold n:text-[13px]">{f.v}</span>
                  </motion.div>
                </div>
              ))}
            </div>
            <p className="mt-auto pt-6 tx-sm text-ink/55">
              {t([
                "CV-lər arxivdə qalır. Qəbul olunan namizəd bir kliklə işçiyə və müqaviləyə çevrilir.",
                "CVs stay in the archive. A hired candidate becomes an employee and a contract in one click.",
                "Резюме остаются в архиве. Принятый кандидат в один клик становится сотрудником с договором.",
              ])}
            </p>
          </Card>
        </R>
        <R d={0.35} className="h-full">
          <Card className="h-full p-8 flex flex-col n:p-5">
            <Accent color={C.info} />
            <div className="flex items-center gap-4">
              <IconBox name="target" color={C.info} size={50} />
              <div className="tx-h3">{t(["Performans", "Performance", "Эффективность"])}</div>
            </div>
            <div className="mt-7 flex flex-col gap-4 n:mt-4">
              {kpi.map((k, i) => (
                <div key={i}>
                  <div className="flex justify-between tx-sm mb-2">
                    <span className="text-ink/70">KPI · {t(k.t)}</span>
                    <span className="font-mono font-semibold">{k.v}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-ink/[0.07] overflow-hidden">
                    <motion.div className="h-full rounded-full" style={{ background: C.info }} initial={{ width: 0 }} animate={{ width: `${k.v}%` }} transition={{ delay: 0.7 + i * 0.12, duration: 1.1, ease: EASE }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 tx-cap text-ink/45 n:mt-5">{t(["Kalibrasiya", "Calibration", "Калибровка"])}</div>
            <div className="mt-3 flex flex-col gap-2.5">
              {calib.map((c, ci) => (
                <div key={ci} className="flex items-center gap-3">
                  <span className="w-[96px] tx-sm text-ink/60 n:w-[80px]">{t(c.d)}</span>
                  <div className="flex-1 flex h-4 rounded-full overflow-hidden gap-[2px]">
                    {c.seg.map((s, si) => (
                      <motion.span key={si} style={{ background: segColors[si] }} initial={{ width: 0 }} animate={{ width: `${s}%` }} transition={{ delay: 1.2 + ci * 0.1, duration: 0.8 }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-auto pt-6 tx-sm text-ink/55">
              {t([
                "Bir şöbənin “əla”sı digər şöbənin “əla”sı ilə eyni mənanı daşıyır.",
                "“Excellent” in one department means the same as in any other.",
                "«Отлично» в одном отделе значит то же, что и в любом другом.",
              ])}
            </p>
          </Card>
        </R>
        <R d={0.45} className="h-full">
          <Card className="h-full p-8 flex flex-col n:p-5">
            <Accent color={C.ok} />
            <div className="flex items-center gap-4">
              <IconBox name="graduation" color={C.ok} size={50} />
              <div className="tx-h3">{t(["Təlim", "Training", "Обучение"])}</div>
            </div>
            <div className="mt-7 flex flex-col gap-3 n:mt-4">
              {sessions.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.1 }} className="rounded-2xl p-4 well flex items-center gap-4 n:p-3 n:gap-3">
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${C.ok}1a`, color: C.ok }}>
                    <Icon name="calendar" size={21} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[17px] font-semibold n:text-[14px]">{t(s.t)}</div>
                    <div className="tx-xs text-ink/50">{t(s.d)}</div>
                  </div>
                  <span className="text-[13px] px-2.5 py-1 rounded-lg well text-ink/60 shrink-0 n:text-[11px]">{t(s.tag)}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-auto pt-6 tx-sm text-ink/55">
              {t([
                "Keçilmiş təlim işçinin inkişaf tarixçəsinə düşür — həm peşə, həm təhlükəsizlik üçün.",
                "Every completed course goes into the employee’s growth history — skills and safety alike.",
                "Пройденное обучение попадает в историю развития — и по навыкам, и по технике безопасности.",
              ])}
            </p>
          </Card>
        </R>
      </div>
    </Slide>
  );
}

