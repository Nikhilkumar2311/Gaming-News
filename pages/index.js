import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import PostCard from '../components/PostCard';
import { getSortedPosts } from '../utils/getPosts';
import Hero from '../components/Hero';
import TodaysSpotlight from '../components/TodaysSpotlight';
import FreeGames from '@/components/FreeGames';

export async function getStaticProps() {
  const posts = getSortedPosts();
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  const seo = {
    title: 'Gaming News - Latest Updates and Free Games',
    description: 'Stay updated with the latest gaming news and claim free games in 2025.',
    url: process.env.NEXT_PUBLIC_DOMAIN,
    image: '/images/og-image.jpg',
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO {...seo} />
      <Header />
      <main className="container mx-auto py-8 flex-grow pt-20">
        {/* Hero Section */}
        <Hero />

        {/* Today's Spotlight Section */}
        <TodaysSpotlight posts={posts} />

        {/* Free Games section */}
        <FreeGames posts={posts} />

        {/* Posts Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Latest Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}