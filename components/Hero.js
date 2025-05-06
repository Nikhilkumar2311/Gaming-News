import Link from 'next/link';
import Image from 'next/image';

function Hero() {
  return (
    <section className="w-full">
      <div className="flex flex-col sm:flex-row">
        {/* Left Image (Gaming News) */}
        <Link
          href="/category/gaming-news"
          className="w-full sm:w-1/2 aspect-[16/9] relative block"
          aria-label="View Gaming News"
        >
          <Image
            src="/hero/left.webp"
            alt="Gaming News"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-opacity duration-300 hover:opacity-80"
            priority
          />
        </Link>

        {/* Right Image (Free to Claim) */}
        <Link
          href="/category/games-to-claim"
          className="w-full sm:w-1/2 aspect-[16/9] relative block"
          aria-label="View Free Games to Claim"
        >
          <Image
            src="/hero/right.webp"
            alt="Free Games to Claim"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-opacity duration-300 hover:opacity-80"
            priority
          />
        </Link>
      </div>
    </section>
  );
}

export default Hero;