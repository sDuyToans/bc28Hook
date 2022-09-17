import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment: [
        {name: 'Toàn', content: "hahaha"},
        {name: 'Duy Toàn', content: "hahaha1"}
    ]
}

const facebookReducer = createSlice({
  name: 'facebookReducer',
  initialState,
  reducers: {
    addComment: (state, action) => {
        //B1: lấy dữ liệu từ payload
        const userComment = action.payload;
        //B2: đưa dữ liệu vào mảng
        state.arrComment.push(userComment);
    }
  }
});

export const {addComment} = facebookReducer.actions

export default facebookReducer.reducer