import Table from "./Table";
import {connect} from "react-redux";
import {
    getData, resetSearch,
    search,
    setDescription,
    setNewItem,
    setPageNumber,
    setSearchMade,
    sortData
} from "../../Redux/table-reducer";


const TableContainer = (props) => {
    const leftBorderTableDataToDisplay = (props.pageNumber - 1) * props.pageSize;
    const rightBorderTableDataToDisplay = props.pageNumber * props.pageSize - 1;
    const tableDataToDisplay = props.tableData.filter((item, index) => {
        return index >= leftBorderTableDataToDisplay && index <= rightBorderTableDataToDisplay
    })
    return (

        <Table tableDataToDisplay={tableDataToDisplay}
               tableData={props.tableData}
               sortData={props.sortData}
               headers={props.headers}
               pageNumber={props.pageNumber}
               setPageNumber={props.setPageNumber}
               pageSize={props.pageSize}
               search={props.search}
               setDescription={props.setDescription}
               description={props.description}
               setNewItem={props.setNewItem}
               searchMade={props.searchMade}
               setSearchMade={props.setSearchMade}
               resetSearch={props.resetSearch}/>
    )
}

const mapDispatchToProps = (state) => {
    return {
        tableData: state.tablePage.tableData,
        headers: state.tablePage.headers,
        pageNumber: state.tablePage.pageNumber,
        pageSize: state.tablePage.pageSize,
        description: state.tablePage.description,
        searchMade: state.tablePage.searchMade
    }
}

export default connect(mapDispatchToProps, {
    getData,
    sortData,
    setPageNumber,
    search,
    setDescription,
    setNewItem,
    setSearchMade,
    resetSearch
})(TableContainer);
