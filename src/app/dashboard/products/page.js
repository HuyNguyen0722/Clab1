import classNames from "classnames/bind";
import styles from './Product.module.scss'
import Link from "next/link";
import Image from "next/image";
import logo from '../../../assets/images/noproduct.jpg'
import Searchbar from "@/app/components/search/searchbar";
import Pagination from "@/app/components/pagination/pagination";

const cx = classNames.bind(styles)

function Product() {
    return (
        <div className={cx("container")}>
            <div className={cx("top")}>
                <Searchbar placeholder="Search for a product..." />
                <Link href="/dashboard/products/addproduct">
                    <button className={cx("addButton")}>Add New</button>
                </Link>
            </div>
            <table className={cx("table")}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={cx("product")}>
                                <Image src={logo} width={40} height={40} alt="" className={cx("productImage")} />
                                Iphone15
                            </div>
                        </td>
                        <td>Desc</td>
                        <td>$999</td>
                        <td>22.07.2024</td>
                        <td>34</td>
                        <td>
                            <div className={cx("buttons")}>
                                <Link href="/">
                                    <button className={`${cx("button")} ${cx("view")}`}>View</button>
                                </Link>
                                <button className={`${cx("button")} ${cx("delete")}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={cx("product")}>
                                <Image src={logo} width={40} height={40} alt="" className={cx("productImage")} />
                                Iphone15
                            </div>
                        </td>
                        <td>Desc</td>
                        <td>$999</td>
                        <td>22.07.2024</td>
                        <td>34</td>
                        <td>
                            <div className={cx("buttons")}>
                                <Link href="/">
                                    <button className={`${cx("button")} ${cx("view")}`}>View</button>
                                </Link>
                                <button className={`${cx("button")} ${cx("delete")}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={cx("product")}>
                                <Image src={logo} width={40} height={40} alt="" className={cx("productImage")} />
                                Iphone15
                            </div>
                        </td>
                        <td>Desc</td>
                        <td>$999</td>
                        <td>22.07.2024</td>
                        <td>34</td>
                        <td>
                            <div className={cx("buttons")}>
                                <Link href="/">
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

export default Product;