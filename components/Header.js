import Link from 'next/link';

function Header() {
  return (
    <header className="bg-white shadow-md py-4 w-full fixed top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-semibold text-gray-800 hover:text-gray-600">
          Gaming News
        </Link>
        <nav className="flex space-x-6">
          <Link href="/category/gaming-news" className="text-gray-700 hover:text-gray-600">
            Gaming News
          </Link>
          <Link href="/category/games-to-claim" className="text-gray-700 hover:text-gray-600">
            Games to Claim
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;