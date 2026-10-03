export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.2em] text-orange-300">Welcome back</p>
        <h1 className="mt-2 text-3xl font-black">Login</h1>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-orange-500"
            />
          </div>

          <button type="submit" className="w-full rounded-full bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-400">
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-400">
          Don&apos;t have an account? <a href="/" className="text-orange-300">Create one</a>
        </div>
      </div>
    </main>
  );
}
