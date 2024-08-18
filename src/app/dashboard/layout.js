import classNames from "classnames/bind";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import styles from '../../assets/styles/Layout.module.scss'

const cx = classNames.bind(styles)

function Layout({children}) {
    return (
        <div className={cx("container")}>
            <div className={cx("menu")}>
                <Sidebar/>
            </div>
            <div className={cx("content")}>
                <Navbar/>
                {children}
            </div>
        </div>);
}

export default Layout;