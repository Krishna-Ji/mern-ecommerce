
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategeory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import NavBar from './Components/Navbar/NavBar'


function App() {
    

  return (
    <BrowserRouter>
    <NavBar/>  
    <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/men' element={<ShopCategeory banner = {men_banner} category="men"/>} />
      <Route path='/women' element={<ShopCategeory banner = {women_banner} category="women"/>} />
      <Route path='/kid' element={<ShopCategeory banner = {kids_banner} category="kid"/>} />
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
