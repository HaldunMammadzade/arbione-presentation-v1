"use client";
import { motion } from "framer-motion";
import { C, EASE, Slide, R, Hl, Card, IconBox, useNarrow, useT, type IconName, type Tx } from "./primitives";
import { Logo } from "./logo";

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
          <h2 className="font-display font-semibold tracking-[-0.04em] leading-[1.06] text-[76px] max-w-[1540px] n:text-[30px] n:leading-[1.15]">
            {t(["İnsan, vaxt, sənəd, mal, istehsal və\u00a0pul\u00a0—", "People, time, documents, goods, production and\u00a0money\u00a0—", "Люди, время, документы, товары, производство и\u00a0деньги\u00a0—"])}
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
