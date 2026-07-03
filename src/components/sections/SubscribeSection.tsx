'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function SubscribeSection() {
  const t = useTranslations('home');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-16 h-16 mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl font-bold mb-4">{t('subscribeTitle')}</h2>
        <p className="text-lg opacity-90 mb-8">{t('subscribeDescription')}</p>

        {status === 'success' ? (
          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 flex items-center justify-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span className="text-lg">{t('subscribeSuccess')}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t('subscribeEmail')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button
              type="submit"
              size="lg"
              disabled={status === 'loading'}
              className="bg-white text-primary hover:bg-neutral-50"
            >
              {status === 'loading' ? '...' : t('subscribeButton')}
            </Button>
          </form>
        )}

        {status === 'error' && (
          <div className="mt-4 flex items-center justify-center gap-2 text-red-300">
            <AlertCircle className="w-5 h-5" />
            <span>{t('subscribeError')}</span>
          </div>
        )}
      </div>
    </section>
  );
}