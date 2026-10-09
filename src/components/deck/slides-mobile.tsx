"use client";
import { useMemo, type CSSProperties } from "react";
import { motion } from "framer-motion";
import QRCode from "qrcode";
import { C, EASE, Slide, R, Eyebrow, Title, Hl, Lead, IconBox, Icon, Pill, Fit, useNarrow, useT, type IconName, type Tx } from "./primitives";
import { LOGO_PATHS } from "./logo-paths";

export const APP_URL = "https://arbione.az/app";

const INK = "#26243a";

/* =============================== MOBILE APP =============================== */

function PhoneHome() {
  const t = useT();
  const tasks: { l: Tx; done: boolean; c: string }[] = [
    { l: ["Satış hesabatını göndər", "Send the sales report", "Отправить отчёт о продажах"], done: true, c: C.ok },
    { l: ["Müştəri görüşü · 11:30", "Client meeting · 11:30", "Встреча с клиентом · 11:30"], done: true, c: C.info },
    { l: ["Anbar sayımını təsdiqlə", "Approve the stock count", "Подтвердить инвентаризацию"], done: false, c: C.warn },
  ];
  const tabs: IconName[] = ["layout", "check", "chat", "user"];
  return (
    <div className="w-[300px] h-[612px] rounded-[48px] p-[10px] bg-[#16161f]" style={{ boxShadow: "0 50px 100px -40px rgba(20,18,50,0.55), inset 0 0 0 2px rgba(255,255,255,0.08)" }}>
      <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-[#f6f6fa]" style={{ color: INK }}>
        <div className="absolute left-1/2 top-2.5 -translate-x-1/2 w-[92px] h-[26px] rounded-full bg-[#16161f] z-20" />
        <div className="flex justify-between px-7 pt-[14px] text-[12px] font-semibold">
          <span>9:41</span>
          <span className="flex gap-1 items-center opacity-70">
            <span className="w-4 h-2.5 rounded-[3px] border border-current" />
          </span>
        </div>

        <div className="px-5 pt-6 flex items-center justify-between">
          <div>
            <div className="text-[12px] opacity-50">{t(["Sabahınız xeyir,", "Good morning,", "Доброе утро,"])}</div>
            <div className="text-[19px] font-semibold tracking-tight">Leyla</div>
          </div>
          <div className="relative w-10 h-10 rounded-full flex items-center justify-center text-white text-[13px] font-semibold" style={{ background: C.brand }}>
            LM
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#f6f6fa]" style={{ background: C.danger }} />
          </div>
        </div>

        <div className="mx-4 mt-4 rounded-[22px] p-4 text-white relative overflow-hidden" style={{ background: C.brand, boxShadow: `0 18px 30px -16px ${C.brand}` }}>
          <div className="absolute -right-8 -top-10 w-36 h-36 rounded-full bg-white/10" />
          <div className="flex items-center gap-3 relative">
            <div className="relative w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
              <motion.span className="absolute inset-0 rounded-full border-2 border-white/60" animate={{ scale: [1, 1.35], opacity: [0.8, 0] }} transition={{ duration: 1.8, repeat: Infinity, delay: 1 }} />
              <Icon name="fingerprint" size={24} stroke={1.9} />
            </div>
            <div>
              <div className="text-[12px] text-white/70">{t(["İşə giriş qeydə alındı", "Check-in recorded", "Приход отмечен"])}</div>
              <div className="text-[20px] font-semibold tracking-tight">08:57</div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-[11px] text-white/80 relative">
            <Icon name="map" size={13} stroke={2} />
            {t(["Bakı ofisi · GPS təsdiqləndi", "Baku office · GPS verified", "Офис в Баку · GPS подтверждён"])}
          </div>
        </div>

        <div className="px-5 mt-5 flex items-center justify-between">
          <span className="text-[13px] font-semibold">{t(["Bugünkü tapşırıqlar", "Today’s tasks", "Задачи на сегодня"])}</span>
          <span className="text-[11px] font-semibold" style={{ color: C.brand }}>2 / 3</span>
        </div>
        <div className="mx-4 mt-2.5 flex flex-col gap-2">
          {tasks.map((x, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.12, duration: 0.5, ease: EASE }}
              className="rounded-2xl bg-white px-3 py-2.5 flex items-center gap-2.5"
              style={{ boxShadow: "0 1px 2px rgba(28,26,60,0.05)" }}
            >
              <span className="w-[3px] self-stretch rounded-full" style={{ background: x.c }} />
              <span className={`flex-1 text-[12px] leading-tight ${x.done ? "opacity-45 line-through" : "font-medium"}`}>{t(x.l)}</span>
              <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={x.done ? { background: C.ok, color: "#fff" } : { boxShadow: `inset 0 0 0 1.5px ${INK}33` }}>
                {x.done && <Icon name="check" size={12} stroke={3} />}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="absolute left-3 right-3 bottom-3 h-[58px] rounded-[22px] bg-white flex items-center justify-around" style={{ boxShadow: "0 -1px 0 rgba(28,26,60,0.04), 0 10px 24px -12px rgba(28,26,60,0.2)" }}>
          {tabs.map((n, i) => (
            <span key={n} className="w-10 h-10 rounded-xl flex items-center justify-center" style={i === 0 ? { background: `${C.brand}14`, color: C.brand } : { color: `${INK}66` }}>
              <Icon name={n} size={20} stroke={1.9} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Toast({ icon, color, title, sub, style, d }: { icon: IconName; color: string; title: string; sub: string; style: CSSProperties; d: number }) {
  return (
    <motion.div
      className="absolute w-[300px] rounded-[20px] surface-raised px-4 py-3.5 flex items-center gap-3"
      style={style}
      initial={{ opacity: 0, x: -30, scale: 0.94 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: d, duration: 0.8, ease: EASE }}
    >
      <span className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0" style={{ background: color, boxShadow: `0 10px 20px -10px ${color}` }}>
        <Icon name={icon} size={19} stroke={2} />
      </span>
      <div className="min-w-0">
        <div className="text-[14px] font-semibold text-ink leading-tight">{title}</div>
        <div className="text-[12px] text-ink/55 mt-0.5 truncate">{sub}</div>
      </div>
    </motion.div>
  );
}

function MobileVisual() {
  const t = useT();
  return (
    <Fit w={760} h={720}>
      <div className="absolute rounded-full" style={{ left: 200, top: 90, width: 540, height: 540, background: `radial-gradient(circle, ${C.brand}22, transparent 68%)` }} />
      {[300, 380].map((r, i) => (
        <motion.div
          key={r}
          className="absolute rounded-full border border-ink/[0.07]"
          style={{ left: 470 - r, top: 360 - r, width: r * 2, height: r * 2 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, delay: i }}
        />
      ))}
      <motion.div
        className="absolute"
        style={{ left: 320, top: 54 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ opacity: { duration: 0.9, delay: 0.3 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
      >
        <PhoneHome />
      </motion.div>
      <Toast
        icon="calendar"
        color={C.ok}
        title={t(["Məzuniyyət təsdiqləndi", "Leave approved", "Отпуск одобрен"])}
        sub={t(["12–19 avqust · R. Əliyev", "12–19 August · R. Aliyev", "12–19 августа · Р. Алиев"])}
        style={{ left: 30, top: 150 }}
        d={1.4}
      />
      <Toast
        icon="target"
        color={C.brand}
        title={t(["Yeni tapşırıq", "New task", "Новая задача"])}
        sub={t(["Rüblük hesabatı hazırla", "Prepare the quarterly report", "Подготовить квартальный отчёт"])}
        style={{ left: 0, top: 290 }}
        d={1.8}
      />
      <Toast
        icon="wallet"
        color={C.info}
        title={t(["Əməkhaqqı vərəqi hazırdır", "Payslip is ready", "Расчётный лист готов"])}
        sub={t(["Avqust · 1 toxunuşla bax", "August · view in one tap", "Август · открыть в одно касание"])}
        style={{ left: 50, top: 430 }}
        d={2.2}
      />
    </Fit>
  );
}

export function SlideMobileApp() {
  const t = useT();
  const narrow = useNarrow();
  const feats: { i: IconName; c: string; t: Tx; d: Tx }[] = [
    { i: "check", c: C.brand, t: ["Tapşırıqlar", "Tasks", "Задачи"], d: ["İzlə, icra et, statusu yenilə", "Track, complete, update status", "Отслеживайте и выполняйте"] },
    { i: "fingerprint", c: C.brand, t: ["Barmaq izi ilə giriş", "Fingerprint check-in", "Отметка по отпечатку"], d: ["Davamiyyət telefondan qeydə alınır", "Attendance logged from the phone", "Посещаемость с телефона"] },
    { i: "map", c: C.info, t: ["GPS məkan", "GPS location", "GPS-локация"], d: ["Sahə işçiləri real vaxtda", "Field staff in real time", "Выездные сотрудники онлайн"] },
    { i: "bell", c: C.warn, t: ["Ani bildirişlər", "Instant alerts", "Мгновенные уведомления"], d: ["Təsdiq, tapşırıq, xəbər", "Approvals, tasks, news", "Согласования, задачи, новости"] },
    { i: "chat", c: C.info, t: ["Daxili ünsiyyət", "Team chat", "Внутренний чат"], d: ["Şirkət daxilində yazışma", "Messaging inside the company", "Переписка внутри компании"] },
    { i: "chart", c: C.ok, t: ["Mobil hesabatlar", "Mobile reports", "Мобильные отчёты"], d: ["Rəqəmlər hər yerdə əlinizdə", "Numbers wherever you are", "Цифры всегда под рукой"] },
  ];
  return (
    <Slide>
      <div className="flex h-full items-center gap-12 n:flex-col n:items-stretch n:gap-6">
        <div className="w-[820px] shrink-0 n:w-full">
          <Eyebrow n="APP">{t(["Mobil tətbiq · iOS və Android", "Mobile app · iOS & Android", "Мобильное приложение · iOS и Android"])}</Eyebrow>
          <Title size={74}>
            {t(["Arbione mobil tətbiqi —", "The Arbione mobile app —", "Мобильное приложение Arbione —"])}{" "}
            <Hl>{t(["idarəetmə cibinizdə.", "management in your pocket.", "управление в кармане."])}</Hl>
          </Title>
          <Lead className="mt-6 max-w-[740px] n:mt-4">
            {t([
              "Vebdəki eyni hesab, eyni məlumat. İşçi telefondan işə giriş edir, rəhbər təsdiqi yolda verir.",
              "Same account, same data as on the web. Staff check in from their phone, managers approve on the go.",
              "Тот же аккаунт и те же данные, что и в вебе. Сотрудник отмечается с телефона, руководитель согласует в пути.",
            ])}
          </Lead>
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 n:mt-6 n:gap-x-3 n:gap-y-4">
            {feats.map((f, i) => (
              <R key={i} d={0.4 + i * 0.08} x={-16} y={0}>
                <div className="flex items-center gap-4 n:items-start n:gap-2.5">
                  <IconBox name={f.i} color={f.c} size={52} />
                  <div className="min-w-0">
                    <div className="tx-h4">{t(f.t)}</div>
                    <div className="tx-sm text-ink/55">{t(f.d)}</div>
                  </div>
                </div>
              </R>
            ))}
          </div>
        </div>
        <div className={`flex-1 flex justify-center min-w-0 ${narrow ? "" : "-mr-6"}`}>
          <MobileVisual />
        </div>
      </div>
    </Slide>
  );
}

/* =============================== DOWNLOAD =============================== */

function useQr(text: string) {
  return useMemo(() => {
    const { modules } = QRCode.create(text, { errorCorrectionLevel: "H" });
    const n = modules.size;
    const finder = (r: number, c: number) => (r < 7 && c < 7) || (r < 7 && c >= n - 7) || (r >= n - 7 && c < 7);
    const hole = Math.ceil(n * 0.24);
    const h0 = Math.floor((n - hole) / 2);
    let d = "";
    for (let r = 0; r < n; r++)
      for (let c = 0; c < n; c++) {
        if (!modules.get(r, c) || finder(r, c)) continue;
        if (r >= h0 && r < h0 + hole && c >= h0 && c < h0 + hole) continue;
        d += `M${c + 0.08} ${r + 0.08}h0.84v0.84h-0.84z`;
      }
    return { n, d, finders: [[0, 0], [0, n - 7], [n - 7, 0]] as [number, number][], hole, h0 };
  }, [text]);
}

function QrCode({ text, size }: { text: string; size: number }) {
  const { n, d, finders, hole, h0 } = useQr(text);
  return (
    <svg viewBox={`-2 -2 ${n + 4} ${n + 4}`} width={size} height={size} aria-label={text}>
      <path d={d} fill={INK} />
      {finders.map(([r, c]) => (
        <g key={`${r}-${c}`}>
          <rect x={c + 0.5} y={r + 0.5} width={6} height={6} rx={1.8} fill="none" stroke={INK} strokeWidth={1} />
          <rect x={c + 2} y={r + 2} width={3} height={3} rx={0.9} fill={C.brand} />
        </g>
      ))}
      <rect x={h0 + 0.4} y={h0 + 0.4} width={hole - 0.8} height={hole - 0.8} rx={1.6} fill={C.brand} />
      <svg x={h0 + hole * 0.18} y={h0 + hole * 0.18} width={hole * 0.64} height={hole * 0.64} viewBox="4.6 3.8 48.6 44.5">
        <path d={LOGO_PATHS[0]} fill="#fff" />
      </svg>
    </svg>
  );
}

function AppleMark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.4 12.6c0-2.7 2.2-4 2.3-4.1-1.3-1.8-3.2-2.1-3.9-2.1-1.7-.2-3.2 1-4.1 1-.9 0-2.2-1-3.6-.9-1.8 0-3.5 1.1-4.5 2.7-1.9 3.3-.5 8.2 1.4 10.9.9 1.3 2 2.8 3.4 2.7 1.4-.1 1.9-.9 3.5-.9s2.1.9 3.6.9c1.5 0 2.4-1.3 3.3-2.7.6-.9 1-1.8 1.3-2.6-2.7-1.1-2.7-4.1-2.7-4.9zM13.8 4.6c.7-.9 1.2-2.2 1.1-3.5-1.1.1-2.4.7-3.2 1.7-.7.8-1.3 2.1-1.1 3.3 1.2.1 2.4-.6 3.2-1.5z" />
    </svg>
  );
}

function PlayMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3.6 2.3c-.3.3-.4.7-.4 1.2v17c0 .5.1.9.4 1.2L13.2 12z" opacity="0.95" />
      <path d="M16.4 15.2L13.2 12l3.2-3.2 3.8 2.2c1.1.6 1.1 1.6 0 2.2z" opacity="0.75" />
      <path d="M16.4 15.2L13.2 12l-9.6 9.7c.4.4 1 .4 1.7 0z" opacity="0.55" />
      <path d="M16.4 8.8L5.3 2.3c-.7-.4-1.3-.4-1.7 0l9.6 9.7z" opacity="0.85" />
    </svg>
  );
}

function StoreButton({ kind }: { kind: "ios" | "android" }) {
  const t = useT();
  const ios = kind === "ios";
  return (
    <div className="flex items-center gap-3.5 h-[72px] pl-5 pr-7 rounded-[18px] bg-[#16161f] text-white dark:bg-white dark:text-[#16161f] n:h-[54px] n:pl-3.5 n:pr-4 n:gap-2.5 n:rounded-[14px]" style={{ boxShadow: "0 18px 34px -20px rgba(20,18,50,0.6)" }}>
      {ios ? <AppleMark size={30} /> : <PlayMark size={28} />}
      <div className="leading-none">
        <div className="text-[13px] opacity-65 n:text-[10px]">{ios ? t(["App Store-dan yüklə", "Download on the", "Загрузите в"]) : t(["Google Play-dən yüklə", "Get it on", "Доступно в"])}</div>
        <div className="mt-1 text-[22px] font-semibold tracking-tight n:text-[16px]">{ios ? "App Store" : "Google Play"}</div>
      </div>
    </div>
  );
}

function QrVisual() {
  const t = useT();
  return (
    <Fit w={640} h={700}>
      <div className="absolute rounded-full" style={{ left: 40, top: 60, width: 560, height: 560, background: `radial-gradient(circle, ${C.brand}24, transparent 66%)` }} />
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-[56px] border"
          style={{ left: 110 - i * 40, top: 110 - i * 40, width: 420 + i * 80, height: 420 + i * 80, borderColor: `${C.brand}33` }}
          animate={{ opacity: [0, 0.8, 0], scale: [0.96, 1, 1.04] }}
          transition={{ duration: 3.6, repeat: Infinity, delay: 1.5 + i * 0.6, ease: "easeOut" }}
        />
      ))}
      <motion.div
        className="absolute left-[110px] top-[110px] w-[420px] rounded-[40px] bg-white p-8 flex flex-col items-center"
        style={{ boxShadow: "0 60px 110px -40px rgba(28,26,60,0.45), 0 0 0 1px rgba(28,26,60,0.06)" }}
        initial={{ opacity: 0, y: 40, rotateX: 18 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
      >
        <div className="relative">
          <QrCode text={APP_URL} size={356} />
          <motion.span
            className="absolute left-2 right-2 h-[3px] rounded-full"
            style={{ background: C.brand, boxShadow: `0 0 18px 4px ${C.brand}66` }}
            initial={{ top: 8, opacity: 0 }}
            animate={{ top: [8, 344, 8], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, delay: 1.6, ease: "easeInOut" }}
          />
        </div>
        <div className="mt-5 flex items-center gap-2 text-[15px] font-medium" style={{ color: `${INK}99` }}>
          <Icon name="qr" size={18} stroke={2} />
          {t(["Kameranı yönəldin və yükləyin", "Point your camera to download", "Наведите камеру, чтобы скачать"])}
        </div>
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-[640px] flex items-center gap-2 rounded-full surface px-5 py-2.5 text-[16px] font-semibold text-ink"
        style={{ x: "-50%" }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.span className="w-2 h-2 rounded-full" style={{ background: C.ok }} animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }} />
        {APP_URL.replace("https://", "")}
      </motion.div>
    </Fit>
  );
}

export function SlideDownload() {
  const t = useT();
  const facts: { i: IconName; t: Tx }[] = [
    { i: "phone", t: ["iPhone və Android", "iPhone & Android", "iPhone и Android"] },
    { i: "globe", t: ["AZ · EN · RU", "AZ · EN · RU", "AZ · EN · RU"] },
    { i: "lock", t: ["Vebdəki eyni hesab", "Same account as web", "Тот же аккаунт, что в вебе"] },
  ];
  return (
    <Slide>
      <div className="flex h-full items-center gap-16 n:flex-col n:items-stretch n:gap-8">
        <div className="flex-1 min-w-0">
          <Eyebrow n="11" color={C.info}>
            {t(["Mobil tətbiqi yükləyin", "Get the mobile app", "Скачайте приложение"])}
          </Eyebrow>
          <Title size={92}>
            {t(["Arbione-u", "Get Arbione", "Скачайте Arbione"])}
            <br />
            <Hl>{t(["indi yükləyin.", "on your phone.", "прямо сейчас."])}</Hl>
          </Title>
          <Lead className="mt-7 max-w-[720px] n:mt-4">
            {t([
              "Bütün idarəetmə gücü iPhone və Android cihazınızda. Bir dəfə skan edin — komandanız elə bu gün başlasın.",
              "The full power of Arbione on iPhone and Android. Scan once — and your team can start today.",
              "Вся мощь Arbione на iPhone и Android. Отсканируйте один раз — и команда начнёт работать уже сегодня.",
            ])}
          </Lead>
          <R d={0.45} className="mt-10 flex flex-wrap gap-4 n:mt-6 n:gap-2.5">
            <StoreButton kind="ios" />
            <StoreButton kind="android" />
          </R>
          <R d={0.65} className="mt-10 flex flex-wrap gap-3 n:mt-6 n:gap-2">
            {facts.map((f, i) => (
              <Pill key={i} color={C.brand} className="!text-[17px] !px-4 !py-2 n:!text-[12px] n:!px-2.5 n:!py-1">
                <Icon name={f.i} size={17} stroke={2} />
                {t(f.t)}
              </Pill>
            ))}
          </R>
        </div>
        <div className="shrink-0 flex justify-center n:w-full">
          <QrVisual />
        </div>
      </div>
    </Slide>
  );
}
