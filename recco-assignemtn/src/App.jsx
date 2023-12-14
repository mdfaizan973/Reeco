import Navbar from "./Components/Navbar";
import "./App.css";
import SmallCards from "./Components/SmallCards";

export default function App() {
  return (
    <div className="main_container_app">
      <Navbar />
      <SmallCards />
    </div>
  );
}
