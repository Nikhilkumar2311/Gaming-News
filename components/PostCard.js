import Link from 'next/link';
import Image from 'next/image';

function PostCard({ post }) {
  if (!post) return <div>Post data is unavailable.</div>;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative w-full h-48 p-2 bg-gray-200">
        <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="p-4">
        <Link href={`/post/${post.slug}`}>
          <h2 className="text-xl font-semibold text-gray-800 hover:text-gray-600 line-clamp-2">{post.title}</h2>
        </Link>
        <p className="text-gray-700 mt-2 line-clamp-3">{post.description}</p>
        <div className="mt-2 text-sm text-gray-600">{post.categoryName} • {post.date}</div>
      </div>
    </div>
  );
}

export default PostCard;