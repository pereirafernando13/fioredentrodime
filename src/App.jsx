import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Gallery />
      </div>
    </>
  );
}

export default App;
