import React, { Component } from 'react'
import './App.scss'
import Sidebar from './Sidebar/Sidebar'
import Note from './Note/Note'
import NoteList from './NoteList/NoteList'
import SaveButton from './Common/SaveButton'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Sidebar />
        <NoteList />
        <Note />
        <SaveButton/>
      </div>
    )
  }
}

export default App
