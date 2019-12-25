import React from 'react'
import PropTypes from 'prop-types'
import styles from './SidebarNotebooks.module.sass'

function SidebarNotebooks ({ notebooks }) {
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

SidebarNotebooks.propTypes = {
  notebooks: PropTypes.array.isRequired
}

export default SidebarNotebooks
