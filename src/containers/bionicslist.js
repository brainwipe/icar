import { connect } from 'react-redux'
import { addSystemToSuit } from '../actions'
import BionicsSystem from '../components/bionicssystem'

const mapStateToProps = (state, ownProps) => {
  return {
    bionics: state.bionics
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(addSystemToSuit(ownProps.index))
    }
  }
}

const BionicsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BionicsSystem)

export default BionicsList