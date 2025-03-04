import logo from "../assets/image/logo.png";
export default function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="h-8">
            <img
              className="object-cover w-full h-full"
              src={logo}
              alt="Logo AURA arquitectura de interiores"
            />
          </div>
          <div className="text-sm text-center text-olive-200">
            © 2025 Aura Arquitectura de Interiores. Todos los derechos
            reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
