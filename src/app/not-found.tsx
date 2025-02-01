import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className="
          font-['Climate_Crisis']
          text-6xl sm:text-8xl
          text-[#AA5486]
          mb-8
          tracking-[0.09em]
        ">
          404
        </h1>
        
        <h2 className="
          font-['Climate_Crisis']
          text-2xl sm:text-4xl
          text-[#AA5486]
          mb-6
          tracking-[0.06em]
        ">
          Page Not Found
        </h2>
        
        <p className="
          font-bricolage
          text-lg sm:text-xl
          mb-8
          text-gray-600
        ">
          Oops! The page you're looking for doesn't exist.
        </p>
        
        <Link 
          href="/"
          className="
            inline-block
            px-6 py-3
            bg-[#AA5486]
            text-white
            font-bricolage
            font-bold
            rounded-full
            hover:bg-[#CE9CAC]
            transition-colors
            duration-300
          "
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}