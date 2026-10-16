export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="absolute -left-24 top-10 h-72 w-72 animate-blob rounded-full bg-brand/25 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute -right-24 top-1/3 h-72 w-72 animate-blob rounded-full bg-brand2/20 blur-3xl [animation-delay:-5s] sm:h-96 sm:w-96" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-blob rounded-full bg-brand3/15 blur-3xl [animation-delay:-9s] sm:h-96 sm:w-96" />
    </div>
  );
}
