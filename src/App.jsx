import Header from "./layouts/header/Header"
import Navbar from "./layouts/header/Navbar"
import ListProduct from "./layouts/home/ListProduct"
import Product from "./layouts/home/Product"





function App() {


  return (
    <div className="App">
<Header></Header>
      <Navbar></Navbar>

      <ListProduct></ListProduct>
    </div>
  )
}

export default App
