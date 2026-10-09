"use client";
import { motion } from "framer-motion";
import { C, EASE, Slide, R, Eyebrow, Title, Hl, Lead, Card, IconBox, Icon, Fit, useNarrow, useT, type IconName, type Tx } from "./primitives";
import { Logo } from "./logo";

/* =============================== 22 · XCARD =============================== */

function PhoneProfile() {
  const t = useT();
  const actions: { i: IconName; l: Tx }[] = [
    { i: "phone", l: ["Zəng", "Call", "Звонок"] },
    { i: "inbox", l: ["E-poçt", "E-mail", "Почта"] },
    { i: "globe", l: ["Sayt", "Website", "Сайт"] },
    { i: "share", l: ["Paylaş", "Share", "Поделиться"] },
  ];
  return (
    <div className="w-[300px] h-[612px] rounded-[48px] p-[10px] bg-[#16161f]" style={{ boxShadow: "0 50px 100px -40px rgba(20,18,50,0.55), inset 0 0 0 2px rgba(255,255,255,0.08)" }}>
      <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-white text-[#26243a]">
        <div className="absolute left-1/2 top-2.5 -translate-x-1/2 w-[92px] h-[26px] rounded-full bg-[#16161f] z-20" />
        <div className="h-[170px] relative" style={{ background: `linear-gradient(150deg, #2b2a3a, #15151d)` }}>
          <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(circle at 80% 20%, ${C.brand}, transparent 60%)` }} />
        </div>
        <div className="-mt-[46px] flex flex-col items-center px-5 relative z-10">
          <div className="w-[92px] h-[92px] rounded-full flex items-center justify-center text-[30px] font-semibold text-white" style={{ background: C.brand, boxShadow: "0 0 0 5px #fff" }}>
            LM
          </div>
          <div className="mt-3 text-[19px] font-semibold">Leyla Məmmədova</div>
          <div className="text-[13px] text-[#26243a]/55">{t(["Satış direktoru · Xəzər Logistik", "Sales director · Xazar Logistics", "Директор по продажам · Xəzər Logistik"])}</div>
          <div className="mt-5 grid grid-cols-4 gap-2 w-full">
            {actions.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + i * 0.08 }} className="flex flex-col items-center gap-1.5">
                <span className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: `${C.brand}14`, color: C.brand }}>
                  <Icon name={a.i} size={20} />
                </span>
                <span className="text-[11px] text-[#26243a]/60">{t(a.l)}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-5 w-full flex flex-col gap-2">
            {["+994 50 ••• •• 21", "leyla@xazar.az", "xazar.az"].map((x, i) => (
              <div key={i} className="rounded-xl px-3.5 py-2.5 text-[13px] bg-[#26243a]/[0.04] flex items-center justify-between">
                {x}
                <Icon name="arrow" size={14} className="opacity-40" />
              </div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5 }} className="mt-4 w-full rounded-2xl py-3 text-center text-[14px] font-semibold text-white" style={{ background: "#16161f" }}>
            {t(["Kontaktlara əlavə et", "Add to contacts", "Добавить в контакты"])}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function XCardVisual() {
  return (
    <Fit w={820} h={740}>
      <div className="absolute rounded-full" style={{ left: 180, top: 120, width: 520, height: 520, background: `radial-gradient(circle, ${C.brand}24, transparent 68%)` }} />
      <motion.div className="absolute" style={{ right: 40, top: 40 }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: EASE }}>
        <PhoneProfile />
      </motion.div>
      <div className="absolute" style={{ left: 330, top: 330 }}>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{ left: -40 - i * 34, top: -40 - i * 34, width: 80 + i * 68, height: 80 + i * 68, border: `2px solid ${C.brand}` }}
            animate={{ opacity: [0, 0.55, 0], scale: [0.85, 1.05, 1.15] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: 1.4 + i * 0.35, ease: "easeOut" }}
          />
        ))}
      </div>
      <motion.div
        className="absolute"
        style={{ left: 20, top: 250, transformPerspective: 1400 }}
        initial={{ opacity: 0, x: -60, rotateY: -25, rotate: -10 }}
        animate={{ opacity: 1, x: 0, rotateY: [0, 6, 0], rotate: -8, y: [0, -12, 0] }}
        transition={{
          opacity: { duration: 0.9, delay: 0.7 },
          x: { duration: 1.1, delay: 0.7, ease: EASE },
          rotate: { duration: 1.1, delay: 0.7, ease: EASE },
          rotateY: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="relative w-[440px] h-[280px] rounded-[18px] overflow-hidden" style={{ boxShadow: "0 50px 90px -30px rgba(20,18,50,0.6), 0 0 0 1px rgba(255,255,255,0.06)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/card.svg" alt="XCard" className="w-full h-full object-cover" />
          <span className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent" style={{ animation: "sheen 4.5s ease-in-out 1.8s infinite" }} />
          <span className="absolute right-6 top-6 text-white/70">
            <Icon name="nfc" size={30} stroke={2} />
          </span>
        </div>
      </motion.div>
    </Fit>
  );
}

export function SlideXCard() {
  const t = useT();
  const narrow = useNarrow();
  const feats: { i: IconName; t: Tx; d: Tx }[] = [
    {
      i: "nfc",
      t: ["Bir toxunuşla paylaşım", "Share in one tap", "Обмен в одно касание"],
      d: ["Kartı telefona yaxınlaşdırın — əlaqə profili dərhal açılır.", "Tap the card on a phone — the contact profile opens instantly.", "Поднесите карту к телефону — профиль открывается мгновенно."],
    },
    {
      i: "id",
      t: ["Rəqəmsal kimlik", "A digital identity", "Цифровая идентичность"],
      d: ["Ad, vəzifə, şirkət, telefon, e-poçt və sosial şəbəkələr bir profildə.", "Name, title, company, phone, e-mail and socials in one profile.", "Имя, должность, компания, телефон, почта и соцсети в одном профиле."],
    },
    {
      i: "star",
      t: ["Güclü brend imici", "A stronger brand image", "Сильный имидж бренда"],
      d: ["Bütün komanda üçün vahid korporativ üslub. Məlumat dəyişəndə yenidən çap lazım deyil.", "One corporate style for the whole team. No reprinting when details change.", "Единый корпоративный стиль для всей команды. Без перепечатки при изменениях."],
    },
  ];
  return (
    <Slide>
      <div className="flex h-full items-center gap-12 n:flex-col n:items-stretch n:gap-6">
        <div className="w-[800px] shrink-0 n:w-full">
          <Eyebrow n="10">{t(["Bonus · Tərəfdaşlara hədiyyə", "Bonus · A gift for partners", "Бонус · Подарок партнёрам"])}</Eyebrow>
          <Title size={74}>
            XCard — <Hl>{t(["rəqəmsal vizitkartınız.", "your digital business card.", "ваша цифровая визитка."])}</Hl>
          </Title>
          <Lead className="mt-6 n:mt-4">
            {t([
              "XCard bizim rəqəmsal vizitkart layihəmizdir. Arbione ilə uzunmüddətli korporativ əməkdaşlıq edən şirkətlərə pulsuz təqdim edirik.",
              "XCard is our digital business card product. We provide it free of charge to companies in long-term corporate partnership with Arbione.",
              "XCard — наш проект цифровых визиток. Компаниям, которые долгосрочно сотрудничают с Arbione, мы предоставляем его бесплатно.",
            ])}
          </Lead>
          <div className="mt-9 flex flex-col gap-5 n:mt-5 n:gap-3">
            {feats.map((f, i) => (
              <R key={i} d={0.4 + i * 0.12} x={-20} y={0}>
                <div className="flex items-start gap-5 n:gap-3">
                  <IconBox name={f.i} color={C.brand} size={54} />
                  <div className="pt-1 n:pt-0">
                    <div className="tx-h4">{t(f.t)}</div>
                    <div className="mt-1 tx-sm text-ink/60">{t(f.d)}</div>
                  </div>
                </div>
              </R>
            ))}
          </div>
          <R d={0.85} className="mt-9 n:mt-6">
            <Card className="p-6 flex items-center gap-5 n:p-4 n:gap-3" raised>
              <div className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-white shrink-0 n:w-11 n:h-11 n:rounded-xl" style={{ background: C.ok, boxShadow: `0 16px 30px -12px ${C.ok}` }}>
                <Icon name="gift" size={28} className="n:w-5 n:h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="tx-h4">{t(["Uzunmüddətli tərəfdaşlar üçün pulsuz", "Free for long-term partners", "Бесплатно для долгосрочных партнёров"])}</div>
                <div className="tx-sm text-ink/55">{t(["Bütün komandanız üçün korporativ XCard", "Corporate XCards for your whole team", "Корпоративные XCard для всей команды"])}</div>
              </div>
              <div className="font-display text-[44px] font-semibold tracking-tight n:text-[26px]" style={{ color: C.ok }}>
                0 ₼
              </div>
            </Card>
          </R>
        </div>
        <div className={`flex-1 flex justify-center min-w-0 ${narrow ? "" : "-mr-10"}`}>
          <XCardVisual />
        </div>
      </div>
    </Slide>
  );
}

/* =============================== 23 · CLOSING =============================== */

export function SlideClosing() {
  const t = useT();
  const narrow = useNarrow();
  const roles: { r: Tx; a: Tx; c: string; i: IconName }[] = [
    { r: ["İşçi", "Employee", "Сотрудник"], a: ["öz işini görür", "sees their own work", "видит свою работу"], c: C.info, i: "user" },
    { r: ["Menecer", "Manager", "Менеджер"], a: ["komandasını idarə edir", "runs the team", "управляет командой"], c: C.brand, i: "users" },
    { r: ["Maliyyə", "Finance", "Финансы"], a: ["rəqəmi bağlayır", "closes the numbers", "закрывает цифры"], c: C.ok, i: "landmark" },
    { r: ["Rəhbər", "Director", "Руководитель"], a: ["qərarı bu günün məlumatından verir", "decides on today’s data", "решает по сегодняшним данным"], c: C.warn, i: "eye" },
  ];
  return (
    <Slide>
      {!narrow && (
        <div className="pointer-events-none absolute left-1/2 top-[250px]">
          {[240, 400, 580].map((r, i) => (
            <motion.div
              key={r}
              className="absolute rounded-full border border-ink/[0.07]"
              style={{ width: r * 2, height: r * 2, left: -r, top: -r }}
              animate={{ scale: [1, 1.04, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 6, repeat: Infinity, delay: i * 0.8 }}
            />
          ))}
        </div>
      )}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: EASE }} className="text-ink">
          <Logo h={narrow ? 52 : 92} />
        </motion.div>
        <R d={0.4} className="mt-12 n:mt-8">
          <h2 className="font-display font-semibold tracking-[-0.04em] leading-[1.06] text-[80px] max-w-[1500px] n:text-[30px] n:leading-[1.15]">
            {t(["İnsan, vaxt, sənəd, mal və pul\u00a0—", "People, time, documents, goods and money\u00a0—", "Люди, время, документы, товары и\u00a0деньги\u00a0—"])}
            <br />
            <Hl>{t(["bir idarəetmə lövhəsində.", "on one management board.", "на одной панели управления."])}</Hl>
          </h2>
        </R>
        <div className="mt-14 grid grid-cols-4 gap-6 w-full max-w-[1540px] n:grid-cols-2 n:gap-3 n:mt-8">
          {roles.map((x, i) => (
            <R key={i} d={0.8 + i * 0.12}>
              <Card className="p-7 text-left h-full n:p-4">
                <IconBox name={x.i} color={x.c} size={50} />
                <div className="mt-5 tx-h3 n:mt-3">{t(x.r)}</div>
                <div className="mt-1 tx-body text-ink/60">{t(x.a)}</div>
              </Card>
            </R>
          ))}
        </div>
        <R d={1.5} className="mt-14 flex items-center gap-5 text-[19px] font-semibold uppercase tracking-[0.32em] text-ink/50 n:mt-8 n:text-[12px] n:gap-3">
          <span className="h-px w-16 bg-ink/25 n:w-8" />
          {t(["Təşəkkür edirik", "Thank you", "Спасибо"])}
          <span className="h-px w-16 bg-ink/25 n:w-8" />
        </R>
      </div>
    </Slide>
  );
}
