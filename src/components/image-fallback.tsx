import fallbackImage from '@/images/fallback.svg';
import type { ImageProps, StaticImageData } from 'next/image';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ImageWithFallbackProps extends ImageProps {
    fallback?: StaticImageData;
    error?: boolean;
}

export default function ImageWithFallback({ fallback = fallbackImage, error = false, alt, src, ...props }: ImageWithFallbackProps) {
    const [isError, setIsError] = useState(error);

    useEffect(() => {
        setIsError(false);
    }, [src]);

    return <Image alt={alt} onError={() => setIsError(true)} src={isError ? fallback : src} {...props} />;
}
