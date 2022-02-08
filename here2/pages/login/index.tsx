import type { NextPage } from 'next'
import Router from 'next/router'

import LoginComponent from '../../components/Login'
import styles from '../../styles/Login.module.css'

const Login: NextPage = () => {
    const onLogin = () => {
        Router.push('./')
    }
    return (
    <div className={styles.container}>
        <LoginComponent onClick={onLogin} />
    </div>
    )
}

export default Login
