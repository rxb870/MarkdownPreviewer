
import ReactFCCtest from 'react-fcctest';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editorToggle } from '../actions/editorToggleA';
import { previewerToggle } from '../actions/previewerToggleA';
import Editor from './Editor';
import Previewer from './Previewer';
import DOMPurify from 'dompurify';
import marked from 'marked'
import { initText } from '../initText';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: initText
    }
  }

  getMarkedDown = (text) => {
    const dirtyText = marked(text, {
      breaks: true
    });
    const cleanText = DOMPurify.sanitize(dirtyText);
    return { __html: cleanText };
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({
      userInput: e.target.value
    })
  }

  render() {
    let renderedComponent;
    if (!this.props.editor_toggle && !this.props.previewer_toggle) {
      
      renderedComponent = (
        <div>
          <Editor
            editorToggle={this.props.editorToggle}
            handleChange={this.handleChange}
        
          />
          <Previewer
            previewerToggle={this.props.previewerToggle}
            userInput={this.state.userInput}
            getMarkedDown={this.getMarkedDown}
          />
        </div>
      )
    } else if (this.props.editor_toggle && !this.props.previewer_toggle) {
    
      renderedComponent = (
        <div>
          <Editor
            editorToggle={this.props.editorToggle}
            handleChange={this.handleChange}
          />
        </div>
      )
    }
    else {
      renderedComponent = (
        <div>
          <Previewer
            previewerToggle={this.props.previewerToggle}
            userInput={this.state.userInput}
            getMarkedDown={this.getMarkedDown}
          />
        </div>
      )
    }
    return (
      <div className="container">
         
        {renderedComponent}
        <ReactFCCtest />
      </div>
    )
  }
}

// Redux

const mapStateToProps = (state) => {
  return {
    editor_toggle: state.ed_toggle_reducer.editor_toggle,
    previewer_toggle: state.ed_toggle_reducer.previewer_toggle,
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    editorToggle: () => { dispatch(editorToggle()) },
    previewerToggle: () => { dispatch(previewerToggle()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

