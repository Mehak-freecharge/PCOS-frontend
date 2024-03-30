import "./App.css";
import Explore from "./components/Explore";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <section id="Home">
        {" "}
        <Navbar />
        <Hero />
      </section>
      <section id="Explore">
        <Explore />
      </section>
      <section id="Search">
        <Search />
      </section>
      {/* <Form /> */}
    </div>
  );
}

export default App;
