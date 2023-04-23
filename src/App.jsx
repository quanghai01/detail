import Header from "./layouts/header/Header"
import Navbar from "./layouts/header/Navbar"
import ListProduct from "./layouts/home/ListProduct"
import Product from "./layouts/home/Product"
import Banner from "./layouts/banner/Banner"





function App() {


  return (
    <div className="App">
<Header></Header>
      <Navbar></Navbar>

      <Banner></Banner>
      <ListProduct></ListProduct>
    </div>
  )
}

export default App
