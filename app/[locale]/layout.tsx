import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/lib/i18n';
import Navbar from '@/components/Navbar';

export default async function LocaleLayout({
    children,
    params
    }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
    }) {
    const { locale } = await params; 

    if (!locales.includes(locale)) notFound();

    const messages = (await import(`../../messages/${locale}.json`)).default;

    return (
        <NextIntlClientProvider messages={messages}>
        <Navbar />
        {children}
        </NextIntlClientProvider>
    );
}