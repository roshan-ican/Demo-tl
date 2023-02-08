import Link from "next/link"
import React from "react"
import Head from "next/head"
import "./Header.module.css"
import Packages from "../landingPage/Packages"
const Header = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>
          {title ? title + " - Atithi devo bhava" : "Atithi devo bhava"}
        </title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-8 justify-around shadow-md">
            <Link legacyBehavior href="/">
              <a className="text-lg bg-[#019971] p-2.5 uppercase no-underline text-white font-bold">
                Atithi devo bhava
              </a>
            </Link>
            <div className="md:flex hidden space-x-4 " id="navbar-sticky">
              <Link legacyBehavior href="/home">
                <a className="p-2 font-semibold text-[#019971] no-underline hover:text-black">
                  Home
                </a>
              </Link>
              <Link legacyBehavior href="/login">
                <a className="p-2 font-semibold text-[#019971] no-underline hover:text-black">
                  About Us
                </a>
              </Link>
              <Link legacyBehavior href="/login">
                <a className="p-2 font-semibold text-[#019971] no-underline hover:text-black">
                  Packages
                </a>
              </Link>
              <Link legacyBehavior href="/login">
                <a className="p-2 font-semibold text-[#019971] no-underline hover:text-black">
                  Places
                </a>
              </Link>
            </div>
            <div>
              <Link legacyBehavior href="/login">
                <a className="p-2 px-4 text-center font-bold bg-[#019971] text-white rounded-full no-underline hover:text-black">
                  Contact Us
                </a>
              </Link>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">
          <Packages />
        </main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2023 Atithi devo bhava </p>
        </footer>
      </div>
    </>
  )
}
export default Header
