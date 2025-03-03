import { Link } from "react-router-dom";
import fondo from "../../../assets/image/fondo-1.jpg";
import { ChevronsRight, PhoneOutgoing } from "lucide-react";

export default function HomeFirstSection() {
  return (
    <div
      className="w-full min-h-screen"
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className="w-full text-white relative pt-[25vh] pb-16">
        <div className="bg-[var(--bg-primary-opacity)]">
          <div className="max-w-7xl px-4 mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  xl:text-6xl 2xl:text-7xl">
              Arquitectura interiores <b>AURA</b>
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl py-4">
              <h3 className="relative md:left-[5%]">"Diseñamos</h3>
              <h3 className="relative left-[15%]">espacios,</h3>
              <h3 className="relative left-[25%]">creamos</h3>
              <h3 className="relative left-[35%]">emociones"</h3>
            </div>
          </div>
        </div>

        <div className="max-w-7xl px-4 mx-auto">
          <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl py-4">
            En Aura, convertimos cada espacio en una experiencia única,
            fusionando creatividad, funcionalidad y confort.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 px-4 py-8 xl:py-2">
          <div className="text-lg md:text-2xl flex items-center justify-center">
            <Link
              className="flex items-center justify-center gap-4 p-4 border-2 rounded-2xl"
              to="/proyectos"
            >
              <span>Proyectos</span>
              <ChevronsRight />
            </Link>
          </div>

          <div className="text-lg md:text-2xl flex items-center justify-center">
            <Link
              className="flex items-center justify-center gap-4 p-4 border-[var(--bg-primary-opacity2)] border-2 bg-[var(--bg-primary-opacity2)] rounded-2xl"
              to="/contacto"
            >
              <span>Contáctanos</span>
              <PhoneOutgoing />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
