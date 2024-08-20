import classNames from "classnames/bind";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import styles from '../../assets/styles/Layout.module.scss'
import Footer from "../components/footer/footer";

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
                <Footer/>
            </div>
        </div>);
}

export default Layout;