import { connect } from 'react-redux'
import { addSystemToSuit } from '../actions'
import BionicsSystem from '../components/bionicssystem'

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    bionics: []
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onHandleChoose: () => {
      dispatch(addSystemToSuit(ownProps.index))
    }
  }
}

const BionicsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BionicsSystem)

export default BionicsList