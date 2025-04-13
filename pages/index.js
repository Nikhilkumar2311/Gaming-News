import Header from '../components/Header';
import Footer from '../components/Footer';
import PostCard from '../components/PostCard';
import SEO from '../components/SEO';
import { getSortedPosts } from '../utils/getPosts';

export async function getStaticProps() {
  const allPostsData = getSortedPosts() || [];
  return {
    props: { allPostsData },
    revalidate: 60,
  };
}

function Home({ allPostsData }) {
  console.log('Rendering Posts:', allPostsData);
  const seo = {
    title: 'Gaming News - Latest Updates and Free Games',
    description: 'Stay updated with the latest gaming news and discover free games to claim.',
    url: process.env.NEXT_PUBLIC_DOMAIN,
    image: '/images/og-image.jpg',
  };
  return (
    <div className="min-h-screen flex flex-col">
      <SEO {...seo} />
      <Header />
      <main className="container mx-auto py-12 flex-grow pt-16">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6 mt-5">Latest Gaming Updates</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {allPostsData.length > 0 ? (
            allPostsData.map((post) => {
              console.log('Passing to PostCard:', post);
              return <PostCard key={post.slug} post={post} />;
            })
          ) : (
            <p className="text-center text-gray-600">No posts available.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;