import Header from "./components/Header/Header"

import "./App.css"
import TopMenu from "./components/TopMenu/TopMenu"
import MainContainer from "./components/MainContainer/MainContainer"
import myLuffy from "./assets/img/shop/shop-5.jpg"
function App() {
  return (
    <div>
      <Header />
      <TopMenu />
      <MainContainer />

      <img src={"./assets/img/shop/shop-5.jpg"} alt="img" width={100} />
    </div>
  )
}
export default App
