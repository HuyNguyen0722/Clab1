import classNames from "classnames/bind";
import styles from './Login.module.scss'
import {useFormState} from 'react-dom'
import { useState } from "react";
import {authenticate} from '//'

const cx = classNames.bind(styles)

function Login() {

    const [state, formAction] = useState(authen)

    return ( 
        <form action={formAction} className={cx("form")}>
            <h1>Login</h1>
            <input placeholder="username" type="text" name="username"/>
            <input placeholder="password" type="password" name="password"/>
            <button>Login</button>
            {state && state}
        </form>
     );
}

export default Login;