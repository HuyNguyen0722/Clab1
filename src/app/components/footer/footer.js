import classNames from "classnames/bind";
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

function Footer() {
    return (
        <div className={cx("container")}>
            <div className={cx("logo")}>Nguyễn Huy</div>
            <div className={cx("text")}>©2024 All rights reserved.</div>
        </div>
    );
}

export default Footer;