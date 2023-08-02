"use client"

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { links } from "../../data/links";
import ActiveLink from "./ActiveLink";


import { FiDelete, FiMoon, FiPlus, FiSun } from "react-icons/fi";
import { BiBell, BiChevronDown, BiSearch, BiMenu } from "react-icons/bi";


import useDarkMode from "../../helpers/useDarkMode";


const navbar = () => {
  const [search, setSearch] = useState("");
  const [mode, toggleMode] = useDarkMode("JobIt-Next-theme-mode");
  return (
    <div
      className='navbar fixed w-full z-10 top-0 left-0 px-[2%]
    md:px-[6%]  flex-center-between py-[0.35rem] bg-white dark:bg-dark-card border-b dark:border-slate-800'
    >
      <Link href="/">
        <div className="hidden md:block flex-shrink-0">
          <div className="image-wrapper">
            <Image
              src="/logo.png"
              alt="logo"
              layout="fill"
              className="!object-contain !h-8 !w-20 !relative"
            />
          </div>
        </div>
      </Link>
      <Link href="/">
        <a className="md:hidden">
          <Image src="/logo-mobile.png" alt="logo" width={32} height={32} />
        </a>
      </Link>
      {/*-------------------------------------- Desktop Menu------------------------------------- */}

      <ul
        className='hidden md:flex-align-center space-x-3 lg:space-x-6'>
        {links.map(({ id, linkText, url }) => (
          <ActiveLink href={url} key={id}>
            {linkText}
          </ActiveLink>
        ))}
      </ul>
      {/*-------------------------------------- Desktop Menu------------------------------------- */}
      {/*---------------------------------------- Mobile Menu------------------------------------- */}
      <div
        className={`mobile-modal fixed w-screen h-screen top-0 left-0 bg-black/50
          z-10 opacity-0 pointer-events-none transition-all `}
      >
        <ul></ul>
      </div>
      {/*---------------------------------------- Mobile Menu------------------------------------- */}
      {/*-------------------------------- Post Job------------------------------------------------------- */}
      <Link href="/post">
        <a
          className='btn !p-2 md:!px4 btn-primary-light flex-align-center gap-x-2'
        >
          <FiPlus /> <span className="hidden md:block">post job</span>
        </a>

      </Link>
      {/*---------------------- Notifications toggle------------------------------------------------ */}

      <div className='icon-box !opacity-100 relative notification-btn'>
        <div className='relative'>

          <BiBell className="notification-btn text-muted" />
          <div className="absolute w-2 h-2 bg-primary top-0 right-0 rounded-full notification-btn"></div>

        </div>
      </div>
      {/*----------------------------- search Bar----------------------------------------------------- */}
      <form action="">
        <div className='flex-align-center relative h-9 w-9 transition-a  border-slate-300 dark:border-hover-color rounded-full'>
          <input type="search"
            className={`outline-none border-none h-0 w-0 bg-transparent`}
            placeholder="search by title or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span
            className="w-9 h-9 grid place-items-center hover:bg-slate-100 sm:cursor-pointer dark:hover:bg-hover-color rounded-full flex-shrink-0"

          >
            <BiSearch className="text-muted" />
          </span>
        </div>
      </form>

      {/*----------------------------- Dark mode toggle-------------------------------------------------- */}
      <div
        className='icon-box bg-slate-100 dark:bg-[#2b2b35]'
        onClick={toggleMode}
      >
        {mode === "dark" ? <FiSun /> : <FiMoon />}
      </div>
      <div className="w-[1px] h-6 bg-slate-200 dark:bg-slate-700"></div>

    </div>
  )
}

export default navbar