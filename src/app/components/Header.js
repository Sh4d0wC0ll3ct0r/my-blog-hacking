import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-black py-4">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="My Blog Logo" className="h-8 mr-3" />
      </div>
  
      {/* Menú de navegación */}
      <nav className="space-x-4">
        <Link href="/integration" className="hover:text-blue-500">Integration</Link>
        <Link href="/microsoft" className="hover:text-blue-500">Microsoft 365</Link>
        <Link href="/sharepoint" className="hover:text-blue-500">SharePoint</Link>
        <Link href="/umbraco" className="hover:text-blue-500">Umbraco</Link>
      </nav>
    </div>
  </header>
  
  );
}
