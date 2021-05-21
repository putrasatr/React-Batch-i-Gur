import { useState,useEffect } from 'react'

const IsMaxWidth = () => {
    const [windowWidth, setWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, [windowWidth])
    console.log(windowWidth)
    if (windowWidth >= 800) return true
    return false
}

export default IsMaxWidth