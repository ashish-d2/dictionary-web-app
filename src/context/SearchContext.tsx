import { createContext, ReactNode, useContext, useState } from "react";

interface searchContextType {
  data: string[];
  getData: (value: string) => void;
}

// creating search context
const SearchContext = createContext<searchContextType | undefined>(undefined);

// search context provider
const SearchProvider: React.FC<{ children: ReactNode }> = function ({
  children,
}) {
  const [data, setData] = useState<string[]>([]);

  // this function gets data from the API and stores in data
  const getData = function (word: string) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <SearchContext.Provider value={{ data, getData }}>
      {children}
    </SearchContext.Provider>
  );
};

// Creating a hook to consume Search Context
const useSearchContext = function () {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearchContext must be used inside SearchProvider");
  }

  return context;
};

export { SearchProvider, useSearchContext };
