import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-center px-6">
      <span className="font-display text-[20vw] font-black text-white/5 leading-none select-none" aria-hidden="true">
        404
      </span>
      <div className="-mt-8 relative z-10">
        <h1 className="font-display text-display-md text-white uppercase">Page Not Found</h1>
        <p className="mt-4 font-body text-base text-white/50 max-w-md mx-auto">
          The page you are looking for has moved, been deleted, or never existed.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="inline-flex items-center px-8 py-4 bg-[#0000FF] text-white font-body font-semibold text-sm uppercase tracking-widest hover:bg-white hover:text-[#0000FF] transition-colors">
            Go Home
          </Link>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-black/20 text-white font-body font-semibold text-sm uppercase tracking-widest hover:border-[#0000FF] hover:text-[#0000FF] transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
