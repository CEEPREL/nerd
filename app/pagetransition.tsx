// components/PageTransition.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    setExiting(false);
  }, [pathname]);

  return (
    <div className="relative perspective-[1000px]">
      <AnimatePresence mode="wait">
        {!exiting && (
          <motion.div
            key={pathname}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -90 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="origin-left w-full"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
