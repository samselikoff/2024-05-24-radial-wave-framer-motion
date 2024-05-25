"use client";

import { motion } from "framer-motion";

let variants = {
  pulse: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Page() {
  return (
    <motion.svg
      width="385"
      height="568"
      viewBox="0 0 385 568"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate="pulse"
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.circle
        cx="167"
        cy="443"
        r="39"
        fill="white"
        variants={variants}
      />
      <motion.circle
        opacity="0.6"
        cx="167"
        cy="443"
        r="58"
        fill="white"
        variants={variants}
      />
      <motion.circle
        opacity="0.3"
        cx="167"
        cy="443"
        r="87"
        fill="white"
        variants={variants}
      />
    </motion.svg>
  );
}
