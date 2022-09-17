import React, { useState } from "react";
import Comment from "./Comment";

export default function UseCallbackDemo() {
    const [like, setLike] = useState(1);
    const [number, setNumber] = useState(1);

    const renderLike = () => {
        return (<p>Bạn đã thả {like}</p>)
    }
    //Hàm useCallback sẽ cache lại hàm renderLike sau mỗi lần setState render, chỉ tạo mới hàm renderLike khi like thay đổi
  return (
    <div className="m-5">
      Like: {like} ♥ - member: {number} <button onClick={() =>{
        setNumber(number + 1);
      }}>+</button>
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <Comment renderLike={renderLike}/>
    </div>
  );
}
