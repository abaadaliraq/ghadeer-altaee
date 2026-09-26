"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type LogoLoaderProps = {
  fixed?: boolean;
};

const loaderEase = [0.22, 1, 0.36, 1] as const;

export default function LogoLoader({ fixed = false }: LogoLoaderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`${
        fixed ? "fixed inset-0 z-[999]" : "flex min-h-screen w-full"
      } items-center justify-center bg-[#0D0F0C]`}
    >
      <motion.div
        className="flex flex-col items-center gap-5"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.62, ease: loaderEase }}
      >
        <Image
          src="/images/ghadeer-logo.png"
          alt="Ghadeer Al-Taee"
          width={1536}
          height={1024}
          priority
          className="h-24 w-auto object-contain sm:h-28 md:h-32"
        />
        <motion.span
          className="h-px w-28 bg-[#F2EFE7]/45"
          initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.76, delay: 0.12, ease: loaderEase }}
        />
      </motion.div>
    </div>
  );
}
