import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();

  // Function to determine if a link is active
  const isActive = (href) => {
    const currentPath = router.asPath; // Use asPath for full resolved path
    if (href === '/') return currentPath === '/';
    if (href.startsWith('/category/')) {
      return currentPath.startsWith('/category/') && currentPath.includes(href.split('/category/')[1]);
    }
    return currentPath === href;
  };

  return (
    <header className="bg-[#12253E] py-4 w-full fixed top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo on the left */}
        <Link href="/">
          <Image src="/logo.jpg" alt="Gaming News Logo" width={50} height={50} className='rounded-full' />
        </Link>

        {/* Navigation links on the right */}
        <nav className="flex space-x-6">
          <Link
            href="/"
            className={`header-link text-white hover:text-gray-300 ${isActive('/') ? 'text-[#F4796C]' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`header-link text-white hover:text-gray-300 ${isActive('/about') ? 'text-[#F4796C]' : ''}`}
          >
            About Us
          </Link>
          <Link
            href="/category/gaming-news"
            className={`header-link text-white hover:text-gray-300 ${isActive('/category/gaming-news') ? 'text-[#F4796C]' : ''}`}
          >
            Gaming News
          </Link>
          <Link
            href="/category/games-to-claim"
            className={`header-link text-white hover:text-gray-300 ${isActive('/category/games-to-claim') ? 'text-[#F4796C]' : ''}`}
          >
            Free to Claim
          </Link>
          <Link
            href="/contact"
            className={`header-link text-white hover:text-gray-300 ${isActive('/contact') ? 'text-[#F4796C]' : ''}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;