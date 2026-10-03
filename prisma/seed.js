const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const categories = ['Action', 'Adventure', 'Fantasy', 'Romance', 'Sci-Fi'];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { name: category },
      update: {},
      create: {
        name: category,
        slug: category.toLowerCase().replace(/\s+/g, '-'),
      },
    });
  }

  const demoComic = await prisma.comic.upsert({
    where: { slug: 'shadow-blade' },
    update: {},
    create: {
      slug: 'shadow-blade',
      title: 'Shadow Blade',
      author: 'Aiko Tanaka',
      status: 'Ongoing',
      views: 245000,
      rating: 4.9,
      description: 'A lone swordsman awakens in a city of broken prophecy and must protect the last light before dawn.',
      coverUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
      categories: {
        connect: [{ slug: 'action' }, { slug: 'fantasy' }, { slug: 'adventure' }],
      },
    },
  });

  const chapter = await prisma.chapter.upsert({
    where: {
      id: 'shadow-blade-chapter-1',
    },
    update: {},
    create: {
      id: 'shadow-blade-chapter-1',
      number: 1,
      title: 'Chapter 1: First Steps',
      comicId: demoComic.id,
      pages: {
        create: [
          { imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80', order: 1 },
          { imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80', order: 2 },
        ],
      },
    },
  });

  console.log('Seed completed:', { demoComic, chapter });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
