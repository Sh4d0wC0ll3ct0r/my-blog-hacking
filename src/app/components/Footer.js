// src/components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4 mt-10">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Mi Blog de Hacking Ético. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  }
  