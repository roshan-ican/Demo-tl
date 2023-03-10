import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import Hero from "@/components/Hero/Hero"
import Header from "@/components/Header/Header"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
      {/* <Hero/> */}
      
    </>
  )
}
