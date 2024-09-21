import Link from 'next/link';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';


export default function Header() {
  return (
    <header className="bg-black py-0">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
       <img src="/hackerdefender.png" alt="My Blog Logo" className="mr-3" style={{ height: '110px', width: '250px' }} />
      </div>
  
       {/* Menú de navegación */}
       <nav className="flex space-x-8 items-center">
          <Link href="/integration" className="hover:text-blue-500 text-2xl">
            Home
          </Link>
          <Link href="/microsoft" className="hover:text-blue-500 text-2xl">
            Máquinas
          </Link>
          <Link href="/sharepoint" className="hover:text-blue-500 text-2xl">
            Notícias
          </Link>
          <Link href="/umbraco" className="hover:text-blue-500 text-2xl">
            Contacto
          </Link>

          {/* Campo de búsqueda */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-gray-800 text-white rounded-md px-4 py-2 focus:outline-none"
            />
            <FaSearch className="text-white" />
          </div>
        </nav>
    </div>
  </header>
  
  );
}
