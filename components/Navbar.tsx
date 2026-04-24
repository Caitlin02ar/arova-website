'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const t = useTranslations('Navbar');
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight - 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    if (!mounted) return null;

    const locale = pathname.split('/')[1] || 'en';
    const pathWithoutLocale = pathname.replace(/^\/(en|cn)/, '');
    const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
    const isSolid = !isHome || scrolled || menuOpen;
    const isLight = !isSolid;

    const navItems = [
        { key: 'home', path: '' },
        { key: 'product', path: '/product' },
        { key: 'quality', path: '/quality' },
        { key: 'client', path: '/client' },
        { key: 'contact', path: '/contact' },
    ];

    return (
        <>
        <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between
            transition-all duration-500 ease-in-out ${
                isSolid
                    ? 'bg-[var(--color-cream-1)] text-[var(--color-dark-green)] shadow-sm'
                    : 'bg-transparent text-white'
            }`}>

            {/* Logo */}
            <div className="flex-shrink-0">
                <img
                    src={isLight ? '/logo/Logo Arova - White.png' : '/logo/Logo Arova - Dark Green.png'}
                    alt="Arova Logo"
                    className="h-8 md:h-10 w-auto transition-all duration-500 ease-in-out"
                />
            </div>

            {/* Desktop nav - center */}
            <div className="hidden md:flex items-center gap-10">
                {navItems.map((item) => {
                    const href = `/${locale}${item.path}`;
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={item.key}
                            href={href}
                            className={`text-md transition font-heading font-light ${
                            isActive ? (locale === 'cn' ? 'font-semibold' : 'font-medium') : 'opacity-80 hover:opacity-100'
                            }`}>
                            {t(item.key)}
                        </Link>
                    );
                })}
            </div>

            {/* Desktop language - right */}
            <div className="hidden md:flex gap-2 text-md">
                <Link href={`/en${pathWithoutLocale}`}>English</Link>
                <span>|</span>
                <Link href={`/cn${pathWithoutLocale}`}>Mandarin</Link>
            </div>

            {/* Mobile right side */}
            <div className="md:hidden flex items-center gap-3">
                <div className={`flex gap-1.5 text-xs ${isLight ? 'text-white' : 'text-[var(--color-dark-green)]'}`}>
                    <Link href={`/en${pathWithoutLocale}`}>English</Link>
                    <span>|</span>
                    <Link href={`/cn${pathWithoutLocale}`}>Mandarin</Link>
                </div>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`text-xl focus:outline-none transition-colors duration-300 ${isLight ? 'text-white' : 'text-[var(--color-dark-green)]'}`}
                    aria-label="Toggle menu">
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>
        </nav>

        {/* Mobile overlay */}
        <AnimatePresence>
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="fixed inset-0 z-40 bg-[var(--color-cream-1)] flex flex-col justify-between px-8 pt-24 pb-10 md:hidden"
                >
                    <div className="flex flex-col">
                        {navItems.map((item, index) => {
                            const href = `/${locale}${item.path}`;
                            const isActive = pathname === href;
                            return (
                                <motion.div
                                    key={item.key}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        ease: [0.25, 1, 0.5, 1],
                                        delay: 0.1 + index * 0.07,
                                    }}>
                                    <Link
                                        href={href}
                                        onClick={() => setMenuOpen(false)}
                                        className={`flex items-center justify-between py-5 border-b border-[var(--color-dark-green)] font-heading text-xl ${
                                            isActive ? (locale === 'cn' ? 'font-semibold' : 'font-medium') : 'font-light'
                                        }`}>
                                        <span>{t(item.key)}</span>
                                        <span className="text-lg">→</span>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                    <p className="text-xs text-[var(--color-dark-green)] opacity-60 font-sans">
                        © PT. Langkah Menara Utama
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}