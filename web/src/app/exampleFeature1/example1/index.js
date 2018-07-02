import PropTypes from 'prop-types'
import React, {Component} from 'react'

import styles from './example1.styl'

import {Row, Col, Button} from '@abc/protonpack'
import {Card} from '@abc/fedagents'

import {labels} from 'src/utils/staticData'

class Example1View extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {exampleProp, getSomething} = this.props

        return (
            <Card>
                <Row sm={{justifyContent: 'center', alignItems: 'center'}} className={styles.bigRow}>
                    <Col sm={2} className={styles.xyz}>{labels.who}: {exampleProp}</Col>
                    <Col sm={2}><Button btnStyle="primary" onClick={getSomething}>Submit</Button></Col>
                </Row>
            </Card>
        )
    }
}

Example1View.propTypes = {
    exampleProp: PropTypes.string.isRequired,
    getSomething: PropTypes.func.isRequired,
}

export default Example1View