import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useRouteMatch } from "react-router-dom"

import { loadNews } from "../../../Component/Actions"
import BASE_URL from "../../../config"
import '../../../Assets/Css/portalNews.css'
// import noResult from '../../../Assets/Image/cartoon2.png'
import Loading from "../../../Assets/Background/Loadnig"

// function resultNullNews() {
//     return (
//         <div>
//             <img alt="" src={noResult} />
//         </div>
//     )
// }

function PortalNewsList() {
    const dispatch = useDispatch()

    const { path } = useRouteMatch()
    const { data } = useSelector(state => state.news)

    const [modalView, isModalView] = useState(undefined)
    const [srcBxView, isSrcBxView] = useState(false)
    const [counterScroll, setScrollY] = useState(0)
    const [timer, setTimer] = useState(Date.now())
    const [searchVal, setSearchVal] = useState('')

    const mouseEnter = (i, e) => {
        isModalView(i)
    }
    const mouseLeave = () => {
        isModalView(undefined)
    }
    const handleSearchMouseEnter = () => {
        isSrcBxView(true)
    }
    const handleSearchMouse = () => {
        isSrcBxView(false)
    }
    const handleClickSearch = () => {
        isSrcBxView(true)
    }
    const handleSearchVal = (v) => {
        const target = v.target;
        const value = target.value;
        setSearchVal(value)
    }

    useEffect(() => {
        dispatch(loadNews())
    }, [dispatch])
    useEffect(() => {
        isModalView(undefined)
    }, [counterScroll])
    setTimeout(() => setTimer(Date.now()), 60000)
    document.addEventListener('scroll', e => {
        const i = window.scrollY
        setScrollY(i)
    })
    const time = new Intl.DateTimeFormat("en-US", {
        hour: '2-digit',
        minute: '2-digit'
    }).format(timer);
    const date = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }).format(timer);
    let dataFiltered = data;
    if (searchVal !== 'undefined' && data) {
        dataFiltered = data.filter(({ content, title, category }) =>
            content.toLowerCase().includes(searchVal.toLowerCase()) || title.toLowerCase().includes(searchVal.toLowerCase()) || category.toLowerCase().includes(searchVal.toLowerCase())
        )
    }
    return (
        <>
            <div className="header-news">
                <Link to={path + "/add"} className="add-news">
                    <div className="add-news"><span className="link-title" style={{ fontSize: '2rem' }}><i className="fa fa-plus"></i></span></div>
                </Link>
                <div>
                    <span style={{ fontWeight: "bolder" }}>{date}<br /><span style={{ fontWeight: "lighter" }}>{time}</span></span>

                </div>
            </div>
            <div className="search-box">
                <span style={{ fontSize: '20px' }} onMouseEnter={() => handleSearchMouseEnter()} onMouseLeave={handleSearchMouse} className={srcBxView ? "d-none" : ""}><i className="fa fa-search"></i></span>
                <input type="text" value={searchVal} placeholder="Search" className={srcBxView ? "search-form" : "d-none"} onChange={e => handleSearchVal(e)} onMouseEnter={() => handleSearchMouseEnter()} onClick={handleClickSearch}></input>
            </div>
            <div className={dataFiltered && dataFiltered.length > 0 ? 'row-news' : ""}>
                {dataFiltered && dataFiltered.length > 0 ? dataFiltered.map(({ title, content, image }, i) => {
                    return (
                        <div key={i} className="card-news">
                            <div className="card-img">
                                <img alt="" src={BASE_URL + `images/${image}`} className="img-news " />
                            </div>
                            <div className="box-body-news">
                                <div className="card-body-news">
                                    <div className="body-title-news">
                                        <span style={{ fontWeight: "bolder", fontSize: "1.5rem", marginBottom: "10px" }}>{title}</span>
                                    </div>
                                    <div className="body-content-news">
                                        <span>{content}</span>
                                    </div>
                                </div>

                                <div className="card-action-news" onClick={(e) => mouseEnter(i, e)}>
                                    <span style={{ color: "gray" }} className={modalView !== i ? "toggle-action" : "d-none"}>
                                        <i className="fa fa-ellipsis-v"></i>
                                    </span>
                                </div>

                                <div className={modalView === i ? "modal-action" : "d-none"} onMouseEnter={modalView === i ? (e) => mouseEnter(i, e) : () => { }} onMouseLeave={mouseLeave}>
                                    <Link to={path} className="txt-toggle"><span><i className="fa fa-pencil"></i> Edit</span></Link>
                                    <Link to={path} className="txt-toggle"><span><i className="fa fa-trash"></i> Delete</span></Link>
                                </div>
                            </div>
                        </div>)
                }) : <Loading />}
            </div>

        </>
    )
}

export default PortalNewsList