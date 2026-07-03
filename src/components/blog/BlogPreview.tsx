import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Calendar, Clock } from 'lucide-react';

export default function BlogPreview() {
  const t = useTranslations('home');
  const locale = useLocale();

  const featuredPosts = [
    {
      id: 1,
      title: 'The Art of Vinyl Record Collecting',
      excerpt: 'Discover the joy of vinyl record collecting and learn essential tips for building your collection.',
      date: '2024-01-15',
      readTime: '8 min',
      slug: 'vinyl-record-collecting'
    },
    {
      id: 2,
      title: 'Camera Collecting for Beginners',
      excerpt: 'A comprehensive guide to starting your vintage camera collection.',
      date: '2024-01-10',
      readTime: '10 min',
      slug: 'camera-collecting-beginners'
    },
    {
      id: 3,
      title: 'The Psychology of Collecting',
      excerpt: 'Understanding why we collect and the emotional benefits of curating meaningful collections.',
      date: '2024-01-05',
      readTime: '6 min',
      slug: 'psychology-of-collecting'
    }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">{t('blogTitle')}</h2>
            <p className="text-neutral-600">Insights on collecting, research, and knowledge</p>
          </div>
          <Link href={`/${locale}/blog`}>
            <button className="text-primary hover:text-primary-dark font-medium flex items-center gap-2">
              {t('blogCTA')}
              <span>→</span>
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-6xl">📚</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-neutral-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}