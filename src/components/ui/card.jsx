import Link from 'next/link';

function Card({ post }) {
  return (
    <div className="card">
      {/* Verificamos si existe una URL de imagen antes de mostrarla */}
      {post.coverUrl && (
        <img 
          src={post.coverUrl} // Asegúrate de que `coverUrl` es el campo correcto
          alt={post.title} 
          className="card-image"
        />
      )}
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      {/* Usamos el slug para redirigir al post */}
      <Link href={`/blog/${post.slug}`}>
        Leer más
      </Link>
    </div>
  );
}

export default Card;
