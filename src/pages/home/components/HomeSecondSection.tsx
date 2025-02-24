import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Settings } from "lucide-react";
import { ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import useWidth from "../../../hooks/useWidth";
import { motion } from "framer-motion";
import Button from "../../../components/ui/Button";

interface ProjectInfo {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
}

export default function HomeSecondSection() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const { width } = useWidth();
  const [projects, setProjects] = useState<ProjectInfo[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    if (width > 1024) {
      setIsDesktop(true);
      console.log("Desktop");
    } else {
      setIsDesktop(false);
    }
  }, [width]);

  useEffect(() => {
        const info: ProjectInfo[] = [
      {
        id: 1,
        title: "Casa en el Bosque",
        description:
          "Diseñamos una casa que se integra perfectamente con el entorno natural del bosque, utilizando materiales sostenibles y tecnología avanzada.",
        type: "Arquitectura moderna",
        image: "https://www.esneca.com/wp-content/uploads/arquitectura-interior.jpg",
      },
      {
        id: 2,
        title: "Villa Clásica",
        description:
          "Una villa que refleja la elegancia y la sofisticación de la arquitectura clásica, con detalles ornamentales y espacios amplios.",
        type: "Arquitectura clásica",
        image: "https://arquitecturainterioresaura.com/assets/Inicio/sobriedad.avif",
      },
      {
        id: 3,
        title: "Residencia Contemporánea",
        description:
          "Un proyecto contemporáneo que combina líneas limpias y espacios abiertos, creando un ambiente moderno y funcional.",
        type: "Arquitectura contemporánea",
        image: "https://arquitecturainterioresaura.com/assets/Inicio/bosqueencantado.avif",
      },
      {
        id: 4,
        title: "Apartamento Minimalista",
        description:
          "Un apartamento diseñado con un enfoque minimalista, utilizando colores neutros y mobiliario funcional para maximizar el espacio.",
        type: "Arquitectura minimalista",
        image: "https://placehold.co/600x400",
      },
      {
        id: 5,
        title: "Loft Industrial",
        description:
          "Un loft que incorpora elementos industriales como ladrillos expuestos y tuberías visibles, creando un ambiente urbano y moderno.",
        type: "Arquitectura industrial",
        image: "https://arquitecturainterioresaura.com/assets/Inicio/mundo_beatriz.avif",
      },
    ];
    setProjects(info);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (current: number) => setCurrentSlide(current),
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: "absolute", bottom: "10px", width: "100%" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <>
      {!isDesktop ? (
        <div className="pt-2">
          <div className={`w-full bg-[var(--bg-primary)]  m-auto py-2 `}>
            <Slider {...settings}>
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="mx-auto">
            <div className="p-4">
              <p className="text-[var(--text-color-terciary)] md:text-xl">
                {" "}
                <Settings className="inline" />
                {projects[currentSlide]?.type}
              </p>
              <h2 className="text-3xl md:text-5xl md:text-start font-bold text-end text-[var(--bg-primary)] mt-4">
                {projects[currentSlide]?.title}
              </h2>
              <h3 className="text-center md:text-2xl text-[var(--text-color-primary)] py-5">
                {projects[currentSlide]?.description}
              </h3>
            </div>
            <div className="flex justify-end ">
              <div className="flex items-center justify-center w-[40%] text-center py-3 bg-[var(--bg-primary)] text-white rounded-xl md:text-xl ">
                <Link to="/proyectos">Ver proyectos</Link>
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full h-[50vh] mt-16 text-[var(--bg-primary-opacity)] opacity-25 overflow-hidden font-primary">
            <motion.span
              className="block overflow-hidden text-[50vh] leading-[50vh] whitespace-nowrap"
              style={{ width: "max-content" }}
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                  duration: 60,
                  repeatDelay: 1.5,
                },
              }}
            >
              <span className="inline-block">AURA • AURA • AURA • AURA</span>
              <span className="inline-block">
                {" "}
                • AURA • AURA • AURA • AURA • AURA
              </span>
            </motion.span>
          </div>

          <div className="w-full absolute top-24 flex items-center justify-center z-40">
            <div className={`w-[50%] bg-[var(--bg-primary)]  m-auto py-2 `}>
              <Slider {...settings}>
                {projects.map((project) => (
                  <div key={project.id}>
                    <img
                      className="w-full  h-[50vh] object-cover"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="w-[600px] mx-auto my-8  flex flex-col items-center">
            <div className="">
              <p className="text-[var(--text-color-terciary)] text-xl py-4">
                {" "}
                <Settings className="inline" />
                {projects[currentSlide]?.type}
              </p>
              <h2 className="text-5xl font-bold text-[var(--bg-primary)] my-4">
                {projects[currentSlide]?.title}
              </h2>
              <h3 className="text-center text-2xl text-[var(--text-color-primary)] ">
                {projects[currentSlide]?.description}
              </h3>
            </div>
            <div className="my-4">
              <Link to="/proyectos">
                <Button content="Ver proyectos" />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
