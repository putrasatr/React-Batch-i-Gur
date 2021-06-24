import React from "react"
import img1 from "../../Assets/Image/head.png"
import img2 from "../../Assets/Image/cake-vi.jpeg"
import img3 from "../../Assets/Image/cloud-violet.jpg"
import img4 from "../../Assets/Image/eye.jpg"
import img5 from "../../Assets/Image/light-blue-tower.jpg"
import img6 from "../../Assets/Image/plate-mc.jpg"
import img7 from "../../Assets/Image/violet-kahyangan.jpg"
import img8 from "../../Assets/Image/white.jpg"
import { generateRandomNumber } from "../../helpers"
// import img9 from "../../Assets/Image/head.png"
// import img10 from "../../Assets/Image/head.png"
// import img11 from "../../Assets/Image/head.png"

function component() {
    const imgArray = [
        img1, img2, img3, img4, img5, img6, img7, img8,
        "https://images.unsplash.com/photo-1541422348463-9bc715520974?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
        "https://images.unsplash.com/photo-1501883824620-a2c97e2e319c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "https://images.unsplash.com/photo-1538898780761-268f71f67675?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
        "https://images.unsplash.com/photo-1506755594592-349d12a7c52a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2033&q=80",
        "https://images.unsplash.com/photo-1520516620562-04b7d17e7500?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "https://images.unsplash.com/photo-1460013477427-b0cce3e30151?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    ]
    const i = generateRandomNumber(imgArray)
    return (
        <img alt="" src={imgArray[i]} style={{ width: '30%', maxHeight: "auto", borderRadius: "1pc" }} />
    )
}

export default component