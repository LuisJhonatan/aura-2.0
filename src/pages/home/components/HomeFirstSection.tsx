import firstImage from "../../../assets/image/first_image.png";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import useWidth from "../../../hooks/useWidth";
import { useEffect, useState } from "react";

export default function HomeFirstSection() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const { width } = useWidth();

  useEffect(() => {
    if (width > 1024) {
      setIsDesktop(true);
      console.log("Desktop");
    } else {
      setIsDesktop(false);
    }
  }, [width]);

  return (
    <>
      {!isDesktop ? (
        <div className="max-w-[1200px] relative flex flex-col gap-y-4 items-center pt-16">
          <div className="w-[70%] h-auto flex items-center justify-center ">
            <img
              className=" inline-block object-cover"
              src={firstImage}
              alt="Imagen de espacio arquitectonico"
            />
          </div>
          <main className="px-4">
            <h1 className="text-[20px] md:text-3xl relative z-30 px-4">
              Arquitectura interiores <b>AURA</b>
            </h1>
            <div className="text-[28px] md:text-4xl font-bold px-4">
              <h3 className="relative md:left-[5%]">"Diseñamos</h3>
              <h3 className="relative left-[15%]">espacios,</h3>
              <h3 className="relative left-[25%]">creamos</h3>
              <h3 className="relative left-[35%]">emociones"</h3>
            </div>
            <p className="relative z-30 px-4 md:p-4 md:text-[20px] text-center text-[var(--text-color-secondary)] ">
              En Aura, convertimos cada espacio en una experiencia única,
              fusionando creatividad, funcionalidad y confort.
            </p>
            <div className="flex items-center justify-around text-center py-4 md:text-xl">
              <div className="flex items-center justify-center w-[40%] py-3 bg-[var(--bg-secondary)] rounded-xl">
                <Link to="/proyectos">Ver proyectos</Link>
                <ChevronRight />
              </div>
              <div className="w-[40%] py-3 bg-[var(--bg-primary)] text-white rounded-xl">
                <Link to="/contactanos">Contactanos</Link>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <>
          <div className="w-full h-[25vh] bg-[var(--bg-primary-opacity)] absolute top-32"></div>
          <main className="max-w-[1200px] flex  mx-auto">
            <div>
              <h1 className="text-4xl text-[var(--text-color-secondary)] ">
                Arquitectura interiores <b>AURA</b>
              </h1>
              <div className="text-7xl">
                <h3 className="relative">"Diseñamos</h3>
                <h3 className="relative left-[10%]">espacios,</h3>
                <h3 className="relative left-[20%]">creamos</h3>
                <h3 className="relative left-[30%]">emociones"</h3>
              </div>
              <p className="text-2xl text-[var(--text-color-secondary)] ">
                En Aura, convertimos cada espacio en una experiencia única,
                fusionando creatividad, funcionalidad y confort.
              </p>
            </div>
            <div className="w-[80%] h-full  relative -top-[5vh]">
              <img
                className="w-full h-full object-cover "
                src={firstImage}
                alt="Imagen de espacio arquitectonico"
              />
            </div>
          </main>
        </>
      )}
    </>
  );
}
