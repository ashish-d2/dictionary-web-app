import "./App.scss";
import Header from "./components/header/Header";
import SearchField from "./components/search/SearchField";

function App() {
  return (
    <div className="App">
      <main className="main-container">
        <Header />
        <SearchField />
      </main>
    </div>
  );
}

export default App;
