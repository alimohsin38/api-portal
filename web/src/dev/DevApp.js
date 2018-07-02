import protonpack from '@abc/protonpack/dist/style.css' // eslint-disable-line no-unused-vars

import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import {Container, Row, Col} from '@abc/protonpack'
import {Routes} from 'src/index'
import store from 'src/store'

import styles from './devApp.styl'

const DevApp = () => (
    <Provider store={store}>
        <Container>
            <Row md={{center: true}} className={styles.container}>
                <Col md={12}>
                    <Router history={browserHistory}>
                        <Route path='/api-portal' childRoutes={Routes} />
                    </Router>
                </Col>
            </Row>
        </Container>
    </Provider>
)

ReactDom.render(<DevApp />, document.querySelector('#app'))

// Used to fire hot updates with the webpack hot middleware
if (module.hot) {
    module.hot.accept()
}
