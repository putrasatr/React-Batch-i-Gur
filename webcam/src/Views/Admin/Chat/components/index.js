import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Chat() {
    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    const sender = useSelector(state => state.chat)
    const chat = () => {

    }
    const handleChangeContent = v => {
        setValue(v)
    }
    // useEffect(() => {
    //     dispatch(chat(value, sender))
    //     return () => {
    //         clearTimeout()
    //         dispatch(Chat())
    //     }
    // }, [dispatch])
    return (
        <div>
            <input name="sender" />
            <CKEditor
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
            />
        </div>
    )
}
export default Chat