import classNames from "classnames/bind";
import styles from './Card.module.scss';
import { MdSupervisedUserCircle } from "react-icons/md";

const cx = classNames.bind(styles)
function Card() {
    return (
        <div className={cx("container")}>
            <MdSupervisedUserCircle size={24} />
            <div className={cx("texts")}>
                <span className={cx("title")}>Total Users</span>
                <span className={cx("number")}>10.273</span>
                <span className={cx("detail")}>
                    <span className={cx("positive")}>12% </span>
                    more than previous week
                </span>
            </div>
        </div>
    );
}

export default Card;