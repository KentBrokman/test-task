import React, {useState} from "react";
import styles from './TableForm.module.css';
import buttonStyle from '../../../assets/button.module.css';
import cn from 'classnames';
import {Field, reduxForm} from "redux-form";
import {Element} from "../../common/FormsControl/FormsControl";
import {required} from "../../../utils/Validators/Validators";

const Input = Element('input');
export const TableForm = ({handleSubmit}) => {
    return (
        <div className={styles.tableForm}>
            <form onSubmit={handleSubmit}>
                <div>
                    <b>First Name:</b>
                    <div>
                        <Field placeholder={'first name'}
                               component={Input}
                               name={'firstName'}
                               validate={[required]}/>
                    </div>
                </div>
                <div>
                    <b>Last Name:</b>
                    <div>
                        <Field placeholder={'last name'}
                               component={Input}
                               name={'lastName'}
                               validate={[required]}/>
                    </div>
                </div>
                <div>
                    <b>email:</b>
                    <div>
                        <Field placeholder={'email'}
                               component={Input}
                               name={'email'}
                               validate={[required]}/>
                    </div>
                </div>
                <div>
                    <b>phone:</b>
                    <div>
                        <Field placeholder={'phone'}
                               component={Input}
                               name={'phone'}
                               validate={[required]}/>
                    </div>
                </div>
                <div>
                    <button className={buttonStyle.button + ' ' + buttonStyle.addButton}>Add</button>
                </div>
            </form>
        </div>

    )
}

export default reduxForm({form: 'table'})(TableForm)

