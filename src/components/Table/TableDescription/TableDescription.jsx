import React, {useState} from "react";
import styles from './TableDescription.module.css';
import buttonStyle from '../../../assets/button.module.css';
import cn from 'classnames';


export const TableDescription = ({description}) => {
    return (
        <>
            <div className={styles.name}>
                <div>{description.firstName} {description.lastName}</div>
                <div><b>email:</b> {description.email}</div>
                <div><b>phone:</b> {description.phone}</div>
            </div>
            <div className={styles.address}>
                Address
                <div><b>street:</b> {description.address.streetAddress}</div>
                <div><b>city:</b> {description.address.city}</div>
                <div><b>state:</b> {description.address.state}</div>
                <div><b>zip:</b> {description.address.zip}</div>
            </div>
            <div className={styles.descriptionText}>
                <b>Description: </b>
                {description.description}
            </div>
        </>
    )
}

export default TableDescription

