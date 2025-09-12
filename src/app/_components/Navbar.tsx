"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import logo from '../../assets/images/freshcart-logo.svg'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react';
import { CartRes } from '@/interfaces/cart.interface';
import { useQuery } from '@tanstack/react-query';
export default function Navbar() {
  const {data} = useQuery<CartRes>({
      queryKey:['cart'],queryFn: async ()=>{
        const res = await fetch(`/api/cart`)
        const payload = await res.json()
        return payload
    }})
  const [isOpen,setOpen] = useState(true)
  const { data: session, status } = useSession()
  const links = [
    {path:'/',element:'home'},
    {path:'/products',element:'products'},
    {path:'/catrgorie',element:'catrgories'},
    {path:'/brands',element:'brands'},
  ]
   const auths = [
    {path:'/auth/login',element:'login'},
    {path:'/auth/register',element:'register'},
  ]


  function handleLogOut()
  {
    signOut({callbackUrl:'/'})
  }


  return (
    <div>
      

<nav className="bg-light w-full border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-4">
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">

     <Image src={logo} alt='freshcart'/>
    </Link>
    <button onClick={()=>setOpen(!isOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className={`${isOpen&&'hidden'} justify-between w-full md:flex `} id="navbar-default">
      <ul className="font-medium flex flex-col gap-2 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:mt-0 md:border-0  dark:bg-gray-800  dark:border-gray-700">
      
        {links.map(link=>(
        
        <li key={link.path}>
          <Link href={link.path} className="block py-2 px-3  rounded-sm md:bg-transparent  md:p-0 dark:text-white" aria-current="page">{link.element.toUpperCase()}</Link>
        </li>
        ))}
     
      </ul>
       <ul className="font-medium flex flex-col gap-2 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:mt-0 md:border-0  dark:bg-gray-800  dark:border-gray-700">
       
       {status== 'unauthenticated'?
       <>
               {auths.map(link=>(
        
        <li key={link.path}>
          <Link href={link.path} className=" text-gray-500 block py-2 px-3  rounded-sm md:bg-transparent  md:p-0 dark:text-white" aria-current="page">{link.element.toUpperCase()}</Link>
        </li>
        ))}
       </>:        <>
        <li className="cursor-pointer" onClick={handleLogOut}>LogOut</li>
        <li>HI {session?.user?.name}</li>
        
        <li><Link href={'/cart'} className='relative'>
        <span className='absolute -top-2 -right-8 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
          {data?.numOfCartItems}
          </span>
        </Link>
        <i className='fa-solid fa-cart-shopping'></i></li>
        </>
      }



     
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}
