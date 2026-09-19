"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Member {
  id: number;
  name: string;
  photo: string;
  github: string;
  role?: string;
}

const members: Member[] = [
  {
    id: 1,
    name: "ABDUR RACHMAN ABYAN",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 2,
    name: "ANISA SALSABILLAH",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 3,
    name: "ASTRID ALISYA PUTRI",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 4,
    name: "BALQISYA AZZAHRA",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 5,
    name: "DAFI ILYASA MAULANA",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 6,
    name: "FIERZA RATU AMALIA",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 7,
    name: "HARITSAH NUR FAIZAH",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 8,
    name: "KEZIA AFITA",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 9,
    name: "KGS.PUTRA ARLA RAHMATULLAH",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 10,
    name: "M. DARWIS AL-HABSYI",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 11,
    name: "M. IZZAT AL FAWAZ",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 12,
    name: "M. TAUHID FEBRYAN",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 13,
    name: "MARIN DISTY SAPUTRI",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 14,
    name: "MUHAMMAD AL FATIH",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 15,
    name: "MUHAMMAD FARELLIAN ASRI",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 16,
    name: "MUHAMMAD HAFIZHURROHMAN",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 17,
    name: "NASYIFAH NUR FADILAH",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 18,
    name: "NUR AULIA HASANAH",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 19,
    name: "RICHA KARINA",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 20,
    name: "SHERLYN SHELFIANI PUTRI",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 21,
    name: "SUCI RAHMADANI",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 22,
    name: "SYFA NADIEN SYAFITRI",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 23,
    name: "TRI KHOTAMA AMNAH TASYA",
    photo: "",
    github: "https://github.com/",
  },
  {
    id: 24,
    name: "WILLIAM FERNANDO",
    photo: "",
    github: "https://github.com/",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
} satisfies import("framer-motion").Variants;

function AvatarPlaceholder({ name, id }: { name: string; id: number }) {
  const gradients = [
    "from-violet-500 to-purple-700",
    "from-indigo-500 to-blue-700",
    "from-fuchsia-500 to-pink-700",
    "from-cyan-500 to-teal-700",
    "from-rose-500 to-red-700",
    "from-amber-500 to-orange-700",
    "from-emerald-500 to-green-700",
    "from-sky-500 to-cyan-700",
  ];
  const gradient = gradients[(id - 1) % gradients.length];
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={`w-full h-full bg-linnear-to-br ${gradient} flex items-center justify-center`}
    >
      <span className="text-white text-3xl font-bold select-none">
        {initials}
      </span>
    </div>
  );
}

export default function Anggota() {
  return (
    <section
      className="w-full min-h-screen py-32 px-6 md:px-12 lg:px-20"
      style={{
        background:
          "linear-gradient(135deg, #0f0720 0%, #1a112e 50%, #12082a 100%)",
      }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-3">
          Kelas 1MIA · Manajemen Informatika
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Anggota Kelas
        </h1>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-linear-to-r from-transparent to-violet-500" />
          <span className="text-violet-400 text-sm">
            {members.length} Anggota
          </span>
          <div className="h-px w-16 bg-linear-to-l from-transparent to-violet-500" />
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {members.map((member) => (
          <motion.div
            key={member.id}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.03 }}
            className="group relative flex flex-col"
          >
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, rgba(115,83,151,0.15), rgba(26,17,46,0.85))",
                border: "1px solid rgba(115,83,151,0.25)",
                backdropFilter: "blur(10px)",
                boxShadow:
                  "0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {/* Photo area */}
              <div className="relative w-full aspect-square overflow-hidden">
                <AvatarPlaceholder name={member.name} id={member.id} />
              </div>

              {/* Name & GitHub */}
              <div className="px-3 py-2.5 text-center">
                <p className="text-white text-sm font-semibold leading-tight truncate mb-1">
                  {member.name}
                </p>
                <Link
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub ${member.name}`}
                  className="inline-flex items-center gap-1 text-violet-400 hover:text-violet-200 transition-colors duration-200 text-xs font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5 shrink-0"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="truncate">GitHub</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
