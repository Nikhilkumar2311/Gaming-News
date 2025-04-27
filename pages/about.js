import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function About() {
  const seo = {
    title: 'About Us - Gaming News',
    description: 'Learn more about Gaming News, your source for the latest updates and free games.',
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/about`,
    image: '/images/og-image.jpg',
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO {...seo} />
      <Header />
      <main className="container mx-auto py-8 flex-grow pt-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
        <p className="text-gray-700 mb-4 text-left">Welcome to Gaming News! We are dedicated to bringing you the latest updates, reviews, and free game offers in the gaming world.</p>
      </main>
      <Footer />
    </div>
  );
}