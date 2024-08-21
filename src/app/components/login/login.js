import classNames from "classnames/bind";
import styles from './Login.module.scss'

const cx = classNames.bind(styles)

function LoginPage() {
    return ( 
        <div className={cx("container")}>
            <form action="" className={cx("form")}>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>Login</button>
            </form>
        </div>
     );
}

export default LoginPage;