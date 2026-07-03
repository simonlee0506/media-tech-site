import { useTranslations } from 'next-intl';
import { Calendar, Clock, Share2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const t = useTranslations('blog');
  const locale = useLocale();

  // 模拟博客文章数据 - 在实际应用中应该从文件系统或数据库获取
  const posts: Record<string, any> = {
    'vinyl-record-collecting': {
      title: 'The Art of Vinyl Record Collecting',
      date: '2024-01-15',
      readTime: '8 min',
      author: 'Simon Lee',
      tags: ['vinyl', 'collecting', 'music'],
      content: `
# The Art of Vinyl Record Collecting

Vinyl records have experienced a remarkable resurgence in recent years, attracting both audiophiles and casual listeners alike. But what makes vinyl so special, and how can you start your own collection?

## Why Vinyl Matters

The analog warmth of vinyl offers something digital formats can't replicate. The physical act of putting a record on, dropping the needle, and watching it spin creates a ritualistic experience that deepens your connection to the music.

## Getting Started

When beginning your vinyl collection, focus on music you genuinely love rather than chasing rare finds. Start with:

1. **A quality turntable** - You don't need to break the bank, but avoid the cheapest options
2. **Basic maintenance kit** - A cleaning brush and some anti-static spray
3. **Good storage** - Keep records upright and away from direct sunlight

## Building Your Collection

There's no right way to build a collection. Some collectors focus on a specific genre or era, while others prefer to explore widely. The key is to collect music that brings you joy.

### Thrift Store Hunting

One of the most rewarding aspects of vinyl collecting is the thrill of discovery at thrift stores, garage sales, and flea markets. Remember:

- Check condition carefully for scratches and warps
- Look for original pressings, which often have better sound quality
- Don't be afraid of common finds - sometimes the best music isn't rare

## Preservation

Proper care extends the life of your records:

- Always handle by the edges
- Clean records before and after playing
- Store at room temperature away from humidity
- Use high-quality inner and outer sleeves

## The Community

Vinyl collecting isn't just about the records - it's about the community. Join local record clubs, attend record store day events, and connect with fellow collectors online.

## Conclusion

Starting a vinyl collection is a journey that combines music appreciation, historical research, and the thrill of the hunt. Take your time, trust your ears, and most importantly, enjoy the music.
      `
    },
    'camera-collecting-beginners': {
      title: 'Camera Collecting for Beginners',
      date: '2024-01-10',
      readTime: '10 min',
      author: 'Simon Lee',
      tags: ['camera', 'collecting', 'vintage'],
      content: `
# Camera Collecting for Beginners

Vintage cameras capture more than images - they preserve the artistry and engineering of photography's golden age. This guide will help you start your journey into the fascinating world of camera collecting.

## Understanding Vintage Cameras

Before diving in, familiarize yourself with different types of cameras:

- **35mm rangefinders** - Compact and precise, perfect for street photography
- **SLRs** - Versatile and widely available, great for learning
- **Medium format** - Professional-grade with exceptional image quality
- **Instant cameras** - Fun and nostalgic, Polaroid cameras are increasingly collectible

## Your First Purchase

Start with something simple and serviceable. A classic 35mm SLR like the Pentax K1000 or Canon AE-1 makes an excellent first camera - they're reliable, inexpensive, and still easy to find parts for.

### What to Look For

When examining a vintage camera:

1. **Test the shutter** - Does it fire at all speeds?
2. **Check the lens** - Look for fungus, scratches, or haze
3. **Inspect the body** - Rust or battery leaks can indicate poor storage
4. **Verify light meter** - If equipped, does it respond to light changes?

## Building Your Collection

As you gain experience, you might want to specialize. Popular collecting focuses include:

- **Japanese rangefinders** - Compact engineering marvels from the 1950s-70s
- **German cameras** - Leica, Zeiss Ikon, and other high-end optics
- **Soviet cameras** - Often affordable and surprisingly well-made
- **Instant cameras** - Polaroid and similar formats

## Maintenance and Storage

Proper care ensures your cameras remain functional:

- Keep cameras in a dry, temperature-controlled environment
- Use silica gel packets to prevent moisture damage
- Exercise shutters periodically to prevent oil from gumming up
- Have complex cameras professionally cleaned every few years

## The Learning Curve

Camera collecting is as much about learning as it is about acquiring. Research the history of different manufacturers, understand the evolution of photographic technology, and learn basic repair techniques.

## Resources

Join online communities, read vintage camera forums, and consider joining a local photography club. The knowledge you gain from fellow collectors is invaluable.

## Final Thoughts

Camera collecting connects you with the rich history of photography while preserving mechanical artistry for future generations. Start modestly, learn continuously, and most importantly, enjoy the process of discovery.
      `
    }
  };

  const post = posts[params.slug] || posts['vinyl-record-collecting'];

  return (
    <div className="min-h-screen bg-white pt-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm font-medium bg-neutral-100 text-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-neutral-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time>{new Date(post.date).toLocaleDateString()}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>By</span>
              <span>{post.author}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>').replace(/## /g, '<h2>').replace(/# /g, '<h1>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/- (.*)/g, '<li>$1</li>') }} />
        </div>

        {/* Share */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-neutral-600" />
              <span className="font-medium text-neutral-700">{t('share')}</span>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors text-sm">
                Twitter
              </button>
              <button className="px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors text-sm">
                Facebook
              </button>
              <button className="px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors text-sm">
                Copy Link
              </button>
            </div>
          </div>
        </div>

        {/* Subscribe */}
        <div className="mt-12 p-8 bg-primary/5 rounded-xl border-2 border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-2 text-primary">{t('subscribeNewsletter')}</h3>
          <p className="text-neutral-600 mb-4">{t('subscribeDescription')}</p>
          <Link href={`/${locale}/subscribe`}>
            <button className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors">
              Subscribe Now
            </button>
          </Link>
        </div>
      </article>
    </div>
  );
}