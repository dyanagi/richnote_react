import React, { Component } from 'react'
import 'draft-js/dist/Draft.css'
import {
  Editor,
  EditorState,
  RichUtils, convertToRaw
} from 'draft-js'

class RichEditor extends Component {
  constructor (props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
  }

  handleChange (editorState) {
    this.setState({ editorState })
  }

  handleBold () {
    this.handleChange(
      RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }

  handleItalic () {
    this.handleChange(
      RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
  }

  render () {
    const raw = convertToRaw(this.state.editorState.getCurrentContent())

    return (
      <div className='editor'>
        <button onClick={() => { this.handleBold() }}>Bold</button>
        <button onClick={() => { this.handleItalic() }}>Italic</button>
        <Editor
          onChange={(editorState) => { this.handleChange(editorState) }}
          editorState={this.state.editorState}
          placeholder='This is the editor.'
        />

        <div>
          {JSON.stringify(raw)}
        </div>
      </div>
    )
  }
}

export default RichEditor
