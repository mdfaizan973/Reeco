import Navbar from "./Components/Navbar";
import "./App.css";
import SmallCards from "./Components/SmallCards";
import Table from "./Components/Table";

export default function App() {
  return (
    <div className="main_container_app">
      <Navbar />
      <SmallCards />
      <Table />
    </div>
  );
}
