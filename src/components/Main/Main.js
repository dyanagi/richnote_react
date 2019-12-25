import React, { Component } from 'react'
import cx from 'classnames'
import styles from './Main.module.sass'
import Notes from './Notes/Notes'
import Note from './Note/Note'
import * as PropTypes from 'prop-types'
import { PAGE_NOTE, PAGE_NOTES } from '../../constants/PageConstants'

class Main extends Component {
  render () {
    const { className, page } = this.props

    const pageClassname = cx({
      [styles.pageNote]: page === PAGE_NOTE,
      [styles.pageNotes]: page === PAGE_NOTES
    })

    return (
      <main className={cx(styles.main, pageClassname, className)}>
        <Notes />
        <Note />
      </main>
    )
  }
}

export default Main

Main.propTypes = {
  className: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired
}
