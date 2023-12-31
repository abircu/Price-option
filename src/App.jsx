import "./App.css";
import Barchart from "./components/LineChart/Barchart";
import LineDraw from "./components/LineChart/LineDraw";
import Navbar from "./components/Navbar/Navbar";
import Phone from "./components/Phone/Phone";
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
        <Phone />
      </div>
    </>
  );
}

export default App;
