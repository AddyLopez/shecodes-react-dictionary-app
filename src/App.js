import Dictionary from "./Dictionary";
import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <Dictionary defaultSearchWord="lizard" />
    </div>
  );
}
