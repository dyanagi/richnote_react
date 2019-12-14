import React from 'react'
import SidebarHeader from './SidebarHeader'
import styles from './Sidebar.module.scss'
import SidebarNotebooks from './SidebarNotebooks'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Sidebar (props) {
  const { notebooks } = props
  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <p className={styles.allNotes}>All Notes</p>
      <SidebarNotebooks notebooks={notebooks} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notebooks: state.notebooks
  }
}

export default connect(mapStateToProps)(Sidebar)

Sidebar.propTypes = {
  notebooks: PropTypes.object.isRequired
}
