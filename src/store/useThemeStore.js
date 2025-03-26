import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light",
    toggleTheme: (theme) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", theme);
        }
        set({ theme });
    }
}))