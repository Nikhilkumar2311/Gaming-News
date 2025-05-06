import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

function SpotlightCard({ post, isLarge = false }) {
  return (
    <Link
      href={`/post/${post.slug}`}
      className="block group"
      aria-label={`Read more about ${post.title}`}
    >
      <div
        className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-300 ${isLarge ? 'flex flex-col' : 'flex flex-col sm:flex-row'
          }`}
      >
        {isLarge ? (
          // Large Card: Image on top, details below
          <div className="w-full">
            {/* Image */}
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-3 sm:p-4">
              <span className="inline-block bg-white border border-[#B8C1CD] text-[#6D757F] uppercase text-xs sm:text-sm px-2 py-1 rounded">
                {post.categoryName}
              </span>
              <h3
                className="font-bold mt-2 text-xl sm:text-2xl line-clamp-2"
                style={{ color: '#183354' }}
              >
                {post.title}
              </h3>
              <p className="text-[#6D757F] mt-2 text-xs sm:text-sm flex flex-wrap items-center gap-4">
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  {post.read}
                </span>
              </p>
            </div>
          </div>
        ) : (
          // Small Cards: Image on right, details on left (stacked on small screens)
          <div className="w-full flex flex-col sm:flex-row items-center">
            {/* Content (Top on mobile, Left on larger screens) */}
            <div className="w-full sm:w-2/3 p-3 sm:p-4">
              <span className="inline-block bg-white border border-[#B8C1CD] text-[#6D757F] uppercase text-xs sm:text-sm px-2 py-1 rounded">
                {post.categoryName}
              </span>
              <h3
                className="font-bold mt-2 text-base sm:text-lg line-clamp-2"
                style={{ color: '#183354' }}
              >
                {post.title}
              </h3>
              <p className="text-[#6D757F] mt-2 text-xs sm:text-sm flex items-center">
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  {post.date}
                </span>
              </p>
            </div>

            {/* Image (Bottom on mobile, Right on larger screens) */}
            <div className="w-full sm:w-1/3 aspect-square sm:aspect-[4/3] relative sm:mr-4 sm:ml-2">
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default SpotlightCard;