export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-light px-4 py-8">
      <div className="w-full max-w-md space-y-6 rounded-xl border-2 border-light bg-white p-8 shadow-md">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-primary">CHÀO MỪNG</p>
          <h1 className="text-3xl font-bold text-dark">Đăng nhập</h1>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-dark">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-dark outline-none transition focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-dark">Mật khẩu</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-dark outline-none transition focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:bg-secondary"
          >
            Đăng nhập
          </button>
        </form>

        <div className="border-t border-gray-200 pt-4 text-center text-sm text-gray-600">
          Chưa có tài khoản? <a href="/" className="font-semibold text-primary hover:text-secondary">Tạo tài khoản</a>
        </div>
      </div>
    </main>
  );
}
