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
  type Tx,
} from "./primitives";
import { LogoMark } from "./logo";

/* =============================== 13 · FINANCE =============================== */

export function SlideFinance() {
  const t = useT();
  const aging: { l: Tx; v: number; w: number; c: string }[] = [
    { l: ["Bu gün", "Today", "Сегодня"], v: 64200, w: 100, c: C.ok },
    { l: ["Bu ay", "This month", "В этом месяце"], v: 38900, w: 61, c: C.warn },
    { l: ["Daha köhnə", "Older", "Старше"], v: 12400, w: 22, c: C.slate },
  ];
  const ledger: Tx[] = [
    ["Jurnal", "Journal", "Журнал"],
    ["Baş kitab", "General ledger", "Главная книга"],
    ["Dövriyyə-saldo", "Trial balance", "ОСВ"],
    ["Balans", "Balance sheet", "Баланс"],
    ["Mənfəət və zərər", "Profit & loss", "Прибыли и убытки"],
  ];
  const entries: [Tx, string, string][] = [
    [["Əməkhaqqı xərci", "Payroll expense", "Расходы на оплату труда"], "48 200,00", ""],
    [["İşçilərə borc", "Salaries payable", "Задолженность перед персоналом"], "", "41 650,00"],
    [["Vergi və sığorta", "Tax & insurance", "Налоги и страхование"], "", "6 550,00"],
  ];
  return (
    <Slide>
      <Head
        n="M10"
        color={C.ok}
        size={64}
        eyebrow={t(["Maliyyə", "Finance", "Финансы"])}
        title={
          <>
            {t(["Pulun tam şəkli — ", "The full picture of money — ", "Полная картина денег — "])}
            <Hl color={C.ok}>{t(["kassadan balansa.", "from cash to balance sheet.", "от кассы до баланса."])}</Hl>
          </>
        }
        lead={t([
          "Maaş, alış, satış və kassa ayrı proqramda yaşamır — hamısı eyni hesablar planına düşür.",
          "Payroll, purchases, sales and cash don’t live in separate apps — all land in one chart of accounts.",
          "Зарплата, закупки, продажи и касса не живут в разных программах — всё попадает в единый план счетов.",
        ])}
        leadW={600}
      />
      <div className="grid grid-cols-[1fr_1.25fr_1fr] grid-rows-2 gap-6 mt-10 flex-1 min-h-0 n:grid-cols-1 n:grid-rows-none n:gap-4 n:mt-6">
        <R d={0.25}>
          <Card className="h-full p-7 flex flex-col n:p-5">
            <Accent color={C.ok} />
            <div className="flex items-center gap-4">
              <IconBox name="coins" color={C.ok} size={48} />
              <div className="tx-h4">{t(["Kassa və bank", "Cash & bank", "Касса и банк"])}</div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-3 tx-xs text-ink/55">
              {t(["Bank çıxarışı ↔ daxili qeyd", "Bank statement ↔ records", "Выписка ↔ учёт"])}
              <span className="font-semibold" style={{ color: C.ok }}>
                128 / 131
              </span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-ink/[0.07] overflow-hidden">
              <motion.div className="h-full rounded-full" style={{ background: C.ok }} initial={{ width: 0 }} animate={{ width: "97.7%" }} transition={{ delay: 0.8, duration: 1.2, ease: EASE }} />
            </div>
            <div className="mt-auto pt-4 flex flex-col gap-2">
              {(
                [
                  ["+12 450 ₼", ["Müştəri ödənişi", "Client payment", "Оплата клиента"], true],
                  ["−3 200 ₼", ["Təchizatçı", "Supplier", "Поставщик"], true],
                  ["−480 ₼", ["Kommunal xərc", "Utilities", "Коммунальные"], false],
                ] as [string, Tx, boolean][]
              ).map(([v, l, ok], i) => (
                <div key={i} className="flex items-center gap-3 tx-sm">
                  <span className="font-mono w-[104px] font-medium n:w-[84px]" style={{ color: v.startsWith("+") ? C.ok : "rgb(var(--ink))" }}>
                    {v}
                  </span>
                  <span className="flex-1 text-ink/60">{t(l)}</span>
                  <span style={{ color: ok ? C.ok : C.warn }}>
                    <Icon name={ok ? "check" : "clock"} size={18} stroke={2.2} />
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </R>
        <R d={0.35} className="row-span-2 n:row-span-1">
          <Window title={t(["Mühasibatlıq · Jurnal yazılışı", "Accounting · Journal entry", "Бухгалтерия · Проводка"])} className="h-full">
            <div className="p-7 flex flex-col h-full n:p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="tx-h4">{t(["Əməkhaqqı təsdiqi · Oktyabr", "Payroll approval · October", "Утверждение зарплаты · Октябрь"])}</div>
                  <div className="tx-xs text-ink/50">{t(["İşçi hesablaması avtomatik yazılışa çevrilir", "The employee calculation becomes a journal entry automatically", "Расчёт по сотрудникам автоматически становится проводкой"])}</div>
                </div>
                <StatusPill s="approved" />
              </div>
              <div className="mt-6 rounded-2xl overflow-hidden border border-ink/[0.08] n:mt-4">
                <div className="grid grid-cols-[1fr_130px_130px] tx-cap text-ink/45 bg-ink/[0.03] px-5 py-3 n:grid-cols-[1fr_76px_76px] n:px-3">
                  <span>{t(["Hesab", "Account", "Счёт"])}</span>
                  <span className="text-right">{t(["Debet", "Debit", "Дебет"])}</span>
                  <span className="text-right">{t(["Kredit", "Credit", "Кредит"])}</span>
                </div>
                {entries.map(([a, d, k], i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + i * 0.12 }} className="grid grid-cols-[1fr_130px_130px] px-5 py-3.5 tx-sm border-t border-ink/[0.06] n:grid-cols-[1fr_76px_76px] n:px-3 n:text-[11px]">
                    <span className="text-ink/85">{t(a)}</span>
                    <span className="text-right font-mono" style={{ color: d ? C.ok : "rgb(var(--ink) / 0.2)" }}>
                      {d || "—"}
                    </span>
                    <span className="text-right font-mono" style={{ color: k ? C.info : "rgb(var(--ink) / 0.2)" }}>
                      {k || "—"}
                    </span>
                  </motion.div>
                ))}
                <div className="grid grid-cols-[1fr_130px_130px] px-5 py-3.5 tx-sm border-t border-ink/[0.1] bg-ink/[0.03] font-semibold n:grid-cols-[1fr_76px_76px] n:px-3 n:text-[11px]">
                  <span>{t(["Cəmi", "Total", "Итого"])}</span>
                  <span className="text-right font-mono">48 200,00</span>
                  <span className="text-right font-mono">48 200,00</span>
                </div>
              </div>
              <div className="mt-auto pt-6">
                <div className="tx-cap text-ink/45 mb-4 n:mb-3">{t(["Yazılışdan hesabata", "From entry to report", "От проводки к отчёту"])}</div>
                <div className="flex flex-wrap items-center gap-2.5 n:gap-1.5">
                  {ledger.map((l, i) => (
                    <motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.3 + i * 0.12 }} className="flex items-center gap-2.5 n:gap-1.5">
                      <span
                        className="px-4 py-2.5 rounded-xl text-[16px] font-medium n:text-[12px] n:px-2.5 n:py-1.5"
                        style={i === ledger.length - 1 ? { background: C.ok, color: "#fff" } : { background: `${C.ok}12`, boxShadow: `inset 0 0 0 1px ${C.ok}33` }}
                      >
                        {t(l)}
                      </span>
                      {i < ledger.length - 1 && (
                        <span className="text-ink/30">
                          <Icon name="arrow" size={16} />
                        </span>
                      )}
                    </motion.span>
                  ))}
                </div>
                <p className="mt-5 tx-sm text-ink/55">
                  {t([
                    "Rəhbər ayın sonunda şirkətin vəziyyətini ayrıca cədvəl axtarmadan görür.",
                    "At month-end the director sees the company’s position without hunting for spreadsheets.",
                    "В конце месяца руководитель видит положение компании без поиска таблиц.",
                  ])}
                </p>
              </div>
            </div>
          </Window>
        </R>
        <R d={0.45}>
          <Card className="h-full p-7 flex flex-col n:p-5">
            <Accent color={C.warn} />
            <div className="flex items-center gap-4">
              <IconBox name="flow" color={C.warn} size={48} />
              <div className="tx-h4">{t(["Debitor və kreditor", "Receivables & payables", "Дебиторка и кредиторка"])}</div>
            </div>
            <div className="mt-2 tx-xs text-ink/50">{t(["Borcların yaşlanma analizi", "Debt aging analysis", "Анализ старения долгов"])}</div>
            <div className="mt-auto pt-4 flex flex-col gap-3">
              {aging.map((a, i) => (
                <div key={i}>
                  <div className="flex justify-between tx-xs mb-1.5">
                    <span className="text-ink/65">{t(a.l)}</span>
                    <span className="font-mono font-medium">{fmt(a.v)} ₼</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-ink/[0.06] overflow-hidden">
                    <motion.div className="h-full rounded-full" style={{ background: a.c }} initial={{ width: 0 }} animate={{ width: `${a.w}%` }} transition={{ delay: 0.9 + i * 0.12, duration: 1, ease: EASE }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </R>
        <R d={0.55}>
          <Card className="h-full p-7 flex flex-col n:p-5">
            <Accent color={C.brand} />
            <div className="flex items-center gap-4">
              <IconBox name="building" color={C.brand} size={48} />
              <div className="tx-h4">{t(["Əsas vəsaitlər", "Fixed assets", "Основные средства"])}</div>
            </div>
            <div className="mt-3 tx-sm text-ink/60">{t(["İnv. №A-0142 · Bakı ofisi · məsul şəxs", "Inv. #A-0142 · Baku office · owner", "Инв. №A-0142 · офис Баку · ответственный"])}</div>
            <div className="mt-auto pt-4 flex items-end gap-[6px] h-[78px] n:h-[56px]">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.span key={i} className="flex-1 rounded-t-md" style={{ background: `linear-gradient(${C.brand}, ${C.brand}40)` }} initial={{ height: 0 }} animate={{ height: `${100 - i * 6.5}%` }} transition={{ delay: 1 + i * 0.04, duration: 0.6 }} />
              ))}
            </div>
            <div className="mt-3 tx-xs text-ink/50">{t(["Aylıq amortizasiya → mühasibat", "Monthly depreciation → accounting", "Ежемесячная амортизация → учёт"])}</div>
          </Card>
        </R>
        <R d={0.65}>
          <Card className="h-full p-7 flex flex-col n:p-5">
            <Accent color={C.info} />
            <div className="flex items-center gap-4">
              <IconBox name="globe" color={C.info} size={48} />
              <div className="tx-h4">{t(["Maliyyə sazlamaları", "Finance settings", "Настройки финансов"])}</div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2.5 n:mt-4">
              {(
                [
                  ["AZN", ["Əsas", "Base", "Основная"]],
                  ["USD", ["Məzənnə", "Rate", "Курс"]],
                  ["EUR", ["Məzənnə", "Rate", "Курс"]],
                ] as [string, Tx][]
              ).map(([c, s]) => (
                <div key={c} className="rounded-xl py-3 text-center well">
                  <div className="font-mono text-[18px] font-semibold n:text-[14px]">{c}</div>
                  <div className="tx-xs text-ink/45">{t(s)}</div>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-4 flex flex-wrap gap-2">
              {(
                [
                  ["Vergilər", "Taxes", "Налоги"],
                  ["Ödəniş şərtləri", "Payment terms", "Условия оплаты"],
                  ["Maliyyə ili", "Fiscal year", "Финансовый год"],
                ] as Tx[]
              ).map((x, i) => (
                <Pill key={i} color={C.info} className="!text-[14px] n:!text-[12px]">
                  {t(x)}
                </Pill>
              ))}
            </div>
          </Card>
        </R>
      </div>
    </Slide>
  );
}

/* =============================== 14 · SUPPLY CHAIN =============================== */

function Lane({ title, icon, color, steps, delay }: { title: Tx; icon: IconName; color: string; steps: Tx[]; delay: number }) {
  const t = useT();
  const active = useCycle(steps.length, 900, delay * 1000 + 800);
  return (
    <Card className="p-6 flex items-center gap-6 n:flex-col n:items-stretch n:p-4 n:gap-3">
      <div className="flex items-center gap-4 w-[220px] shrink-0 n:w-auto">
        <IconBox name={icon} color={color} size={54} />
        <div className="tx-h3">{t(title)}</div>
      </div>
      <div className="flex-1 flex items-center gap-2 n:flex-wrap n:gap-1.5">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-2 flex-1 min-w-0 n:flex-none">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + i * 0.06 }}
              className="relative flex-1 min-w-0 rounded-xl px-3 py-3.5 text-center text-[15px] leading-tight font-medium transition-all duration-300 n:px-2.5 n:py-1.5 n:text-[12px]"
              style={i === active ? { background: color, color: "#fff", boxShadow: `0 12px 24px -12px ${color}` } : { background: "rgb(var(--ink) / 0.035)", boxShadow: "inset 0 0 0 1px rgb(var(--ink) / 0.07)" }}
            >
              {t(s)}
            </motion.div>
            {i < steps.length - 1 && (
              <span className="text-ink/30 shrink-0 n:hidden">
                <Icon name="arrow" size={15} />
              </span>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

export function SlideSupply() {
  const t = useT();
  const stock: [Tx, number, Tx][] = [
    [["Stok qalığı", "In stock", "Остаток"], 1240, ["qutu", "boxes", "коробок"]],
    [["Hərəkət", "Movements", "Движения"], 86, ["bu həftə", "this week", "за неделю"]],
    [["Sayım fərqi", "Count gap", "Расхождения"], 3, ["düzəliş", "adjustments", "корректировки"]],
    [["Köçürmə", "Transfers", "Перемещения"], 12, ["anbarlar arası", "between sites", "между складами"]],
  ];
  return (
    <Slide>
      <Head
        n="M11 · M12 · M13"
        color={C.info}
        size={64}
        eyebrow={t(["Satınalma, anbar, satış", "Purchasing, warehouse, sales", "Закупки, склад, продажи"])}
        title={
          <>
            {t(["Mal bir xətlə ", "Goods move ", "Товар движется "])}
            <Hl color={C.info}>{t(["hərəkət edir.", "along one line.", "по одной линии."])}</Hl>
          </>
        }
        lead={t([
          "Nə alınır, kimdən, neçəyə, gəlib-gəlməyib, ödənilib-ödənilməyib — hamısı bir xətdə görünür.",
          "What is bought, from whom, at what price, whether it arrived and was paid — all on one line.",
          "Что купили, у кого, по какой цене, пришло ли и оплачено ли — всё на одной линии.",
        ])}
        leadW={600}
      />
      <div className="flex gap-7 mt-10 flex-1 min-h-0 n:flex-col n:gap-4 n:mt-6">
        <div className="flex-1 flex flex-col gap-4 justify-center min-w-0 n:gap-3">
          <R d={0.25}>
            <Lane
              title={["Satınalma", "Purchasing", "Закупки"]}
              icon="cart"
              color={C.brand}
              delay={0.4}
              steps={[
                ["Ehtiyac", "Need", "Потребность"],
                ["Tələb", "Request", "Заявка"],
                ["Qiymət sorğusu", "Quote request", "Запрос цен"],
                ["Müqayisə", "Compare", "Сравнение"],
                ["Sifariş", "Order", "Заказ"],
                ["Mal qəbulu", "Receiving", "Приёмка"],
                ["Faktura", "Invoice", "Счёт"],
              ]}
            />
          </R>
          <R d={0.4} className="flex justify-center">
            <div className="flex items-center gap-3 tx-sm text-ink/55">
              <Icon name="arrow" size={18} className="rotate-90" /> {t(["Mal qəbul olunanda anbar onun yerini bilir", "On receipt, the warehouse knows where it is", "При приёмке склад знает, где лежит товар"])}
            </div>
          </R>
          <R d={0.45}>
            <Card className="p-6 n:p-4" style={{ boxShadow: `inset 0 0 0 1.5px ${C.info}55` }}>
              <div className="flex items-center gap-6 n:flex-col n:items-stretch n:gap-3">
                <div className="flex items-center gap-4 w-[220px] shrink-0 n:w-auto">
                  <IconBox name="box" color={C.info} size={54} />
                  <div className="tx-h3">{t(["Anbar", "Warehouse", "Склад"])}</div>
                </div>
                <div className="flex-1 grid grid-cols-4 gap-3 n:grid-cols-2 n:gap-2">
                  {stock.map(([l, v, s], i) => (
                    <div key={i} className="rounded-xl p-4 well n:p-3">
                      <div className="tx-xs text-ink/55">{t(l)}</div>
                      <div className="font-display text-[30px] font-semibold leading-tight n:text-[22px]">
                        <Counter to={v} d={0.8 + i * 0.1} />
                      </div>
                      <div className="tx-xs font-medium" style={{ color: C.info }}>
                        {t(s)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </R>
          <R d={0.55} className="flex justify-center">
            <div className="flex items-center gap-3 tx-sm text-ink/55">
              <Icon name="arrow" size={18} className="rotate-90" /> {t(["Satış malı çıxanda qalıq özü azalır", "When goods are sold, stock drops by itself", "При продаже остаток уменьшается сам"])}
            </div>
          </R>
          <R d={0.6}>
            <Lane
              title={["Satış", "Sales", "Продажи"]}
              icon="tag"
              color={C.ok}
              delay={0.8}
              steps={[
                ["Təklif", "Quote", "Предложение"],
                ["Sifariş", "Order", "Заказ"],
                ["Çatdırılma", "Delivery", "Доставка"],
                ["Faktura", "Invoice", "Счёт"],
                ["Ödəniş", "Payment", "Оплата"],
              ]}
            />
          </R>
        </div>
        <div className="w-[420px] shrink-0 flex flex-col gap-4 n:w-full n:gap-3">
          {(
            [
              { t: ["Qaytarma və kredit notu", "Returns & credit notes", "Возвраты и кредит-ноты"], d: ["Hər iki zəncirin içindədir", "Built into both chains", "Встроены в обе цепочки"], i: "route", c: C.slate },
              { t: ["Satış qaydaları", "Sales rules", "Правила продаж"], d: ["Qiymət siyahısı, endirim, müqavilə, hədəf", "Price lists, discounts, contracts, targets", "Прайс-листы, скидки, договоры, цели"], i: "tag", c: C.ok },
              { t: ["Alış hesabatı", "Purchasing report", "Отчёт по закупкам"], d: ["Xərc və təchizatçı performansı", "Spend and supplier performance", "Расходы и работа поставщиков"], i: "chart", c: C.brand },
            ] as { t: Tx; d: Tx; i: IconName; c: string }[]
          ).map((x, i) => (
            <R key={i} d={0.7 + i * 0.1} x={30} y={0}>
              <Card className="p-6 flex gap-4 n:p-4">
                <IconBox name={x.i} color={x.c} size={46} />
                <div>
                  <div className="tx-h4">{t(x.t)}</div>
                  <div className="tx-sm text-ink/55 mt-1">{t(x.d)}</div>
                </div>
              </Card>
            </R>
          ))}
          <R d={1.05} className="flex-1">
            <div className="h-full rounded-[24px] p-7 flex flex-col justify-center text-white n:p-5 n:rounded-[18px]" style={{ background: `linear-gradient(150deg, ${C.info}, #0093a8)`, boxShadow: `0 30px 60px -30px ${C.info}` }}>
              <Icon name="infinity" size={34} className="mb-4 opacity-90" />
              <div className="font-display text-[26px] leading-[1.3] font-medium n:text-[18px]">
                {t([
                  "Anbardakı mal, müştəri kartı və maliyyədəki borc eyni sifarişdən doğulur.",
                  "Stock, the client card and the receivable are all born from the same order.",
                  "Товар на складе, карточка клиента и долг в финансах рождаются из одного заказа.",
                ])}
              </div>
            </div>
          </R>
        </div>
      </div>
    </Slide>
  );
}

/* =============================== 15 · CRM =============================== */

const PIPELINE: { t: Tx; n: number; sum: string; c: string; deals: string[] }[] = [
  { t: ["İlk əlaqə", "First contact", "Первый контакт"], n: 24, sum: "186 000 ₼", c: C.slate, deals: ["Xəzər Logistik", "Nur Pharma", "Qafqaz Mebel", "Sumqayıt Kimya"] },
  { t: ["Təklif", "Proposal", "Предложение"], n: 12, sum: "142 500 ₼", c: C.brand, deals: ["Gəncə Aqro", "Bakı Tekstil", "Naftalan Kurort", "Şəki İpək"] },
  { t: ["Danışıq", "Negotiation", "Переговоры"], n: 7, sum: "98 300 ₼", c: C.info, deals: ["Şirvan Tikinti", "Lənkəran Çay", "Mingəçevir Enerji"] },
  { t: ["Uğur", "Won", "Успех"], n: 4, sum: "61 200 ₼", c: C.ok, deals: ["Abşeron Market", "Qəbələ Turizm"] },
];
const ACTS: Tx[] = [
  ["Zəng", "Call", "Звонок"],
  ["Görüş", "Meeting", "Встреча"],
  ["E-poçt", "E-mail", "Письмо"],
  ["Təklif", "Proposal", "КП"],
];

export function SlideCRM() {
  const t = useT();
  return (
    <Slide>
      <Head
        n="M14"
        color={C.info}
        size={64}
        eyebrow={t(["Müştərilər", "Clients", "Клиенты"])}
        title={
          <>
            {t(["Hər müştəri — ", "Every client — ", "Каждый клиент — "])}
            <Hl color={C.info}>{t(["tam tarixçə ilə.", "with full history.", "с полной историей."])}</Hl>
          </>
        }
        lead={t([
          "Zəng, görüş və tapşırıq yazılır ki, növbəti adam söhbətə sıfırdan başlamasın.",
          "Calls, meetings and tasks are logged, so the next person never starts from scratch.",
          "Звонки, встречи и задачи фиксируются — следующий сотрудник не начинает с нуля.",
        ])}
        leadW={580}
      />
      <div className="flex gap-7 mt-10 flex-1 min-h-0 n:flex-col n:gap-4 n:mt-6">
        <Mock w={1060} h={720} className="flex-1 min-w-0">
          <R d={0.25} className="h-full">
            <Window title={t(["Satış hunisi", "Sales pipeline", "Воронка продаж"])} className="h-full" right={<span className="text-[14px] text-ink/45">{t(["İtki: 3", "Lost: 3", "Потеряно: 3"])}</span>}>
              <div className="p-6 grid grid-cols-4 gap-4 h-full">
                {PIPELINE.map((col, ci) => (
                  <div key={ci} className="flex flex-col rounded-2xl well p-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: col.c }} />
                      <span className="text-[17px] font-semibold">{t(col.t)}</span>
                      <span className="ml-auto text-[13px] px-2 py-0.5 rounded-md bg-ink/[0.07] font-medium">{col.n}</span>
                    </div>
                    <div className="text-[15px] mt-1 mb-4 font-semibold" style={{ color: col.c }}>
                      {col.sum}
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {col.deals.map((d, di) => (
                        <motion.div key={d} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + ci * 0.12 + di * 0.08 }} className="rounded-xl p-3.5 surface">
                          <div className="flex items-center gap-2.5">
                            <Avatar name={d} color={col.c} size={30} />
                            <span className="text-[15px] font-medium truncate">{d}</span>
                          </div>
                          <div className="mt-2 flex justify-between text-[13px] text-ink/50">
                            <span className="font-mono">{fmt(8000 + ((ci * 7 + di * 13) % 17) * 2300)} ₼</span>
                            <span>{t(ACTS[(ci + di) % 4])}</span>
                          </div>
                          <div className="mt-2.5 h-1.5 rounded-full bg-ink/[0.07] overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: `${30 + ci * 22}%`, background: col.c }} />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Window>
          </R>
        </Mock>
        <div className="w-[470px] shrink-0 flex flex-col gap-6 n:w-full n:gap-4">
          <R d={0.45} x={30} y={0}>
            <Card className="p-7 n:p-5">
              <div className="tx-cap text-ink/45 mb-4">{t(["Son fəaliyyət", "Recent activity", "Последние действия"])}</div>
              {(
                [
                  { i: "phone", t: ["Zəng · Xəzər Logistik", "Call · Xazar Logistics", "Звонок · Xəzər Logistik"], s: ["Qiymət sualı cavablandı", "Pricing question answered", "Ответили на вопрос о цене"], c: C.brand },
                  { i: "users", t: ["Görüş · Gəncə Aqro", "Meeting · Ganja Agro", "Встреча · Gəncə Aqro"], s: ["Təklif təqdim olundu", "Proposal presented", "Представлено предложение"], c: C.info },
                  { i: "check", t: ["Tapşırıq · Şirvan Tikinti", "Task · Shirvan Construction", "Задача · Şirvan Tikinti"], s: ["Müqavilə layihəsi göndərilsin", "Send the draft contract", "Отправить проект договора"], c: C.ok },
                ] as { i: IconName; t: Tx; s: Tx; c: string }[]
              ).map((a, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + i * 0.12 }} className="flex items-center gap-4 py-3 border-t border-ink/[0.06] n:gap-3">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${a.c}1a`, color: a.c }}>
                    <Icon name={a.i} size={19} />
                  </span>
                  <div>
                    <div className="tx-sm font-semibold">{t(a.t)}</div>
                    <div className="tx-xs text-ink/50">{t(a.s)}</div>
                  </div>
                </motion.div>
              ))}
            </Card>
          </R>
          <R d={0.6} x={30} y={0} className="flex-1">
            <Card className="h-full p-7 flex flex-col n:p-5">
              <Accent color={C.ok} />
              <div className="tx-cap text-ink/45">{t(["Satış proqnozu · IV rüb", "Sales forecast · Q4", "Прогноз продаж · IV кв."])}</div>
              <div className="font-display text-[44px] font-semibold tracking-tight mt-2 n:text-[28px]">
                <Counter to={412000} d={0.9} /> ₼
              </div>
              <div className="mt-auto pt-4 flex items-end gap-3 h-[96px] n:h-[64px]">
                {[46, 58, 52, 70, 64, 82].map((h, i) => (
                  <motion.span
                    key={i}
                    className="flex-1 rounded-t-lg"
                    style={{ background: i > 3 ? `repeating-linear-gradient(45deg, ${C.ok}66 0 6px, ${C.ok}22 6px 12px)` : `linear-gradient(${C.ok}, ${C.ok}55)` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 1 + i * 0.07, duration: 0.7 }}
                  />
                ))}
              </div>
              <div className="mt-3 tx-xs text-ink/50">{t(["Açıq imkanlar və keçmiş nəticədən", "Based on open deals and past results", "На основе открытых сделок и истории"])}</div>
            </Card>
          </R>
        </div>
      </div>
    </Slide>
  );
}

/* =============================== 16 · DOCUMENTS =============================== */

export function SlideDocuments() {
  const t = useT();
  const step = useCycle(5, 1500, 1200);
  const chain: { r: Tx; n: string; tm: string }[] = [
    { r: ["İşçilər üzrə mütəxəssis", "Employee specialist", "Специалист по сотрудникам"], n: "Aysel Rəhimova", tm: "09:12" },
    { r: ["Şöbə müdiri", "Head of department", "Руководитель отдела"], n: "Rauf Əliyev", tm: "10:40" },
    { r: ["Maliyyə direktoru", "Finance director", "Финансовый директор"], n: "Kamran Səfərov", tm: "11:05" },
    { r: ["Baş direktor", "CEO", "Генеральный директор"], n: "Tural Bağırov", tm: "12:30" },
  ];
  const tags: [Tx, string][] = [
    [["Rəsmi", "Official", "Официальное"], C.brand],
    [["Şöbə", "Department", "Отдел"], C.info],
    [["Sosial", "Social", "Социальное"], C.ok],
    [["İşə qəbul", "Hiring", "Найм"], C.brand],
    [["Təcili", "Urgent", "Срочное"], C.warn],
    [["Təlim", "Training", "Обучение"], C.ok],
  ];
  return (
    <Slide>
      <Head
        n="M15"
        color={C.warn}
        size={64}
        eyebrow={t(["Sənədlər və təsdiqlər", "Documents & approvals", "Документы и согласования"])}
        title={
          <>
            {t(["Əmr yaradılır. İmzalanır. ", "Created. Signed. ", "Создан. Подписан. "])}
            <Hl color={C.warn}>{t(["Arxivdə qalır.", "Archived.", "В архиве."])}</Hl>
          </>
        }
      />
      <div className="flex gap-7 mt-10 flex-1 min-h-0 n:flex-col n:gap-4 n:mt-6">
        <R d={0.25} className="w-[540px] shrink-0 n:w-full">
          <div className="h-full rounded-[24px] p-10 relative overflow-hidden bg-white text-[#26243a] n:p-6 n:rounded-[18px]" style={{ boxShadow: "0 2px 4px rgba(28,26,60,0.06), 0 40px 80px -30px rgba(28,26,60,0.35), inset 0 0 0 1px rgba(38,36,58,0.08)" }}>
            <div className="flex items-center justify-between">
              <span className="tx-cap text-[#26243a]/50">{t(["Əmr", "Order", "Приказ"])}</span>
              <span className="font-mono tx-xs text-[#26243a]/60">№214 · 09.10.2026</span>
            </div>
            <div className="mt-5 text-[27px] font-semibold leading-tight n:text-[18px] n:mt-3">
              {t(["Əmək məzuniyyəti verilməsi haqqında", "On granting annual leave", "О предоставлении ежегодного отпуска"])}
            </div>
            <div className="mt-7 flex flex-col gap-3 n:mt-4 n:gap-2">
              {[92, 100, 84, 96, 70, 88, 60].map((w, i) => (
                <div key={i} className="h-2.5 rounded-full bg-[#26243a]/[0.08] n:h-2" style={{ width: `${w}%` }} />
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 n:mt-5 n:gap-3">
              {(
                [
                  [["İşçi", "Employee", "Сотрудник"], ["Nigar Həsənova", "Nigar Hasanova", "Нигяр Гасанова"]],
                  [["Müddət", "Period", "Период"], ["14–18.10 · 5 gün", "Oct 14–18 · 5 days", "14–18.10 · 5 дней"]],
                  [["Qalıq", "Balance", "Остаток"], ["16 → 11 gün", "16 → 11 days", "16 → 11 дней"]],
                  [["Şablon", "Template", "Шаблон"], ["Məzuniyyət əmri", "Leave order", "Приказ на отпуск"]],
                ] as [Tx, Tx][]
              ).map(([k, v], i) => (
                <div key={i}>
                  <div className="text-[#26243a]/45 tx-xs uppercase tracking-wider">{t(k)}</div>
                  <div className="font-medium mt-0.5 tx-sm">{t(v)}</div>
                </div>
              ))}
            </div>
            <motion.div
              className="absolute right-9 bottom-9 w-[150px] h-[150px] rounded-full flex items-center justify-center text-center text-[14px] font-bold uppercase tracking-wider n:w-[96px] n:h-[96px] n:text-[9px] n:right-5 n:bottom-5"
              style={{ border: `3px solid ${C.ok}`, color: "#1f9d5c", rotate: -12 }}
              animate={{ opacity: step >= 4 ? 1 : 0, scale: step >= 4 ? 1 : 1.6 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              {t(["Təsdiqləndi", "Approved", "Утверждено"])}
              <br />
              {t(["arxivdə", "archived", "в архиве"])}
            </motion.div>
          </div>
        </R>
        <R d={0.4} className="w-[520px] shrink-0 n:w-full">
          <Card className="h-full p-8 flex flex-col n:p-5">
            <div className="tx-cap text-ink/45 mb-6 n:mb-4">{t(["İmza zənciri", "Signing chain", "Цепочка подписей"])}</div>
            <div className="flex flex-col flex-1 justify-between relative n:gap-4">
              <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-ink/[0.08] n:left-[19px]" />
              {chain.map((c, i) => {
                const done = i < step || i === 0;
                const pending = i === step && i > 0;
                return (
                  <div key={i} className="relative flex items-center gap-5 n:gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center z-10 shrink-0 transition-all duration-500 n:w-10 n:h-10"
                      style={{
                        background: done ? C.ok : pending ? `${C.warn}22` : "rgb(var(--card))",
                        boxShadow: done ? `0 10px 24px -10px ${C.ok}` : pending ? `inset 0 0 0 2px ${C.warn}` : "inset 0 0 0 2px rgb(var(--ink) / 0.12)",
                        color: done ? "#fff" : pending ? C.warn : "rgb(var(--ink) / 0.3)",
                      }}
                    >
                      <Icon name={done ? "check" : "clock"} size={20} stroke={done ? 2.6 : 1.8} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="tx-h4">{t(c.r)}</div>
                      <div className="tx-xs text-ink/50">{c.n}</div>
                    </div>
                    <div className="text-right">
                      {done ? <StatusPill s="approved" className="!text-[13px] !py-1 n:!text-[11px]" /> : pending ? <StatusPill s="pending" className="!text-[13px] !py-1 n:!text-[11px]" /> : <span className="tx-xs text-ink/35">{t(["Növbədə", "Queued", "В очереди"])}</span>}
                      <div className="tx-xs text-ink/40 mt-1 font-mono">{done ? c.tm : "—"}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 pt-5 border-t border-ink/[0.07] grid grid-cols-2 gap-3 n:mt-4 n:pt-4">
              <div className="rounded-xl p-3 well">
                <div className="tx-xs text-ink/55">{t(["Mənim əmrlərim", "My orders", "Мои приказы"])}</div>
                <div className="text-[24px] font-semibold n:text-[18px]">12</div>
              </div>
              <div className="rounded-xl p-3 well">
                <div className="tx-xs text-ink/55">{t(["Təsdiq gözləyənlər", "Awaiting approval", "Ждут подписи"])}</div>
                <div className="text-[24px] font-semibold n:text-[18px]" style={{ color: C.warn }}>
                  3
                </div>
              </div>
            </div>
          </Card>
        </R>
        <R d={0.55} className="flex-1 min-w-0" x={30} y={0}>
          <Card className="h-full p-8 flex flex-col n:p-5">
            <Accent color={C.brand} />
            <div className="flex items-center gap-4">
              <IconBox name="megaphone" color={C.brand} size={50} />
              <div className="tx-h3">{t(["Elanlar", "Announcements", "Объявления"])}</div>
            </div>
            <p className="mt-3 tx-sm text-ink/55">
              {t([
                "Bütün şirkətə, filiala, departamentə və ya vəzifəyə. Vacib xəbər qrup çatında itmir.",
                "To the whole company, a branch, a department or a position. Important news never gets lost in a group chat.",
                "Всей компании, филиалу, отделу или должности. Важное не теряется в групповом чате.",
              ])}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 n:mt-4">
              {tags.map(([x, c], i) => (
                <Pill key={i} color={c} className="!text-[14px] n:!text-[12px]">
                  {t(x)}
                </Pill>
              ))}
            </div>
            <div className="mt-auto pt-5 flex flex-col gap-3">
              {(
                [
                  { tag: ["Təcili", "Urgent", "Срочно"], c: C.warn, to: ["Bakı filialı", "Baku branch", "Филиал Баку"], t: ["Sabah 10:00-da yanğın təlimi", "Fire drill tomorrow at 10:00", "Завтра в 10:00 пожарные учения"] },
                  { tag: ["Təlim", "Training", "Обучение"], c: C.ok, to: ["Satış departamenti", "Sales department", "Отдел продаж"], t: ["Danışıqlar təlimi · 14 Okt", "Negotiation training · Oct 14", "Тренинг по переговорам · 14 окт"] },
                  { tag: ["Rəsmi", "Official", "Официально"], c: C.brand, to: ["Bütün şirkət", "Whole company", "Вся компания"], t: ["Yeni məzuniyyət qaydası qüvvədədir", "New leave policy in effect", "Вступил в силу новый порядок отпусков"] },
                ] as { tag: Tx; c: string; to: Tx; t: Tx }[]
              ).map((n, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + i * 0.15 }} className="rounded-2xl p-4 well n:p-3">
                  <div className="flex items-center gap-2 tx-xs">
                    <span className="font-semibold" style={{ color: n.c }}>
                      {t(n.tag)}
                    </span>
                    <span className="text-ink/45">· {t(n.to)}</span>
                  </div>
                  <div className="tx-sm mt-1 font-medium">{t(n.t)}</div>
                </motion.div>
              ))}
            </div>
          </Card>
        </R>
      </div>
    </Slide>
  );
}

/* =============================== 17 · REPORTS =============================== */

const SOURCES: { t: Tx; i: IconName; c: string }[] = [
  { t: ["Satış", "Sales", "Продажи"], i: "tag", c: C.info },
  { t: ["Alış", "Purchasing", "Закупки"], i: "cart", c: C.info },
  { t: ["Əməkhaqqı", "Payroll", "Зарплата"], i: "wallet", c: C.brand },
  { t: ["Kassa və bank", "Cash & bank", "Касса и банк"], i: "coins", c: C.ok },
  { t: ["Anbar", "Warehouse", "Склад"], i: "box", c: C.info },
];

function Core({ size = 230, label, sub }: { size?: number; label: string; sub: string }) {
  return (
    <div
      className="rounded-full flex flex-col items-center justify-center text-center text-white shrink-0"
      style={{ width: size, height: size, background: `linear-gradient(150deg, #8a80f4, ${C.brand} 55%, #5b4fe0)`, boxShadow: `0 40px 80px -30px ${C.brand}, inset 0 2px 0 rgba(255,255,255,0.25)` }}
    >
      <LogoMark h={size * 0.27} color="#fff" />
      <div className="mt-3 text-[17px] font-semibold px-4 leading-tight">{label}</div>
      <div className="text-[13px] text-white/75 px-5 leading-tight mt-1">{sub}</div>
    </div>
  );
}

export function SlideReports() {
  const t = useT();
  const narrow = useNarrow();
  const H = 560;
  const rowH = 88;
  const gap = (H - SOURCES.length * rowH) / (SOURCES.length - 1);
  const ys = SOURCES.map((_, i) => i * (rowH + gap) + rowH / 2);
  const inPath = (y: number) => `M0 ${y} C 120 ${y}, 140 ${H / 2}, 240 ${H / 2}`;
  const outs = [H * 0.27, H * 0.73];
  const outPath = (y: number) => `M0 ${H / 2} C 100 ${H / 2}, 120 ${y}, 220 ${y}`;
  const mgmt: Tx[] = [
    ["Balans", "Balance sheet", "Баланс"],
    ["Mənfəət və zərər", "Profit & loss", "Прибыли и убытки"],
    ["İşçi və əməkhaqqı", "Employees & payroll", "Сотрудники и зарплата"],
    ["Anbar dövriyyəsi", "Stock turnover", "Оборот склада"],
    ["Satış həcmi", "Sales volume", "Объём продаж"],
    ["Alış və tərəfdaş", "Purchases & partners", "Закупки и партнёры"],
  ];
  const gov: Tx[] = [
    ["ƏDV", "VAT", "НДС"],
    ["Gəlir vergisi", "Income tax", "Подоходный"],
    ["Sosial sığorta", "Social insurance", "Соцстрах"],
    ["Statistika", "Statistics", "Статистика"],
  ];
  const label = t(["Vahid jurnal", "Single journal", "Единый журнал"]);
  const sub = t(["Hər əməliyyat bir dəfə", "Every transaction once", "Каждая операция один раз"]);
  return (
    <Slide>
      <Head
        n="M16"
        color={C.warn}
        size={64}
        eyebrow={t(["Hesabatlar və uyğunluq", "Reports & compliance", "Отчёты и соответствие"])}
        title={
          <>
            {t(["Rəqəm əməliyyatdan yığılır, ", "Numbers come from operations, ", "Цифры собираются из операций, "])}
            <Hl color={C.warn}>{t(["əllə yox.", "not by hand.", "а не вручную."])}</Hl>
          </>
        }
      />
      <div className="flex items-center mt-12 flex-1 min-h-0 n:flex-col n:items-stretch n:gap-4 n:mt-6">
        <div className="w-[320px] shrink-0 flex flex-col n:w-full n:grid n:grid-cols-2 n:!gap-2 n:!h-auto" style={{ gap, height: H }}>
          {SOURCES.map((s, i) => (
            <R key={i} d={0.25 + i * 0.08} x={-30} y={0}>
              <Card className="px-6 flex items-center gap-4 n:px-3 n:py-2.5 n:gap-2.5 n:!h-auto" style={{ height: rowH }}>
                <IconBox name={s.i} color={s.c} size={46} />
                <span className="tx-h4">{t(s.t)}</span>
              </Card>
            </R>
          ))}
        </div>
        {!narrow && (
          <svg width={240} height={H} className="shrink-0 overflow-visible">
            {ys.map((y, i) => (
              <g key={i}>
                <motion.path d={inPath(y)} fill="none" stroke={SOURCES[i].c} strokeOpacity={0.4} strokeWidth={2} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7 + i * 0.08, duration: 0.9 }} />
                <circle r={5} fill={SOURCES[i].c}>
                  <animateMotion dur="2s" begin={`${1.3 + i * 0.3}s`} repeatCount="indefinite" path={inPath(y)} />
                  <animate attributeName="opacity" values="0;1;1;0" dur="2s" begin={`${1.3 + i * 0.3}s`} repeatCount="indefinite" />
                </circle>
              </g>
            ))}
          </svg>
        )}
        <R d={0.6} className="shrink-0 n:flex n:justify-center">
          <Core size={narrow ? 170 : 230} label={label} sub={sub} />
        </R>
        {!narrow && (
          <svg width={220} height={H} className="shrink-0 overflow-visible">
            {outs.map((y, i) => (
              <g key={i}>
                <motion.path d={outPath(y)} fill="none" stroke={i ? C.warn : C.ok} strokeOpacity={0.5} strokeWidth={2.5} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.1 + i * 0.1, duration: 0.9 }} />
                <circle r={6} fill={i ? C.warn : C.ok}>
                  <animateMotion dur="1.8s" begin={`${1.8 + i * 0.5}s`} repeatCount="indefinite" path={outPath(y)} />
                  <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" begin={`${1.8 + i * 0.5}s`} repeatCount="indefinite" />
                </circle>
              </g>
            ))}
          </svg>
        )}
        <div className="flex-1 flex flex-col justify-between min-w-0 n:gap-4" style={{ height: narrow ? undefined : H }}>
          <R d={1.2} x={30} y={0}>
            <Card className="p-7 n:p-5">
              <Accent color={C.ok} />
              <div className="flex items-center gap-3 mb-4">
                <span style={{ color: C.ok }}>
                  <Icon name="report" size={24} />
                </span>
                <span className="tx-h4">{t(["İdarəetmə hesabatları", "Management reports", "Управленческие отчёты"])}</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 n:gap-1.5">
                {mgmt.map((x, i) => (
                  <div key={i} className="rounded-xl px-4 py-2.5 tx-sm well n:px-2.5 n:py-2">
                    {t(x)}
                  </div>
                ))}
              </div>
            </Card>
          </R>
          <R d={1.35} x={30} y={0}>
            <Card className="p-7 n:p-5">
              <Accent color={C.warn} />
              <div className="flex items-center gap-3 mb-4">
                <span style={{ color: C.warn }}>
                  <Icon name="landmark" size={24} />
                </span>
                <span className="tx-h4">{t(["Dövlət hesabatları", "Statutory reports", "Государственная отчётность"])}</span>
              </div>
              <div className="grid grid-cols-4 gap-2.5 n:grid-cols-2 n:gap-1.5">
                {gov.map((x, i) => (
                  <div key={i} className="rounded-xl px-3 py-3 text-center tx-sm font-semibold n:py-2" style={{ background: `${C.warn}12`, boxShadow: `inset 0 0 0 1px ${C.warn}38` }}>
                    {t(x)}
                  </div>
                ))}
              </div>
              <p className="mt-4 tx-sm text-ink/55">
                {t([
                  "Mühasib ay sonunda rəqəmi əllə toplamır — artıq gedən işin yekununu götürür.",
                  "At month-end the accountant doesn’t add things up by hand — they take the total of work already done.",
                  "В конце месяца бухгалтер не считает вручную — он берёт итог уже проделанной работы.",
                ])}
              </p>
            </Card>
          </R>
        </div>
      </div>
    </Slide>
  );
}

/* =============================== 18 · INTEGRATIONS + ACCESS =============================== */

const PERM_COLS: Tx[] = [
  ["Görür", "View", "Просмотр"],
  ["Əlavə", "Add", "Добавить"],
  ["Düzəliş", "Edit", "Изменить"],
  ["Silir", "Delete", "Удалить"],
];
const PERM_ROWS: [Tx, boolean[]][] = [
  [["Baş mühasib", "Chief accountant", "Главбух"], [true, true, true, true]],
  [["Maliyyə", "Finance", "Финансы"], [true, true, true, false]],
  [["Rəhbər", "Director", "Руководитель"], [true, false, false, false]],
  [["İşçi", "Employees", "Сотрудники"], [false, false, false, false]],
  [["Menecer", "Manager", "Менеджер"], [false, false, false, false]],
];

function SearchMock() {
  const t = useT();
  const qs = ["Leyla Məmmədova", "№118", "A4", "Xəzər Logistik", "Mühasib"];
  const kinds: Tx[] = [
    ["İşçi", "Employee", "Сотрудник"],
    ["Müqavilə", "Contract", "Договор"],
    ["Məhsul", "Product", "Товар"],
    ["Müştəri", "Client", "Клиент"],
    ["Vakansiya", "Vacancy", "Вакансия"],
  ];
  const i = useCycle(qs.length, 2000, 1000);
  return (
    <div className="flex items-center gap-3 rounded-2xl px-5 py-4 surface n:px-3 n:py-3">
      <span className="text-ink/45">
        <Icon name="search" size={22} />
      </span>
      <motion.span key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="tx-body font-medium">
        {qs[i]}
      </motion.span>
      <span className="w-[2px] h-6 bg-ink/60 animate-pulse" />
      <motion.span key={`k${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="ml-auto">
        <Pill color={C.info} className="!text-[13px] !py-1 n:!text-[11px]">
          {t(kinds[i])}
        </Pill>
      </motion.span>
    </div>
  );
}

export function SlideIntegrations() {
  const t = useT();
  const nodes: { t: Tx; x: number; y: number }[] = [
    { t: ["1C mübadiləsi", "1C exchange", "Обмен с 1С"], x: 95, y: 60 },
    { t: ["E-qaimə", "E-invoice", "Э-накладные"], x: 335, y: 60 },
    { t: ["Bank-client", "Bank-client", "Банк-клиент"], x: 95, y: 320 },
    { t: ["Açıq API", "Open API", "Открытый API"], x: 335, y: 320 },
  ];
  const cx = 215;
  const cy = 190;
  return (
    <Slide>
      <Head
        n="M17"
        color={C.warn}
        size={62}
        eyebrow={t(["İnteqrasiyalar, icazələr, platforma", "Integrations, access, platform", "Интеграции, доступ, платформа"])}
        title={
          <>
            {t(["Mövcud alətlərlə danışır. ", "Talks to your existing tools. ", "Дружит с вашими системами. "])}
            <Hl>{t(["Hər kəsə öz qapısını açır.", "Opens the right door for everyone.", "Каждому — свой доступ."])}</Hl>
          </>
        }
      />
      <div className="grid grid-cols-[1fr_1.05fr_1fr] gap-7 mt-10 flex-1 min-h-0 n:grid-cols-1 n:gap-4 n:mt-6">
        <R d={0.25} className="h-full">
          <Card className="h-full p-8 flex flex-col n:p-5">
            <Accent color={C.warn} />
            <div className="flex items-center gap-4">
              <IconBox name="plug" color={C.warn} size={50} />
              <div className="tx-h3">{t(["İnteqrasiyalar", "Integrations", "Интеграции"])}</div>
            </div>
            <Mock w={430} h={380} className="relative mt-6 mx-auto w-[430px] h-[380px]">
              <div className="relative w-[430px] h-[380px]">
                <svg className="absolute inset-0" width={430} height={380}>
                  {nodes.map((n, i) => (
                    <g key={i}>
                      <line x1={n.x} y1={n.y} x2={cx} y2={cy} stroke={C.warn} strokeOpacity={0.4} strokeWidth={1.5} strokeDasharray="5 7" />
                      <circle r={4.5} fill={C.warn}>
                        <animateMotion dur="2.4s" begin={`${0.8 + i * 0.4}s`} repeatCount="indefinite" path={`M${n.x} ${n.y} L${cx} ${cy} L${n.x} ${n.y}`} />
                      </circle>
                    </g>
                  ))}
                </svg>
                {nodes.map((n, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-xl px-4 py-3 text-[16px] font-semibold whitespace-nowrap surface"
                    style={{ left: n.x, top: n.y, x: "-50%", y: "-50%" }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, ease: EASE }}
                  >
                    {t(n.t)}
                  </motion.div>
                ))}
                <div
                  className="absolute w-[118px] h-[118px] rounded-full flex items-center justify-center"
                  style={{ left: cx - 59, top: cy - 59, background: `linear-gradient(150deg, #8a80f4, ${C.brand} 55%, #5b4fe0)`, boxShadow: `0 24px 50px -20px ${C.brand}` }}
                >
                  <LogoMark h={46} color="#fff" />
                </div>
              </div>
            </Mock>
            <p className="mt-auto pt-4 tx-sm text-ink/60">
              {t([
                "Şirkətin artıq istifadə etdiyi alətlərlə körpü. Məlumat iki dəfə yazılmır.",
                "A bridge to the tools you already use. Data is never entered twice.",
                "Мост к инструментам, которыми вы уже пользуетесь. Данные не вводятся дважды.",
              ])}
            </p>
          </Card>
        </R>
        <R d={0.4} className="h-full">
          <Window title={t(["Rollar və icazələr · Maliyyə", "Roles & permissions · Finance", "Роли и права · Финансы"])} className="h-full">
            <div className="p-7 flex flex-col h-full n:p-4">
              <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] tx-cap !tracking-[0.06em] text-ink/45 pb-3 border-b border-ink/[0.07]">
                <span>{t(["Rol", "Role", "Роль"])}</span>
                {PERM_COLS.map((c, i) => (
                  <span key={i} className="text-center">
                    {t(c)}
                  </span>
                ))}
              </div>
              {PERM_ROWS.map(([r, v], ri) => (
                <motion.div key={ri} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + ri * 0.08 }} className="grid grid-cols-[1.4fr_repeat(4,1fr)] items-center py-[13px] border-b border-ink/[0.05] n:py-2">
                  <span className="tx-sm font-semibold">{t(r)}</span>
                  {v.map((ok, ci) => (
                    <span key={ci} className="flex justify-center">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center n:w-6 n:h-6"
                        style={ok ? { background: C.ok, color: "#fff" } : { background: "rgb(var(--ink) / 0.04)", color: "rgb(var(--ink) / 0.25)" }}
                      >
                        <Icon name={ok ? "check" : "lock"} size={15} stroke={ok ? 2.6 : 1.8} />
                      </span>
                    </span>
                  ))}
                </motion.div>
              ))}
              <div className="mt-auto pt-5 flex flex-col gap-3 tx-sm text-ink/65">
                <div className="flex items-center gap-3">
                  <span style={{ color: C.brand }}>
                    <Icon name="id" size={20} />
                  </span>
                  {t(["Vəzifəyə rol, lazım olanda fərdi icazə", "Roles per position, personal rights when needed", "Роль по должности, при необходимости — личные права"])}
                </div>
                <div className="flex items-center gap-3">
                  <span style={{ color: C.brand }}>
                    <Icon name="layers" size={20} />
                  </span>
                  {t(["Vəzifə dəyişəndə menyu da dəyişir", "Change the position — the menu changes too", "Сменилась должность — меняется и меню"])}
                </div>
              </div>
            </div>
          </Window>
        </R>
        <R d={0.55} className="h-full">
          <Card className="h-full p-8 flex flex-col n:p-5">
            <Accent color={C.info} />
            <div className="flex items-center gap-4">
              <IconBox name="search" color={C.info} size={50} />
              <div className="tx-h3">{t(["Axtarış bir yerdən", "One search for everything", "Единый поиск"])}</div>
            </div>
            <p className="mt-3 mb-5 tx-sm text-ink/55">
              {t([
                "İşçi, müqavilə, müştəri, məhsul, əmr, elan və vakansiya — eyni axtarışdan.",
                "Employees, contracts, clients, products, orders, news and vacancies — one search box.",
                "Сотрудники, договоры, клиенты, товары, приказы и вакансии — в одной строке поиска.",
              ])}
            </p>
            <SearchMock />
            <div className="mt-auto pt-6">
              <div className="tx-cap text-ink/45 mb-4 n:mb-3">{t(["Hər yerdən eyni iş", "Same work, anywhere", "Работа откуда угодно"])}</div>
              <div className="grid grid-cols-3 gap-3 n:gap-2">
                {(
                  [
                    { t: ["Brauzer", "Browser", "Браузер"], i: "globe" },
                    { t: ["Windows", "Windows", "Windows"], i: "monitor" },
                    { t: ["Mac", "Mac", "Mac"], i: "monitor" },
                  ] as { t: Tx; i: IconName }[]
                ).map((p, i) => (
                  <div key={i} className="rounded-2xl py-4 flex flex-col items-center gap-2 well n:py-3">
                    <span style={{ color: C.info }}>
                      <Icon name={p.i} size={26} />
                    </span>
                    <span className="tx-sm font-medium">{t(p.t)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-2xl py-3.5 text-center tx-sm font-medium" style={{ background: `${C.info}12`, boxShadow: `inset 0 0 0 1px ${C.info}33` }}>
                {t(["İnterfeys Azərbaycan dilindədir", "The interface is in Azerbaijani", "Интерфейс на азербайджанском языке"])}
              </div>
            </div>
          </Card>
        </R>
      </div>
    </Slide>
  );
}

/* =============================== 19 · A DAY =============================== */

const DAY: { tm: string; r: Tx; a: Tx; i: IconName; c: string }[] = [
  { tm: "09:00", r: ["Rəhbər", "Director", "Руководитель"], a: ["Panelə baxır: gözləyən təsdiqlər, kassa, açıq borc, anbar və satış.", "Checks the panel: pending approvals, cash, open debts, stock and sales.", "Смотрит панель: согласования, касса, долги, склад и продажи."], i: "eye", c: C.warn },
  { tm: "09:20", r: ["İşçi", "Employee", "Сотрудник"], a: ["Elanı oxuyur, məzuniyyət sorğusu göndərir, tapşırığını yeniləyir.", "Reads the news, requests leave, updates a task.", "Читает объявление, подаёт заявку на отпуск, обновляет задачу."], i: "user", c: C.info },
  { tm: "10:00", r: ["Menecer", "Manager", "Менеджер"], a: ["Sorğunu təsdiqləyir, iş vaxtına baxır, sahədəki işçini yoxlayır.", "Approves the request, checks hours, sees who is in the field.", "Согласует заявку, проверяет время и сотрудников в поле."], i: "users", c: C.brand },
  { tm: "11:30", r: ["İşçi şöbəsi", "Employee team", "Отдел сотрудников"], a: ["Müqaviləni və əmri bağlayır.", "Closes the contract and the order.", "Оформляет договор и приказ."], i: "id", c: C.brand },
  { tm: "13:00", r: ["Mühasib", "Accountant", "Бухгалтер"], a: ["Maaş dövrünü, jurnalı və bank uzlaşmasını görür.", "Reviews payroll, the journal and bank reconciliation.", "Видит расчёт зарплаты, журнал и сверку с банком."], i: "landmark", c: C.ok },
  { tm: "14:30", r: ["Satınalma", "Purchasing", "Закупки"], a: ["Təchizatçı təkliflərini müqayisə edir.", "Compares supplier offers.", "Сравнивает предложения поставщиков."], i: "cart", c: C.info },
  { tm: "15:30", r: ["Anbar", "Warehouse", "Склад"], a: ["Malın gəldiyini qeyd edir.", "Records that goods have arrived.", "Отмечает поступление товара."], i: "box", c: C.info },
  { tm: "17:00", r: ["Satış", "Sales", "Продажи"], a: ["Fakturanı və ödənişi bağlayır.", "Closes the invoice and payment.", "Закрывает счёт и оплату."], i: "tag", c: C.ok },
];

export function SlideDay() {
  const t = useT();
  const active = useCycle(DAY.length, 1400, 1500);
  return (
    <Slide>
      <Head
        n="08"
        color={C.warn}
        size={70}
        eyebrow={t(["Gündəlik həyatda", "In everyday life", "В повседневной работе"])}
        title={
          <>
            {t(["Arbione ilə ", "An ordinary day ", "Обычный день "])}
            <Hl>{t(["adi bir gün.", "with Arbione.", "с Arbione."])}</Hl>
          </>
        }
        lead={t(["Hər kəs eyni sistemdə — öz işində.", "Everyone in one system — each in their own work.", "Все в одной системе — каждый в своей работе."])}
        leadW={480}
      />
      <div className="flex-1 flex flex-col justify-center gap-8 mt-6 n:gap-0 n:mt-6">
        {[0, 1].map((row) => (
          <div key={row} className="relative">
            <div className="absolute left-0 right-0 top-[11px] h-px bg-ink/10 n:hidden" />
            <div className="grid grid-cols-4 gap-6 n:grid-cols-1 n:gap-3">
              {DAY.slice(row * 4, row * 4 + 4).map((d, j) => {
                const i = row * 4 + j;
                const on = i === active;
                return (
                  <R key={i} d={0.3 + i * 0.07} className="n:mb-3">
                    <div className="relative">
                      <span
                        className="block w-[22px] h-[22px] rounded-full border-2 transition-all duration-500 n:hidden"
                        style={{ background: on ? d.c : "rgb(var(--canvas))", borderColor: d.c, boxShadow: on ? `0 0 0 6px ${d.c}26` : "none" }}
                      />
                      <motion.div animate={{ y: on ? -4 : 0 }} className="relative mt-5 rounded-[22px] p-6 h-[196px] flex flex-col surface n:mt-0 n:h-auto n:p-4 n:rounded-[18px]">
                        <div className="absolute inset-0 rounded-[22px] pointer-events-none transition-opacity duration-500 n:rounded-[18px]" style={{ boxShadow: `inset 0 0 0 2px ${d.c}`, opacity: on ? 1 : 0 }} />
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[19px] font-semibold n:text-[14px]" style={{ color: d.c }}>
                            {d.tm}
                          </span>
                          <span className="ml-auto" style={{ color: d.c }}>
                            <Icon name={d.i} size={24} />
                          </span>
                        </div>
                        <div className="mt-3 text-[24px] font-semibold n:text-[16px] n:mt-1.5">{t(d.r)}</div>
                        <div className="mt-1.5 tx-sm text-ink/60">{t(d.a)}</div>
                      </motion.div>
                    </div>
                  </R>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <R d={1} className="mt-8 text-center n:mt-4 n:text-left">
        <span className="font-display text-[36px] font-semibold tracking-tight n:text-[20px]">
          {t(["Heç kim eyni məlumatı ", "Nobody copies the same data ", "Никто не переносит одни данные "])}
          <Hl>{t(["üç yerə köçürmür.", "into three places.", "в три места."])}</Hl>
        </span>
      </R>
    </Slide>
  );
}

/* =============================== 20 · GAINS =============================== */

function StatusFlow() {
  const t = useT();
  const seq = ["draft", "pending", "approved"] as const;
  const step = useCycle(4, 1300, 1200);
  return (
    <div className="flex items-center gap-3 flex-wrap n:gap-2">
      {seq.map((s, i) => (
        <div key={s} className="flex items-center gap-3 n:gap-2">
          <motion.div animate={{ opacity: step >= i ? 1 : 0.35, scale: step === i ? 1.06 : 1 }} transition={{ duration: 0.4 }}>
            <StatusPill s={s} className="!text-[17px] !px-4 !py-2 n:!text-[12px] n:!px-2.5 n:!py-1" />
          </motion.div>
          {i < seq.length - 1 && (
            <span className="text-ink/30">
              <Icon name="arrow" size={18} />
            </span>
          )}
        </div>
      ))}
      <span className="mx-1 text-ink/35 tx-sm">{t(["və ya", "or", "или"])}</span>
      <StatusPill s="rejected" className="!text-[17px] !px-4 !py-2 opacity-70 n:!text-[12px] n:!px-2.5 n:!py-1" />
    </div>
  );
}

export function SlideGains() {
  const t = useT();
  const small: { t: Tx; d: Tx; i: IconName; c: string }[] = [
    {
      t: ["Nəzarət itirmədən sərbəstlik", "Freedom without losing control", "Свобода без потери контроля"],
      d: ["Menecer komandanı idarə edir, işçi şöbəsi qaydanı saxlayır, maliyyə rəqəmi bağlayır.", "Managers run teams, the employee team keeps the rules, finance closes the numbers.", "Менеджер ведёт команду, отдел сотрудников держит правила, финансы закрывают цифры."],
      i: "shield",
      c: C.brand,
    },
    {
      t: ["İzlənilən qərar", "Traceable decisions", "Прозрачные решения"],
      d: ["Kim nəyi nə vaxt təsdiq edib — hər an görünür.", "Who approved what and when — always visible.", "Кто, что и когда утвердил — видно всегда."],
      i: "eye",
      c: C.warn,
    },
    {
      t: ["Sahə və ofis bir yerdə", "Field and office together", "Поле и офис вместе"],
      d: ["Ofisdəki iş vaxtı ilə sahədəki marşrut eyni sistemdədir.", "Office hours and field routes live in one system.", "Рабочее время в офисе и маршруты в поле — в одной системе."],
      i: "route",
      c: C.info,
    },
    {
      t: ["Hazır işçi və müştəri bazası", "Ready employee & client base", "Готовая база сотрудников и клиентов"],
      d: ["Təcrübə, CV, müştəri və tərəfdaş növbəti qərar üçün yerində qalır.", "Experience, CVs, clients and partners stay ready for the next decision.", "Опыт, резюме, клиенты и партнёры остаются под рукой для следующего решения."],
      i: "layers",
      c: C.ok,
    },
  ];
  const trail: Tx[] = [
    ["Kassa", "Cash", "Касса"],
    ["Bank", "Bank", "Банк"],
    ["Alış fakturası", "Purchase invoice", "Счёт поставщика"],
    ["Anbar", "Warehouse", "Склад"],
    ["Satış", "Sale", "Продажа"],
    ["Müştəri borcu", "Client debt", "Долг клиента"],
  ];
  return (
    <Slide>
      <Head
        n="09"
        color={C.ok}
        eyebrow={t(["Nə qazandırır", "What you gain", "Что вы получаете"])}
        title={
          <>
            {t(["Daha az axtarış. ", "Less searching. ", "Меньше поиска. "])}
            <Hl color={C.ok}>{t(["Daha çox aydınlıq.", "More clarity.", "Больше ясности."])}</Hl>
          </>
        }
      />
      <div className="grid grid-cols-4 grid-rows-2 gap-6 mt-11 flex-1 min-h-0 n:grid-cols-1 n:grid-rows-none n:gap-4 n:mt-6">
        <R d={0.25} className="col-span-2 n:col-span-1">
          <div className="h-full rounded-[24px] p-9 flex flex-col text-white relative overflow-hidden n:p-5 n:rounded-[18px]" style={{ background: `linear-gradient(150deg, #8a80f4, ${C.brand} 50%, #5b4fe0)`, boxShadow: `0 40px 80px -40px ${C.brand}` }}>
            <div className="flex items-center gap-5 n:gap-3">
              <div className="w-[58px] h-[58px] rounded-2xl flex items-center justify-center bg-white/15 n:w-11 n:h-11">
                <Icon name="bolt" size={28} />
              </div>
              <div className="text-[34px] font-semibold tracking-tight n:text-[22px]">{t(["Vaxt", "Time", "Время"])}</div>
            </div>
            <p className="mt-5 text-[21px] leading-[1.5] text-white/85 max-w-[680px] n:text-[14px] n:mt-3">
              {t([
                "Məzuniyyət, əmr, alış və satış sənədi kağız və ya mesajla dolaşmır. Status hər an görünür.",
                "Leave requests, orders, purchase and sales documents no longer travel on paper or in chats. The status is always visible.",
                "Заявки, приказы, документы закупок и продаж больше не ходят на бумаге и в чатах. Статус виден всегда.",
              ])}
            </p>
            <div className="mt-auto pt-6">
              <div className="inline-flex rounded-2xl bg-card text-ink p-3 n:p-2">
                <StatusFlow />
              </div>
            </div>
          </div>
        </R>
        <R d={0.35}>
          <Card className="h-full p-8 flex flex-col n:p-5">
            <IconBox name="target" color={C.brand} size={52} />
            <div className="mt-6 tx-h3 n:mt-3">{t(["Bir həqiqət", "One source of truth", "Единая правда"])}</div>
            <p className="mt-3 tx-sm text-ink/60">
              {t([
                "Şöbə, vəzifə və müqavilə bir yerdədir. Maaş, davamiyyət və maliyyə təsdiqi həmin qeydə bağlanır.",
                "Department, position and contract in one place. Payroll, attendance and approvals all tie to that record.",
                "Отдел, должность и договор в одном месте. Зарплата, табель и согласования привязаны к этой записи.",
              ])}
            </p>
          </Card>
        </R>
        <R d={0.45}>
          <Card className="h-full p-8 flex flex-col n:p-5">
            <div className="flex items-center gap-4">
              <IconBox name="coins" color={C.ok} size={52} />
              <div className="tx-h3">{t(["Pulun izi", "The money trail", "След денег"])}</div>
            </div>
            <div className="mt-5 flex flex-col gap-1.5 relative n:mt-3">
              <span className="absolute left-[3px] top-2 bottom-2 w-px" style={{ background: `${C.ok}55` }} />
              {trail.map((x, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 + i * 0.12 }} className="relative flex items-center gap-3 tx-sm text-ink/75">
                  <span className="w-[7px] h-[7px] rounded-full shrink-0" style={{ background: C.ok }} />
                  {t(x)}
                </motion.div>
              ))}
            </div>
          </Card>
        </R>
        {small.map((s, i) => (
          <R key={i} d={0.55 + i * 0.08}>
            <Card className="h-full p-8 flex flex-col n:p-5">
              <IconBox name={s.i} color={s.c} size={52} />
              <div className="mt-6 tx-h3 leading-tight n:mt-3">{t(s.t)}</div>
              <p className="mt-3 tx-sm text-ink/60">{t(s.d)}</p>
            </Card>
          </R>
        ))}
      </div>
    </Slide>
  );
}
