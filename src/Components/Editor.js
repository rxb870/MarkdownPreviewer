import React from 'react'

export default function Editor(props) {
    return (
        <div>
            <button onClick={props.editorToggle}></button>
          <h1>This is the editor component</h1>
      
        </div>
    )
}

//need button or icon that when clicked changes state for editorClick : true  from false
