import "./App.css";

// COMPONENTS
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <>
      <Banner>
        <Header />
        <Hero />
      </Banner>
    </>
  );
}

export default App;
