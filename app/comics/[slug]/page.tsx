import Link from 'next/link';
import { notFound } from 'next/navigation';
import { comics } from '@/lib/mock-data';

export default function ComicDetailPage({ params }: { params: { slug: string } }) {
  const comic = comics.find((item) => item.slug === params.slug);

  if (!comic) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Link href="/comics" className="mb-6 inline-block text-sm font-semibold text-primary hover:text-secondary">
          ← Quay lại thư viện
        </Link>

        <div className="grid gap-8 md:grid-cols-[280px_1fr]">
          {/* Cover Image */}
          <div>
            <img
              src={comic.cover}
              alt={comic.title}
              className="w-full rounded-xl border-2 border-light object-cover shadow-md"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {comic.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-light px-3 py-1 text-xs font-semibold text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title & Info */}
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-dark">{comic.title}</h1>
              <p className="text-lg text-gray-600">Tác giả: <span className="font-semibold text-dark">{comic.author}</span></p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 rounded-lg bg-light p-4">
              <div>
                <p className="text-xs font-semibold text-gray-600">Trạng thái</p>
                <p className="text-lg font-bold text-primary">{comic.status}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600">Lượt xem</p>
                <p className="text-lg font-bold text-primary">{comic.views}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600">Đánh giá</p>
                <p className="text-lg font-bold text-primary">⭐ {comic.rating}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-base leading-relaxed text-gray-700">{comic.description}</p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`/chapter/${comic.chapters[0].id}`}
                className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-secondary"
              >
                Đọc chương đầu
              </a>
              <button className="rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition hover:bg-light">
                ♥ Theo dõi
              </button>
            </div>
          </div>
        </div>

        {/* Chapters List */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="mb-6 text-2xl font-bold text-dark">Danh sách chương</h2>
          <div className="space-y-2">
            {comic.chapters.map((chapter) => (
              <Link
                key={chapter.id}
                href={`/chapter/${chapter.id}`}
                className="flex items-center justify-between rounded-lg border-2 border-gray-200 px-4 py-3 text-sm font-semibold text-dark transition hover:border-primary hover:bg-light"
              >
                <span>{chapter.title}</span>
                <span className="text-xs text-gray-600">{chapter.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
