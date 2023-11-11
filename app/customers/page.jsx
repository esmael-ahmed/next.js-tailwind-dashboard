'use client'
import React, { useContext, useEffect } from 'react'
import { storeContext } from '../context/store'
import  Link  from 'next/link';
import Image from 'next/image'
import arrowDown from '../../public/fi_chevron-downDash.svg'
import sort from '../../public/sort.svg'
import plus from '../../public/fi_plus.svg'
import users from '../../public/2 User.svg'
import { Poppins, Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], weight: '400', })
const inter500 = Inter({ subsets: ['latin'], weight: '500', })
const poppins = Poppins({ subsets: ['latin'], weight: '500', })

export default function Customers() {
  const { setHeaderName, allCustomers} = useContext(storeContext)
  useEffect(() => {
    setHeaderName("Customers")
  }, [])

  
  return <>
  <section>
    <div className=' flex justify-between items-center'>
      <p className={`text-[#45464E] text-[16px] ${inter500.className}`}>Customers Summary</p>
      <Link href={'/customers/addnewcustomer'}>
      <div className=' flex items-center text-white bg-[#5570F1] rounded-[12px] px-[16px] py-[10px] hover:bg-blue-700'>
      <Image src={plus}  alt="plus"/>
        <p className={`text-[14px] ml-[10px] ${inter.className}`}>Add a New Customer</p>
      </div>
      </Link>
    </div>




    <div className=' bg-white px-[15px] py-[11px] rounded-[12px] my-[20px]'>
        <div className=' flex items-center justify-between '>
          <div className=' p-[8px] rounded-[8px] bg-[#FFCC9129]'>
          <Image src={users}  alt="users"/>
          </div>
          <div className=' flex items-center'>
              <p className={`text-[#BEC0CA] text-[12px] mr-[7px] ${inter.className}`}>This Week</p>
              <Image src={arrowDown}  alt="arrowDown"/>
          </div>
        </div>


        <div className=' mt-[32px]'>
          
            <p className={`text-[#8B8D97] text-[14px] mb-[8px] ${inter.className}`}>All Customers</p>
            <p className={`text-[#45464E] text-[20px] ${poppins.className}`}>{allCustomers.length}</p>
        </div>
      </div>




      <div className=' bg-white py-[22px] px-[21px] rounded-[12px]'>
      <p className={`text-[16px] text-[#45464E] text-center mb-[20px] ${inter500.className}`}>Customers</p>
      <table className=' w-full text-left border-spacing-y-3 ' >
  <thead className=' border-y-2 '>
    <tr>
      <th className={`text-[#2C2D33] text-[14px] ${inter.className}`}>Customer Name</th>
      <th className={`text-[#2C2D33] text-[14px] ${inter.className}`} >Email</th>
      <th className={`text-[#2C2D33] text-[14px] ${inter.className}`}>Nationality</th>
      <th className={`text-[#2C2D33] text-[14px] ${inter.className}`}>Gender</th>
    </tr>
  </thead>
  <tbody>
    {allCustomers.map(function(customer, idx) {return <tr className={`text-[#6E7079] text-[14px] ${inter.className}`} key={idx}> 
      <td className='text-slate-500 py-[10px]'>{customer.name}</td>
      <td className='text-slate-500 py-[10px]'>{customer.email}</td>
      <td className='text-slate-500 py-[10px]'>{customer.nationality}</td>
      <td className='text-slate-500 py-[10px]'>{customer.grnder}</td>
    </tr>})}
    
  </tbody>
</table>
      </div>
  </section>
  </>
}
