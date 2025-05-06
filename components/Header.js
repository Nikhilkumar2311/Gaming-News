import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to determine if a link is active
  const isActive = (href) => {
    const currentPath = router.asPath; // Use asPath for full resolved path
    if (href === '/') return currentPath === '/';
    if (href.startsWith('/category/')) {
      return currentPath.startsWith('/category/') && currentPath.includes(href.split('/category/')[1]);
    }
    return currentPath === href;
  };

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation links array for reusability
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/category/gaming-news', label: 'Gaming News' },
    { href: '/category/games-to-claim', label: 'Free to Claim' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-[#12253E] py-4 w-full fixed top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo on the left */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="Gaming News Logo"
            width={50}
            height={50}
            className="rounded-full"
            priority
          />
        </Link>

        {/* Menu Icon for Small Screens */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
        </button>

        {/* Navigation links for larger screens */}
        <nav className="hidden sm:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`header-link text-white hover:text-gray-300 ${isActive(link.href) ? 'text-[#F4796C]' : ''
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu (visible when menu is open) */}
      {isMenuOpen && (
        <nav className="sm:hidden bg-[#12253E] px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`header-link text-white hover:text-gray-300 text-lg ${isActive(link.href) ? 'text-[#F4796C]' : ''
                  }`}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;