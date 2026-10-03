import ComicCard from '@/components/ComicCard';
import { comics } from '@/lib/mock-data';

export default function ComicsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-gray-200 px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-primary">THƯ VIỆN</p>
              <h1 className="text-3xl font-bold text-dark">Tất cả truyện tranh</h1>
            </div>
            <div className="rounded-lg bg-light px-4 py-2 text-sm font-semibold text-primary">
              {comics.length} bộ truyện
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {comics.map((comic) => (
              <ComicCard key={comic.id} comic={comic} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
