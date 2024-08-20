"use client"

import classNames from "classnames/bind";
import { usePathname } from "next/navigation";
import styles from './Navbar.module.scss'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";

const cx = classNames.bind(styles)
function Navbar() {

    const pathname = usePathname();

    return (
        <div className={cx("container")}>
            <div className={cx("title")}>{pathname.split("/").pop()} </div>
            <div className={cx("menu")}>
                <div className={cx("search")}>
                    <MdSearch />
                    <input type="text" placeholder="Search..." className={cx("input")} />
                </div>
                <div className={cx("icons")}>
                    <MdOutlineChat size={20} />
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;