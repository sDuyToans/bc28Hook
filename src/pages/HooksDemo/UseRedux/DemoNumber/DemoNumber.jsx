import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { changeNumber } from '../../../../redux/reducers/numberReducer';

const DemoNumber = () => {
    const number = useSelector(state => state.number);
    const dispatch = useDispatch();
  return (
    <div className="container">
        <h3>Number: {number}</h3>
        <button className="btn btn-success" onClick={() => {
            //tự tạo action để dispatch reducer slice
            //Cách 1: tự tạo ra action
            // const action = {
            //     type: 'numberReducer/changeNumber',
            //     payload: number + 1
            // }
            // dispatch(action);
            //Cách 2: action creator
            const action = changeNumber(number + 1);
            dispatch(action)
        }}>+</button>
    </div>
  )
}
export default DemoNumber
