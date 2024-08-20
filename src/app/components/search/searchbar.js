import classNames from "classnames/bind";
import styles from './Searchbar.module.scss'
import { MdSearch } from "react-icons/md";


const cx = classNames.bind(styles)

function Searchbar({placeholder}) {
    return (
        <div className={cx("container")}>
            <MdSearch/>
            <input type="text"placeholder={placeholder} className={cx("input")} />
        </div>
    );
}

export default Searchbar;
