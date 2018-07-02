import ApiPortalContainer from 'src/app/Container'

import Example1Container from 'src/app/exampleFeature1/example1/Container'

const containerRoot = localStorage.getItem('containerRoot') || ''
const apiPortalRoot = `${containerRoot}/api-portal`
const exampleFeatureRoot = `${apiPortalRoot}/example-feature`

export const routePaths = {
    exampleFeature: {
        example: `${exampleFeatureRoot}/example`,
    },
}

export {default as Reducer} from './reducers'

export const Routes = [
    {
        path: '',
        component: ApiPortalContainer,
        childRoutes:[
            {path: 'example', component: Example1Container},
        ],
    },
]
