import tableReducer, {search, setData, setNewItem, sortData} from "./table-reducer";

let state = {
    tableData: [
        {
            "id": 5,
            "firstName": "Monica",
            "lastName": "Mclaughlin",
            "email": "SMatthews@ac.net",
            "phone": "(103)333-1469",
        },
        {
            "id": 72,
            "firstName": "Dmitry",
            "lastName": "Stilwell",
            "email": "DMahajan@aliquam.org",
            "phone": "(929)587-7260"
        },
        {
            "id": 10,
            "firstName": "Giuseppe",
            "lastName": "Marzolf",
            "email": "VEntinger@risus.com",
            "phone": "(438)499-0187",
        },
        {
            "id": 1,
            "firstName": "Renarddo",
            "lastName": "Post",
            "email": "AEllington@tellus.org",
            "phone": "(315)963-8076",
        },
        {
            "id": 33,
            "firstName": "Todd",
            "lastName": "Reilly",
            "email": "HBuckaloo@aliquam.net",
            "phone": "(731)781-8479",
        }
    ],
    headers: [
        {
            text: 'id',
            sorted: null
        },
        {
            text: 'firstName',
            sorted: null
        }
    ]
};

it('tableData should be equal to incoming tableData', () => {
    // 1. test data
    let action = setData([
        {
            "id": 8,
            "firstName": "Monica",
            "lastName": "Mclaughlin",
            "email": "SMatthews@ac.net",
            "phone": "(103)333-1469",
        },
        {
            "id": 120,
            "firstName": "Dmitry",
            "lastName": "Stilwell",
            "email": "DMahajan@aliquam.org",
            "phone": "(929)587-7260"
        },
        {
            "id": 97,
            "firstName": "Giuseppe",
            "lastName": "Marzolf",
            "email": "VEntinger@risus.com",
            "phone": "(438)499-0187",
        }
    ]);

    // 2. action
    let newState = tableReducer(state, action);

    // 3. expectation
    expect(newState.tableData.map(item => item.id).join('')).toBe('812097')
})

it('tableData should be sorted by incoming type', () => {
    // 1. test data
    let action = sortData('id');

    // 2. action
    let newState = tableReducer(state, action);

    // 3. expectation
    expect(newState.tableData.map(item => item.id).join('')).toBe('15103372')
})

it('tableData should be filtered by searchData', () => {
    // 1. test data
    let action = search('dd');

    // 2. action
    let newState = tableReducer(state, action);

    // 3. expectation
    expect(newState.tableData.map(item => item.firstName).join('')).toBe('RenarddoTodd')
})

it('length of tableData should be incremented', () => {
    // 1. test data
    let action = setNewItem({
        "id": 369,
        "firstName": "Geraldine",
        "lastName": "Gilby",
        "email": "TStallings@lacus.net",
        "phone": "(537)828-4673"
    });

    // 2. action
    let newState = tableReducer(state, action);

    // 3. expectation
    expect(newState.tableData.length).toBe(6)
})

it('first item should have firstName = Geraldine', () => {
    // 1. test data
    let action = setNewItem({
        "id": 369,
        "firstName": "Geraldine",
        "lastName": "Gilby",
        "email": "TStallings@lacus.net",
        "phone": "(537)828-4673"
    });

    // 2. action
    let newState = tableReducer(state, action);

    // 3. expectation
    expect(newState.tableData[0].firstName).toBe("Geraldine")
})
