import Hero from "@/components/hero";
import Structure from "@/app/struktur/page";
import Anggota from "@/app/anggota/page";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Structure />
      <Anggota />
    </div>
  );
}
