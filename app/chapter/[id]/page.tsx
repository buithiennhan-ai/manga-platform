import Link from 'next/link';
import { chapters } from '@/lib/mock-data';

export default function ChapterPage({ params }: { params: { id: string } }) {
  const chapter = chapters.find((item) => item.id === params.id);

  if (!chapter) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-dark">Không tìm thấy chương</h1>
          <Link href="/comics" className="mt-4 inline-block rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-secondary">
            Quay lại thư viện
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-neutral px-4 py-4">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-primary">{chapter.comicTitle}</p>
            <h1 className="text-2xl font-bold text-dark">{chapter.title}</h1>
          </div>
          <Link href="/comics" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-secondary">
            Về thư viện
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="space-y-4">
          {chapter.pages.map((page, index) => (
            <img
              key={index}
              src={page}
              alt={`${chapter.title} trang ${index + 1}`}
              className="w-full rounded-lg border-2 border-gray-200 object-cover"
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between rounded-lg border-2 border-gray-200 bg-neutral p-4">
          <button className="rounded-lg border-2 border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-light">
            ← Chương trước
          </button>
          <span className="text-sm font-semibold text-gray-600">Chương {chapter.id}</span>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-secondary">
            Chương sau →
          </button>
        </div>
      </div>
    </main>
  );
}
