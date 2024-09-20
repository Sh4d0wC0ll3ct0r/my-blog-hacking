// src/app/layout.js
import './globals.css'

export const metadata = {
  title: 'My Blog',
  description: 'Blog sobre hacking ético',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  )
}
