import {types} from './action'

const defaultState = {
    message: '',
    type: '',
}

const alert = (state = defaultState, action) => {
    switch (action.type) {
        case types.clear: {
            return defaultState
        }
        case types.show: {
            return {
                message: action.message,
                type: action.color,
            }
        }
        default: {
            return state
        }
    }
}

export default alert