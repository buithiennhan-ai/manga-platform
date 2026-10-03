import Link from 'next/link';
import { notFound } from 'next/navigation';
import { comics } from '@/lib/mock-data';

export default function ComicDetailPage({ params }: { params: { slug: string } }) {
  const comic = comics.find((item) => item.slug === params.slug);

  if (!comic) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
        <Link href="/comics" className="mb-6 inline-block text-sm text-orange-300 hover:text-orange-200">
          ← Back to library
        </Link>

        <div className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/80 p-6 md:grid-cols-[300px_1fr] md:p-8">
          <img src={comic.cover} alt={comic.title} className="h-[440px] w-full rounded-2xl object-cover" />

          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              {comic.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-200">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-black">{comic.title}</h1>

            <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate-300">
              <span>Author: {comic.author}</span>
              <span>Status: {comic.status}</span>
              <span>Views: {comic.views}</span>
              <span>Rating: ⭐ {comic.rating}</span>
            </div>

            <p className="mt-6 max-w-2xl text-slate-300">{comic.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`/chapter/${comic.chapters[0].id}`}
                className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400"
              >
                Read first chapter
              </a>
              <button className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5">
                Follow series
              </button>
            </div>

            <div className="mt-10">
              <h2 className="mb-4 text-xl font-bold">Chapter list</h2>
              <div className="space-y-3">
                {comic.chapters.map((chapter) => (
                  <Link
                    key={chapter.id}
                    href={`/chapter/${chapter.id}`}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm text-slate-200 hover:border-orange-500/40 hover:bg-slate-800"
                  >
                    <span>{chapter.title}</span>
                    <span>{chapter.date}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
