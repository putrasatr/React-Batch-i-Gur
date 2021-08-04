import React, { useState } from "react"
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Chat() {
    const [value, setValue] = useState("")
    const handleChangeContent = v => {
        setValue(v)
    }
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