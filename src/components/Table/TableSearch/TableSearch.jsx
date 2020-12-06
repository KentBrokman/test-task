import React, {useState} from "react";
import styles from './TableSearch.module.css';
import buttonStyle from '../../../assets/button.module.css';
import cn from 'classnames';


export const TableSearch = ({search, searchMade, setSearchMade, resetSearch}) => {
    const [value, setValue] = useState('');
    const valueChangeHandler = (event) => {
        setValue(event.target.value)
    }
    const onSearch = () => {
        if(value) {
            search(value);
            setSearchMade(true);
        }
    }
    const onDefault = () => {
        resetSearch();
        setValue('')
    }
    return (
        <div className={styles.tableSearch}>
            <input type='text'
                   value={value} onChange={valueChangeHandler}/>
            <div>
                <button onClick={() => onSearch()}
                        className={buttonStyle.button + ' ' + buttonStyle.searchButton}>Search</button>
                {searchMade &&
                <button onClick={() => onDefault()}
                        className={buttonStyle.button + ' ' + buttonStyle.searchButton}>default</button>
                }
            </div>
        </div>
    )
}