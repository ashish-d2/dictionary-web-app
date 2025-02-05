import "./App.scss";
import Header from "./components/header/Header";
import SearchField from "./components/search/SearchField";
import SearchResult from "./components/searchResult/SearchResult";

import Heading from "./components/searchResult/heading/Heading";
import Body from "./components/searchResult/body/Body";
import Footer from "./components/footer/Footer";
import DefaultPage from "./components/defaultPage/DefaultPage";

import NoResultFound from "./components/noResultFound/NoResultFound";

// Context import
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { SearchProvider } from "./context/SearchContext";
import { FontProvider } from "./context/FontContext";

import { useSearchContext } from "./context/SearchContext";
import { useFontContext } from "./context/FontContext";

function AppContent() {
  const { theme } = useTheme();
  const { data, error } = useSearchContext();
  const { font } = useFontContext();

  return (
    <div
      className={`App ${font === "sans-Serif" ? "sansSerif" : font} ${theme}`}
    >
      <main className="main-container">
        <Header />
        <SearchField />

        {data && !error.status ? (
          <SearchResult>
            <Heading />
            <Body />
            <Footer />
          </SearchResult>
        ) : (
          ""
        )}

        {data || error.status ? "" : <DefaultPage theme={theme} />}

        {error.status ? (
          <NoResultFound
            title={error.title}
            message={error.message}
            theme={theme}
          />
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <FontProvider>
        <SearchProvider>
          <AppContent />
        </SearchProvider>
      </FontProvider>
    </ThemeProvider>
  );
}

export default App;
