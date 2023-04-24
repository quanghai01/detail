import Header from "./layouts/header/Header"
import Navbar from "./layouts/header/Navbar"
import ListProduct from "./layouts/home/ListProduct"
import Product from "./layouts/home/Product"
import Banner from "./layouts/banner/Banner"
import Footer from "./layouts/footer/Footer"


import DetailPage from "./layouts/detail/DetailPage"


function App() {


  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>

      <Banner></Banner>
      <ListProduct></ListProduct>
      <Footer></Footer>
      {/* <DetailPage></DetailPage> */}
    </div>
  )
}

export default App
