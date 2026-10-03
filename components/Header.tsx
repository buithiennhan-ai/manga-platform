export default function Header() {
  return (
    <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 font-black text-white">M</div>
          <div>
            <div className="text-lg font-black tracking-wide">MangaVerse</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/comics" className="hover:text-white">Comics</a>
          <a href="/comics" className="hover:text-white">Trending</a>
          <a href="/comics" className="hover:text-white">Categories</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 md:block">
            Search comics
          </div>
          <a href="/login" className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-400">
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
