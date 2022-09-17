import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ACCESS_TOKEN, setCookie, USER_LOGIN, setStoreJSON, setStore, getStoreJSON, getStore } from "../../utils/config";

const initialState = {
  userLogin: getStoreJSON(USER_LOGIN)
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUserLoginAction: (state, action) => {
      const userLogin = action.payload;
      state.userLogin = userLogin;
    }
  },
});

export const {setUserLoginAction} = userReducer.actions;

export default userReducer.reducer;

/*-----------action api (thunk)-------------- */

export const signinApi = (userLogin) => {
  //userLogin = {email:'', password:''}
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        method: "POST",
        data: userLogin, //{email:'', password:''}
      });
      //thành công
      //Lưu lại token
      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      setCookie(result.data.content.accessToken, 30, ACCESS_TOKEN);
      //Lưu lại email
      setStoreJSON(USER_LOGIN, result.data.content);
      // console.log(result);
      //Đưa userLogin thành công lên reducer
      //result.data.content = { email: '', accessToken: ''}
      const action = setUserLoginAction(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log({error});
    }
  };
};

//call Api getProfile

export const getProfileApi = () => {
  return async (dispatch) => {
    try {
      const result = await axios ({
        url: 'https://shop.cyberlearn.vn/api/Users/getProfile',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getStore(ACCESS_TOKEN)}`
        }
      })
      // console.log(result.data.content)
      //Tạo ra actioncreator => dispatch lên redux
      const action = setUserLoginAction(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  }
}