import "./App.css";
import Barchart from "./components/LineChart/Barchart";
import LineDraw from "./components/LineChart/LineDraw";
import Navbar from "./components/Navbar/Navbar";
import PriceOption from "./components/PriceOption/PriceOption";

function App() {
  return (
    <>
      <div>
        {/* <Daisy_Nav /> */}
        <Navbar />
        <PriceOption />
        <LineDraw />
        <Barchart />
      </div>
    </>
  );
}

export default App;
