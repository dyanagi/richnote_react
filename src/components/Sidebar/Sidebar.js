import React from 'react'
import SidebarHeader from './SidebarHeader'

function Sidebar () {
  return (
    <div className='Sidebar'>
      <SidebarHeader />
      <div>
        <p>All Notes</p>
      </div>
      <div>
        <p>TODOs</p>
        <p>Web Design</p>
        <p>Programming Tips & Tricks</p>
        <p>＋ Add a notebook</p>
      </div>
    </div>
  )
}

export default Sidebar
