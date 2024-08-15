import classNames from "classnames/bind"
import styles from '../../assets/styles/Sidebar.module.scss'
import Link from "next/link"

const cx = classNames.bind(styles)
export default function Sidebar() {
    return (
        <main>
            <div className={cx("infor")}>

            </div>
            <div className={cx("title")}>
                <ul>
                    <li><Link href="">Dashboard</Link></li>
                    <li><Link href="">Order</Link></li>
                    <li><Link href="">Statistic</Link></li>
                    <li><Link href="">Product</Link></li>
                    <li><Link href="">Stock</Link></li>
                    <li><Link href="">Offer</Link></li>
                </ul>
            </div>
            <div className={cx("social")}></div>
        </main>
    )
}