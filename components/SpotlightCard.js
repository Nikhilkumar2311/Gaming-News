import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

function SpotlightCard({ post, isLarge = false }) {
  return (
    <Link href={`/post/${post.slug}`} className="block group">
      <div
        className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-300 ${isLarge ? 'flex flex-col' : 'flex flex-row'
          }`}
      >
        {isLarge ? (
          // Large Card: Image on top, details below
          <div className="w-full">
            {/* Image */}
            <div className="relative w-full h-64">
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <span
                className="inline-block bg-white border border-[#B8C1CD] text-[#6D757F] uppercase text-sm px-2 py-1 rounded"
              >
                {post.categoryName}
              </span>
              <h3
                className="font-bold mt-2 text-2xl"
                style={{ color: '#183354' }}
              >
                {post.title}
              </h3>
              <p className="text-[#6D757F] mt-2 text-sm flex items-center">
                <span className="flex items-center mr-5">
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
          // Small Cards: Image on right, details on left
          <div className="w-full flex flex-row items-center">
            {/* Content (Left) */}
            <div className="w-2/3 p-4">
              <span
                className="inline-block bg-white border border-[#B8C1CD] text-[#6D757F] uppercase text-sm px-2 py-1 rounded"
              >
                {post.categoryName}
              </span>
              <h3
                className="font-bold mt-2 text-lg"
                style={{ color: '#183354' }}
              >
                {post.title}
              </h3>
              <p className="text-[#6D757F] mt-2 text-sm flex items-center">
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  {post.date}
                </span>
              </p>
            </div>

            {/* Image (Right) */}
            <div className="w-1/2 h-24 flex items-center justify-center mr-5 ml-2">
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={300}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default SpotlightCard;