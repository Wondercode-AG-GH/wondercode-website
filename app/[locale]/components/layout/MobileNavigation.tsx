"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Mobile Navigation Bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
        style={{
          backgroundColor: "rgba(10, 10, 10, 0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          position: "fixed",
        }}
      >
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ position: "relative" }}
        >
          {/* Logo */}

          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#00CC66" }}
            >
              <span className="text-[#0A0A0A] font-bold text-lg">W</span>
            </div>
            <span className="font-bold text-lg">wondercode</span>
          </div>

          {/* Hamburger Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              position: "relative",
            }}
          >
            {isOpen ? (
              <X className="w-6 h-6" style={{ color: "#00CC66" }} />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              backgroundColor: "rgba(5, 5, 5, 0.98)",
              backdropFilter: "blur(20px)",
              position: "fixed",
            }}
            onClick={() => setIsOpen(false)}
          >
            <div className="flex flex-col items-center justify-center h-full px-8">
              {/* Menu Items */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col gap-6 w-full"
                style={{ position: "relative" }}
              >
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold py-4 border-b"
                    style={{
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      position: "relative",
                    }}
                  >
                    <motion.span
                      whileHover={{ x: 10, color: "#00CC66" }}
                      style={{ display: "inline-block", position: "relative" }}
                    >
                      {item.label}
                    </motion.span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Language Switcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 flex gap-4"
                style={{ position: "relative" }}
              >
                <button
                  className="px-6 py-2 rounded-lg font-semibold"
                  style={{
                    backgroundColor: "#00CC66",
                    color: "#0A0A0A",
                  }}
                >
                  EN
                </button>
                <button
                  className="px-6 py-2 rounded-lg font-semibold"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#AAAAAA",
                  }}
                >
                  DE
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
