import { createContext, ReactNode, useState, useContext } from "react";

type FontContextType = {
  font: string;
  updateCurrentFont: (value: string) => void;
};

// Font Provider TYPE

const FontContext = createContext<FontContextType | undefined>(undefined);

const FontProvider: React.FC<{ children: ReactNode }> = function ({
  children,
}) {
  // state to store current font
  const [font, setFont] = useState<string>("sans-Serif");

  const updateCurrentFont = function (font: string) {
    // context function that is passed to other component to update font state
    setFont(font);
  };

  console.log(font);

  return (
    <FontContext.Provider value={{ font, updateCurrentFont }}>
      {children}
    </FontContext.Provider>
  );
};

// Creating a custom hook to consume Font Context
const useFontContext = function () {
  const context = useContext(FontContext);

  if (!context) {
    throw new Error("useFontContext must be inside a Font Provider");
  }

  return context;
};

export { FontProvider, useFontContext };
