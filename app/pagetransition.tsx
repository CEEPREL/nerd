"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setDisplayChildren(children);
  }, [children]);

  return (
    <div className="relative perspective-[2000px] overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{
            opacity: 1,
            rotateY: 0,
            scale: 1,
          }}
          animate={{
            opacity: 1,
            rotateY: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            rotateY: -60,
            scale: 0.95,
          }}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.01, -0.05, 0.95],
          }}
          className="absolute inset-0 bg-white shadow-2xl rounded-lg origin-left"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {displayChildren}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
