'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div
                className={`fixed inset-0 z-[9999] transition-opacity duration-500 bg-[var(--color-cream-1)] ${
                    fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
            >
                {/* Desktop */}
                <video
                    src="/video/Loading Page - Transparent.webm"
                    autoPlay
                    muted
                    playsInline
                    className="hidden md:block absolute inset-0 w-full h-full object-cover"
                />
                {/* Mobile */}
                <video
                    src="/video/Loading Page - Transparent.webm"
                    autoPlay
                    muted
                    playsInline
                    className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ minWidth: '120vw', minHeight: '120vw' }}
                />
            </div>
        );
    }

    return <>{children}</>;
}