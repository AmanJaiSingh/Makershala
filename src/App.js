import "./App.css";
import { Header } from "./page/Header";
import { Body } from "./page/Body";
import { Footer } from "./page/Footer";
import { Banner } from "./page/Banner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Header />
        <Body />
        <Footer />
      </header>
    </div>
  );
}

export default App;
