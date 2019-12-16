import React from 'react'
import SidebarHeader from './SidebarHeader'
import styles from './Sidebar.module.scss'
import SidebarNotebooks from './SidebarNotebooks'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

function Sidebar ({ notebooks, className }) {
  return (
    <nav className={cx(styles.sidebar, className)}>
      <SidebarHeader />
      <p className={styles.allNotes}>All Notes</p>
      <SidebarNotebooks notebooks={notebooks} />
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    notebooks: state.notebooks
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  notebooks: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(Sidebar)
