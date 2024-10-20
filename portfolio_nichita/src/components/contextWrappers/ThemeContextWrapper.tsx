"use client";
import { createContext, useReducer, useContext } from "react";

const ThemeContext = createContext<"white" | "dark" | null>(null);
const ThemeDispatchContext = createContext<null | CallableFunction>(null);

const themeReducer = (theme: "white" | "dark" | null) => {
  localStorage.setItem("colorScheme", theme === "dark" ? "white" : "dark");
  return theme === "dark" ? "white" : "dark";
};

export default function ThemeContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  if (window.matchMedia && !localStorage.getItem("colorScheme")) {
    const query = window.matchMedia("prefers-color-scheme: dark").matches;
    localStorage.setItem("colorScheme", query ? "dark" : "white");
  }

  const [theme, setTheme] = useReducer(
    themeReducer,
    localStorage.getItem("colorScheme") as "white" | "dark"
  );
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeDispatch() {
  return useContext(ThemeDispatchContext);
}
