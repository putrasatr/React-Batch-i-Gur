const view = (state = [], action) => {

    switch (action.type) {
        case 'MENU_VIEW':
            const { boolean } = action
            return boolean
        default:
            return state
    }
}
export default view