'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { CheckCircle, AlertCircle, Mail } from 'lucide-react';

export default function SubscribePage() {
  const t = useTranslations('blog');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [updates, setUpdates] = useState(true);
  const [blogPosts, setBlogPosts] = useState(true);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setName('');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Mail className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">{t('subscribeNewsletter')}</h1>
          <p className="text-lg text-neutral-600">{t('subscribeDescription')}</p>
        </div>

        {/* Form */}
        {status === 'success' ? (
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              Subscription Successful!
            </h2>
            <p className="text-green-700">
              You'll receive updates about our products and new blog posts.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-neutral-50 rounded-xl p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name (optional)
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Subscribe to:</label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={updates}
                      onChange={(e) => setUpdates(e.target.checked)}
                      className="w-5 h-5 rounded text-primary focus:ring-primary"
                    />
                    <span>Product updates and announcements</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={blogPosts}
                      onChange={(e) => setBlogPosts(e.target.checked)}
                      className="w-5 h-5 rounded text-primary focus:ring-primary"
                    />
                    <span>New blog posts and articles</span>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={status === 'loading' || (!updates && !blogPosts)}
                className="w-full"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </Button>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}
            </div>
          </form>
        )}

        {/* Info */}
        <div className="mt-8 text-center text-sm text-neutral-500">
          <p>
            We respect your privacy. You can unsubscribe at any time.
            <br />
            Your email will only be used to send you the content you've selected.
          </p>
        </div>
      </div>
    </div>
  );
}