import fetcher from '@abc/fetcher'
import {show as showAlert} from 'src/app/alert/action'
import {messages} from 'src/utils/staticData'

export const types = {
    doSomething: 'apiPortal/DO_SOMETHING',
    anotherThing: 'apiPortal/ANOTHER_THING',
    updateExample: 'apiPortal/UPDATE_EXAMPLE',
}

export const fetchSomething = () => (dispatch, getState) => {
    const someReduxStateProp = getState().apiPortal.example1.exampleProp

    dispatch(toggleDoingStuff())

    return fetcher.get(`${ENV_APP_ROOT}/example/isOk`)
        .json((response) => {
            if (response.example !== someReduxStateProp) {
                dispatch(setExample(response.exampleStuff))
            }
        })
        .catch(() => {
            dispatch(toggleDoingStuff())
            dispatch(showAlert(messages.internalServerError, 'danger'))
        })
}

const toggleDoingStuff = () => {
    return {
        type: types.doSomething,
    }
}

const setExample = (exampleStuff) => {
    return {
        type: types.updateExample,
        exampleProp: exampleStuff,
    }
}
