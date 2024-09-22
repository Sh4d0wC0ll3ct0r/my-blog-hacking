"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

export default function Article() {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const slug = pathname.split("/").pop(); // Extraemos el slug desde la URL

  useEffect(() => {
    const fetchArticle = async () => {
      setIsLoading(true);
      try {
        console.log(`Fetching article with slug: ${slug}`);
        // Añadimos el populate para obtener el campo 'cover'
        const response = await axios.get(
          `http://localhost:1337/api/articles?filters[slug][$eq]=${slug}&populate=cover`
        );
        console.log("API response:", response.data);

        if (response.data.data && response.data.data.length > 0) {
          setArticle(response.data.data[0]); // Accedemos al primer artículo en el array
        } else {
          console.error("Article not found");
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching article:", error);
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (isLoading) return <p>Loading...</p>;
  if (!article) return <p>No article found</p>;

  // Verificamos si el campo cover existe en los datos de la respuesta
  const coverUrl = article.cover?.url ? `http://localhost:1337${article.cover.url}` : null;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-lg mb-8">{article.description}</p>

      {/* Renderizamos la imagen si existe */}
      {coverUrl && (
        <img 
          src={coverUrl} 
          alt={article.title} 
          className="mb-4 w-full"
        />
      )}
    </div>
  );
}
