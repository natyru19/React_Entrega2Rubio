import Header from "./components/Header/Header";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contacto from "./components/Contacto/Contacto";
import Error404 from "./components/Error404/Error404";
import Cocina from "./components/Cocina/Cocina";
import Living from "./components/Living/Living";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    /*
    <div>
<Header />
<ItemListContainer />
</div>

*/

    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Header />} />
      </Routes>

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/living" element={<Living />} />
        <Route path="/cocina" element={<Cocina />} />
        <Route path="*" element={<Error404 />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
