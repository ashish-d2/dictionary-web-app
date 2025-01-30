import { createContext, ReactNode, useContext, useState } from "react";

// Search Context type
interface searchContextType {
  data: MainAPIOutput | undefined;
  getData: (value: string) => void;
  error: ApiError;
}

// API Error type
type ApiError = {
  status: boolean | null;
  code: number | null;
  title: string;
  message: string;
};

// API Type
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
  // useStates
  // state to store data
  const [data, setData] = useState<MainAPIOutput>();
  // state to store error
  const [error, setError] = useState<ApiError>({
    status: null,
    code: null,
    title: "",
    message: "",
  });

  // this function gets data from the API and stores in data
  const getData = function (word: string) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((errorBody) => {
            throw {
              status: !res.ok,
              code: res.status,
              title: errorBody.title,
              message: errorBody.message,
            };
          });
        }
        return res.json();
      })
      .then(([result]) => {
        console.log(result);
        const { word, meanings, phonetic, sourceUrls } = result;
        setData({ word, meanings, phonetic, sourceUrls });

        if (error.status) {
          setError({ status: false, code: 0, title: "", message: "" });
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.code && err.message) {
          // Error from API
          setError({
            status: err.status,
            code: err.code,
            title: err.title,
            message: err.message,
          });
        } else {
          // Network error or other exception
          setError({
            status: true,
            code: 0,
            title: "Error",
            message: err.message || "There was a problem fetching the data.",
          });
        }
      });
  };

  return (
    <SearchContext.Provider value={{ data, getData, error }}>
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
