import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { getProductDetailActionApi } from "../../redux/reducers/productReducer";

export default function Detail(props) {
  // const [productDetail, setProductDetail] = useState({});
  const { productDetail } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const getProductDetailApi = async () => {
    const actionThunk = getProductDetailActionApi(params.id);
    dispatch(actionThunk);
  };
  useEffect(() => {
    //chạy 2 trường hợp: Lần đầu tiên loadpage, và khi params.id thay đổi khi hàm này sẽ chạy
    getProductDetailApi();
  }, [params.id]);
  const renderProductDetail = () => {};
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={productDetail.image} alt="..." />
        </div>
        <div className="col-8">
          <h3>{productDetail.name}</h3>
          <p>{productDetail.description}</p>
        </div>
      </div>
      <div className="mt-2">
        <h3>Related Product</h3>
        <div className="row">
          {/* ?: toán tử optional chaining: Nếu có thuộc tính đó thì mới chấm tiếp phương thức hoặc tính tiếp theo được, không thì bỏ qua */}
          {productDetail.relatedProducts?.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card">
                  <img
                    style={{ objectFit: "cover" }}
                    src={item.image}
                    alt="..."
                    height={200}
                    className="w-100"
                  />
                  <div className="card-body">
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <NavLink
                      className="btn btn-success"
                      to={`/detail/${item.id}`}
                    >
                      View Detail
                    </NavLink>
                    <button
                      className="btn btn-secondary mx-2"
                      onClick={() => {
                        navigate(`/detail/${item.id}`);
                      }}
                    >
                      View Detail
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
