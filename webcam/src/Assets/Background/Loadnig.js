import React from 'react'

import '../Css/mainStyle.css'
import '../Css/style.css'

import loading from '../Icons/load-blue-round.png'

function Loading() {

    return (
        <div id="load-page">
            <img src={loading} alt="" id="img-load"></img>
        </div>
    );
}

export default Loading;
