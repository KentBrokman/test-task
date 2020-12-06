const SET_DATA_RECEIVED = 'SET_DATA_RECEIVED';
const SET_DATA_IS_FETCHING = 'SET_DATA_IS_FETCHING';


const initialState = {
    dataReceived: false,
    dataIsFetching: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_RECEIVED: {
            return {
                ...state,
                dataReceived: true
            }
        }
        case SET_DATA_IS_FETCHING: {
            return {
                ...state,
                dataIsFetching: action.dataIsFetching
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const setDataReceived = () => ({type: SET_DATA_RECEIVED});
export const dataIsFetching = (dataIsFetching) => ({type: SET_DATA_IS_FETCHING, dataIsFetching})



export default appReducer;