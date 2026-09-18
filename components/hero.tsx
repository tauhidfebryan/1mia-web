const Hero = () => {
  return (
    <section
      className="flex h-screen w-full justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(55, 65, 81, 0.65), rgba(17, 24, 39, 0.85)), url('/assets/background1.jpg')",
      }}
    >
      <div className="flex flex-col gap-6 justify-center items-center text-center">
        <p className="font-semibold text-white bg-white/10 backdrop-blur-sm rounded-3xl py-2 px-4 w-fit">
          Class of 2026
        </p>
        <h1 className="text-5xl font-bold text-white tracking-wide">
          MIADYSSEY
        </h1>

        <div className="flex gap-6 justify-center items-center pt-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white bg-white/10 backdrop-blur-md p-2 rounded-full hover:scale-115 transition duration-300 cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/miadyssey_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white bg-white/10 backdrop-blur-md p-2 rounded-full hover:scale-115 transition duration-300 cursor-pointer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@muruunyanya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white bg-white/10 backdrop-blur-md p-2 rounded-full hover:scale-115 transition duration-300 cursor-pointer"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>

        <div className="flex border-t-2 border-paper mt-6">
          <ul className="flex gap-12 mt-6 text-paper">
            <li className="flex flex-col">
              <a className="font-bold text-2xl">24</a>
              <a className="font-medium text-sm">Anggota</a>
            </li>
            <li className="flex flex-col">
              <a className="font-bold text-2xl">24</a>
              <a className="font-medium text-sm">Anggota</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
