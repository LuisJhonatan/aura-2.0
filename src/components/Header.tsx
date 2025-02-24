import { Menu } from "lucide-react";
import { CircleX } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/assets/image/logo.png";
import useWidth from "../hooks/useWidth";

export default function Header() {
  const [view, setView] = useState<boolean>(false);
  const [viewDesktop, setViewDesktop] = useState<boolean>(false);
  const { width } = useWidth();

  useEffect(() => {
    setViewDesktop(width > 1024);
  }, [width]);

  const handleClick = () => {
    setView(!view);
  };

  return (
    // <header className="w-screen h-16 fixed top-0 z-50">
    //   <section className="h-16 max-w-[1200px] flex justify-between items-center overflow-y-hidden px-4 m-auto">
    //     <div className="lg:hidden w-12 h-12"></div>

    //     <div className="w-32 object-cover">
    //       <img src={logo} alt="Logo-AURA" />
    //     </div>

    //     {!viewDesktop && (
    //       <>
    //         <motion.button
    //           className="w-12 h-12  z-50"
    //           whileTap={{ scale: 0.9 }}
    //           animate={{ rotate: view ? 90 : 0 }}
    //           transition={{ duration: 0.75 }}
    //           onClick={handleClick}
    //         >
    //           {view ? (
    //             <CircleX size={48} color="var(--bg-primary)" />
    //           ) : (
    //             <Menu size={48} color="var(--bg-primary)" />
    //           )}
    //         </motion.button>

    //         <section
    //           className={`w-1/2 h-auto md:text-xl fixed top-16 ${
    //             view ? "right-0" : "-right-full"
    //           } duration-1000  flex flex-col justify-evenly items-center m-4 z-50`}
    //         >
    //           <Link
    //             to="/"
    //             className="w-full p-2 bg-[var(--bg-primary-opacity)] text-white rounded-xl my-1 text-center"
    //           >
    //             Inicio
    //           </Link>
    //           <Link
    //             to="/nosotros"
    //             className="w-full p-2 bg-[var(--bg-primary-opacity)] text-white rounded-xl my-1 text-center"
    //           >
    //             Nosotros
    //           </Link>
    //           <Link
    //             to="/proyectos"
    //             className="w-full p-2 bg-[var(--bg-primary-opacity)] text-white rounded-xl my-1 text-center"
    //           >
    //             Proyectos
    //           </Link>
    //           <Link
    //             to="/servicios"
    //             className="w-full p-2 bg-[var(--bg-primary-opacity)] text-white rounded-xl my-1 text-center"
    //           >
    //             Servicios
    //           </Link>
    //           <Link
    //             to="/contacto"
    //             className="w-full p-2 bg-[var(--bg-primary-opacity)] text-white rounded-xl my-1 text-center"
    //           >
    //             Contacto
    //           </Link>
    //         </section>
    //       </>
    //     )}

    //     {viewDesktop && (
    //       <section className="hidden lg:flex lg:text-2xl lg:text-[var(--bg-primary)]">
    //         <Link
    //           to="/"
    //           className="px-2 lg:mx-4 transition-transform duration-300 hover:scale-110 hover:font-semibold transform-gpu"
    //         >
    //           Inicio
    //         </Link>
    //         <Link
    //           to="/nosotros"
    //           className="px-2 lg:mx-4 transition-transform duration-300 hover:scale-110 hover:font-semibold transform-gpu"
    //         >
    //           Nosotros
    //         </Link>
    //         <Link
    //           to="/proyectos"
    //           className="px-2 lg:mx-4 transition-transform duration-300 hover:scale-110 hover:font-semibold transform-gpu"
    //         >
    //           Proyectos
    //         </Link>
    //         <Link
    //           to="/servicios"
    //           className="px-2 lg:mx-4 transition-transform duration-300 hover:scale-110 hover:font-semibold transform-gpu"
    //         >
    //           Servicios
    //         </Link>
    //         <Link
    //           to="/contacto"
    //           className="px-2 lg:mx-4 transition-transform duration-300 hover:scale-110 hover:font-semibold transform-gpu"
    //         >
    //           Contacto
    //         </Link>
    //       </section>
    //     )}
    //   </section>
    // </header>
    <header className="w-full fixed top-0 z-50">
      <div className="h-8"></div>
      {!viewDesktop ? (
        <div className="flex items-center justify-between h-16 px-4">
          {/*Logo AURA*/}
          <div className="h-12">
            <img
              className="object-cover w-full h-full"
              src={logo}
              alt="Logo AURA arquitectura de interiores"
            />
          </div>

          {/* Boton de menu */}
          <div>
            <motion.button
              className="w-12 h-12  z-50"
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: view ? 90 : 0 }}
              transition={{ duration: 0.75 }}
              onClick={handleClick}
            >
              {view ? (
                <CircleX size={48} color="white" />
              ) : (
                <Menu size={48} color="white" />
              )}
            </motion.button>
          </div>
          <section
            className={`w-1/2 md:w-1/3 h-auto md:text-xl fixed top-24 ${
              view ? "right-0" : "-right-full"
            } duration-1000  flex flex-col justify-evenly items-center m-4 z-50`}
          >
            <Link
              to="/"
              className="w-full p-2 bg-[var(--bg-primary)] text-white rounded-xl my-1 text-center"
            >
              Inicio
            </Link>
            <Link
              to="/nosotros"
              className="w-full p-2 bg-[var(--bg-primary)] text-white rounded-xl my-1 text-center"
            >
              Nosotros
            </Link>
            <Link
              to="/proyectos"
              className="w-full p-2 bg-[var(--bg-primary)] text-white rounded-xl my-1 text-center"
            >
              Proyectos
            </Link>
            {/* <Link
              to="/servicios"
              className="w-full p-2 bg-[var(--bg-primary)] text-white rounded-xl my-1 text-center"
            >
              Servicios
            </Link> */}
            <Link
              to="/contacto"
              className="w-full p-2 bg-[var(--bg-primary)] text-white rounded-xl my-1 text-center"
            >
              Contacto
            </Link>
          </section>
        </div>
      ) : (
        <div className="max-w-7xl flex items-center justify-between h-16 px-4 mx-auto">
          <div className="h-16">
            <img
              className="object-cover w-full h-full"
              src={logo}
              alt="Logo AURA arquitectura de interiores"
            />
          </div>
          <section className="flex justify-between text-2xl text-white">
            <Link
              to="/"
              className="px-2 lg:mx-4 transition-transform duration-300 hover:scale-110  transform-gpu"
            >
              Inicio
            </Link>
            <Link
              to="/nosotros"
              className="px-2 lg:mx-4 transition-transform duration-300 hover:scale-110  transform-gpu"
            >
              Nosotros
            </Link>
            <Link
              to="/proyectos"
              className="px-2 lg:mx-4 transition-transform duration-300 hover:scale-110  transform-gpu"
            >
              Proyectos
            </Link>

            <Link
              to="/contacto"
              className="px-2 lg:mx-4 transition-transform duration-300 hover:scale-110  transform-gpu"
            >
              Contacto
            </Link>
          </section>
        </div>
      )}
    </header>
  );
}
