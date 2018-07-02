import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import example1 from 'src/app/exampleFeature1/example1/reducer'
import alert from 'src/app/alert/reducer'

const ApiPortalReducer = combineReducers({
    example1,
    alert,
})

export default ApiPortalReducer

export const devApiPortalReducer = combineReducers({
    apiPortal: ApiPortalReducer,
    form,
})