import {connect} from 'react-redux'
import {fetchSomething} from './action'
import Example1 from './'

const mapStateToProps = (state) => {
    return {
        exampleProp: state.apiPortal.example1.exampleProp,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSomething: () => dispatch(fetchSomething()),
    }
}

const Example1Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Example1)

export default Example1Container