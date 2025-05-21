// components/ClientLayout.tsx
"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    setExiting(false);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {!exiting && (
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -50,
              transition: { duration: 0.5 },
            }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {exiting && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-white"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
