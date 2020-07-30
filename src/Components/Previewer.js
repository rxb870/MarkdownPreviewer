import React from 'react'

export default function Previewer(props) {
    return (
        <div>
        <button onClick={props.previewerToggle}>P</button>
          <h1>This is the previewer component</h1>
      
        </div>
    )
}



//need button or icon that when clicked changes state for previewerClick : true  from false