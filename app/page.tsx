import SectionTitle from '@/components/SectionTitle';
import ComicCard from '@/components/ComicCard';
import { categories, featuredComics, trendingComics, newestComics } from '@/lib/mock-data';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-light to-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <div className="mb-2 inline-block rounded-full bg-light px-4 py-1 text-sm font-semibold text-primary">
                  Truyện mới hàng ngày
                </div>
                <h1 className="text-4xl font-bold text-dark md:text-5xl">
                  Khám phá thế giới truyện tranh
                </h1>
              </div>
              
              <p className="text-lg text-gray-600">
                Đọc hàng ngàn bộ truyện tranh yêu thích với giao diện tối giản, dễ sử dụng.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/comics"
                  className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-secondary"
                >
                  Khám phá ngay
                </a>
                <a
                  href="/login"
                  className="rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition hover:bg-light"
                >
                  Đăng nhập
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-6 pt-4">
                <div>
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-gray-600">Độc giả hoạt động</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Bộ truyện</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-gray-600">Cập nhật thường xuyên</div>
                </div>
              </div>
            </div>

            {/* Featured Comic Card */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm overflow-hidden rounded-xl border-2 border-light bg-white shadow-md">
                <img
                  src={featuredComics[0].cover}
                  alt={featuredComics[0].title}
                  className="h-80 w-full object-cover"
                />
                <div className="space-y-3 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">Nổi bật</span>
                    <span className="text-sm font-semibold text-yellow-500">⭐ {featuredComics[0].rating}</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark">{featuredComics[0].title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{featuredComics[0].description}</p>
                  <a
                    href={`/comics/${featuredComics[0].slug}`}
                    className="inline-block rounded-lg bg-light px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                  >
                    Đọc ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="border-t border-gray-200 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Danh mục" subtitle="Các thể loại phổ biến" />
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <a
                key={category}
                href="/comics"
                className="rounded-full border-2 border-primary bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:bg-light"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="border-t border-gray-200 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Đang xu hướng" subtitle="Được đọc nhiều nhất" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trendingComics.map((comic) => (
              <ComicCard key={comic.id} comic={comic} />
            ))}
          </div>
        </div>
      </section>

      {/* Newest Section */}
      <section className="border-t border-gray-200 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Chương mới" subtitle="Cập nhật gần đây" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {newestComics.map((comic) => (
              <ComicCard key={comic.id} comic={comic} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
