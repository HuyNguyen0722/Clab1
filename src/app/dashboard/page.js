import Card from "../components/card/card";
import styles from '../../assets/styles/Layout.module.scss'
import classNames from "classnames/bind";
import Rightbar from "../components/rightbar/rightbar";
import Transaction from "../components/transactions/transaction";
import Chart from "../components/chart/chart";

const cx = classNames.bind(styles);

function Dashboard() {

    return (
        <div className={cx("wrapper")}>
            <div className={cx("main")}>
                <div className={cx("cards")}>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transaction />
                <Chart />
            </div>
            <div className={cx("side")}>
                <Rightbar />
            </div>
        </div>
    );
}

export default Dashboard;