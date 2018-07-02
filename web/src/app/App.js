import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {Alert} from '@abc/protonpack'

export default class Wrapper extends Component {
    componentWillUnmount() {
        this.props.onDismiss()
    }

    render() {
        const {alert, onDismiss, children} = this.props

        return (
            <div>
                <Alert isOpen={Boolean(alert.message)}
                       onDismiss={onDismiss}
                       type={alert.type}>
                    {alert.message}
                </Alert>
                {children}
            </div>
        )
    }
}

Wrapper.propTypes = {
    children: PropTypes.node,
    alert: PropTypes.shape({
        type: PropTypes.string,
        message: PropTypes.string,
    }),
    onDismiss: PropTypes.func,
}