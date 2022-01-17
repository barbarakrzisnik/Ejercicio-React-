import "./App.scss";
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div className="container">
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App;