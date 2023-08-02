import Header from "../components/Header/Header";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contacto from "../components/Contacto/Contacto";
import Error404 from "../components/Error404/Error404";
import Cocina from "../components/Cocina/Cocina";
import Living from "../components/Living/Living";
import Patio from "../components/Patio/Patio";
import Cart from "../components/Cart/Cart";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import LoginScreen from "../components/Auth/LoginScreen";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import React from "react";
import Checkout from "../components/Checkout/Checkout";


const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {
        user.logged 
        ? <>
                <Routes>
                    <Route path="*" element={<Header />} />
                </Routes>

                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                    path="/productos/:categoryId"
                    element={<ItemListContainer />}
                    />
                    <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/living" element={<Living />} />
                    <Route path="/cocina" element={<Cocina />} />
                    <Route path="/patio" element={<Patio />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />                    
                    <Route path="*" element={<Navigate to={"/"} />} />
                </Routes>
            </>
       : 
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="*" element={<Navigate to={"/login"} />} />
        </Routes>
      }
    </BrowserRouter>
  );
};

export default AppRouter;
