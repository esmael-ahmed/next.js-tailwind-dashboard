'use client'
import  {useContext, useEffect}  from 'react'
import { storeContext } from '../context/store';
import { Poppins, Inter } from 'next/font/google'
import Image from 'next/image'
import arrowDown from '../../public/fi_chevron-down.svg'
import notfication from '../../public/Notification.svg'
import home from '../../public/Home.svg'
import profile from '../../public/profile 1.png'

const poppins = Poppins({ subsets: ['latin'], weight: '500', })
const inter = Inter({ subsets: ['latin'], weight: '400', })

export default function Header() {
    const {headerName} = useContext(storeContext)
   
    
  return <>
  <header className='   w-full bg-white'>
    <div className=' flex items-center justify-between py-[14px] px-[21px]'>
    <div >
    <h1 className={` text-[#45464E] text-[20px] ${poppins.className}`}>{headerName}</h1>
    </div>
    <div className=' flex items-center'> 
    <div className=' flex items-center px-[12px] py-[5px] rounded-[8px] bg-[#FEF5EA]'>
        <p className={`text-[#1C1D22] text-[14px] ${inter.className}`}>Nanny’s Shop</p>
        <div className='ml-[20px]'>
            <Image src={arrowDown}  alt="arrowDown"/>
        </div>
    </div>
    <div className='mx-[20px]'>
    <Image src={notfication}  alt="notfication"/>
    </div>
    <div className='rounded-[8px]'>
    <Image src={profile}  alt="profile"/>
    </div>
    </div>
    </div>
    <div className='  px-[20px] py-[4px]'>
      <div className=' flex items-center'>
      <Image src={home}  alt="home"/>
      <div className={`text-[#8B8D97] text-[12px] mx-[11px] ${inter.className}`}> /</div>
      <div className={`text-[#8B8D97] text-[12px] ${inter.className}`}>{headerName}</div>
      </div>
    </div>
    

  </header>
  </>
}
