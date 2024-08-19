import classNames from "classnames/bind";
import styles from './Transaction.module.scss';
import logo from '../../../assets/images/user01.jpg'
import Image from "next/image";

const cx = classNames.bind(styles)
function Transaction() {
    return (
        <div className={cx("container")}>
            <h2 className={cx("title")}>Lastest Transaction</h2>
            <table className={cx("table")}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amout</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div className={cx("user")}><Image className={cx("userImages")} src={logo} width={40} height={40} alt="NoImage" />Nguyễn Văn Huy</div></td>
                        <td><span className={`${cx("status")} ${cx("pending")}`}>Peding</span></td>
                        <td>14.08.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td><div className={cx("user")}><Image className={cx("userImages")} src={logo} width={40} height={40} alt="NoImage" />Nguyễn Văn Huy</div></td>
                        <td><span className={`${cx("status")} ${cx("done")}`}>Done</span></td>
                        <td>14.08.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td><div className={cx("user")}><Image className={cx("userImages")} src={logo} width={40} height={40} alt="NoImage" />Nguyễn Văn Huy</div></td>
                        <td><span className={`${cx("status")} ${cx("cancelled")}`}>Cancelled</span></td>
                        <td>14.08.2024</td>
                        <td>$3.200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Transaction;