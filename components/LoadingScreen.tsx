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
            setFadeOut(true); // mulai fade
            setTimeout(() => {
                setLoading(false); // baru hilang
            }, 500); // sesuai duration CSS
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div
                className={`fixed inset-0 z-[9999] transition-opacity duration-500 ${
                    fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
            >
                <video
                    src="/video/Loading Page - Transparent.webm"
                    autoPlay
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        );
    }

    return <>{children}</>;
}