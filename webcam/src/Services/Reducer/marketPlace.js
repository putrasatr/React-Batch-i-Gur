const news = (state = [], action) => {

    switch (action.type) {
        case 'LOAD_NEWS_SUCCESS':
            const { data } = action
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
            window.location.href = "/admin/portal-news"
            return {
                ...state
            }

        case 'ADD_NEWS_FAILURE':
            return {
                isLoading: false,
                messageLog: action.message
            }

        case 'DELETE_NEWS':
            return { data: state.data.filter((item) => item._id !== action.id) }

        case 'DELETE_NEWS_SUCCESS':
            return {
                ...state
            }

        case 'DELETE_NEWS_FAILURE':
            return {
                isLoading: false,
                messageLog: action.message
            }
        default:
            return state
    }
}
export default news