import Card from "../components/card/card";
import styles from '../../assets/styles/Dashboard.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Dashboard() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("main")}>
                <div className={cx("cards")}>
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;