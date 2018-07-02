import {types} from './action'

const defaultState = {
    exampleProp: 'Bruce Lee',
    anotherProp: 'Hai Tien',
    doingStuff: false,
}

const exampleStuff = (state = defaultState, action) => {
    switch (action.type) {
        case types.doSomething: {            
            return {...state, doingStuff: !state.doingStuff}
        }
        case types.updateExample: {
            return {...state, exampleProp: action.exampleProp}
        }
        case types.anotherThing: {
            const nextState = {
                exampleProp: 'Uma Thurman',
                anotherProp: 'The Bride',
                doingStuff: true,
            }

            return {...state, ...nextState}
        }
        default: {
            return state
        }
    }
}

export default exampleStuff