import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Contact() {
  const seo = {
    title: 'Contact Us - Gaming News',
    description: 'Get in touch with Gaming News for inquiries, feedback, or support.',
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/contact`,
    image: '/images/og-image.jpg',
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO {...seo} />
      <Header />
      <main className="container mx-auto py-8 flex-grow pt-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
        <p className="text-gray-700 mb-4 text-left">Have questions? Reach out to us at contact@gamingnews.com.</p>
      </main>
      <Footer />
    </div>
  );
}