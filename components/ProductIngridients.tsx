"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function normalizeFormula(f: string) {
  const map: Record<string, string> = {
    "₀":"0","₁":"1","₂":"2","₃":"3","₄":"4",
    "₅":"5","₆":"6","₇":"7","₈":"8","₉":"9",
  };
  return f.replace(/[₀-₉]/g, (c) => map[c] ?? c);
}

function FormulaText({
  formula, x, y, textAnchor, delay,
}: {
  formula: string; x: number; y: number;
  textAnchor: "start" | "end" | "middle"; delay: number;
}) {
  const parts = normalizeFormula(formula).match(/([A-Z][a-z]?)(\d*)/g) ?? [];

  return (
    <motion.text
      x={x} y={y}
      textAnchor={textAnchor}
      fontSize="32"
      fontFamily="var(--font-work-sans)"
      fontWeight="500"
      fill="#192614"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {parts.map((part, i) => {
        const match = part.match(/^([A-Z][a-z]?)(\d*)$/);
        if (!match) return null;
        const [, letter, num] = match;
        return (
          <tspan key={i}>
            <tspan>{letter}</tspan>
            {num && (
              <tspan fontSize="20" dy="3">
                {num}
                <tspan dy="-3"> </tspan>
              </tspan>
            )}
          </tspan>
        );
      })}
    </motion.text>
  );
}

function MobileLabel({ formula, title, delay }: { formula: string; title: string; delay: number }) {
  const parts = normalizeFormula(formula).match(/([A-Z][a-z]?)(\d*)/g) ?? [];

  return (
    <motion.div
      className="flex flex-col items-start"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-baseline leading-none mb-1">
        {parts.map((part, i) => {
          const match = part.match(/^([A-Z][a-z]?)(\d*)$/);
          if (!match) return null;
          const [, letter, num] = match;
          return (
            <span key={i} className="font-medium text-[#192614]" style={{ fontFamily: "var(--font-work-sans)", fontSize: "18px" }}>
              {letter}
              {num && <sub style={{ fontSize: "11px" }}>{num}</sub>}
            </span>
          );
        })}
      </div>
      <span
        className="italic font-light text-[#192614] px-1.5 py-0.5 rounded-sm text-[11px]"
        style={{ background: "#DEEFDE", fontFamily: "var(--font-work-sans)" }}
      >
        {title}
      </span>
    </motion.div>
  );
}

export default function ProductIngridients() {
  const t = useTranslations("ProductIngridients");
  const refDesktop = useRef<HTMLDivElement>(null);
  const refMobile = useRef<HTMLDivElement>(null);
  const isInViewDesktop = useInView(refDesktop, { once: true, margin: "-30%" });
  const isInViewMobile = useInView(refMobile, { once: true, amount: 0.5 });

  const CX = 400;
  const CY = 240;
  const BASE = 2.1;
  const STAGGER = 0.45;

  const items = [
    {
      key: "1",
      x1: CX - 28, y1: CY - 28,
      x2: 148,     y2: 105,
      textAnchor: "end" as const,
      labelX: 142, labelY: 60,
      foX: -45, foY: 70, foWidth: 200, foAlign: "right",
      titleKey: "title1", formulaKey: "formula1",
      delay: BASE + STAGGER * 0,
    },
    {
      key: "2",
      x1: CX - 32, y1: CY + 38,
      x2: 145,     y2: 360,
      textAnchor: "end" as const,
      labelX: 138, labelY: 360,
      foX: 0, foY: 370, foWidth: 136, foAlign: "right",
      titleKey: "title2", formulaKey: "formula2",
      delay: BASE + STAGGER * 1,
    },
    {
      key: "3",
      x1: CX + 28, y1: CY - 28,
      x2: 652,     y2: 105,
      textAnchor: "start" as const,
      labelX: 658, labelY: 80,
      foX: 660, foY: 90, foWidth: 150, foAlign: "left",
      titleKey: "title3", formulaKey: "formula3",
      delay: BASE + STAGGER * 2,
    },
    {
      key: "4",
      x1: CX + 32, y1: CY + 38,
      x2: 655,     y2: 360,
      textAnchor: "start" as const,
      labelX: 661, labelY: 360,
      foX: 665, foY: 370, foWidth: 150, foAlign: "left",
      titleKey: "title4", formulaKey: "formula4",
      delay: BASE + STAGGER * 3,
    },
  ];

  const mobileDots = [
    { key: "1", cx: 80, cy: 110, x2: 158, y2: 68,  delay: BASE + STAGGER * 0 },
    { key: "2", cx: 85, cy: 145, x2: 158, y2: 118, delay: BASE + STAGGER * 1 },
    { key: "3", cx: 90, cy: 172, x2: 158, y2: 168, delay: BASE + STAGGER * 2 },
    { key: "4", cx: 93, cy: 208, x2: 158, y2: 232, delay: BASE + STAGGER * 3 },
  ];

  return (
    <div ref={refDesktop} className="h-[70vh] flex items-center justify-center mt-32 md:mt-64 md:mb-32">

      {/* ── DESKTOP ── */}
      <div className="hidden md:block relative w-full max-w-4xl" style={{ aspectRatio: "8/5" }}>
        {isInViewDesktop && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 1 }}
            initial={{ y: -220, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src="/asset/Water Drop.png"
              alt="water-drop"
              style={{ width: "21%", height: "auto" }}
              initial={{ scale: 0.8 }}
              animate={{ scale: [0.8, 1.06, 0.97, 1.01, 1] }}
              transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
            />
          </motion.div>
        )}
        <svg
          viewBox="0 0 800 500"
          className="absolute inset-0 w-full h-full"
          style={{ overflow: "visible", zIndex: 2 }}
        >
          {isInViewDesktop && items.map((item) => (
            <g key={item.key}>
              <motion.circle
                cx={item.x1} cy={item.y1} r="3"
                fill="#7a8870"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35, delay: item.delay, ease: [0.34, 1.56, 0.64, 1] }}
                style={{ transformOrigin: `${item.x1}px ${item.y1}px` }}
              />
              <motion.line
                x1={item.x1} y1={item.y1}
                x2={item.x2} y2={item.y2}
                stroke="#7a8870"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeDasharray="300"
                strokeDashoffset="300"
                initial={{ strokeDashoffset: 300 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 0.7, delay: item.delay + 0.2, ease: [0.4, 0, 0.2, 1] }}
              />
              <FormulaText
                formula={t(item.formulaKey)}
                x={item.labelX} y={item.labelY}
                textAnchor={item.textAnchor}
                delay={item.delay + 0.7}
              />
              <motion.foreignObject x={item.foX} y={item.foY} width={item.foWidth} height="22">
                <div
                  // @ts-ignore
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{ textAlign: item.foAlign as "left" | "right", overflow: "hidden" }}
                >
                  <motion.span
                    style={{
                      background: "#DEEFDE", color: "#192614",
                      fontFamily: "var(--font-work-sans)", fontWeight: 300,
                      fontSize: "14px", fontStyle: "italic",
                      padding: "1px 5px", borderRadius: "2px",
                      display: "inline-block", whiteSpace: "nowrap",
                    }}
                    initial={{ opacity: 0, x: item.foAlign === "right" ? 24 : -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.65, delay: item.delay + 0.95, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {t(item.titleKey)}
                  </motion.span>
                </div>
              </motion.foreignObject>
            </g>
          ))}
        </svg>
      </div>

      {/* ── MOBILE ── */}
      <div ref={refMobile} className="flex md:hidden w-full px-6 items-center gap-2">
        <div className="relative flex-shrink-0 w-[150px]">
          {isInViewMobile && (
            <motion.img
              src="/asset/Water Drop.webp"
              alt="water-drop"
              className="w-full h-auto"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
          {isInViewMobile && (
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 150 320"
              style={{ overflow: "visible" }}
            >
              {mobileDots.map((dot) => (
                <g key={dot.key}>
                  <motion.circle
                    cx={dot.cx} cy={dot.cy} r="3"
                    fill="#7a8870"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.35, delay: dot.delay, ease: [0.34, 1.56, 0.64, 1] }}
                    style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}
                  />
                  <motion.line
                    x1={dot.cx} y1={dot.cy}
                    x2={dot.x2} y2={dot.y2}
                    stroke="#7a8870"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                    initial={{ strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 0.5, delay: dot.delay + 0.2, ease: [0.4, 0, 0.2, 1] }}
                  />
                </g>
              ))}
            </svg>
          )}
        </div>

        {/* Labels */}
        {isInViewMobile && (
          <div className="flex flex-col justify-center gap-5 pl-2">
            {items.map((item) => (
              <MobileLabel
                key={item.key}
                formula={t(item.formulaKey)}
                title={t(item.titleKey)}
                delay={item.delay + 0.6}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}