import { useEffect, useState } from "react";

export function usePreventBodyScroll(isLocked: boolean) {
    const htmlElement = document.querySelector('html');

    useEffect(() => {
        if(htmlElement) {
            if(isLocked) {
                htmlElement.style.overflow = "hidden";
                document.body.style.overflow = "hidden";
            }
            else {
                htmlElement.style.overflow = "";
                document.body.style.overflow = "";
            }
        }


        return () => {
            document.body.style.overflow = "";
        }

    }, [isLocked]);
}