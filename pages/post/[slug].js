import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { getPostData, getSortedPosts } from '../../utils/getPosts';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export async function getStaticPaths() {
  const posts = getSortedPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  console.log('Generated Paths for Post Slugs:', paths); // Debug
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  const allPosts = getSortedPosts(); // Fetch all posts for the recent posts section
  return { props: { postData, allPosts } };
}

function Post({ postData, allPosts }) {
  const seo = {
    title: postData.title,
    description: postData.description,
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/${postData.slug}`,
    image: postData.image,
  };

  const MarkdownComponents = {
    p: ({ node, ...props }) => <p className="text-gray-700 mb-4 text-left" {...props} />,
    h1: ({ node, ...props }) => <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center" {...props} />,
    h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4 text-left" {...props} />,
    ul: ({ node, ...props }) => <ul className="list-disc list-inside text-gray-700 mb-4 text-left" {...props} />,
    li: ({ node, ...props }) => <li className="mb-2" {...props} />,
    strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
  };

  // Select the 4 most recent posts (excluding the current post)
  const recentPosts = allPosts
    .filter(post => post.slug !== postData.slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 mt-10">
      <SEO {...seo} />
      <Header />
      <main className="container mx-auto py-8 flex-grow flex flex-wrap">
        {/* Main Content (Left Column) */}
        <div className="w-full lg:w-3/4 p-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">{postData.title}</h1>
          <ReactMarkdown components={MarkdownComponents}>{postData.content}</ReactMarkdown>
          <div className="mt-4 text-sm text-gray-600 text-center">
            {postData.categoryName} • {postData.date}
          </div>

          {/* Placeholder for Google Ads (Above Content) */}
          {/* <div className="my-8 p-4 bg-gray-200 text-center text-gray-700">
            [Google Ad Placeholder - 728x90 Banner]
          </div> */}

          {/* Placeholder for Google Ads (Below Content) */}
          {/* <div className="my-8 p-4 bg-gray-200 text-center text-gray-700">
            [Google Ad Placeholder - 300x250 Rectangle]
          </div> */}
        </div>

        {/* Recent Posts (Right Column) */}
        <div className="w-full lg:w-1/4 p-4 bg-white shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Recent Posts</h3>
          <ul className="space-y-4">
            {recentPosts.map((post) => (
              <li key={post.slug} className="border-b pb-2">
                <Link href={`/post/${post.slug}`} className="text-blue-600 hover:text-blue-800">
                  {post.title}
                </Link>
                <p className="text-sm text-gray-600">{post.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Post;