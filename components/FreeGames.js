import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

function FreeGames({ posts }) {
  // Filter and sort posts for Free Games and Recent Posts
  const freeGames = posts
    .filter((post) => post.categoryName === 'Games to Claim')
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const recentPosts = posts
    .filter((post) => post.categoryName !== 'Games to Claim')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5); // Take first 5 for Recent Posts

  // Take the latest 5 free games for display
  const displayedFreeGames = freeGames.slice(0, 5); // Ensure only the latest 5 are shown
  const firstRowPosts = displayedFreeGames.slice(0, 2); // First 2 posts for the first row
  const secondRowPosts = displayedFreeGames.slice(2, 5); // Next 3 posts for the second row
  const thirdRowPosts = displayedFreeGames.slice(5, 8);

  return (
    <section className="py-8 mx-30">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Free Games to Claim (Left) */}
        <div className="w-full md:w-2/3">
          {/* Header */}
          <div className="relative mb-6">
            <div className="flex items-center">
              <div className="flex items-center bg-[#F4796C] text-white text-xl font-bold py-2 px-4 rounded-lg">
                Free Games to Claim
              </div>
              <div className="border-t border-gray-300 flex-1 ml-2"></div>
            </div>
          </div>

          {/* First Row: 2 Cards (50% each) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {firstRowPosts.map((post) => (
              <Link key={post.id} href={`/post/${post.slug}`} className="block group">
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 h-64">
                  {/* Image as Background */}
                  <div className="absolute inset-0 opacity-80">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 backdrop-blur-sm opacity-40 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="relative p-4 flex flex-col justify-end h-full">
                    <span
                      className="inline-flex items-center backdrop-blur-sm bg-opacity-60 text-white uppercase text-sm px-2 py-1 rounded self-start"
                      style={{ width: 'fit-content', whiteSpace: 'nowrap' }}
                    >
                      Free
                    </span>
                    <h3 className="font-bold mt-2 text-lg line-clamp-2 text-white">
                      {post.title}
                    </h3>
                    {(post.date || post.read) && (
                      <p className="text-white mt-2 text-sm flex items-center">
                        {post.date && (
                          <span className="flex items-center mr-5">
                            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                            {post.date}
                          </span>
                        )}
                        {post.read && (
                          <span className="flex items-center">
                            <FontAwesomeIcon icon={faClock} className="mr-2" />
                            {post.read}
                          </span>
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Second Row: 3 Cards (33.33% each) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {secondRowPosts.map((post) => (
              <Link key={post.id} href={`/post/${post.slug}`} className="block group">
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 h-64">
                  {/* Image as Background */}
                  <div className="absolute inset-0 opacity-80">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 backdrop-blur-sm opacity-40 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="relative p-4 flex flex-col justify-end h-full">
                    <span
                      className="inline-flex items-center backdrop-blur-sm bg-opacity-60 text-white uppercase text-sm px-2 py-1 rounded self-start"
                      style={{ width: 'fit-content', whiteSpace: 'nowrap' }}
                    >
                      Free
                    </span>
                    <h3 className="font-bold mt-2 text-lg line-clamp-2 text-white">
                      {post.title}
                    </h3>
                    {(post.date || post.read) && (
                      <p className="text-white mt-2 text-sm flex items-center">
                        {post.date && (
                          <span className="flex items-center mr-5">
                            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                            {post.date}
                          </span>
                        )}
                        {post.read && (
                          <span className="flex items-center">
                            <FontAwesomeIcon icon={faClock} className="mr-2" />
                            {post.read}
                          </span>
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* Recent Posts (Right) */}
        <div className="w-full md:w-1/3">
          {/* Header */}
          <div className="relative mb-6">
            <div className="flex items-center">
              <div className="flex items-center bg-[#F4796C] text-white text-xl font-bold py-2 px-4 rounded-lg">
                Recent Posts
              </div>
              <div className="border-t border-gray-300 flex-1 ml-2"></div>
            </div>
          </div>

          {/* List Layout */}
          <div className="flex flex-col gap-6">
            {recentPosts.slice(0, 3).map((post) => (
              <Link key={post.id} href={`/post/${post.slug}`} className="block group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-row items-center">
                  {/* Image */}
                  <div className="w-1/3 h-24 flex items-center justify-center">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={96}
                      height={96}
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-2/3 p-4">
                    <span
                      className="inline-flex items-center bg-white border border-[#B8C1CD] text-[#6D757F] uppercase text-sm px-2 py-1 rounded"
                      style={{ width: 'fit-content', whiteSpace: 'nowrap' }}
                    >
                      {post.categoryName}
                    </span>
                    <h3
                      className="font-bold mt-2 text-lg"
                      style={{ color: '#183354' }}
                    >
                      {post.title}
                    </h3>
                    {post.date && (
                      <p className="text-[#6D757F] mt-2 text-sm flex items-center">
                        <span className="flex items-center">
                          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                          {post.date}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeGames;