import { useState } from "react";
import background from "../../assets/image/fondo01.png";
import user1 from "../../assets/image/user-1.jpg";
import user2 from "../../assets/image/user-2.jpg";
import { Users, Lightbulb, Heart, Building } from "lucide-react";
import mision from "../../assets/image/mision.jpg";
import vision from "../../assets/image/vision.jpg";

export default function About() {
  const [hoveredUser, setHoveredUser] = useState<string | null>(null);

  return (
    <section
      className="min-h-screen py-24"
      style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(75, 82, 56, 0.75) 100%), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="bg-white/50 my-4">
        <div className="text-[var(--bg-primary)] text-center max-w-7xl mx-auto p-4 lg:py-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            ¿Quienes somos?
          </h2>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-4 lg:mt-8">
            Somos un dúo de arquitectos apasionados por crear espacios que
            inspiran y transforman vidas expertos en interiorismo residencial,
            comercial y proyectos integrales arquitectónicos.
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-col lg:flex-row lg:justify-around max-w-7xl mx-auto gap-8 text-[var(--text-color-secondary)]">
          <div
            className="flex flex-col gap-4 items-center justify-center"
            onMouseEnter={() => setHoveredUser("user1")}
            onMouseLeave={() => setHoveredUser(null)}
          >
            <div className="relative">
              <img
                className="w-full max-w-52 sm:max-w-72 md:max-w-80 lg:max-w-96 rounded-full lg:rounded-xl shadow-2xs"
                src={user1}
                alt="Representante de AURA 01"
              />
              {hoveredUser === "user1" && (
                <div className="hidden absolute inset-0 bg-black/50 rounded-full lg:rounded-xl lg:flex flex-col items-center justify-center gap-2 text-white">
                  <p className="text-lg font-bolt">Arquitecta de interiores</p>
                  <p className="px-4 text-center">
                    Especialista en diseño de interiores sustentables con más de
                    8 años de experiencia en la creación de espacios que
                    armonizan con el entorno natural.
                  </p>
                </div>
              )}
            </div>
            <div>
              <h2 className="text-[var(--bg-primary)] text-lg sm:text-xl md:text-2xl lg:text-3xl ">
                Noemi Esthefani Gonzales Laveriano
              </h2>
            </div>
          </div>

          <div
            className="flex flex-col gap-4 items-center justify-center"
            onMouseEnter={() => setHoveredUser("user2")}
            onMouseLeave={() => setHoveredUser(null)}
          >
            <div className="relative">
              <img
                className="w-full max-w-52 sm:max-w-72 md:max-w-80 lg:max-w-96 rounded-full lg:rounded-xl shadow-2xs"
                src={user2}
                alt="Representante de AURA 02"
              />
              {hoveredUser === "user2" && (
                <div className="hidden absolute inset-0 bg-black/50 rounded-full lg:rounded-xl lg:flex flex-col items-center justify-center gap-4 text-white">
                  <div>
                    <p className="text-center text-lg font-bolt">
                      Arquitecto de interiores
                    </p>
                    <p className="text-center text-lg font-bolt">&</p>
                    <p className="text-center text-lg font-bolt">
                      Administración de negocios internacionales
                    </p>
                  </div>
                  <p className="px-4 text-center">
                    Experto en arquitectura moderna y diseño funcional, enfocado
                    en crear espacios que maximizan la luz natural y el confort.
                  </p>
                </div>
              )}
            </div>
            <div>
              <h2 className="text-[var(--bg-primary)] text-lg sm:text-xl md:text-2xl lg:text-3xl ">
                Enrique Jose Espinoza Mendoza
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/50 my-8 text-[var(--bg-primary)]">
        <div className="flex justify-around max-w-7xl mx-auto p-4 lg:py-8">
          <div className="flex flex-col items-center justify-center gap-4 text-xs sm:text-xl md:text-2xl lg:text-3xl ">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
            <p>Colaboración</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-xs sm:text-xl md:text-2xl lg:text-3xl ">
            <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
            <p>Innovación</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-xs sm:text-xl md:text-2xl lg:text-3xl ">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
            <p>Pasión</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-xs sm:text-xl md:text-2xl lg:text-3xl ">
            <Building className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
            <p>Excelencia</p>
          </div>
        </div>
      </div>

      <div className="text-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto p-4 lg:p-0">
          <div className="w-full md:w-[75vw] lg:w-[60vw] xl:w-[40vw] bg-white/50 flex mx-auto rounded-xl">
            <div className="flex flex-col item-center justify-around lg:justify-center lg:gap-4 w-1/2 px-4 py-2">
              <h3 className="font-bold md:text-2xl lg:text-3xl text-center">Misión</h3>
              <p className="text-xs md:text-lg ">
                Nuestra meta es transformar espacios a su mejor versión posible,
                considerando las necesidades y gustos de cada cliente.
              </p>
            </div>
            <div className="w-1/2 lg:h-96 ">
              <img className="object-cover w-full h-full rounded-r-xl" src={vision} alt="" />
            </div>
          </div>

          <div className="w-full md:w-[75vw] lg:w-[60vw] xl:w-[40vw] bg-white/50 flex mt-12 mx-auto rounded-xl">
            <div className="flex flex-col item-center justify-around lg:justify-center lg:gap-4 w-1/2 px-4 py-2">
              <h3 className="font-bold md:text-2xl  text-center">Visión</h3>
              <p className="text-xs md:text-lg ">
                Buscamos sobrepasar las expectativas de los clientes al dar una
                atención personalizada, creando una relación duradera con cada
                uno de los clientes, basada en el entendimiento y amor por el
                diseño.
              </p>
            </div>
            <div className="w-1/2 lg:h-96 ">
              <img className="object-cover w-full h-full rounded-r-xl" src={mision} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
