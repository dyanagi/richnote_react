import React from 'react'
import PropTypes from 'prop-types'
import styles from './SidebarNotebooks.module.scss'

SidebarNotebooks.propTypes = {
  notebooks: PropTypes.object.isRequired
}

function SidebarNotebooks (props) {
  const { notebooks } = props
  const notebookList = notebooks.map((notebook) => {
    return (
      <p key={notebook.id} className={styles.notebook}>{notebook.name}</p>
    )
  })
  return (
    <div className={styles.notebooks}>
      {notebookList}
    </div>
  )
}

export default SidebarNotebooks
