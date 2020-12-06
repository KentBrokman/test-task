import React, {useState} from "react";
import {connect} from "react-redux";
import {getData} from "../../Redux/table-reducer";
import buttonStyle from '../../assets/button.module.css';
import styles from './StartPage.module.css';


const StartPage = (props) => {

    return (
        <div className={styles.startPage}>
            <div>Get table for</div>
            <div>
                <button onClick={() => props.getData(32)}
                        className={buttonStyle.button + ' ' + buttonStyle.startPageButton}>32</button>
                <button onClick={() => props.getData(1000)}
                        className={buttonStyle.button + ' ' + buttonStyle.startPageButton}>1000</button>
            </div>
            <div>items</div>
        </div>
    )
}

const mapDispatchToProps = (state) => ({

})


export default connect(mapDispatchToProps, {getData})(StartPage);

