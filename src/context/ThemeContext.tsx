import { createContext, ReactNode, useContext, useState } from "react";

// Type declaration
interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Context
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Provider
export const ThemeProvider: React.FC<ThemeProviderProps> = function ({
  children,
}) {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = function () {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = function () {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
