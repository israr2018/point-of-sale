import React, { useEffect } from "react"
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import ProductsPage from "@pages/Product"
import GalleryPage from "@pages/Gallery"
function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route  path="/" exact  element={<ProductsPage/>}/>
            <Route path="/gallery"  exact element={<GalleryPage/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
