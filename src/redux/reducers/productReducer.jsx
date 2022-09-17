import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  arrProduct: [],
  productDetail: {},
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setArrProductAction: (state, action) => {
      // Lấy ra dữ liệu từ payload component dispatch lên
      const arrProduct = action.payload;
      //Cập nhật lại state
      state.arrProduct = arrProduct;
    },
    setProductDetailAction: (state, action) => {
      const productDetailApi = action.payload;
      state.productDetail = productDetailApi;
    },
  },
});

export const { setArrProductAction, setProductDetailAction } =
  productReducer.actions;

export default productReducer.reducer;

//-----------action api -------------
export const getProductApi = async (dispatch2) => {
  //Xử lí logic api để trả về kết quả
  try {
    const result = await axios.get("https://shop.cyberlearn.vn/api/Product");
    console.log(result.data.content);
    //Sau khi lấy kết quả từ api về đưa vào state ArrProduct
    // setArrProduct(result.data.content);
    //dispatch lên redux
    const action = setArrProductAction(result.data.content);
    /*
      action = {
        type: 'productReducer/setArrProductAction,
        payload: result.data.content
      }
    */
    dispatch2(action);
  } catch (error) {
    console.log(error);
  }
};

//closure function
export const getProductDetailActionApi = (idProduct) => {
  return async (dispatch) => {
    //logic api gọi tại đây
    try {
      const result = await axios.get(
        `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idProduct}`
      );
      // Sau khi có dữ liệu gửi lên action loại 1 đưa lên reducer
      const actionLoai1 = setProductDetailAction(result.data.content);
      dispatch(actionLoai1);
    } catch (error) {
      console.log(error);
    }
  };
};
