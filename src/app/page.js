"use client";  // <-- Esta línea es necesaria

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/articles?populate=cover"
        );
        setArticles(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => {
          const coverUrl = article.cover?.url
            ? `http://localhost:1337${article.cover.url}`
            : "/default-cover.jpg"; // Imagen por defecto

          return (
            <div key={article.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              {/* Imagen de portada */}
              {coverUrl && (
                <img 
                  src={coverUrl} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                />
              )}
              {/* Contenido del post */}
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2 text-white">
                  {article.title}
                </h2>
                <p className="text-gray-400 mb-4">
                  {article.description}
                </p>
                <Link href={`/blog/${article.slug}`}>
                  <span className="text-blue-500 hover:underline">Read more</span>
                </Link>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
