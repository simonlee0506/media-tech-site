import { useTranslations } from 'next-intl';
import { Mail, MessageSquare, FileText, Github } from 'lucide-react';

export default function SupportPage() {
  const t = useTranslations('common');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary-dark via-primary to-secondary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">{t('support')}</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Get help with our products or ask us anything.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Email Us</h3>
              </div>
              <p className="text-neutral-600 mb-4">
                Send us an email and we'll get back to you within 24-48 hours.
              </p>
              <a
                href="mailto:hello@media-tech.ca"
                className="text-primary hover:underline font-medium"
              >
                hello@media-tech.ca
              </a>
            </div>

            {/* GitHub */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">GitHub</h3>
              </div>
              <p className="text-neutral-600 mb-4">
                Report bugs, request features, or contribute to our projects.
              </p>
              <a
                href="https://github.com/simonlee0506"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                github.com/simonlee0506
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <details className="group border border-neutral-200 rounded-lg">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors">
                <h3 className="font-semibold">How do I download your apps?</h3>
                <span className="transform group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-6 pt-0">
                <p className="text-neutral-600">
                  Visit each product's website to download the app. Collectra, BAM, and Rescontra
                  have direct download links or App Store links. Fetchera is available on the App Store.
                </p>
              </div>
            </details>

            <details className="group border border-neutral-200 rounded-lg">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors">
                <h3 className="font-semibold">Do you offer refunds?</h3>
                <span className="transform group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-6 pt-0">
                <p className="text-neutral-600">
                  We offer a free trial for Rescontra and BAM. Collectra and Fetchera have different
                  policies - please check each product's website for specific refund information.
                </p>
              </div>
            </details>

            <details className="group border border-neutral-200 rounded-lg">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors">
                <h3 className="font-semibold">Is my data private?</h3>
                <span className="transform group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-6 pt-0">
                <p className="text-neutral-600">
                  Yes! Our products are designed with privacy in mind. Most of your data is stored
                  locally on your device, and we don't collect unnecessary information.
                </p>
              </div>
            </details>

            <details className="group border border-neutral-200 rounded-lg">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors">
                <h3 className="font-semibold">Can I sync data between devices?</h3>
                <span className="transform group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-6 pt-0">
                <p className="text-neutral-600">
                  Currently, our products prioritize local storage. Check each product's documentation
                  for information about export/import capabilities that can help you transfer data.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Product Support */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Product-Specific Support</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://collectra.media-tech.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-collectra"
            >
              <h3 className="font-bold text-lg mb-2">Collectra</h3>
              <p className="text-neutral-600 text-sm">Collection manager documentation</p>
            </a>

            <a
              href="https://fetchera.media-tech.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-fetchera"
            >
              <h3 className="font-bold text-lg mb-2">Fetchera</h3>
              <p className="text-neutral-600 text-sm">Barcode scanner documentation</p>
            </a>

            <a
              href="https://resontra.media-tech.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-resontra"
            >
              <h3 className="font-bold text-lg mb-2">Rescontra</h3>
              <p className="text-neutral-600 text-sm">Ritual journal documentation</p>
            </a>

            <a
              href="https://bam.media-tech.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-bam"
            >
              <h3 className="font-bold text-lg mb-2">BAM Literature Assistant</h3>
              <p className="text-neutral-600 text-sm">Literature research documentation</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}