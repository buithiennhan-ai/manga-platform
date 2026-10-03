export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <div className="text-lg font-black text-white">MangaVerse</div>
          <div>Read the stories you love.</div>
        </div>
        <div className="flex gap-6">
          <a href="/comics" className="hover:text-white">Comics</a>
          <a href="/" className="hover:text-white">About</a>
          <a href="/login" className="hover:text-white">Login</a>
        </div>
      </div>
    </footer>
  );
}
