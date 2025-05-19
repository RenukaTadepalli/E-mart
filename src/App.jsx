import React from "react";
import "./App.css";
import Header from "./Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./ProductPage/ProductPage";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Signup from "./Signup/Signup";
import EachProduct from "./EachProduct/EachProduct";
import PageNotFound from "./PageNotFound/PageNotFound";
import { SearchProvider } from "./SearchContext/SearchContext";

const App = () => {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="productpage" element={<ProductPage/>}/>
          <Route path="/product/:id" element={<EachProduct />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  );
};

export default App;
