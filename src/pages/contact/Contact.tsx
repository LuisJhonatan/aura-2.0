import { useState } from "react";
import background from "../../assets/image/fondo01.png";
import { Sparkles, Send, Smartphone, Mail } from "lucide-react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    setFormData({
      nombre: "",
      apellido: "",
      celular: "",
      email: "",
      mensaje: "",
    });
  };
  return (
    <section
      className="min-h-screen py-32 relative"
      style={{
        background: `linear-gradient(180deg, rgba(75, 82, 56, 0.5) 0%, rgba(75, 82, 56, 0.5) 100%), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="bg-[var(--bg-primary-opacity)] w-full max-w-4xl p-8 md:p-12 relative overflow-hidden">
          <div className="">
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-light text-white flex items-center justify-center gap-2">
                ¡Hablemos de tu Espacio Ideal!{" "}
                <Sparkles className="h-5 w-5 text-amber-300" />
              </h2>
              <p className="text-amber-100 mt-2 max-w-xl mx-auto">
                Cuéntanos sobre tu proyecto y cómo podemos transformar tus
                espacios en ambientes que reflejen tu esencia.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required
                    className="w-full p-3 bg-white/90 backdrop-blur-sm border border-olive-600/30 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300/50 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    placeholder="Apellido"
                    required
                    className="w-full p-3 bg-white/90 backdrop-blur-sm border border-olive-600/30 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300/50 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="celular"
                    value={formData.celular}
                    onChange={handleChange}
                    placeholder="Celular"
                    required
                    className="w-full p-3 bg-white/90 backdrop-blur-sm border border-olive-600/30 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300/50 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail"
                    required
                    className="w-full p-3 bg-white/90 backdrop-blur-sm border border-olive-600/30 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Déjanos un mensaje"
                  rows={6}
                  required
                  className="w-full p-3 bg-white/90 backdrop-blur-sm border border-olive-600/30 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300/50 transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[var(--bg-primary)] hover:bg-olive-800 text-white px-6 py-3 rounded-md flex items-center gap-2 transition-all hover:shadow-lg group"
                >
                  Enviar
                  <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-4xl p-8 md:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Phone */}
            <div className="group">
              <div className="relative h-32 perspective-500">
                <div className="absolute inset-0 transform-style-3d group-hover:rotate-y-180 transition-transform duration-700">
                  {/* Front */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] to-olive-700/60 backdrop-blur-sm rounded-lg flex items-center justify-center transform-style-3d backface-hidden border border-white/20">
                    <div className="h-16 w-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <a href="tel:+51906398367">
                        <Smartphone className="h-8 w-8 text-olive-800" />
                      </a>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] to-amber-100/30 backdrop-blur-sm rounded-lg flex items-center justify-center transform-style-3d backface-hidden rotate-y-180 border border-white/20">
                    <p className="text-white font-light text-center px-4">
                      <span className="block text-amber-200 font-medium mb-1">
                        Llámanos
                      </span>
                      <a href="tel:+51906398367" className="text-white">
                        +51 906 398 367
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <div className="relative h-32 perspective-500">
                <div className="absolute inset-0 transform-style-3d group-hover:rotate-y-180 transition-transform duration-700">
                  {/* Front */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] to-olive-700/60 backdrop-blur-sm rounded-lg flex items-center justify-center transform-style-3d backface-hidden border border-white/20">
                    <div className="h-16 w-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <a href="mailto:aurastudiodesign@gmail.com">
                        <Mail className="h-8 w-8 text-olive-800" />{" "}
                      </a>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] to-amber-100/30 backdrop-blur-sm rounded-lg flex items-center justify-center transform-style-3d backface-hidden rotate-y-180 border border-white/20">
                    <p className="text-white font-light text-center px-4 break-words">
                      <span className="block text-amber-200 font-medium mb-1">
                        Email
                      </span>

                      <a
                        href="mailto:aurastudiodesign@gmail.com"
                        className="text-white"
                      >
                        aurastudiodesign@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links - Redesigned */}
      <div className="flex justify-center gap-8 mt-10">
        <a
          href="https://www.instagram.com/aura_decointeriores/?fbclid=IwY2xjawIzYV1leHRuA2FlbQIxMAABHXlqC0CXpyoDmFqTLlqKj9g8Zb043bUCC3ry6dUqb2t0mNLODezjZxJNOw_aem_dFZ0WJD3heb3KN8voq4G8w"
          className="group relative"
          target="_blank"
          rel="noopener"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-300 to-olive-500 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-500"></div>
          <div className="relative bg-gradient-to-br from-white/30 to-white/10 p-3 rounded-full border border-white/30 backdrop-blur-sm transform transition-transform group-hover:scale-110 duration-300">
            <FaInstagram className="h-6 w-6 text-white" />
          </div>
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100090153188356"
          className="group relative"
          target="_blank"
          rel="noopener"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-300 to-olive-500 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-500"></div>
          <div className="relative bg-gradient-to-br from-white/30 to-white/10 p-3 rounded-full border border-white/30 backdrop-blur-sm transform transition-transform group-hover:scale-110 duration-300">
            <FaFacebook className="h-6 w-6 text-white" />
          </div>
        </a>

        <a href="#" className="group relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-300 to-olive-500 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-500"></div>
          <div className="relative bg-gradient-to-br from-white/30 to-white/10 p-3 rounded-full border border-white/30 backdrop-blur-sm transform transition-transform group-hover:scale-110 duration-300">
            <FaWhatsapp className="h-6 w-6 text-white" />
          </div>
        </a>
      </div>

      <div className="w-full h-8 bg-[var(--bg-primary)] absolute bottom-0 left-0 right-0"></div>
    </section>
  );
}
