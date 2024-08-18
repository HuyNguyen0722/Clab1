import classNames from "classnames/bind";
import styles from './Card.module.scss';

const cx = classNames.bind(styles)
function Card() {
    return (
        <div className={cx("container")}>

        </div>
    );
}

export default Card;