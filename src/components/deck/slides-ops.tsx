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
  Counter,
  fmt,
  useCycle,
  useT,
  type IconName,
  type Tx,
} from "./primitives";

/* =============================== TREASURY · M11 =============================== */

export function SlideTreasury() {
  const t = useT();
  const active = useCycle(4, 1400, 1000);
  const pack: { who: Tx; amt: string; due: Tx; s: "pending" | "approved" | "draft" }[] = [
    { who: ["Xəzər Logistik", "Xazar Logistics", "Xəzər Logistik"], amt: "18 400 ₼", due: ["Bu gün", "Today", "Сегодня"], s: "pending" },
    { who: ["AzərEnerji", "AzerEnergy", "AzərEnerji"], amt: "6 250 ₼", due: ["Sabah", "Tomorrow", "Завтра"], s: "approved" },
    { who: ["Ofis icarəsi", "Office rent", "Аренда офиса"], amt: "4 800 ₼", due: ["3 gün", "In 3 days", "Через 3 дня"], s: "draft" },
    { who: ["Sosial ayırma", "Social contrib.", "Соцвзносы"], amt: "12 110 ₼", due: ["5 gün", "In 5 days", "Через 5 дней"], s: "pending" },
  ];
  const tools: { i: IconName; t: Tx; d: Tx }[] = [
    { i: "bank", t: ["Kredit və depozit", "Loans & deposits", "Кредиты и депозиты"], d: ["Bank alətləri bir yerdə", "Bank instruments in one place", "Банковские инструменты рядом"] },
    { i: "shield", t: ["Qarantiya · Akkreditiv", "Guarantees · LCs", "Гарантии · Аккредитивы"], d: ["Böyük məbləğ təsadüfi getmir", "Large amounts never go by chance", "Крупные суммы — не случайно"] },
    { i: "globe", t: ["Valyuta mövqeyi", "FX position", "Валютная позиция"], d: ["Manat və xarici valyuta", "Manat and foreign currency", "Манат и иностранная валюта"] },
  ];
  return (
    <Slide>
      <Head
        n="M11"
        color={C.ok}
        size={64}
        eyebrow={t(["Xəzinədarlıq", "Treasury", "Казначейство"])}
        title={
          <>
            {t(["Bu gün nə ödəyirik. ", "What we pay today. ", "Что платим сегодня. "])}
            <Hl color={C.ok}>{t(["Sabah nə qədər nəfəsimiz var.", "How much breath we have tomorrow.", "Сколько воздуха завтра."])}</Hl>
          </>
        }
        lead={t([
          "Ödəniş təqvimi, paket və təsdiq zənciri — böyük məbləğ təsadüfi düyməyə düşmür.",
          "Payment calendar, packages and approval chain — large amounts never hit a random button.",
          "Календарь платежей, пакеты и цепочка согласования — крупная сумма не уходит случайной кнопкой.",
        ])}
        leadW={580}
      />
      <div className="grid grid-cols-[1.15fr_0.95fr_0.9fr] gap-6 mt-10 flex-1 min-h-0 n:grid-cols-1 n:gap-4 n:mt-6">
        <R d={0.25}>
          <Window title={t(["Ödəniş paketi · №48", "Payment pack · #48", "Пакет платежей · №48"])} className="h-full">
            <div className="p-6 flex flex-col h-full n:p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="tx-h4">{t(["Bu həftənin ödənişləri", "This week’s payments", "Платежи этой недели"])}</div>
                  <div className="tx-xs text-ink/50">{t(["4 ödəniş · 41 560 ₼", "4 payments · 41 560 ₼", "4 платежа · 41 560 ₼"])}</div>
                </div>
                <StatusPill s="pending" />
              </div>
              <div className="mt-5 flex flex-col gap-2.5 flex-1">
                {pack.map((p, i) => (
                  <motion.div
                    key={i}
                    animate={{ boxShadow: active === i ? `inset 0 0 0 1.5px ${C.ok}` : "inset 0 0 0 1px rgb(var(--ink) / 0.06)" }}
                    className="rounded-2xl px-4 py-3 flex items-center gap-3 well n:px-3 n:py-2.5"
                  >
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: active === i ? C.ok : "rgb(var(--ink) / 0.2)" }} />
                    <div className="min-w-0 flex-1">
                      <div className="tx-sm font-semibold truncate">{t(p.who)}</div>
                      <div className="tx-xs text-ink/50">{t(p.due)}</div>
                    </div>
                    <div className="font-mono text-[16px] font-semibold n:text-[13px]">{p.amt}</div>
                    <StatusPill s={p.s} className="!text-[11px] !px-2 !py-0.5 n:hidden" />
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl py-3.5 px-4 flex items-center justify-between" style={{ background: `${C.ok}12`, boxShadow: `inset 0 0 0 1px ${C.ok}33` }}>
                <span className="tx-sm font-medium">{t(["Paket təsdiqlənəndən sonra icra", "Runs only after pack approval", "Исполнение после утверждения пакета"])}</span>
                <span className="font-display text-[22px] font-semibold" style={{ color: C.ok }}>
                  41 560
                </span>
              </div>
            </div>
          </Window>
        </R>
        <R d={0.4}>
          <Card className="h-full p-7 flex flex-col n:p-5">
            <Accent color={C.ok} />
            <div className="flex items-center gap-4">
              <IconBox name="chart" color={C.ok} size={52} />
              <div className="tx-h3">{t(["Likvidlik proqnozu", "Liquidity forecast", "Прогноз ликвидности"])}</div>
            </div>
            <div className="mt-6 flex items-end gap-2 h-[160px] n:h-[120px]">
              {[62, 54, 71, 48, 80, 66, 74].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-lg"
                  style={{ background: i === 4 ? C.ok : `${C.ok}33` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.7 + i * 0.08, duration: 0.7, ease: EASE }}
                />
              ))}
            </div>
            <div className="mt-3 flex justify-between tx-xs text-ink/45">
              {["B.e", "Ç.a", "Ç", "C.a", "C", "Ş", "B"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
            <div className="mt-auto pt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl p-3.5 well">
                <div className="tx-xs text-ink/50">{t(["Pul mövqeyi", "Cash position", "Денежная позиция"])}</div>
                <div className="font-display text-[28px] font-semibold n:text-[22px]">
                  <Counter to={284500} d={0.6} format={(n) => fmt(Math.round(n))} />
                </div>
              </div>
              <div className="rounded-xl p-3.5 well">
                <div className="tx-xs text-ink/50">{t(["7 günlük ehtiyat", "7-day buffer", "Запас на 7 дней"])}</div>
                <div className="font-display text-[28px] font-semibold n:text-[22px]" style={{ color: C.ok }}>
                  +18%
                </div>
              </div>
            </div>
          </Card>
        </R>
        <R d={0.55} className="flex flex-col gap-4 n:gap-3">
          {tools.map((x, i) => (
            <Card key={i} className="p-5 flex items-start gap-4 flex-1 n:p-4">
              <IconBox name={x.i} color={C.ok} size={48} />
              <div className="pt-0.5">
                <div className="tx-h4">{t(x.t)}</div>
                <div className="tx-sm text-ink/55 mt-1">{t(x.d)}</div>
              </div>
            </Card>
          ))}
        </R>
      </div>
    </Slide>
  );
}

/* =============================== TAX · M12 =============================== */

export function SlideTax() {
  const t = useT();
  const blocks: { i: IconName; c: string; t: Tx; items: Tx[] }[] = [
    {
      i: "percent",
      c: C.warn,
      t: ["Dolayı vergilər", "Indirect taxes", "Косвенные налоги"],
      items: [
        ["ƏDV bəyannaməsi", "VAT return", "Декларация НДС"],
        ["Alış kitabı", "Purchase book", "Книга покупок"],
        ["Satış kitabı", "Sales book", "Книга продаж"],
      ],
    },
    {
      i: "landmark",
      c: C.ok,
      t: ["Birbaşa vergilər", "Direct taxes", "Прямые налоги"],
      items: [
        ["Gəlir vergisi", "Income tax", "Подоходный"],
        ["Mənfəət vergisi", "Profit tax", "Налог на прибыль"],
        ["Sadələşdirilmiş", "Simplified tax", "Упрощённый"],
      ],
    },
    {
      i: "shield",
      c: C.brand,
      t: ["Sosial ayırmalar", "Social contributions", "Социальные взносы"],
      items: [
        ["DSMF hesabatları", "SSF reports", "Отчёты ГФСС"],
        ["İşsizlik sığortası", "Unemployment", "Страхование от безработицы"],
        ["İTS · e-Sosial", "CHI · e-Social", "ОМС · e-Social"],
      ],
    },
  ];
  const calendar: { d: string; t: Tx; due: boolean }[] = [
    { d: "15", t: ["ƏDV · Oktyabr", "VAT · October", "НДС · Октябрь"], due: true },
    { d: "20", t: ["DSMF bildirişi", "SSF notice", "Уведомление ГФСС"], due: true },
    { d: "25", t: ["Mənfəət avansı", "Profit advance", "Аванс по прибыли"], due: false },
    { d: "30", t: ["Statistika paketi", "Statistics pack", "Статистический пакет"], due: false },
  ];
  return (
    <Slide>
      <Head
        n="M12"
        color={C.warn}
        size={64}
        eyebrow={t(["Vergi və uyğunluq", "Tax & compliance", "Налоги и соответствие"])}
        title={
          <>
            {t(["Gündəlik əməliyyat ", "Daily operations ", "Ежедневные операции "])}
            <Hl>{t(["dövlət hesabatına çevrilir.", "become the state report.", "становятся отчётом государству."])}</Hl>
          </>
        }
        lead={t([
          "Mühasib ayın sonunda əllə toplamır — artıq gedən işin yekununu götürür.",
          "At month-end the accountant doesn’t gather figures by hand — they take the total of work already done.",
          "В конце месяца бухгалтер не собирает цифры вручную — он берёт итог уже идущей работы.",
        ])}
        leadW={560}
      />
      <div className="grid grid-cols-[1.4fr_1fr] gap-7 mt-10 flex-1 min-h-0 n:grid-cols-1 n:gap-4 n:mt-6">
        <div className="grid grid-cols-3 gap-5 n:grid-cols-1 n:gap-3">
          {blocks.map((b, i) => (
            <R key={i} d={0.25 + i * 0.1} className="h-full">
              <Card className="h-full p-6 flex flex-col n:p-4">
                <Accent color={b.c} />
                <IconBox name={b.i} color={b.c} size={50} />
                <div className="mt-5 tx-h3 n:mt-3">{t(b.t)}</div>
                <div className="mt-4 flex flex-col gap-2.5 flex-1">
                  {b.items.map((it, k) => (
                    <div key={k} className="flex items-center gap-2.5 tx-sm text-ink/75">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: b.c }} />
                      {t(it)}
                    </div>
                  ))}
                </div>
              </Card>
            </R>
          ))}
        </div>
        <R d={0.55}>
          <Card className="h-full p-7 flex flex-col n:p-5">
            <Accent color={C.warn} />
            <div className="flex items-center gap-4">
              <IconBox name="calendar" color={C.warn} size={52} />
              <div>
                <div className="tx-h3">{t(["Vergi təqvimi", "Tax calendar", "Налоговый календарь"])}</div>
                <div className="tx-xs text-ink/50">{t(["Noyabr · ödəniş və hesabat", "November · filings & payments", "Ноябрь · отчёты и платежи"])}</div>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 flex-1">
              {calendar.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1, ease: EASE }}
                  className="rounded-2xl px-4 py-3.5 flex items-center gap-4 well n:px-3 n:py-3"
                >
                  <span
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-mono text-[18px] font-semibold shrink-0 n:w-10 n:h-10 n:text-[15px]"
                    style={{ background: c.due ? `${C.warn}18` : "rgb(var(--ink) / 0.04)", color: c.due ? C.warn : "rgb(var(--ink) / 0.45)" }}
                  >
                    {c.d}
                  </span>
                  <div className="flex-1 min-w-0 tx-sm font-semibold">{t(c.t)}</div>
                  {c.due ? (
                    <Pill color={C.warn} className="!text-[12px]">
                      {t(["Yaxınlaşır", "Due soon", "Скоро"])}
                    </Pill>
                  ) : (
                    <span className="tx-xs text-ink/40">{t(["Plan", "Planned", "План"])}</span>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl p-4 flex items-start gap-3" style={{ background: `${C.warn}10`, boxShadow: `inset 0 0 0 1px ${C.warn}28` }}>
              <span style={{ color: C.warn }}>
                <Icon name="file" size={20} />
              </span>
              <div className="tx-sm text-ink/70">
                {t([
                  "Vergi yoxlaması faylı “rəqəm haradan yığıldı?” sualını bağlayır.",
                  "The tax audit file answers “where did this figure come from?”",
                  "Файл налоговой проверки закрывает вопрос «откуда взялась цифра?»",
                ])}
              </div>
            </div>
          </Card>
        </R>
      </div>
    </Slide>
  );
}

/* =============================== PRODUCTION · M15 =============================== */

export function SlideProduction() {
  const t = useT();
  const step = useCycle(6, 1300, 1100);
  const chain: { i: IconName; t: Tx; d: Tx }[] = [
    { i: "layers", t: ["Resept", "BOM / Recipe", "Рецепт"], d: ["Tərkib və marşrut", "Composition & routing", "Состав и маршрут"] },
    { i: "calendar", t: ["Plan", "Plan", "План"], d: ["MRP və qrafik", "MRP & schedule", "MRP и график"] },
    { i: "file", t: ["İş əmri", "Work order", "Наряд"], d: ["Sexə düşür", "Goes to the shop floor", "Уходит в цех"] },
    { i: "box", t: ["Material", "Material", "Материал"], d: ["Anbardan buraxılır", "Issued from stock", "Списание со склада"] },
    { i: "factory", t: ["Sex", "Shop floor", "Цех"], d: ["Əməliyyat qeydi", "Operation logged", "Операция зафиксирована"] },
    { i: "check", t: ["Hazır məhsul", "Finished goods", "Готовая продукция"], d: ["Keyfiyyət · anbar", "QA · warehouse", "ОТК · склад"] },
  ];
  const panels: { i: IconName; c: string; t: Tx; d: Tx }[] = [
    {
      i: "building",
      c: C.info,
      t: ["Resurslar", "Resources", "Ресурсы"],
      d: ["Zavod, xətt, avadanlıq, briqada və növbə — sexin gücü görünür.", "Plant, line, equipment, crew and shift — shop capacity is visible.", "Завод, линия, оборудование, бригада и смена — мощность цеха видна."],
    },
    {
      i: "shield",
      c: C.brand,
      t: ["Keyfiyyət və iz", "Quality & trace", "Качество и след"],
      d: ["Prosesdaxili yoxlama, partiya geneologiyası, uyğunsuzluq və düzəldici tədbir.", "In-process checks, lot genealogy, non-conformance and corrective action.", "Межоперационный контроль, генеалогия партий, несоответствия и меры."],
    },
    {
      i: "coins",
      c: C.ok,
      t: ["Maya dəyəri", "Costing", "Себестоимость"],
      d: ["Standart və faktiki maya, material-əmək-overhead fərqi maliyyəyə bağlanır.", "Standard vs actual cost, material-labour-overhead variance ties to finance.", "Норматив и факт, отклонения материалов-труда-накладных — в финансы."],
    },
  ];
  return (
    <Slide>
      <Head
        n="M15"
        color={C.info}
        size={64}
        eyebrow={t(["İstehsalat", "Manufacturing", "Производство"])}
        title={
          <>
            {t(["Reseptdən hazır məhsula — ", "From recipe to finished goods — ", "От рецепта до готовой продукции — "])}
            <Hl color={C.info}>{t(["sexin bütün yolu.", "the whole shop-floor path.", "весь путь цеха."])}</Hl>
          </>
        }
        lead={t([
          "Material sexə buraxılır, hazır məhsul anbara düşür, maya dəyəri maliyyəyə bağlanır. Zəncir qırılmır.",
          "Material issues to the shop, finished goods land in stock, cost lands in finance. The chain never breaks.",
          "Материал уходит в цех, готовая продукция — на склад, себестоимость — в финансы. Цепочка не рвётся.",
        ])}
        leadW={600}
      />
      <R d={0.25} className="mt-9 n:mt-5">
        <Card className="p-5 n:p-3">
          <div className="flex items-stretch gap-2 n:flex-col n:gap-2">
            {chain.map((c, i) => {
              const on = i === step;
              const done = i < step;
              return (
                <div key={i} className="contents">
                  <motion.div
                    animate={{ y: on ? -4 : 0 }}
                    className="relative flex-1 rounded-2xl px-3.5 py-4 flex flex-col items-center text-center n:flex-row n:items-center n:text-left n:gap-3 n:py-3"
                    style={{
                      background: on || done ? `${C.info}12` : "rgb(var(--ink) / 0.03)",
                      boxShadow: `inset 0 0 0 1.5px ${on ? C.info : "rgb(var(--ink) / 0.06)"}`,
                    }}
                  >
                    <span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 n:w-9 n:h-9" style={{ color: C.info, background: `${C.info}18` }}>
                      <Icon name={c.i} size={22} />
                    </span>
                    <div className="mt-3 n:mt-0 min-w-0">
                      <div className="tx-sm font-semibold">{t(c.t)}</div>
                      <div className="tx-xs text-ink/50 mt-0.5">{t(c.d)}</div>
                    </div>
                    <span className="absolute top-2.5 right-2.5 font-mono text-[11px] font-semibold opacity-40 n:static n:ml-auto">{String(i + 1).padStart(2, "0")}</span>
                  </motion.div>
                  {i < chain.length - 1 && (
                    <span className="self-center text-ink/25 n:hidden">
                      <Icon name="arrow" size={16} />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      </R>
      <div className="grid grid-cols-3 gap-6 mt-6 flex-1 min-h-0 n:grid-cols-1 n:gap-3 n:mt-4">
        {panels.map((p, i) => (
          <R key={i} d={0.5 + i * 0.1} className="h-full">
            <Card className="h-full p-7 flex flex-col n:p-4">
              <IconBox name={p.i} color={p.c} size={52} />
              <div className="mt-5 tx-h3 n:mt-3">{t(p.t)}</div>
              <p className="mt-3 tx-sm text-ink/60">{t(p.d)}</p>
            </Card>
          </R>
        ))}
      </div>
    </Slide>
  );
}
