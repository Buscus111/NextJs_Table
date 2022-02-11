import type { NextPage } from 'next'
import Head from 'next/head'
import Login from '../components/Login'

const LoginPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login - Here2</title>
        <meta name="description" content="Development version 0.1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  )
}

export default LoginPage