import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import "bulma/css/bulma.css";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";





function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListConteiner/>}/>
          <Route path="/category/:categoryId" element={<ItemListConteiner/>}/>
          <Route path="/item/:itemId" element={<ItemDetailConteiner />}/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </BrowserRouter>
      </div>


  );
}

export default App;
