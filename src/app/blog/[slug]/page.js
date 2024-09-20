// src/app/blog/[slug]/page.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Article() {
  const [article, setArticle] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (!slug) return;
    const fetchArticle = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/articles?filters[slug][$eq]=${slug}&populate=cover,author,category`);
      setArticle(res.data.data[0]);
    };
    fetchArticle();
  }, [slug]);

  if (!article) return <p>Cargando...</p>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">{article.attributes.title}</h1>
      <img
        src={article.attributes.cover.data.attributes.url}
        alt={article.attributes.title}
        className="w-full h-auto rounded-lg mb-8"
      />
      <div className="prose lg:prose-xl max-w-full">
        <p>{article.attributes.description}</p>
        <div dangerouslySetInnerHTML={{ __html: article.attributes.content }} />
      </div>
      <div className="mt-10">
        <p className="text-gray-600">Autor: {article.attributes.author.data.attributes.name}</p>
        <p className="text-gray-600">Categoría: {article.attributes.category.data.attributes.name}</p>
      </div>
    </div>
  );
}
