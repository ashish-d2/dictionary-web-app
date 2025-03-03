import "./App.scss";

// component imports
import Header from "./components/header/Header";
import SearchField from "./components/search/SearchField";
import SearchResult from "./components/searchResult/SearchResult";

import Heading from "./components/searchResult/heading/Heading";
import Body from "./components/searchResult/body/Body";
import Footer from "./components/footer/Footer";
import DefaultPage from "./components/defaultPage/DefaultPage";

import NoResultFound from "./components/noResultFound/NoResultFound";
import Loading from "./components/loading/Loading";
// Context import
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { SearchProvider } from "./context/SearchContext";
import { FontProvider } from "./context/FontContext";

import { useSearchContext } from "./context/SearchContext";
import { useFontContext } from "./context/FontContext";

function AppContent() {
  const { theme } = useTheme();
  const { data, error, loading } = useSearchContext();
  const { font } = useFontContext();

  return (
    <div
      className={`App ${font === "sans-Serif" ? "sansSerif" : font} ${theme}`}
    >
      <main className="main-container">
        <Header />
        <SearchField />

        {/* to display data if there is no error and no loading state */}
        {data && !error.error && !loading ? (
          <SearchResult>
            <Heading />
            <Body />
            <Footer />
          </SearchResult>
        ) : (
          ""
        )}

        {/* 
          if there is some data or error message or if data is loading 
          then remove default page.
        */}
        {data || error.error || loading ? "" : <DefaultPage theme={theme} />}

        {/* To display loading state */}
        {loading ? <Loading theme={theme} /> : ""}

        {/* display error message only if there is no loading state */}
        {error.error && !loading ? (
          <NoResultFound
            title={error.errorTitle}
            message={error.errorMessage}
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
