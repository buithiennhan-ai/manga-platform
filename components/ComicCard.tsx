import type { Comic } from '@/lib/mock-data';

export default function ComicCard({ comic }: { comic: Comic }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 transition hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-soft">
      <a href={`/comics/${comic.slug}`}>
        <img src={comic.cover} alt={comic.title} className="h-72 w-full object-cover transition duration-300 group-hover:scale-105" />
      </a>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{comic.status}</span>
          <span>⭐ {comic.rating}</span>
        </div>

        <a href={`/comics/${comic.slug}`} className="block text-xl font-bold text-white hover:text-orange-300">
          {comic.title}
        </a>

        <p className="text-sm text-slate-400">{comic.author}</p>

        <div className="flex flex-wrap gap-2">
          {comic.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wide text-slate-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-slate-300">
          <span>{comic.views}</span>
          <span>{comic.chapters.length} chapters</span>
        </div>
      </div>
    </article>
  );
}
