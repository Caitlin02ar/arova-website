import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';

export default async function LocaleLayout({
    children,
    params
    }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
    }) {
    const { locale } = await params; 

    if (!routing.locales.includes(locale as any)) notFound();

    const messages = (await import(`../../messages/${locale}.json`)).default;

    return (
        <NextIntlClientProvider messages={messages}>
        <Navbar />
        {children}
        </NextIntlClientProvider>
    );
}