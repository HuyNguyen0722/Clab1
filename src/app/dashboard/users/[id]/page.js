import classNames from "classnames/bind";
import styles from './SingleUser.module.scss'
import Image from "next/image";
import logo from '../../../../assets/images/user01.jpg'

const cx = classNames.bind(styles)

function SingleUserPage() {
    return (
        <div className={cx("container")}>
            <div className={cx("inforContainer")}>
                <div className={cx("imgContainer")}>
                    <Image src={logo} alt="" fill />
                </div>
                Nguyễn Văn Huy
            </div>
            <div className={cx("formContainer")}>
                <form action="" className={cx("form")}>
                    <input type="hidden" name="id" value="" />
                    <label>Username</label>
                    <input type="text" name="username" placeholder="" />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="" />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder="" />
                    <label>Address</label>
                    <textarea type="text" name="address" placeholder="" />
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true} selected="">Yes</option>
                        <option value={false} selected="">No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value={true} selected="">Yes</option>
                        <option value={false} selected="">No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>);
}

export default SingleUserPage;