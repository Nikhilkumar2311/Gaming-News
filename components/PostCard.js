import Link from 'next/link';
import Image from 'next/image';

function PostCard({ post }) {
  if (!post) return <div>Post data is unavailable.</div>;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full aspect-[16/9] bg-gray-200">
        <Image
          src={post.image}
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="p-3 sm:p-4">
        <Link href={`/post/${post.slug}`} aria-label={`Read more about ${post.title}`}>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 hover:text-gray-600 line-clamp-2">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-700 mt-2 text-sm sm:text-base line-clamp-3">{post.description}</p>
        <div className="mt-2 text-xs sm:text-sm text-gray-600">
          {post.categoryName} • {post.date}
        </div>
      </div>
    </div>
  );
}

export default PostCard;