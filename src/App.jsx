import "./App.css";
import Daisy_Nav from "./components/DaisyNav/Daisy_Nav";
import Navbar from "./components/Navbar/Navbar";
import PriceOption from "./components/PriceOption/PriceOption";

function App() {
  return (
    <>
      <div>
        {/* <Daisy_Nav /> */}
        <Navbar />
        <PriceOption />
      </div>
    </>
  );
}

export default App;
