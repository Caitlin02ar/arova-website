"use client"

import { useTranslations } from 'next-intl';
import CardValue from './CardValue';

export default function Value() {
    const t = useTranslations('Value'); 

    return (
        <div className='min-h-[50vh] bg-[var(--color-cream-2)] flex flex-col align-center justify-center'>
            <CardValue/>
        </div>
    )

}