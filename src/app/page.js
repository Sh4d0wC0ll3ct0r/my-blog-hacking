"use client"; // <-- Esto le indica a Next.js que este es un Client Component

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
      <h1 className="text-4xl font-bold text-center mb-10">Blog de Hacking Ético</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div className="bg-white shadow-md rounded-lg overflow-hidden" key={article.id}>
            {/* Usamos la variable de entorno para la URL del servidor de Strapi */}
            {article.cover && article.cover.url && (
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.cover.url}`} // Usamos la URL base desde el entorno
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-700">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
