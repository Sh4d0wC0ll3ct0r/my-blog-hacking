// src/components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mi Blog de Hacking Ético</h1>
        <nav>
          <Link href="/" className="text-white mx-4">Inicio</Link>
          <Link href="/about" className="text-white mx-4">Acerca de</Link>
          <Link href="/contact" className="text-white mx-4">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
