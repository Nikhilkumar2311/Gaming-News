import Link from 'next/link';
import Image from 'next/image';

function Hero() {
  return (
    <section className="w-full h-96 flex">
      {/* Left Image (Gaming News) */}
      <Link href="/category/gaming-news" className="w-1/2 h-full relative block">
        <Image
          src="/hero/left.webp"
          alt="Gaming News"
          fill
          style={{ objectFit: 'cover' }}
          className="transition-opacity duration-300 hover:opacity-80"
        />
      </Link>

      {/* Right Image (Free to Claim) */}
      <Link href="/category/games-to-claim" className="w-1/2 h-full relative block">
        <Image
          src="/hero/right.webp"
          alt="Free Games to Claim"
          fill
          style={{ objectFit: 'cover' }}
          className="transition-opacity duration-300 hover:opacity-80"
        />
      </Link>
    </section>
  );
}

export default Hero;