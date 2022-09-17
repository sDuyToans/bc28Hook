import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductApi, setArrProductAction } from "../../redux/reducers/productReducer";

export default function Home(props) {
  // const [arrProduct, setArrProduct] = useState([]);
  const dispatch = useDispatch();
  const { arrProduct } = useSelector((state) => state.productReducer);
  const getApiProduct = async () => {
    // try {
    //   const result = await axios.get("https://shop.cyberlearn.vn/api/Product");
    //   console.log(result.data.content);
    //   //Sau khi lấy kết quả từ api về đưa vào state ArrProduct
    //   // setArrProduct(result.data.content);
    //   //dispatch lên redux
    //   const action = setArrProductAction(result.data.content);
    //   /*
    //     action = {
    //       type: 'productReducer/setArrProductAction,
    //       payload: result.data.content
    //     }
    //   */
    //  dispatch(action);
    // } catch (error) {
    //   console.log(error);
    // }

    /*
      action có 2 dạng:
        + action dạng 1: 
            action = {
              type: action_name,
              payload: data
            }
        + action (thunk) 2:
        action = (dispatch2, getState) => {
          logic xử lý ở đậy sau đó dữ liệu sẽ dùng tham số dispatch 2 để đưa redux hoặc thực hiện tiếp 1 logic khác
        }
    */
    const actionLoai2 = getProductApi;
     //dispatch action thunk
     dispatch(actionLoai2)
  };
  useEffect(() => {
    //Sau khi giao diện load xong thì gọi api thực thi
    getApiProduct();
  }, []);
  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-3 mt-2" key={index}>
          <div className="card">
            <img src={item.image} alt={item.alias} />
            <div className="card-body bg-dark text-light">
              <p>{item.alias}</p>
              <p>{item.price}$</p>
              {/* <button className="btn btn-success">View Detail</button> */}
              <NavLink to={`detail/${item.id}`} className="btn btn-success">
                View Detail
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <h3>Shoes App</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
