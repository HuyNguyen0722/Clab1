import classNames from "classnames/bind";
import styles from './Pagination.module.scss'

const cx = classNames.bind(styles)
function Pagination() {
    return ( 
        <div className={cx("container")}>
            <button className={cx("button")} disabled>Previous</button>
            <button className={cx("button")}>Next</button>
        </div>
     );
}

export default Pagination;