"use client"

import classNames from "classnames/bind";
import Link from "next/link";
import styles from './Menulink.module.scss'
import { usePathname } from "next/navigation";

const cx = classNames.bind(styles)

function MenuLink({ item }) {

    const pathname = usePathname();

    console.log(pathname)

    return (
        <Link href={item.path} className={`${cx("container")} ${pathname === item.path}`}>
            {item.icon}
            {item.title}
        </Link>
    );
}

export default MenuLink;