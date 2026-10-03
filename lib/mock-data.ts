export type Chapter = {
  id: string;
  title: string;
  date: string;
  comicTitle: string;
  pages: string[];
};

export type Comic = {
  id: string;
  slug: string;
  title: string;
  author: string;
  status: string;
  views: string;
  rating: number;
  description: string;
  cover: string;
  tags: string[];
  chapters: Chapter[];
};

export const categories = [
  'Action',
  'Adventure',
  'Fantasy',
  'Romance',
  'School Life',
  'Sci-Fi',
  'Comedy',
  'Horror',
  'Drama',
  'Sports',
];

const imageBase = 'https://images.unsplash.com';

const chapterCollection: Chapter[] = [
  {
    id: 'chapter-1',
    title: 'Chapter 1: First Steps',
    date: '2 days ago',
    comicTitle: 'Shadow Blade',
    pages: [
      `${imageBase}/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80`,
      `${imageBase}/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80`,
      `${imageBase}/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80`,
    ],
  },
  {
    id: 'chapter-2',
    title: 'Chapter 2: The Hidden Path',
    date: '5 days ago',
    comicTitle: 'Shadow Blade',
    pages: [
      `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80`,
      `${imageBase}/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80`,
      `${imageBase}/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80`,
    ],
  },
  {
    id: 'chapter-3',
    title: 'Chapter 3: The Arcane Heal',
    date: '1 week ago',
    comicTitle: 'Celestial Bloom',
    pages: [
      `${imageBase}/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80`,
      `${imageBase}/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80`,
      `${imageBase}/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80`,
    ],
  },
  {
    id: 'chapter-4',
    title: 'Chapter 4: Echoes of the City',
    date: '2 weeks ago',
    comicTitle: 'Night Signal',
    pages: [
      `${imageBase}/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80`,
      `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80`,
      `${imageBase}/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80`,
    ],
  },
  {
    id: 'chapter-5',
    title: 'Chapter 5: The Rising Sky',
    date: '3 weeks ago',
    comicTitle: 'Starlight Academy',
    pages: [
      `${imageBase}/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80`,
      `${imageBase}/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80`,
      `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80`,
    ],
  },
  {
    id: 'chapter-6',
    title: 'Chapter 6: Red Horizon',
    date: '1 month ago',
    comicTitle: 'Crimson Tide',
    pages: [
      `${imageBase}/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80`,
      `${imageBase}/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80`,
      `${imageBase}/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80`,
    ],
  },
];

const chapterMap: Record<string, Chapter[]> = {
  'shadow-blade': [chapterCollection[0], chapterCollection[1]],
  'celestial-bloom': [chapterCollection[2]],
  'night-signal': [chapterCollection[3]],
  'starlight-academy': [chapterCollection[4]],
  'crimson-tide': [chapterCollection[5]],
  'iron-reign': [chapterCollection[0]],
};

export const comics: Comic[] = [
  {
    id: 'comic-1',
    slug: 'shadow-blade',
    title: 'Shadow Blade',
    author: 'Aiko Tanaka',
    status: 'Ongoing',
    views: '245K views',
    rating: 4.9,
    description: 'A lone swordsman awakens in a city of broken prophecy and must protect the last light before dawn.',
    cover: `${imageBase}/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80`,
    tags: ['Action', 'Fantasy', 'Adventure'],
    chapters: chapterMap['shadow-blade'],
  },
  {
    id: 'comic-2',
    slug: 'celestial-bloom',
    title: 'Celestial Bloom',
    author: 'Min Seo',
    status: 'Completed',
    views: '198K views',
    rating: 4.8,
    description: 'A healer becomes the center of a celestial war when her flowers begin to bloom in forbidden skies.',
    cover: `${imageBase}/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80`,
    tags: ['Romance', 'Drama', 'Fantasy'],
    chapters: chapterMap['celestial-bloom'],
  },
  {
    id: 'comic-3',
    slug: 'night-signal',
    title: 'Night Signal',
    author: 'Luca Ortiz',
    status: 'Ongoing',
    views: '162K views',
    rating: 4.7,
    description: 'In a rain-soaked metropolis, two strangers decode a hidden broadcast that could save humanity.',
    cover: `${imageBase}/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80`,
    tags: ['Sci-Fi', 'Thriller', 'Mystery'],
    chapters: chapterMap['night-signal'],
  },
  {
    id: 'comic-4',
    slug: 'starlight-academy',
    title: 'Starlight Academy',
    author: 'Rina Matsui',
    status: 'Ongoing',
    views: '176K views',
    rating: 4.6,
    description: 'A magical academy with rival families and hidden powers creates the perfect place for impossible friendships.',
    cover: `${imageBase}/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80`,
    tags: ['School Life', 'Fantasy', 'Comedy'],
    chapters: chapterMap['starlight-academy'],
  },
  {
    id: 'comic-5',
    slug: 'crimson-tide',
    title: 'Crimson Tide',
    author: 'Haruto Sato',
    status: 'New',
    views: '99K views',
    rating: 4.5,
    description: 'A pirate with a debt and a compass must open the deep sea gates before the world enters the dark tide.',
    cover: `${imageBase}/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80`,
    tags: ['Adventure', 'Action', 'Fantasy'],
    chapters: chapterMap['crimson-tide'],
  },
  {
    id: 'comic-6',
    slug: 'iron-reign',
    title: 'Iron Reign',
    author: 'Nadia Brooks',
    status: 'Ongoing',
    views: '210K views',
    rating: 4.8,
    description: 'A fallen champion rebuilds an empire from the wreckage of the last war, one weapon at a time.',
    cover: `${imageBase}/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80`,
    tags: ['Action', 'Drama', 'Adventure'],
    chapters: chapterMap['iron-reign'],
  },
];

export const featuredComics = [comics[0], comics[2], comics[4]];
export const trendingComics = [comics[0], comics[5], comics[2], comics[1]];
export const newestComics = [comics[4], comics[3], comics[1], comics[0]];
export const chapters = chapterCollection;
