import {connect} from 'react-redux'
import {clear} from 'src/app/alert/action'
import App from 'src/app/App'

const mapStateToProps = (state) => {
    return {
        alert: state.apiPortal.alert,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDismiss: () => dispatch(clear()),
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer