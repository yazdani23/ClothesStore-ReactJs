import "./App.css";
import { Header, Footer, Main } from "./Layout";
import { BrowserRouter, Router, Link } from "react-router-dom";
import { Carousel, Container, Row, Col } from "react-bootstrap";
// import FirstSlide from './assets/images/Choghazanbil01.jpg'
// import SecondtSlide from './assets/images/Choghazanbil02.jpg'
// import ThirdSlide from './assets/images/Choghazanbil03.jpg'
// import Product from './components/Products';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "gray" }}>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export { App };
