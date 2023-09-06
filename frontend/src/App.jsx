import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./Component/Common/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./Component/Pages/Products/Products";
import Home from "./Component/Pages/Home/Home";
import Team from "./Component/Pages/Team/Team";
import Platforms from "./Component/Pages/Platforms/Platforms";
import Achievements from "./Component/Pages/Achievements/Achievements";
import Box from "@mui/material/Box";
import Footer from "./Component/Common/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveAppBar />
        <Box sx={{ paddingTop: "60px", flex: 1, overflowY: "auto" }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/team" element={<Team />}></Route>
            <Route path="/platforms" element={<Platforms />}></Route>
            <Route path="/products" element={<Products />}></Route>
            {/* <Route path="/achievements" element={<Achievements />}></Route> */}
            {/* <Route path="/products/edit/:id" element={<EditProduct />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
        <Route path="/cart" element={<Cart />}></Route> */}
          </Routes>
        </Box>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
