import React, { useState } from 'react'

export default function DemoChonXe() {
    const [colorCar, setColorCar] = useState('./img/products/red-car.jpg');
    const changeCarColor = (color) => {
        setColorCar(`./img/products/${color}-car.jpg`);
    }       
  return (
    <div>
        <h3>Demo chọn xe</h3>
        <div className="row">
            <div className="col-6">
                <img src={colorCar} alt="car"  className='w-100'/>
            </div>
            <div className="col-6">
                <button className="btn" style={{background: 'red', color: '#fff'}} onClick={() => changeCarColor('red')}>Red</button>
                <button className="btn" style={{background: 'black', color: '#fff'}} onClick={() => changeCarColor('black')}>Black</button>
                <button className="btn" style={{background: 'silver', color: '#fff'}} onClick={() => changeCarColor('silver')}>Silver</button>
                <button className="btn" style={{background: '#EEE', color: '#fff'}} onClick={() => changeCarColor('steel')}>Steel</button>
            </div>
        </div>
    </div>
  )
}
