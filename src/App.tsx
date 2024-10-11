import "./App.scss";
import Header from "./components/header/Header";
import SearchField from "./components/search/SearchField";
import SearchResult from "./components/searchResult/SearchResult";

import Heading from "./components/searchResult/heading/Heading";
import Body from "./components/searchResult/body/Body";
import Footer from "./components/footer/Footer";

// import NoResultFound from "./components/noResultFound/NoResultFound";

// Context import
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`App sansSerif ${theme}`}>
      <main className="main-container">
        <Header />
        <SearchField />
        <SearchResult>
          <Heading />
          <Body />
        </SearchResult>
        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
