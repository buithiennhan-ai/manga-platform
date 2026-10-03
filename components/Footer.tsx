export default function Footer() {
  return (
    <footer className="border-t-2 border-gray-200 bg-neutral">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-2">
            <div className="text-xl font-bold text-dark">MangaVerse</div>
            <p className="text-sm text-gray-600">Đọc những câu chuyện bạn yêu thích, mọi lúc, mọi nơi.</p>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <h3 className="font-bold text-dark">Liên kết</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="/comics" className="transition hover:text-primary">Truyện tranh</a></li>
              <li><a href="/" className="transition hover:text-primary">Về chúng tôi</a></li>
              <li><a href="/login" className="transition hover:text-primary">Đăng nhập</a></li>
            </ul>
          </div>

          {/* Info */}
          <div className="space-y-2">
            <h3 className="font-bold text-dark">Liên hệ</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Email: support@mangaverse.com</li>
              <li>© 2024 MangaVerse. All rights reserved.</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
