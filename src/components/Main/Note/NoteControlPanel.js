import React from 'react'
import SaveButton from '../../common/buttons/SaveButton'
import CancelButton from '../../common/buttons/CancelButton'
import * as PropTypes from 'prop-types'
import Panel from '../../common/Panel'
import { changePage } from '../../../actions/pageActions'
import { connect } from 'react-redux'
import { PAGE_NOTE } from '../../../constants/PageConstants'

function NoteControlPanel (props) {
  const { className } = props

  const handleSave = () => {
    props.changePage(PAGE_NOTE)
  }

  return (
    <Panel className={className}>
      <CancelButton />
      <SaveButton onClick={handleSave} />
    </Panel>
  )
}

NoteControlPanel.propTypes = {
  changePage: PropTypes.func,
  className: PropTypes.string
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (page) => {
      dispatch(changePage(page))
    }
  }
}

export default connect(null, mapDispatchToProps)(NoteControlPanel)
