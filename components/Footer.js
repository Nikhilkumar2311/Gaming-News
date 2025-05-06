import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-[#0C1622] text-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo, Text, Links, and Social Media */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-6">
          {/* Logo and Text (Left) */}
          <div className="flex flex-col items-center sm:items-start w-full sm:w-1/3">
            <div className="mb-4">
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
            </div>
            <p className="text-center sm:text-left text-base max-w-md">
              Discover the best free games, trending titles, and gaming news. Join our community and level up your gaming experience!
            </p>
          </div>

          {/* Center Spacer */}
          <div className="hidden sm:block sm:w-1/3"></div>

          {/* Footer Links (Center) */}
          <div className="flex flex-col items-center w-full sm:w-1/3 sm:mr-10">
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="!text-white hover:text-[#F4796C] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media (Right) */}
          <div className="flex flex-col items-center sm:items-end w-full sm:w-1/3">
            <h4 className="text-base font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { href: "https://twitter.com", icon: faTwitter },
                { href: "https://facebook.com", icon: faFacebookF },
                { href: "https://instagram.com", icon: faInstagram },
              ].map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-white hover:text-[#F4796C] transition-colors duration-200"
                  aria-label={`Follow us on ${social.href.split('.')[1]}`}
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} GamingBeast. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;