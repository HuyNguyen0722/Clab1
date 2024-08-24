import classNames from "classnames/bind";
import styles from './User.module.scss'
import Searchbar from "@/app/components/search/searchbar";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../assets/images/user01.jpg'
import Pagination from "@/app/components/pagination/pagination";
import { fetchUser } from "@/app/lib/data";

const cx = classNames.bind(styles)

async function User() {

    const users = await fetchUser();
    console.log(users)

    return (
        <div className={cx("container")}>
            <div className={cx("top")}>
                <Searchbar placeholder="Search for a user..." />
                <Link href="/dashboard/users/adduser">
                    <button className={cx("addButton")}>Add New</button>
                </Link>
            </div>
            <table className={cx("table")}>
                <thead>
                    <tr>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={cx("user")}>
                                <Image src={logo} width={40} height={40} alt="" className={cx("userImage")} />
                                Nguyễn Văn Huy
                            </div>
                        </td>
                        <td>namkhon@gmail.com</td>
                        <td>22.07.2024</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <div className={cx("buttons")}>
                                <Link href="/dashboard/users/id">
                                    <button className={`${cx("button")} ${cx("view")}`}>View</button>
                                </Link>
                                <button className={`${cx("button")} ${cx("delete")}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={cx("user")}>
                                <Image src={logo} width={40} height={40} alt="" className={cx("userImage")} />
                                Nguyễn Văn Huy
                            </div>
                        </td>
                        <td>namkhon@gmail.com</td>
                        <td>22.07.2024</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <div className={cx("buttons")}>
                                <Link href="/dashboard/users/id">
                                    <button className={`${cx("button")} ${cx("view")}`}>View</button>
                                </Link>
                                <button className={`${cx("button")} ${cx("delete")}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={cx("user")}>
                                <Image src={logo} width={40} height={40} alt="" className={cx("userImage")} />
                                Nguyễn Văn Huy
                            </div>
                        </td>
                        <td>namkhon@gmail.com</td>
                        <td>22.07.2024</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <div className={cx("buttons")}>
                                <Link href="/dashboard/users/id">
                                    <button className={`${cx("button")} ${cx("view")}`}>View</button>
                                </Link>
                                <button className={`${cx("button")} ${cx("delete")}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>);
}

export default User;