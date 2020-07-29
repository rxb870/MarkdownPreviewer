
import ReactFCCtest from 'react-fcctest';
import React, { Component } from 'react'
import { connect } from 'react-redux'

// if editorClick && previewerClick false render list.
// else if editorClick true render editor Component
// else if previewerClick true render Previewer Component

//put markdown string in state? Make editor a controlledInput?

export class App extends Component {


  render() {
    return (
      <div className="App">

        <h1>Hello</h1>
        {/* <ReactFCCtest /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

