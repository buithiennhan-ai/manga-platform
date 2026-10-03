# Hướng dẫn sử dụng và cài đặt

## Cách cài đặt và chạy trên máy tính của bạn

### 1. Clone repository
```bash
git clone https://github.com/buithiennhan-ai/manga-platform.git
cd manga-platform
```

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Cấu hình biến môi trường
Tạo file `.env` từ `.env.example`:
```bash
cp .env.example .env
```

Sau đó cập nhật `DATABASE_URL` với cơ sở dữ liệu PostgreSQL của bạn.

**Nếu bạn chưa có PostgreSQL:**
- Download từ https://www.postgresql.org/download/
- Hoặc sử dụng dịch vụ cloud miễn phí:
  - Supabase (https://supabase.com) - Recommended
  - Railway (https://railway.app)
  - Vercel Postgres (https://vercel.com/storage/postgres)

### 4. Khởi tạo cơ sở dữ liệu
```bash
# Tạo schema
npx prisma db push

# Tạo dữ liệu mẫu (optional)
npx prisma db seed
```

### 5. Chạy server development
```bash
npm run dev
```

Truy cập: http://localhost:3000

---

## Cách thêm truyện tranh của bạn vào web

### A. Chỉnh sửa dữ liệu mock (nhanh nhất)

**File cần chỉnh:** `lib/mock-data.ts`

1. Tìm và thay thế dữ liệu truyện mẫu:
```typescript
export const comics: Comic[] = [
  {
    id: 'comic-1',
    slug: 'ten-truyen', // URL-friendly slug
    title: 'Tên truyện của bạn',
    author: 'Tác giả',
    status: 'Ongoing', // hoặc 'Completed'
    views: '100K views',
    rating: 4.8,
    description: 'Mô tả truyện...',
    cover: 'https://link-anh-bia.jpg', // URL ảnh bìa
    tags: ['Action', 'Fantasy'], // Thể loại
    chapters: [
      {
        id: 'chapter-1',
        title: 'Chapter 1: Tên chương',
        date: 'Today',
        comicTitle: 'Tên truyện',
        pages: [
          'https://link-trang-1.jpg',
          'https://link-trang-2.jpg',
          'https://link-trang-3.jpg',
        ],
      },
    ],
  },
];
```

### B. Thêm vào Database (cho dự án lớn)

**Bước 1:** Upload ảnh lên cloud (Cloudinary, Firebase, v.v)

**Bước 2:** Chỉnh file `prisma/seed.js` để thêm dữ liệu:
```javascript
const demoComic = await prisma.comic.create({
  data: {
    slug: 'ten-truyen',
    title: 'Tên truyện',
    author: 'Tác giả',
    status: 'Ongoing',
    views: 100000,
    rating: 4.8,
    description: 'Mô tả truyện',
    coverUrl: 'https://link-ảnh-bia.jpg',
  },
});
```

**Bước 3:** Chạy seed:
```bash
npx prisma db seed
```

---

## Cách upload ảnh truyện lên cloud

### Option 1: Cloudinary (Recommended)
1. Đăng ký tại https://cloudinary.com (free)
2. Upload từng chương/trang ảnh
3. Copy URL ảnh
4. Paste vào `mock-data.ts`

### Option 2: Imgur
1. Đăng ký tại https://imgur.com
2. Upload ảnh
3. Copy link ảnh

### Option 3: GitHub
1. Tạo folder `public/images` trong project
2. Push ảnh lên GitHub
3. Sử dụng URL raw: `https://raw.githubusercontent.com/username/repo/main/public/images/chapter-1/page-1.jpg`

---

## Cách deploy lên Vercel (miễn phí)

### 1. Đẩy code lên GitHub
```bash
git add .
git commit -m "Add manga content"
git push origin main
```

### 2. Deploy trên Vercel
1. Vào https://vercel.com
2. Click "New Project"
3. Chọn repository của bạn
4. Thêm biến môi trường:
   - `DATABASE_URL`: PostgreSQL connection string
5. Click "Deploy"

Xong! Trang web của bạn sẽ tự động update khi bạn push code.

---

## Cấu trúc thư mục

```
manga-platform/
├── app/
│   ├── page.tsx           # Trang chủ
│   ├── comics/
│   │   ├── page.tsx       # Danh sách truyện
│   │   └── [slug]/
│   │       └── page.tsx   # Chi tiết truyện
│   ├── chapter/
│   │   └── [id]/
│   │       └── page.tsx   # Trang đọc truyện
│   └── layout.tsx         # Layout chính
├── components/            # Các component React
├── lib/
│   └── mock-data.ts       # 👈 File dữ liệu truyện
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── seed.js            # Dữ liệu ban đầu
└── public/                # Ảnh tĩnh
```

---

## Câu hỏi thường gặp

**Q: Làm sao để ảnh tải nhanh hơn?**
A: Sử dụng Cloudinary hoặc Imgix để nén ảnh tự động.

**Q: Có thể thêm authentication (đăng nhập)?**
A: Có! Sử dụng NextAuth.js hoặc Supabase Auth.

**Q: Làm sao để tăng tốc độ trang?**
A: Dùng Image Optimization của Next.js và CDN cho ảnh.

---

## Liên hệ hỗ trợ
Nếu có vấn đề, hãy tạo Issue trên GitHub!
