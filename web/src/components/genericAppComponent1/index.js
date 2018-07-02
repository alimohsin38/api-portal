import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router'
import {BaseText} from '@abc/protonpack'
import {Card} from '@abc/fedagents'

import styles from './genericAppComponent.styl'

export default function GenericAppComponent(props) {
    const {thingsAndStuff} = props

    return (
        <Card className={styles.card}>
            <BaseText>
                {thingsAndStuff} and <Link to="/">stuff</Link>
            </BaseText>
        </Card>
    )
}

GenericAppComponent.propTypes = {
    thingsAndStuff: PropTypes.any.isRequired,
}