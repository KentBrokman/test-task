import styles from './Table.module.css';
import buttonStyles from '../../assets/button.module.css';
import arrow from '../../imgs/arrow.svg';
import {useState} from "react";
import {Paginator} from "../common/Paginator/Paginator";
import {TableSearch} from "./TableSearch/TableSearch";
import TableForm from "./TableForm/TableForm";
import TableDescription from "./TableDescription/TableDescription";

const Table = ({tableDataToDisplay, tableData, sortData, searchMade, setSearchMade, resetSearch,
                   headers, setPageNumber, pageNumber, pageSize, search, setDescription, description, setNewItem}) => {
    const onSortClick = (e) => {
        const sortType = e.currentTarget.childNodes[0].childNodes[0].childNodes[0].data;
        sortData(sortType);
    }
    const onSubmit = (formData) => {
        setNewItem(formData)
        setShowTableForm(false)
    }
    const [showTableForm, setShowTableForm] = useState(false);
    return (
        <div className={styles.tableContainer}>
            <div className={styles.header}>
                <div className={styles.leftSide}>
                    <TableSearch search={search}
                                 searchMade={searchMade}
                                 setSearchMade={setSearchMade}
                                 resetSearch={resetSearch}/>
                    {tableData.length > pageSize &&
                    <Paginator totalUsersCount={tableData.length}
                               pageSize={pageSize}
                               onPageChange={setPageNumber}
                               pageNumber={pageNumber}/>
                    }
                </div>
                <div className={styles.rightSide}>
                    <button onClick={() => setShowTableForm(!showTableForm)}
                            className={buttonStyles.button + ' ' + buttonStyles.addItemButton}>Add new item</button>
                    {showTableForm && <TableForm onSubmit={onSubmit}/>}
                </div>
            </div>
            <div className={styles.table}>
                <table>
                    <thead>
                        <tr>
                            {headers.map(item => {
                                return (
                                    <th onClick={onSortClick}
                                        key={item.text}>
                                        <div className={styles.thInner}>
                                            <div className={styles.thInnerText}>{item.text}</div>
                                            {item.sorted === null ?
                                                <img src={arrow} style={{transform: 'rotate(315deg)'}}/> :
                                                item.sorted === 0 ? <img src={arrow} style={{transform: 'rotate(90deg)'}}/> :
                                                    <img src={arrow} style={{transform: 'rotate(270deg)'}}/>
                                            }
                                        </div>
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {tableDataToDisplay.map(item => {
                            return (
                                <tr key={item.id + '_' + item.firstName}
                                    onClick={() => setDescription(item.id)} className={styles.tr}>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            {description === null ? <div></div> :
                <div className={styles.description}>
                    <TableDescription description={description}/>
                </div>
            }
        </div>
    )
}

export default Table;
