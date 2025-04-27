import SpotlightCard from './SpotlightCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TodaysSpotlight({ posts }) {
  // Filter posts for today's date (April 27, 2025)
  const today = new Date('2025-04-27'); // Current date as per context
  const todayPosts = posts
    .filter((post) => {
      const postDate = new Date(post.date);
      return (
        postDate.getDate() === today.getDate() &&
        postDate.getMonth() === today.getMonth() &&
        postDate.getFullYear() === today.getFullYear()
      );
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date (newest first)

  // If no posts for today, return null or a fallback message
  if (todayPosts.length === 0) {
    return (
      <div className="text-center py-8 mx-10">
        <p className="text-gray-600">No spotlight posts for today.</p>
      </div>
    );
  }

  // Take the first post for the large card, next three for smaller cards
  const largePost = todayPosts[0];
  const smallPosts = todayPosts.slice(1, 4);

  return (
    <section className="py-8 mx-30">
      {/* Header */}
      <div className="relative mb-6">
        <div className="flex items-center">
          <div className="flex items-center bg-[#F4796C] text-white text-xl font-bold py-2 px-4 rounded-lg">
            Today's Spotlight
          </div>
          <div className="border-t border-gray-300 flex-1 ml-2"></div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Large Card (Left) */}
        {largePost && (
          <div className="w-full md:w-2/3">
            <SpotlightCard post={largePost} isLarge={true} />
          </div>
        )}

        {/* Small Cards (Right) */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          {smallPosts.map((post) => (
            <SpotlightCard key={post.id} post={post} isLarge={false} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TodaysSpotlight;