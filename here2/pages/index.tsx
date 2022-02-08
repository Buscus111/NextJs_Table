import { useEffect } from 'react'
import Router from 'next/router'

import type { NextPage, GetServerSideProps } from 'next'

import TableComponent from '../components/Table'
import styles from '../styles/Home.module.css'

type Props = {
  data: any,
}

const Home: NextPage<Props> = ({data}) => {
  console.log(data, 'helllo')

  useEffect(() => {
    if (false) {
      Router.push('./login')
    }
  })
  return (
    <div className={styles.container}>
      <TableComponent/>
    </div>)
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const res = await fetch('http://localhost:3000/api/hello')
  // const data = await res.json()
  const data = {name: 'Joe'}
  return { props: { data } }
}

export default Home
