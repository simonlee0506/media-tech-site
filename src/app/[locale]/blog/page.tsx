import { useTranslations } from 'next-intl';

export default function BlogPage() {
  const t = useTranslations('blog');

  const posts = [
    {
      id: 1,
      title: 'The Art of Vinyl Record Collecting',
      excerpt: 'Discover the joy of vinyl record collecting and learn essential tips for building your collection.',
      date: '2024-01-15',
      readTime: '8 min',
      tags: ['vinyl', 'collecting', 'music'],
      slug: 'vinyl-record-collecting',
      thumbnail: '/blog/posts/vinyl-thumbnail.jpg'
    },
    {
      id: 2,
      title: 'Camera Collecting for Beginners',
      excerpt: 'A comprehensive guide to starting your vintage camera collection.',
      date: '2024-01-10',
      readTime: '10 min',
      tags: ['camera', 'collecting', 'vintage'],
      slug: 'camera-collecting-beginners',
      thumbnail: '/blog/posts/camera-thumbnail.jpg'
    },
    {
      id: 3,
      title: 'The Psychology of Collecting',
      excerpt: 'Understanding why we collect and the emotional benefits of curating meaningful collections.',
      date: '2024-01-05',
      readTime: '6 min',
      tags: ['psychology', 'collecting', 'knowledge'],
      slug: 'psychology-of-collecting',
      thumbnail: '/blog/posts/psychology-thumbnail.jpg'
    },
    {
      id: 4,
      title: 'Rare Book Hunting: A Collector\'s Guide',
      excerpt: 'Tips and strategies for finding rare and valuable books for your collection.',
      date: '2023-12-28',
      readTime: '12 min',
      tags: ['books', 'collecting', 'rare'],
      slug: 'rare-book-hunting',
      thumbnail: '/blog/posts/books-thumbnail.jpg'
    },
    {
      id: 5,
      title: 'Preserving Your Collection',
      excerpt: 'Best practices for maintaining and preserving your valuable collections.',
      date: '2023-12-20',
      readTime: '9 min',
      tags: ['preservation', 'maintenance', 'collecting'],
      slug: 'preserving-collection',
      thumbnail: '/blog/posts/preservation-thumbnail.jpg'
    },
    {
      id: 6,
      title: 'The Digital Age of Collecting',
      excerpt: 'How technology is transforming the way we discover and manage collections.',
      date: '2023-12-15',
      readTime: '7 min',
      tags: ['digital', 'technology', 'collecting'],
      slug: 'digital-age-collecting',
      thumbnail: '/blog/posts/digital-thumbnail.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-neutral-600">{t('subtitle')}</p>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-20 text-neutral-500">
            <p>{t('noPosts')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer border border-neutral-200"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="text-6xl relative z-10">
                    {post.tags[0] === 'vinyl' && '🎵'}
                    {post.tags[0] === 'camera' && '📷'}
                    {post.tags[0] === 'psychology' && '🧠'}
                    {post.tags[0] === 'books' && '📚'}
                    {post.tags[0] === 'preservation' && '💎'}
                    {post.tags[0] === 'digital' && '💻'}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-neutral-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <time>{new Date(post.date).toLocaleDateString()}</time>
                    <div className="flex items-center gap-1">
                      <span>⏱</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}