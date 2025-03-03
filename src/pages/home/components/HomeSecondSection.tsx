import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "lucide-react";

interface ProjectInfo {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
}

export default function HomeSecondSection() {
  const [projects, setProjects] = useState<ProjectInfo[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const info: ProjectInfo[] = [
      {
        id: 1,
        title: "Casa en el Bosque",
        description:
          "Diseñamos una casa que se integra perfectamente con el entorno natural del bosque, utilizando materiales sostenibles y tecnología avanzada.",
        type: "Arquitectura moderna",
        image:
          "https://www.esneca.com/wp-content/uploads/arquitectura-interior.jpg",
      },
      {
        id: 2,
        title: "Villa Clásica",
        description:
          "Una villa que refleja la elegancia y la sofisticación de la arquitectura clásica, con detalles ornamentales y espacios amplios.",
        type: "Arquitectura clásica",
        image:
          "https://arquitecturainterioresaura.com/assets/Inicio/sobriedad.avif",
      },
      {
        id: 3,
        title: "Residencia Contemporánea",
        description:
          "Un proyecto contemporáneo que combina líneas limpias y espacios abiertos, creando un ambiente moderno y funcional.",
        type: "Arquitectura contemporánea",
        image:
          "https://arquitecturainterioresaura.com/assets/Inicio/bosqueencantado.avif",
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
        image:
          "https://arquitecturainterioresaura.com/assets/Inicio/mundo_beatriz.avif",
      },
    ];
    setProjects(info);
  }, []);

  const settings = {
    className: "",
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 1000,
    afterChange: (current: number) => setCurrentSlide(current),
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: "absolute", bottom: "10px", width: "100%" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "15px",
          height: "15px",
          background: "#fff",
          borderRadius: "50%",
          opacity: 0.5,
        }}
        className="slick-dot"
      ></div>
    ),
  };

  return (
    <div className="bg-[var(--bg-primary-opacity)] w-full min-h-screen">
      <div className="bg-[#41492E] py-8">
        <Slider {...settings}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full h-[60vh] md:h-[75vh] relative"
            >
              <img
                className="w-full h-full object-cover"
                src={project.image}
                alt={project.title}
              />
              <div className="w-full h-full bg-black/25 absolute top-0 left-0 "></div>
            </div>
          ))}
        </Slider>
        <style>
          {`
          .slick-dot:hover {
            opacity: 1 !important;
          }
          .slick-active .slick-dot {
            opacity: 1 !important;
            background: #fff !important;
          }
        `}
        </style>
      </div>

      <div>
        <div className="text-[var(--bg-primary)] max-w-7xl mx-auto px-4 py-8 md:px-16 ">
          <p className="flex items-center gap-4 text-[#41492E] text-lg md:text-xl lg:text-2xl">
            <Settings className="inline" />
            <span>{projects[currentSlide]?.type}</span>
          </p>
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            {projects[currentSlide]?.title}
          </h2>
          <p className="text-[var(--bg-secondary)] text-lg md:text-xl lg:text-2xl py-4">
            {projects[currentSlide]?.description}
          </p>
        </div>
        
      </div>
    </div>
  );
}
