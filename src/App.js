import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout"
import Home from "./Components/Home"
import About from "./Components/About"
import Blog from "./Components/Blog"
import Contact from "./Components/Contact"
import Product from "./Components/Product"
import ApiProduct from "./Components/ApiProduct"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ApiProduct />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
