import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import AddToCart from "./components/AddToCart";
import Search from "./components/Search";
import RouteGaurd from "./components/RouteGaurd";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route
          path="/search"
          element={
            <RouteGaurd>
              <Search />
            </RouteGaurd>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
