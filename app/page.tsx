import SectionTitle from '@/components/SectionTitle';
import ComicCard from '@/components/ComicCard';
import { categories, featuredComics, trendingComics, newestComics } from '@/lib/mock-data';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-10 lg:px-8">
        <div className="grid gap-8 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="p-8 lg:p-12">
            <div className="mb-4 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-orange-300">
              Daily update
            </div>
            <h1 className="max-w-xl text-4xl font-black leading-tight text-white md:text-6xl">
              Read your favorite comics anytime, anywhere.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Discover trending manga, complete series, and fresh chapters from popular publishers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/comics" className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400">
                Explore comics
              </a>
              <a href="/login" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-white/40 hover:bg-white/5">
                My library
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
              <div>
                <div className="text-2xl font-bold text-white">18K+</div>
                <div>active readers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div>titles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div>chapters updated</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-slate-800 p-6">
            <div className="w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
              <img
                src={featuredComics[0].cover}
                alt={featuredComics[0].title}
                className="h-72 w-full object-cover"
              />
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Featured</span>
                  <span>⭐ {featuredComics[0].rating}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{featuredComics[0].title}</h3>
                <p className="text-sm text-slate-400">{featuredComics[0].description}</p>
                <a href={`/comics/${featuredComics[0].slug}`} className="inline-block rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
                  Read now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <SectionTitle title="Browse by category" subtitle="Popular genres" />
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((category) => (
            <a
              key={category}
              href="/comics"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-orange-500/50 hover:text-orange-300"
            >
              {category}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <SectionTitle title="Trending now" subtitle="Most read this week" />
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trendingComics.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <SectionTitle title="Fresh chapters" subtitle="Updated recently" />
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {newestComics.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
      </section>
    </main>
  );
}
