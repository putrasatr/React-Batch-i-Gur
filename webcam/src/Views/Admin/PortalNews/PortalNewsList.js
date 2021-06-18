import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useRouteMatch } from "react-router-dom"

import { deleteNews, loadNews } from "../../../Component/Actions"
import BASE_URL from "../../../config"
import '../../../Assets/Css/portalNews.css'
import Loading from "../../../Assets/Background/Loading"


function PortalNewsList() {
    const dispatch = useDispatch()

    const { path } = useRouteMatch()
    const { data } = useSelector(state => state.news)

    const [modalView, isModalView] = useState('undefined')
    const [srcBxView, isSrcBxView] = useState(false)
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
    const handleDeleteNews = (id) => {
        isModalView('undefined')
        dispatch(deleteNews(id))
    }
    useEffect(() => {
        dispatch(loadNews())
    }, [dispatch])
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
            </div>
            <div className="search-box">
                <span style={{ fontSize: '20px' }} onMouseEnter={() => handleSearchMouseEnter()} onMouseLeave={handleSearchMouse} className={srcBxView ? "d-none" : ""}><i className="fa fa-search"></i></span>
                <input type="text" value={searchVal} placeholder="Search" className={srcBxView ? "search-form" : "d-none"} onChange={e => handleSearchVal(e)} onMouseEnter={() => handleSearchMouseEnter()} onClick={handleClickSearch}></input>
            </div>
            <div className={dataFiltered && dataFiltered.length > 0 ? 'row-news' : ""}>
                {dataFiltered && dataFiltered.length > 0 ? dataFiltered.map(({ title, content, image, _id }, i) => {
                    return (
                        <div key={i} className="card-news">
                            <div className="card-img">
                                <img alt="tidak ada foto" src={BASE_URL + `images/news/${image}`} className="img-news " style={{ borderRadius: '5px' }} />
                            </div>
                            <div className="box-body-news">
                                <div className="card-body-news">
                                    <div className="body-title-news">
                                        <span style={{ fontWeight: "bolder", marginBottom: "10px" }}>{title}</span>
                                    </div>
                                    <div className="body-content-news">
                                        <span>{content}</span>
                                    </div>
                                </div>
                                <div className="card-action-news" onClick={(e) => mouseEnter(i, e)}  onMouseLeave={mouseLeave}>
                                    <span style={{ color: "gray" }} className={modalView !== i ? "toggle-action" : "d-none"}>
                                        <i className="fa fa-ellipsis-v"></i>
                                    </span>
                                </div>

                                <div className={modalView === i ? "modal-action" : "d-none"} onMouseEnter={modalView === i ? (e) => mouseEnter(i, e) : () => { }} onMouseLeave={mouseLeave}>
                                    <Link to={path} className="txt-toggle"><span className="txt-modal" ><i className="fa fa-pencil"></i> Edit</span></Link>
                                    <span className="txt-modal" onClick={() => handleDeleteNews(_id)}><i className="fa fa-trash"></i> Delete</span>
                                </div>
                            </div>
                        </div>)
                }) : <Loading />}
            </div>

        </>
    )
}

export default PortalNewsList