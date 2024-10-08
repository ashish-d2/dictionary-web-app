import "./App.scss";
import Header from "./components/header/Header";
import SearchField from "./components/search/SearchField";
import SearchResult from "./components/searchResult/SearchResult";

import Heading from "./components/searchResult/heading/Heading";
import Body from "./components/searchResult/body/Body";
import Footer from "./components/footer/Footer";

import NoResultFound from "./components/noResultFound/NoResultFound";

function App() {
  return (
    <div className="App sansSerif">
      <main className="main-container">
        <Header />
        <SearchField />
        <NoResultFound />
        {/* <SearchResult>
          <Heading />
          <Body />
          <Footer />
        </SearchResult> */}
      </main>
    </div>
  );
}

export default App;
