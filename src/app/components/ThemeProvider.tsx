'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: 'light',
  setTheme: () => null,
});

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Only access localStorage after component mounts (client-side)
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem(storageKey) as Theme;
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
  }, [storageKey]);

  useEffect(() => {
    if (isMounted && typeof window !== 'undefined') {
      localStorage.setItem(storageKey, theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme, storageKey, isMounted]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme);
    },
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);