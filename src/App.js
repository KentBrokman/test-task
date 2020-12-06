import styles from './App.module.css';
import TableContainer from "./components/Table/TableContainer";
import {connect} from "react-redux";
import StartPage from "./components/StartPage/StartPage";
import preloader from './imgs/preloaderLarge.svg';

function App(props) {
    return (
        <div className={styles.appWrapper}>
            {props.dataReceived ? <TableContainer/> :
                props.dataIsFetching ? <img src={preloader} /> :
                    <StartPage />
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    dataReceived: state.app.dataReceived,
    dataIsFetching: state.app.dataIsFetching
})

export default connect(mapStateToProps)(App);
