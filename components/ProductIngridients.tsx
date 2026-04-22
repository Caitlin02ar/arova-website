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
      transition={{ duration: 0.8, delay: delay }}
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

export default function ProductIngridients() {
  const t = useTranslations("ProductIngridients");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30%" });

  const CX = 400;
  const CY = 240;

  const BASE = 2.1;
  const STAGGER = 0.45;

  const items = [
    {
      key: "1", // kiri atas
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
      key: "4", // kanan bawah
      x1: CX + 32, y1: CY + 38,
      x2: 655,     y2: 360,
      textAnchor: "start" as const,
      labelX: 661, labelY: 360,
      foX: 665, foY: 370, foWidth: 150, foAlign: "left",
      titleKey: "title4", formulaKey: "formula4",
      delay: BASE + STAGGER * 3, // 3.45s
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center mt-24">
      <div ref={ref} className="relative w-full max-w-4xl" style={{ aspectRatio: "8/5" }}>

        {isInView && (
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
          {isInView &&
            items.map((item) => (
              <g key={item.key}>

                {/* 1. Dot */}
                <motion.circle
                  cx={item.x1} cy={item.y1} r="3"
                  fill="#7a8870"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.35,
                    delay: item.delay,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  style={{ transformOrigin: `${item.x1}px ${item.y1}px` }}
                />

                {/* 2. Garis */}
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
                  transition={{
                    duration: 0.7,
                    delay: item.delay + 0.2,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />

                <FormulaText
                  formula={t(item.formulaKey)}
                  x={item.labelX} y={item.labelY}
                  textAnchor={item.textAnchor}
                  delay={item.delay + 0.7}
                />

                {/* 4. Badge */}
                <motion.foreignObject
                  x={item.foX} y={item.foY}
                  width={item.foWidth} height="22"
                >
                  <div
                    // @ts-ignore
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{ textAlign: item.foAlign as "left" | "right", overflow: "hidden" }}
                  >
                    <motion.span
                      style={{
                        background: "#DEEFDE",
                        color: "#192614",
                        fontFamily: "var(--font-work-sans)",
                        fontWeight: 300,
                        fontSize: "14px",
                        fontStyle: "italic",
                        padding: "1px 5px",
                        borderRadius: "2px",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                      }}
                      initial={{ opacity: 0, x: item.foAlign === "right" ? 24 : -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.65,
                        delay: item.delay + 0.95,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {t(item.titleKey)}
                    </motion.span>
                  </div>
                </motion.foreignObject>

              </g>
            ))}
        </svg>

      </div>
    </div>
  );
}