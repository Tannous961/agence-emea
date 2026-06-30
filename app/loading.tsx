export default function Loading() {
  return (
    <div
      className="min-h-[50vh] flex flex-col items-center justify-center bg-[#F5F5F5]"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <span
        className="block w-10 h-10 border-2 border-black/10 border-t-[#0000FF] rounded-full animate-spin"
        aria-hidden="true"
      />
      <p
        className="mt-6 font-body font-light uppercase text-ink-meta"
        style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}
      >
        Loading
      </p>
    </div>
  );
}
