import React, { Component } from 'react'
import './App.css'
import Sidebar from './Sidebar/Sidebar'
import Note from './Note/Note'
import NoteList from './NoteList/NoteList'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Sidebar />
        <NoteList />
        <Note />
      </div>
    )
  }
}

export default App
