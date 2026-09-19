"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navLink = [
  { name: "Beranda", href: "/" },
  { name: "Struktur", href: "#struktur" },
  { name: "Galeri", href: "/galeri" },
  { name: "Jadwal", href: "/jadwal" },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else if (latest < previous) {
      setHidden(false);
    }
  });

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href === "#struktur") {
      e.preventDefault();

      const target = document.getElementById("struktur");

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", "#struktur");
      }
    }

    if (href === "/") {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      window.history.replaceState(null, "", "/");
    }
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-170%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 border-b-white/30 bg-violet-500/20 backdrop-blur-md rounded-2xl m-8"
    >
      <div className="logo__container flex items-center gap-2">
        <Image
          className="logo__img"
          src="/assets/MIAdyssey.png"
          alt="logo"
          width={100}
          height={100}
          loading="eager"
        />

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-paper">1MIA</h1>

          <h2 className="text-sm font-semibold text-paper">
            Manajemen Informatika
          </h2>
        </div>
      </div>

      <ul className="nav__link flex gap-12">
        {navLink.map((link) => (
          <li
            className="text-paper font-semibold hover:translate-y-1.25 transition-all duration-300 py-2"
            key={link.href}
          >
            <Link
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
