import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring'
export default function DemoAnimation() {
    const [styles, api] = useSpring(() => ({ 
        from: {opacity: 0, color: 'red', fontSize: 10}
     }))
    const [toggle, setToggle] = useState(false);
    // Update spring with new props
    // api.start({ opacity: toggle ? 1 : 0 })
    // Stop animation
    // api.stop()
    useEffect(() => {
        return () => {
            api.stop();
        }
    })
    return (
        <div>
            <button onClick={() => {
                // setToggle(true);
                api.start({opacity: 1, color: 'blue', fontSize: 20})
            }}>start</button>
            <button onClick={() => {
                // setToggle(false);
                api.start({opacity: 1, color: 'red', fontSize: 10})
            }}>stop</button>
            <animated.div style={styles}>i will fade</animated.div>
        </div>
    )
}
