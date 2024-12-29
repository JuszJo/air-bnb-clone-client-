import { useEffect, useState } from "react";

export function useIsMobile(breakPoint: number = 800) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakPoint);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= breakPoint);
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return isMobile;
}