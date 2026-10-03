import Link from 'next/link';
import { chapters } from '@/lib/mock-data';

export default function ChapterPage({ params }: { params: { id: string } }) {
  const chapter = chapters.find((item) => item.id === params.id);

  if (!chapter) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-black">Chapter not found</h1>
          <Link href="/comics" className="mt-4 inline-block rounded-full bg-orange-500 px-5 py-3 font-semibold text-white">
            Return to library
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900 p-4">
          <div>
            <p className="text-sm text-slate-400">{chapter.title}</p>
            <h1 className="text-2xl font-black">{chapter.comicTitle}</h1>
          </div>
          <Link href="/comics" className="rounded-full bg-white/5 px-4 py-2 text-sm hover:bg-white/10">
            Back
          </Link>
        </div>

        <div className="space-y-4">
          {chapter.pages.map((page, index) => (
            <img key={index} src={page} alt={`${chapter.title} page ${index + 1}`} className="w-full rounded-2xl border border-white/10 bg-slate-900" />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900 p-4">
          <button className="rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/5">
            Previous chapter
          </button>
          <button className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-400">
            Next chapter
          </button>
        </div>
      </div>
    </main>
  );
}
