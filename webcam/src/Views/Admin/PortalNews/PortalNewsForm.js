import React, { useState } from "react"
import { Link } from "react-router-dom"
import { IconButton } from '@material-ui/core';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "./portalNews.css"
import { useDispatch } from "react-redux";
import { addNews } from "../../../Component/Actions";

function HeaderFormNews(props) {
    const { handleSubmit, file, content } = props
    const [titleValue, setTitle] = useState('')
    const [categoryValue, setCategory] = useState('')
    const handleChangeTitle = (v) => {
        const target = v.target;
        const value = target.value;
        setTitle(value)
    }
    const handleChangeCategory = (v) => {
        const target = v.target;
        const value = target.value;
        setCategory(value)
    }
    return (
        <div className="card-fn-header flex">
            <div className="card-fn-h-s1 grid al-tem-center">
                <div className="title-form">
                    <span>Create News</span>
                </div>
                <div className="btn-submit-back flex">
                    <div className="w-50">
                        <Link to="/admin/portal-news">
                            <button className="btn-b-fn"><span>Cancel</span></button>
                        </Link>
                    </div>
                    <div className="w-50">
                        <button className="btn-s-fn" onClick={() => handleSubmit(titleValue, categoryValue, content, file)}><span>Save</span></button>
                    </div>
                </div>
            </div>
            <div className="card-fn-h-s2 flex al-tem-center">
                <div className="row-title-fn flex jus-con-center al-tem-center">
                    <input className="form-control bg-secondary" placeholder="News Title" value={titleValue} onChange={(e) => handleChangeTitle(e)} />
                </div>
                <div className="row-pub-fn flex">
                    <div className="label-pub-fn">
                        <span>Publish At</span>
                    </div>
                    <div className="row-input-pub-fn grid ">
                        <input className="form-control bg-secondary" placeholder="Category" value={categoryValue} onChange={(e) => handleChangeCategory(e)} />
                        <input className="form-control bg-secondary" />

                    </div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

function BodyFormNews(props) {
    const [value, setInputValue] = useState({
        title: "",
        body: "",
    });
    const [contentValue, setContentVal] = useState('')
    const [file, setFile] = useState('')
    const [imagePreviewUrl, setImagePreviewUrl] = useState('')
    const { element } = {
        element: <PhotoCameraRoundedIcon />
    }
    const photoUpload = (event) => {
        event.preventDefault();
        const reader = new FileReader();
        const file_res = event.target.files[0];
        reader.onloadend = () => {
            setFile(file_res)
            setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(file_res);
    }
    const handleChangeContent = (v) => {
        const target = v.target;
        const value = target.value;
        setContentVal(value)
        // setInputValue((prevState) => ({ ...prevState, body: data }))
    }
    return (
        <>
            <HeaderFormNews content={contentValue} file={file} handleSubmit={props.props} />

            <div className="card-fn-body">
                <div className="card-fn-b-1">
                    <span>News Content</span>
                    {/* <CKEditor
                        name="body"
                        editor={ClassicEditor}
                        data={value.body}
                        onReady={(editor) => {
                            editor.editing.view.change((writer) => {
                                writer.setStyle(
                                    "height",
                                    "500px",
                                    editor.editing.view.document.getRoot()
                                );
                            });
                        }}
                        onChange={(_, editor) => {
                            const data = editor.getData();
                            handleChangeContent(data);
                        }}
                    /> */}
                    <textarea className="content-fn" value={contentValue} onChange={(e) => handleChangeContent(e)}></textarea>
                </div>
                <div className="card-fn-b-2">
                    <img alt="" src={imagePreviewUrl} className="img-preview-fn" />
                    <div className="upload-button">
                        <input
                            id="icon-button-file"
                            className="file-input"
                            type="file"
                            onChange={(e) => photoUpload(e)}
                            accept="image/*" />
                        <label htmlFor="icon-button-file">
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                            >
                                {element}
                            </IconButton>
                        </label>
                        {/* <input
                            accept="image/*"
                            className={classes.input}
                            id="icon-button-file"
                            type="file"
                            onChange={(e) => photoUpload(e)}
                        /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

function FooterFormNews(props) {
    return (
        <>
            <BodyFormNews props={props.handleSubmit} />
            <div className="card-fn-footer">

            </div>
        </>
    )
}

function PortalNewsForm() {
    const dispatch = useDispatch()
    const handleSubmit = (title, category, content, image) => {
        if (title && category && content && image)
            dispatch(addNews(title, content, image, category, 0))
    }

    return (
        <div className="flex jus-con-center al-tem-center">
            <div className="card-form-news flex al-tem-center">
                <FooterFormNews handleSubmit={handleSubmit} />
            </div>

        </div>
    )
}

export default PortalNewsForm