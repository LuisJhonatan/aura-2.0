import { motion } from "framer-motion";
import error404 from "../../assets/image/error404.png";
import { Link } from "react-router-dom";
import useHeight from "../../hooks/useHeight";

export default function Error404() {
  const { height } = useHeight();

  return (
    <main
      className="w-screen h-screen bg-[var(--bg-secondary)] text-center flex items-center justify-center"
      style={{ height: height }}
    >
      <section className="max-w-[1200px]">
        <div className="w-80 h-80 mx-auto object-cover">
          <img className="mx-auto" src={error404} alt="error-404" />
        </div>

        <div className="h-16 overflow-hidden">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl text-[var(--bg-primary)]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.25,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          >
            Error 404
          </motion.h1>
        </div>

        <h2 className="text-xl md:text-2xl lg:text-3xl text-[var(--bg-primary)] m-2">
          Plano no encontrado
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-[var(--text-color-primary)] px-4">
          Parece que los planos de esta página se han extraviado. Como
          arquitectos, sabemos que cada detalle cuenta, y este espacio aún está
          en construcción.
        </p>

        <div className="flex items-center justify-center gap-4 my-4">
          <div className="w-16 md:w-24 lg:w-48 h-2 bg-[var(--bg-tertiary)]"></div>
          <div className="w-4 md:w-6 lg:w-12 h-2 bg-[var(--bg-primary)]"></div>
          <div className="w-16 md:w-24 lg:w-48 h-2 bg-[var(--bg-tertiary)]"></div>
        </div>

        <div>
          <Link
            className="bg-[var(--bg-primary)] text-[var(--text-color-secondary)] inline-block px-4 py-2 mb-4 rounded-md"
            to="/"
          >
            Regresar al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}
