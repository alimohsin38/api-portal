export const types = {
    clear: 'WebBoiler/ALERT_CLEAR',
    show: 'WebBoiler/ALERT_SHOW',
}

export const clear = () => {
    return {
        type: types.clear,
    }
}

export const show = (message, color) => {
    return {
        type: types.show,
        message,
        color,
    }
}