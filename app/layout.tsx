import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MangaVerse - Đọc Truyện Tranh Yêu Thích',
  description: 'Nền tảng đọc truyện tranh hiện đại với giao diện tối giản',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="bg-white text-text">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
