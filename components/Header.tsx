export default function Header() {
  return (
    <header className="border-b-2 border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-bold text-white">
            M
          </div>
          <div className="text-xl font-bold text-dark">MangaVerse</div>
        </a>

        {/* Nav */}
        <nav className="hidden items-center gap-8 text-sm font-semibold text-gray-600 md:flex">
          <a href="/" className="transition hover:text-primary">Trang chủ</a>
          <a href="/comics" className="transition hover:text-primary">Truyện tranh</a>
          <a href="/comics" className="transition hover:text-primary">Xu hướng</a>
          <a href="/comics" className="transition hover:text-primary">Thể loại</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden rounded-lg border-2 border-gray-200 bg-neutral px-4 py-2 text-sm text-gray-600 md:block">
            Tìm kiếm...
          </div>
          <a
            href="/login"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-secondary"
          >
            Đăng nhập
          </a>
        </div>
      </div>
    </header>
  );
}
