import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Next Js</title>
    </Head>
    <h1 className={styles.flex}>hello next js</h1>
    </>
  )
}
