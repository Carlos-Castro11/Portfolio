import "./App.css";

// COMPONENTS
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Banner>
        <Header />
        <Hero />
      </Banner>
      <About />
      <Footer />
    </>
  );
}

export default App;
