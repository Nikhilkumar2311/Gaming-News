import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostCard from '../../components/PostCard';
import SEO from '../../components/SEO';
import { getSortedPosts } from '../../utils/getPosts';

export async function getStaticPaths() {
  const posts = getSortedPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  const paths = categories.map((category) => ({
    params: { category },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const posts = getSortedPosts();
  const filteredPosts = posts.filter((post) => post.category === params.category);
  return { props: { posts: filteredPosts } };
}

function Category({ posts }) {
  const seo = {
    title: `${posts[0]?.categoryName || 'Category'} - Gaming News`,
    description: `Latest updates in ${posts[0]?.categoryName || 'this category'}.`,
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/category/${posts[0]?.category}`,
    image: posts[0]?.image || '/images/og-image.jpg',
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <SEO {...seo} />
      <Header />
      <main className="container mx-auto py-8 flex-grow">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          {posts[0]?.categoryName || 'Category'} Updates
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.slug} post={post} />)
          ) : (
            <p className="text-center text-gray-600">No posts available in this category.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Category;