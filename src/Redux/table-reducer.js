import {dataIsFetching, setDataReceived} from "./app-reducer";

const SET_DATA = 'SET_DATA';
const SORT_DATA = 'SORT_DATA';
const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';
const SET_SEARCHED_DATA = 'SET_SEARCHED_DATA';
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const SET_NEW_ITEM = 'SET_NEW_ITEM';
const SET_SEARCH_MADE = 'SET_SEARCH_MADE';
const RESET_SEARCH = 'RESET_SEARCH';


const initialState = {
    tableData: [],
    initialTableData: [],
    pageNumber: 1,
    pageSize: 50,
    description: null,
    searchMade: false,
    headers: [
        {
            text: 'id',
            sorted: null
        },
        {
            text: 'firstName',
            sorted: null
        },
        {
            text: 'lastName',
            sorted: null
        },
        {
            text: 'email',
            sorted: null
        },
        {
            text: 'phone',
            sorted: null
        }
    ]
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                tableData: action.data,
                initialTableData: action.data
            }
        }
        case SORT_DATA: {
            const arrToSort = [...state.tableData];
            const header = state.headers.find(item => item.text === action.sortType);
            header.sorted === null || header.sorted === 0 ?
                arrToSort.sort((a, b) => {
                    if (a[action.sortType] > b[action.sortType]) {
                        return 1;
                    }
                    if (a[action.sortType] < b[action.sortType]) {
                        return -1;
                    }
                    return 0;
                }) :
                arrToSort.sort((a, b) => {
                    if (a[action.sortType] > b[action.sortType]) {
                        return -1;
                    }
                    if (a[action.sortType] < b[action.sortType]) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                tableData: arrToSort,
                headers: state.headers.map(item => {
                    return item.text === action.sortType ? {
                        text: item.text,
                        sorted: header.sorted === 1 ? 0 : 1
                    } : {
                        text: item.text,
                        sorted: null
                    }
                })
            }
        }
        case SET_PAGE_NUMBER: {
            return {
                ...state,
                pageNumber: action.p
            }
        }
        case SET_SEARCHED_DATA: {
            return {
                ...state,
                pageNumber: 1,
                tableData: state.tableData.filter(item => {
                    return item['firstName'].toLowerCase().includes(action.searchData.toLowerCase())
                    || item['lastName'].toLowerCase().includes(action.searchData.toLowerCase())
                    || item['email'].toLowerCase().includes(action.searchData.toLowerCase())
                    || `${item['phone']}`.includes(action.searchData.toLowerCase())
                    || `${item['id']}`.includes(action.searchData.toLowerCase())
                })
            }
        }
        case SET_SEARCH_MADE: {
            return {
                ...state,
                searchMade: action.searchMade
            }
        }
        case RESET_SEARCH: {
            return {
                ...state,
                tableData: [...state.initialTableData],
                searchMade: false
            }
        }
        case SET_DESCRIPTION: {
            return {
                ...state,
                description: state.tableData.find(item => item.id === action.id)
            }
        }
        case SET_NEW_ITEM: {
            const arrToSort = [...state.tableData].sort((a, b) => b.id - a.id);
            const highestId = +arrToSort[0].id + 1;
            return {
                ...state,
                tableData: [
                    {
                        id: highestId,
                        firstName: action.formData.firstName,
                        lastName: action.formData.lastName,
                        email: action.formData.email,
                        phone: action.formData.phone
                    },
                    ...state.tableData
                ]
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const setData = (data) => ({type: SET_DATA, data});
export const sortData = (sortType) => ({type: SORT_DATA, sortType});
export const setPageNumber = (p) => ({type: SET_PAGE_NUMBER, p});
export const search = (searchData) => ({type: SET_SEARCHED_DATA, searchData});
export const setDescription = (id) => ({type: SET_DESCRIPTION, id});
export const setNewItem = (formData) => ({type: SET_NEW_ITEM, formData});
export const setSearchMade = (searchMade) => ({type: SET_SEARCH_MADE, searchMade});
export const resetSearch = () => ({type: RESET_SEARCH});

export const getData = (itemsCount) => async (dispatch) => {
    dispatch(dataIsFetching(true));
    let response = await fetch(`http://www.filltext.com/?rows=${itemsCount}&id=` +
        `{number|1000}&firstName={firstName}&lastName={lastName}&` +
        `email={email}&phone={phone|(xxx)xxx-xx-xx}&` +
        `address={addressObject}&description={lorem|32}`)
    let data = await response.json()
    dispatch(setData(data));
    dispatch(dataIsFetching(false));
    dispatch(setDataReceived());
}


export default tableReducer;