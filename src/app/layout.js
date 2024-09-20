import './globals.css';
import Footer from './components/Footer';
import Header from './components/Header';

export const metadata = {
  title: 'My Blog',
  description: 'Blog sobre hacking ético',
}

export default function Layout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Mi Blog de Hacking Ético</title>
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="flex-grow container mx-auto py-10">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
