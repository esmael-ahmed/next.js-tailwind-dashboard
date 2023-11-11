'use client'
import  Link  from 'next/link';
import Image from 'next/image'
import logo from '../../public/Graph.svg'
import dashboard from '../../public/CategoryBlack.svg'
import orders from '../../public/Bag.svg'
import customers from '../../public/2 User.svg'
import inventory from '../../public/Folder.svg'
import { Poppins, Inter } from 'next/font/google'
import { useEffect } from 'react';
const poppins = Poppins({ subsets: ['latin'], weight: '700', })
const inter = Inter({ subsets: ['latin'], weight: '400', })

export default function Sidebar() {
    
  return <>
  <aside className=' h-full min-h-screen bg-white'>
    <div className=' flex items-center  ml-[35px] pt-[14px] '>
        <div className=' mr-[8px]' >
            <Image src={logo}  alt="Logo"/>
        </div>
        <div>
            <h1 className={`text-[20px] font-[700] text-[#45464E] ${poppins.className}`}>Metrix</h1>
        </div>
    </div>
    <div className=' mt-[62px] ml-[32px] mr-[32px] text-[#53545C]'>
    <div className=' dashboard  hover:bg-[#5570F1] rounded-[12px] hover:text-white px-[20px] py-[16px] mb-[8px] '>
        <Link href={'/dashboard'} >
        <div className=' flex items-center '>
            <div className=' mr-[16px]'>
            <Image  src={dashboard}  alt="dashboard"/>
            </div>
            <div>
                <h3 id="dash" className= {` text-[14px] font-[400] ${inter.className}`}>Dashboard</h3>
            </div>
        </div>
        </Link>
    </div>

    <div className=' orders  hover:bg-[#5570F1] rounded-[12px] hover:text-white px-[20px] py-[16px] mb-[8px] '>
        <Link href={'/orders'} >
        <div className=' flex items-center '>
            <div className=' mr-[16px]'>
            <Image  src={orders}  alt="orders"/>
            </div>
            <div>
                <h3 className= {` text-[14px] font-[400] ${inter.className}`}>Orders</h3>
            </div>
        </div>
        </Link>
    </div>

    <div className=' customers  hover:bg-[#5570F1] rounded-[12px] hover:text-white px-[20px] py-[16px] mb-[8px] '>
        <Link href={'/customers'} >
        <div className=' flex items-center '>
            <div className=' mr-[16px]'>
            <Image  src={customers}  alt="customers"/>
            </div>
            <div>
                <h3 className= {` text-[14px] font-[400] ${inter.className}`}>Customers</h3>
            </div>
        </div>
        </Link>
    </div>

    <div className=' inventory  hover:bg-[#5570F1] rounded-[12px] hover:text-white px-[20px] py-[16px] mb-[8px] '>
        <Link href={'/inventory'} >
        <div className=' flex items-center '>
            <div className=' mr-[16px]'>
            <Image  src={inventory}  alt="inventory"/>
            </div>
            <div>
                <h3 className= {` text-[14px] font-[400] ${inter.className}`}>Inventory</h3>
            </div>
        </div>
        </Link>
    </div>

    </div>
    

  </aside>
  </>
}
