const Structure = () => {
  return (
    <section className="py-16 bg-slate-900 min-h-screen text-white flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-12">Struktur Kelas 1MIA</h2>

      {/* Level 1: Ketua Kelas */}
      <div className="flex flex-col items-center hover:scale-95 transition duration-300">
        <div className="w-60 bg-violet-600/20 border border-violet-500 backdrop-blur-md px-6 py-3 rounded-xl text-center shadow-lg">
          <p className="text-xs text-violet-300 font-semibold">KETUA KELAS</p>
          <p className="text-lg font-bold">Abdur Rachman Abyan</p>
        </div>

        {/* Garis Lurus Dari Ketua Ke Garis Horizontal */}
        <div className="w-0.5 h-10 bg-violet-500"></div>
      </div>

      {/* Level 2: Cabang Horizontal & Kotak Bawah */}
      <div className="relative flex justify-center gap-8 border-t-2 border-violet-500 pt-8">
        {/* Wakil Ketua */}
        <div className="relative flex flex-col items-center">
          {/* Garis vertikal penghubung dari garis horizontal ke kotak */}
          <div className="absolute -top-8 w-0.5 h-8 bg-violet-500"></div>
          <div className="w-56 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-3 rounded-xl text-center hover:scale-95 transition duration-300">
            <p className="text-xs text-gray-400 font-semibold">WAKIL KETUA</p>
            <p className="text-base font-bold">M. Izzat Al Fawaz</p>
          </div>
        </div>

        {/* Sekretaris */}
        <div className="relative flex flex-col items-center">
          {/* Garis vertikal atas */}
          <div className="absolute -top-8 w-0.5 h-8 bg-violet-500"></div>
          <div className="w-56 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-3 rounded-xl text-center hover:scale-95 transition duration-300">
            <p className="text-xs text-gray-400 font-semibold">SEKRETARIS</p>
            <p className="text-base font-bold">M. Darwis Al Habsyi</p>
          </div>
          {/* Garis vertikal bawah (persiapan untuk anggota/divisi bawahnya) */}
          <div className="w-0.5 h-8 bg-violet-500"></div>
        </div>

        {/* Bendahara */}
        <div className="relative flex flex-col items-center">
          {/* Garis vertikal atas */}
          <div className="absolute -top-8 w-0.5 h-8 bg-violet-500"></div>
          <div className="w-56 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-3 rounded-xl text-center hover:scale-95 transition duration-300">
            <p className="text-xs text-gray-400 font-semibold">BENDAHARA</p>
            <p className="text-base font-bold">Richa Karina</p>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center gap-8 border-t-2 border-violet-500 pt-8">
        <div className="w-56 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-3 rounded-xl text-center hover:scale-95 transition duration-300">
          <p className="text-xs text-gray-400 font-semibold">
            Wakil Sekretaris
          </p>
          <p className="text-base font-bold">Kezia Afita Sari</p>
        </div>
        <div className="w-56 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-3 rounded-xl text-center hover:scale-95 transition duration-300">
          <p className="text-xs text-gray-400 font-semibold">Wakil Bendahara</p>
          <p className="text-base font-bold">Sherlyn Shelfiani Putri</p>
        </div>
      </div>
    </section>
  );
};

export default Structure;
