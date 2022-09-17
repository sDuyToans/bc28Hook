import React, { useEffect, useState } from "react";
import axios from "axios";
export default function UseEffectDemo() {
  const [arrProduct, setArrProduct] = useState([]);
  const [count, setCount] = useState(60)
  const getApi = () => {
    let product = axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    })
      .then((result) => {
        // console.log(result.data.content)
        setArrProduct(result.data.content);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    //Callback function này sẽ chạy 1 lần đầu tiên và các lần sau thì phụ thuộc vào dependency thứ 2 của hàm useEffect(Giống Didupdate)
    
    // Khi nào count thay đổi thì mới chạy hàm callback này tiếp
  }, [count])

  useEffect(() => {
    //Chạy 1 lần sau khi render(Giống hệt componentDidMount bên class component)
    getApi();
    const timeout = setInterval(() => {
        setCount((count) => {
            return count - 1;
        })
        console.log('123')
    }, 1000)
    return () => {
        //function return trong useEffect sẽ được kích hoạt trước khi component này mất khỏi giao diện giống componentWillUnmount bên react class
        clearInterval(timeout)
    }
  }, []);

  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <img src={item.image} alt="product" className="w-100" />
          <div
            className="card-body bg-dark text-white"
            style={{
              height: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button className="btn btn-success mb-3">Add to cart</button>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <h4>Componentwillunmount</h4>
      <p>Count: {count}</p>
      <h3>UseEffectDemo</h3>
      <h4>ComponentDidMount (sử dụng việc load 1 lần sau render)</h4>
      <hr />
      <h3>Shoe Shop</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
