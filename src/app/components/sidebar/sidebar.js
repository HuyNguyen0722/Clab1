import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'
import logo from '../../../assets/images/user01.jpg'
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
} from 'react-icons/md'
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const cx = classNames.bind(styles)

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />,
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />,
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />,
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics />,
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople />,
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            },
        ],
    },
];

const Sidebar = async () => {
    return (
        <div className={cx("container")}>
            <div className={cx("user")}>
                <Image className={cx("userImage")} src={logo} alt="avatar" width={50} height={50} />
                <div className={cx("userDetail")}>
                    <span className={cx("userName")}>Nguyễn Văn Huy</span>
                    <span className={cx("userTitle")}>Administrator</span>
                </div>
            </div>
            <ul className={cx("list")}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={cx("cat")}>{cat.title}</span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;