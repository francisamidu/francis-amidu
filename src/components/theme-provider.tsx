"use client"

import { createContext, createSignal, useContext, type ParentProps } from "solid-js"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: () => Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: () => "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider(props: ParentProps<ThemeProviderProps>) {
  const [theme, setTheme] = createSignal<Theme>(props.defaultTheme || "system")

  return (
    <ThemeProviderContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {props.children}
    </ThemeProviderContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

