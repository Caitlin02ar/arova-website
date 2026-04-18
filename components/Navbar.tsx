'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Navbar() {
    const t = useTranslations('Navbar');
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight - 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!mounted) return null;

    const locale = pathname.split('/')[1] || 'en';

    const pathWithoutLocale = pathname.replace(/^\/(en|cn)/, '');

    const isHome = pathname === '/en' || pathname === '/cn';

    const navItems = [
    { key: 'home', path: '' },
    { key: 'product', path: '/product' },
    { key: 'quality', path: '/quality' },
    { key: 'client', path: '/client' },
    { key: 'contact', path: '/contact' },
    ];

    const isSolid = !isHome || scrolled;

    return (
        <nav
        className={`fixed top-0 left-0 w-full z-50 px-8 py-4 grid grid-cols-3 items-center
            transition-all duration-500 ease-in-out ${
            isSolid
                    ? 'bg-[var(--color-cream-1)] text-[var(--color-dark-green)] shadow-sm'
                    : 'bg-transparent text-white'
        }`}>
        <div className="justify-self-start">
                <img
                    src={
                        isSolid
                            ? '/logo/Logo Arova - Dark Green.png'
                            : '/logo/Logo Arova - White.png'
                    }
                    alt="Arova Logo"
                    className="h-10 w-auto transition-all duration-500 ease-in-out"
                />
            </div>
        <div className="justify-self-center flex items-center align-items gap-8">
            <div className="flex gap-10">
                {navItems.map((item) => {
                    const href = `/${locale}${item.path}`;
                    const isActive = pathname === href;
                    return (
                    <Link
                        key={item.key}
                        href={href}
                        className={`text-md transition font-heading font-light ${
                        isActive
                            ? 'font-medium '
                            : 'opacity-80 hover:opacity-100'
                        }`}>
                        {t(item.key)}
                    </Link>
                    );
                })}
            </div>
            </div>
            <div className="justify-self-end flex gap-2 text-md">
                    <Link href={`/en${pathWithoutLocale}`}>English</Link>
                    <span>|</span>
                    <Link href={`/cn${pathWithoutLocale}`}>Mandarin</Link>
                </div>
        </nav>
    );
}