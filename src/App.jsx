import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Gallery />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
