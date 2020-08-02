import React from 'react'
import { initText } from '../initText'


export default function Editor(props) {
    return (
        <div className="card-panel">
            <div className="row">
                <div className="valign-wrapper">
                    <div className="col s10">
                        <h2>Editor</h2>
                    </div>
                    <div className="col s2">
                        <a onClick={props.editorToggle} class="btn-floating right btn-large waves-effect waves-light teal"><i class="material-icons">fullscreen</i></a>
                    </div>

                </div>
            </div>
            <div className="divider"></div>
            <div className="input-field">
                <textarea style={{minHeight: "200px"}} id="editor" value={props.user_input} onChange={props.handleChange}>
                    {initText}
                </textarea>
                <label for="textarea1"></label>
            </div>
        </div>
    )
}
