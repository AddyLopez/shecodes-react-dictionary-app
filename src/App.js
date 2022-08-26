import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>React Dictionary Application</h1>
      </header>
      <Dictionary defaultSearchWord="turtle" />
      <Footer />
    </div>
  );
}
