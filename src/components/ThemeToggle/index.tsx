import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<string>(localStorage.getItem("theme") ?? "light");

    function handleClick() {
        console.log("button clicked");
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            className="items-center justify-center border-b-2 border-transparent py-1 text-l md:text-xl hover:border-b-slate-900 dark:hover:border-b-slate-100"
            onClick={handleClick}
        >
            {theme === "dark" ? "Light" : "Dark"}
        </button>
    );
}
