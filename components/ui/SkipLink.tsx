export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:bg-[#111111] focus:text-white focus:font-body focus:text-sm focus:uppercase focus:tracking-widest focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)] focus:ring-offset-2"
    >
      Skip to main content
    </a>
  );
}
