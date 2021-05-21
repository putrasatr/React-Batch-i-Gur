const news = (state = [], action) => {

    switch (action.type) {
        case 'LOAD_NEWS_SUCCESS':
            const {data} = action
            return {
                data,
                ...state
            }

        case 'LOAD_NEWS_FAILURE':
            return {
                messageReg: action.message,
                isLoading: false,
            }
        case 'ADD_NEWS_SUCCESS':
            return {
                ...state
            }

        case 'ADD_NEWS_FAILURE':
            return {
                isLoading: false,
                messageLog: action.message
            }
        default:
            return state
    }
}
export default news