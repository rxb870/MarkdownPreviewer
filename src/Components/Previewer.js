import React from 'react'


export default function Previewer(props) {
    return (
        
        <div className="card-panel">
            <div className="row">
            <div className="valign-wrapper">
                <div className="col s10">
                <h2>Previewer</h2>
                    </div>
                    <div className="col s2">
                    <a onClick={props.previewerToggle} class="btn-floating right btn-large waves-effect waves-light teal"><i class="material-icons">fullscreen</i></a>
</div>
                    
                </div>
</div>
<div className="divider"></div>
<div id="preview" dangerouslySetInnerHTML={props.getMarkedDown(props.userInput)} />
        </div>    



      
        
    )
}



