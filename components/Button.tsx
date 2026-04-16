import Link from 'next/link';

type ButtonProps = {
    children: React.ReactNode;
    href?: string;
    variant?: 'dark' | 'light' | 'green';
    icon?: 'arrow' | 'download';
    };

    export default function Button({
    children,
    href = '#',
    variant = 'dark',
    icon = 'arrow',
    }: ButtonProps) {
    const styles = {
        dark: 'border-[var(--color-dark-green)] text-[var(--color-dark-green)] hover:bg-[var(--color-dark-green)] hover:text-white',
        light: 'border-white text-white hover:bg-white hover:text-black',
        green: 'border-[var(--color-lime-green)] text-[var(--color-lime-green)] hover:bg-[var(--color-lime-green)] hover:text-black',
    };

    // 🎯 ICON RENDER
    const renderIcon = () => {
        if (icon === 'arrow') return <span>→</span>;

        if (icon === 'download')
        return (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
            />
            </svg>
        );

        return null;
    };

    return (
        <Link
        href={href}
        className={`group inline-flex items-center gap-2 px-5 py-2 border text-sm tracking-wide transition duration-300 ${styles[variant]}`}
        >
        {children}
        <span className="transition group-hover:translate-x-1">
            {renderIcon()}
        </span>
        </Link>
    );
}