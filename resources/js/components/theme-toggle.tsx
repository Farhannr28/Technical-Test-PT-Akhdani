import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";


export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored === "dark" || (!stored && systemPrefersDark);
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full shadow-lg bg-background flex items-center justify-center transition-transform hover:scale-110 active:scale-95`}
    >
      <span className="transition-all duration-300 ease-in-out">
        {isDark ? (
          <Sun className="w-6 h-6 text-primary" />
        ) : (
          <Moon className="w-6 h-6 text-primary" />
        )}
      </span>
    </button>
  );
}
