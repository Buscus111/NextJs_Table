import Head from 'next/head'
import type { NextPage, GetServerSideProps } from 'next'
import { getSession } from "next-auth/react"

import type { TableDataProps } from '../types/table'
import HomeComponent from '../components/Home'


type Props = TableDataProps

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Here2</title>
        <meta name="description" content="Development version 1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent data={data} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  } else {
      const res = await fetch('http://localhost:3000/fakeData.json')
      const data = await res.json()
      return {
        props: { session, data }
      }
  }
}

export default Home
