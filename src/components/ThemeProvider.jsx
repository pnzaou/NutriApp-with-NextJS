'use client'

import { useEffect } from "react";
import { useThemeStore } from "../store/useThemeStore";

const ThemeProvider = ({children}) => {
    const { theme } = useThemeStore()

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])
    
    return (
        <>
            {children}
        </>
    );
}

export default ThemeProvider;
