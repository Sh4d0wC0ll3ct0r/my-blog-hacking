/* eslint-disable */

"use client"; // <-- Esto le indica a Next.js que este es un Client Component
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/articles?populate[cover]=*&populate[author]=*&populate[category]=*`);
      setArticles(res.data.data);
    };
    fetchArticles();
  }, []);

  return (
    <div className="container mx-auto py-10">
   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div className="bg-gray-900 shadow-md rounded-lg overflow-hidden" key={article.id}> {/* Fondo oscuro para la tarjeta */}
            {/* Usamos la variable de entorno para la URL del servidor de Strapi */}
            {
             article.cover && article.cover.url && (
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.cover.url}`} // Usamos la URL base desde el entorno
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )
            }
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-white">{article.title}</h2> {/* Título en blanco */}
              <p className="text-gray-400">{article.description}</p> {/* Descripción en gris claro */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
