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

    const users = (await fetchUser()) || [];

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
                        <td>name</td>
                        <td>email</td>
                        <td>Created At</td>
                        <td>role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination />
        </div>);
}

export default User;