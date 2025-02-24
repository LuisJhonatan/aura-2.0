import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EntryPage from "../../components/ui/EntryPage";
import HomeSecondSection from "./components/HomeSecondSection";
//import HomeFirstSection from "./components/HomeFirstSection";
import fondo from "../../assets/image/fondo-1.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  const [start, setStart] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStart(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!start) {
      const img = new Image();
      img.src = fondo;
      img.onload = () => setImageLoaded(true);
    }
  }, [start]);

  return (
    <AnimatePresence mode="wait">
      {start ? (
        <motion.div
          key="entry"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <EntryPage />
        </motion.div>
      ) : (
        <motion.section
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <section
            className="text-[var(--bg-primary)]  w-screen min-h-screen relative"
            style={{
              background: `linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(75, 82, 56, 0.75) 100%), url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <HomeFirstSection />
          </section>

          <section className="w-full
          bg-[var(--bg-secondary)] px-4 py-5 lg:w-screen lg:min-h-screen relative"
          >
            <HomeSecondSection />
          </section> */}
          <div className="w-full h-screen relative">
            {imageLoaded && (
              <img className="w-full h-full object-cover" src={fondo} alt="" />
            )}
            <div className="absolute inset-0 bg-black/15"></div>

            <main className="w-full max-w-7xl text-white absolute top-[25vh] left-0 right-0 px-4 mx-auto z-40">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Arquitectura interiores <b>AURA</b>
              </h1>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-4">
                <h3 className="relative md:left-[5%]">"Diseñamos</h3>
                <h3 className="relative left-[15%]">espacios,</h3>
                <h3 className="relative left-[25%]">creamos</h3>
                <h3 className="relative left-[35%]">emociones"</h3>
              </div>
              <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl py-2">
                En Aura, convertimos cada espacio en una experiencia única,
                fusionando creatividad, funcionalidad y confort.
              </p>
              <div className="flex items-center justify-around lg:justify-baseline text-center py-4 md:text-xl">
                <div className="flex text-[var(--bg-primary)] items-center justify-center w-[40%] lg:w-1/4 py-3 bg-[var(--bg-secondary)] rounded-xl">
                  <Link className="w-full h-full inline-block" to="/proyectos">
                    Ver proyectos {` >`}
                  </Link>
                </div>
                <div className="w-[40%] lg:w-1/4 py-3 bg-[var(--bg-primary)] text-white rounded-xl">
                  <Link
                    className="w-full h-full inline-block "
                    to="/contactanos"
                  >
                    Contactanos
                  </Link>
                </div>
              </div>
            </main>
            <div className="w-full h-[25vh] absolute top-[25vh] bg-[var(--bg-primary-opacity)] z-0"></div>
          </div>

          <div
            className="w-full
          bg-[var(--bg-secondary)] px-4 py-5 min-h-screen relative"
          >
            <HomeSecondSection />
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
