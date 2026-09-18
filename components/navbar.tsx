import Image from "next/image";
import logo from "@/public/assets/MIAdyssey.png";
import Link from "next/link";
import { link } from "fs";

const navLink = [
  { name: "Beranda", href: "/" },
  { name: "Struktur", href: "/struktur" },
  { name: "Galeri", href: "/galeri" },
  { name: "Jadwal", href: "/jadwal" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 border-b-white/30 bg-violet-500/20 backdrop-blur-md rounded-2xl m-8">
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
            className="text-paper font-semibold hover:translate-y-1.25 transition-all duration-300"
            key={link.href}
          >
            <Link className="" href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
