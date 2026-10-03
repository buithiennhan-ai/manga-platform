import type { Comic } from '@/lib/mock-data';

export default function ComicCard({ comic }: { comic: Comic }) {
  return (
    <article className="overflow-hidden rounded-xl border-2 border-gray-200 bg-white transition hover:border-primary hover:shadow-md">
      <a href={`/comics/${comic.slug}`} className="block overflow-hidden">
        <img
          src={comic.cover}
          alt={comic.title}
          className="h-64 w-full object-cover transition duration-300 hover:scale-105"
        />
      </a>
      
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-primary">{comic.status}</span>
          <span className="text-xs font-semibold text-yellow-500">⭐ {comic.rating}</span>
        </div>

        <a href={`/comics/${comic.slug}`} className="block">
          <h3 className="text-base font-bold text-dark hover:text-primary">{comic.title}</h3>
        </a>

        <p className="text-sm text-gray-600">{comic.author}</p>

        <div className="flex flex-wrap gap-1">
          {comic.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-light px-2 py-1 text-xs font-semibold text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-3 text-xs text-gray-600">
          <span>{comic.views}</span>
          <span>{comic.chapters.length} chương</span>
        </div>
      </div>
    </article>
  );
}
