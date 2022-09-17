
import React from 'react'
import { useState, useRef } from 'react'
/*
    useRef: Tương tự useState tuy nhiên khi thay đổi giá trị useRef component không render lại(useRef dùng để lưu giá trị sau mỗi lần render)
    useRef thường sử dụng cho các form không có validation, hoặc load dữ liệu chỉnh sửa
*/
export default function UseRefDemo() {
    const defaultFormFields = {
        username: '',
        password: ''
    }
    const [number, setNumber] = useState(1);
    // const [formFiedlds, setFormFields] = useState(defaultFormFields);
    // const { username, password } = formFiedlds;
    // console.log(formFiedlds)
    const userLoginRef = useRef(defaultFormFields);
    console.log('render');
    const handleChange = (event) => {
        const { id, value } = event.target;
        userLoginRef.current[id] = value;
        console.log(userLoginRef.current)
        // setFormFields({...formFiedlds, [id]: value});
        // defaultFormFields[id] = value;
        // console.log(defaultFormFields)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userLoginRef.current)
    }
  return (
    <form className='container' onSubmit={handleSubmit}>
        <h1>Number: {number}</h1>
        <button className="btn btn-success" onClick={() => { setNumber(number + 1)}}>+</button>
        <h3>Login</h3>
        <div className="form-group mb-3">
            <p>username</p>
            <input className='form-control' id='username'  onChange={handleChange} />
        </div>
        <div className="form-group mb-3">
            <p>password</p>
            <input className='form-control' id='password' type={'password'} onChange={handleChange}/>
        </div>
        <div className="form-group mb-3">
            <button className="btn btn-success" type='submit'>Login</button>
        </div>
    </form>
  )
}
