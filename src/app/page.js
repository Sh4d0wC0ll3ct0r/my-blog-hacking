"use client"; // Añadir esta línea

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
        setArticles(res.data.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Link href={`/blog/${article.slug}`}>
              {/* Ya no necesitas la etiqueta <a> aquí */}
              <h2 className="text-2xl font-bold text-white mb-4">{article.title}</h2>
              <p className="text-gray-400">{article.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}