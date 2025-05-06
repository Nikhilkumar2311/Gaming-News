import SpotlightCard from './SpotlightCard';

function TodaysSpotlight({ posts }) {
  // Sort posts by date (newest first) to get top posts
  const topPosts = posts
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // If no posts, return a fallback message
  if (topPosts.length === 0) {
    return (
      <div className="text-center py-6">
        <p className="text-gray-600 text-sm sm:text-base">No spotlight posts available.</p>
      </div>
    );
  }

  // Take the first post for the large card, next three for smaller cards
  const largePost = topPosts[0];
  const smallPosts = topPosts.slice(1, 4);

  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative mb-6" aria-label="Top Gaming News Spotlight">
          <div className="flex items-center">
            <div className="flex items-center bg-[#F4796C] text-white text-lg sm:text-xl font-bold py-2 px-4 rounded-lg">
              Gaming News
            </div>
            <div className="border-t border-gray-300 flex-1 ml-2"></div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
          {/* Large Card (Top on mobile, Left on larger screens) */}
          {largePost && (
            <div className="w-full md:w-2/3">
              <SpotlightCard post={largePost} isLarge={true} />
            </div>
          )}

          {/* Small Cards (Bottom on mobile, Right on larger screens) */}
          <div className="w-full md:w-1/3 flex flex-col gap-4 sm:gap-6">
            {smallPosts.map((post) => (
              <SpotlightCard key={post.id} post={post} isLarge={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodaysSpotlight;