import { useState } from "react";
import { userContext } from "./Context";
import Header from "./Header";
import "./App.css";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(6250);
  const [product2, setProduct2] = useState(5250);
  const [product3, setProduct3] = useState(4250);

  return (
    <div className="App">
      <userContext.Provider value={"might all J"}>
        <Header />
      </userContext.Provider>
      <div>
        <h3>จำนวนสินค้าในตะกร้า {totalItems}</h3>
        <h3>ราคาสินค้าในตะกร้าทั้งหมด {totalPrice} บาท</h3>
      </div>
      <div>
        <img src="Kotobukiya-DMC5-Vergil-Statue-009.jpg" alt="vergil" width="15%" />
        <br />
         vergil figures ราคา {product1} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product1);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - product1);
          }
        }}
      >
        นำออกจากตะกร้า
      </button>
      <div>
        <img src="R.jpg" alt="cap" width="15%" />
        <br />
        Dante figures ราคา {product2} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product2);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - product2);
          }
        }}
      >
        นำออกจากตะกร้า
      </button>
      <div>
        <img src="Asmus-DMC5-Nero-001.jpg" alt="T-Shirt" width="15%" />
        <br />
        Nero figures ราคา {product3} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product3);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - product3);
          }
        }}
      >
        นำออกจากตะกร้า
      </button>
    </div>
  );
}

export default App;