
import ReactFCCtest from 'react-fcctest';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editorToggle } from '../actions/editorToggleA';
import { previewerToggle } from '../actions/previewerToggleA'
import Editor from './Editor';
import Previewer from './Previewer';



//put markdown string in state? Make editor a controlledInput?

class App extends Component {


  render() {
    let renderedComponent;
    if (!this.props.editor_toggle && !this.props.previewer_toggle) {
      renderedComponent = (
        <div>
          <Editor editorToggle={this.props.editorToggle} />
          <Previewer previewerToggle={this.props.previewerToggle} />
        </div>
      )
    } else if (this.props.editor_toggle && !this.props.previewer_toggle) {
      renderedComponent = (
        <div>
          <Editor editorToggle={this.props.editorToggle} />
        </div>
      )
    }
    else {
      renderedComponent = (
        <div>
          <Previewer previewerToggle={this.props.previewerToggle} />
        </div>
      )
    }
    return (
      <div className="App">
        <button onClick={this.props.editorToggle}>click me</button>


        {/* <ReactFCCtest /> */}
        {renderedComponent}
      </div>
    )
  }
}

// Redux

const mapStateToProps = (state) => {
  return {
    editor_toggle: state.ed_toggle_reducer.editor_toggle,
    previewer_toggle: state.ed_toggle_reducer.previewer_toggle,
    state: state
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    editorToggle: () => { dispatch(editorToggle()) },
    previewerToggle: () => { dispatch(previewerToggle()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

