import classNames from "classnames/bind";
import styles from './AddUser.module.scss'

const cx = classNames.bind(styles)
function AddUserPage() {
    return (
        <div className={cx("container")}>
            <form action="" className={cx("form")}>
                <input type="text" placeholder="username" name="username" required />
                <input type="email" placeholder="email" name="email" required />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                />
                <input type="phone" placeholder="phone" name="phone" />
                <select name="isAdmin" id="isAdmin">
                    <option value={false}>
                        Is Admin?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={true}>
                        Is Active?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea
                    name="address"
                    id="address"
                    rows="16"
                    placeholder="Address"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddUserPage;