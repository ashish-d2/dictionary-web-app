import { createContext, ReactNode, useContext, useState } from "react";

interface searchContextType {
  data: MainAPIOutput | undefined;
  getData: (value: string) => void;
}

// API type
type MainAPIOutput = {
  word: string;
  meanings: Meanings[];
  phonetic: string;
  sourceUrls: string[];
};

export type Meanings = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
};

export type Definition = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
};

// creating search context
const SearchContext = createContext<searchContextType | undefined>(undefined);

// search context provider
const SearchProvider: React.FC<{ children: ReactNode }> = function ({
  children,
}) {
  const [data, setData] = useState<MainAPIOutput>();

  // this function gets data from the API and stores in data
  const getData = function (word: string) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => res.json())
      .then(([result]) => {
        console.log(result);
        const { word, meanings, phonetic, sourceUrls } = result;
        setData({ word, meanings, phonetic, sourceUrls });
      })
      .catch((err) => console.error("Error while fetching data", err));
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
