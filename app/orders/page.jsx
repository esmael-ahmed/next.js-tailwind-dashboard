'use client'
import React, { useContext, useEffect } from 'react'
import { storeContext } from '../context/store'
import  Link  from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image'
import arrowDown from '../../public/fi_chevron-downDash.svg'
import bag from '../../public/BagDash.svg'
import plus from '../../public/fi_plus.svg'
import sort from '../../public/sort.svg'
import { Poppins, Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], weight: '400', })
const inter500 = Inter({ subsets: ['latin'], weight: '500', })
const poppins = Poppins({ subsets: ['latin'], weight: '500', })

export default function Orders() {
  const { setHeaderName, allOrders, allProducts, changeDateFormate, changeTimeFormate, getTotalPrice, getPendingOrder, getCompletedOrder} = useContext(storeContext)
  useEffect(() => {
    setHeaderName("Orders")
    
    console.log(allOrders);
    
  }, [])
  return <>
  <section>
    <div className=' flex items-center justify-between'>
      <p className={`text-[#45464E] text-[16px] ${inter500.className}`}>Orders Summary</p>
      <Link href={'/orders/createneworder'}>
      <div className=' flex items-center text-white bg-[#5570F1] rounded-[12px] px-[16px] py-[10px] hover:bg-blue-700'>
      <Image src={plus}  alt="plus"/>
        <p className={`text-[14px] ml-[10px] ${inter.className}`}>Create a New Order</p>
      </div>
      </Link>
    </div>




    {/* <div className=' bg-white p-5 rounded-md mt-[20px]'>
        <div className=' flex items-center justify-between mb-8'>
          <div>
          <i class="fa-solid fa-bag-shopping  pr-4  "></i>
          </div>
          <div className=' text-slate-400'>
            <select id="time" name="time">
              <option value="volvo">This Week</option>
            </select>
          </div>
        </div>


        <div className=' flex items-center gap-x-60'>
          <div className=' '>
            <p className=' mb-1 text-slate-500'>All Orders</p>
            <p className=' text-slate-950 fw-bold text-xl'>{allOrders.length}</p>
          </div>
          <div className=' '>
            <p className=' mb-1 text-slate-500 '>Pending</p>
            <p className=' text-gray-950 fw-bold text-xl'>{getPendingOrder(allOrders)}</p>
          </div>
          <div>
            <p className=' mb-1 text-slate-500'>Completed</p>
            <p className=' text-gray-950 fw-bold text-xl'>{getCompletedOrder(allOrders)}</p>
          </div>

        </div>
      </div> */}


      <div className=' bg-white px-[15px] py-[11px] rounded-[12px] my-[20px]  '>
        <div className=' flex items-center justify-between'>
          <div className=' p-[8px] rounded-[8px] bg-[#FFCC9129]'>
          <Image src={bag}  alt="bag"/>
          </div>
          <div className=' flex items-center'>
              <p className={`text-[#BEC0CA] text-[12px] mr-[7px] ${inter.className}`}>This Week</p>
              <Image src={arrowDown}  alt="arrowDown"/>
          </div>
        </div>
        <div className=' grid grid-cols-3 gap-x-[32px] mt-[32px] w-full'>
          <div className=''>
            <p className={`text-[#8B8D97] text-[14px] mb-[8px] ${inter.className}`}>All Orders</p>
            <p className={`text-[#45464E] text-[20px] ${poppins.className}`}>{allOrders.length}</p>
          </div>
          <div className=' '>
            <p className={`text-[#8B8D97] text-[14px] mb-[8px] ${inter.className}`}>Pending</p>
            <p className={`text-[#45464E] text-[20px] ${poppins.className}`}>{getPendingOrder(allOrders)}</p>
          </div>
          <div>
            <p className={`text-[#8B8D97] text-[14px] mb-[8px] ${inter.className}`}>Completed</p>
            <p className={`text-[#45464E] text-[20px] ${poppins.className}`}>{getCompletedOrder(allOrders)}</p>
          </div>

        </div>
      </div>




      <div className=' bg-white py-[22px] px-[21px] rounded-[12px]'>
        <p className={`text-[16px] text-[#45464E] text-center mb-[20px] ${inter500.className}`}>Customer Orders</p>
      <table className=' w-full text-left border-spacing-y-3  ' >
  <thead className=' border-y-2'>
    <tr>
      <th>
      <div className={`flex items-center text-[#2C2D33] text-[14px] gap-x-[8px] ${inter.className}`}>
          <p>Customer Name</p>
          <Image src={sort}  alt="sort"/>
      </div>
      </th>
      <th>
      <div className={`flex items-center text-[#2C2D33] text-[14px] gap-x-[8px] ${inter.className}`}>
          <p>Order Date</p>
          <Image src={sort}  alt="sort"/>
      </div>
      </th>
      <th>
      <div className={`flex items-center text-[#2C2D33] text-[14px] gap-x-[8px] ${inter.className}`}>
          <p>Order Type</p>
          <Image src={sort}  alt="sort"/>
      </div>
      </th>
      <th>
      <div className={`flex items-center text-[#2C2D33] text-[14px] gap-x-[8px] ${inter.className}`}>
          <p>Order Total</p>
          <Image src={sort}  alt="sort"/>
      </div>
      </th>
      <th>
      <div className={`flex items-center text-[#2C2D33] text-[14px] gap-x-[8px] ${inter.className}`}>
          <p>Action</p>
          <Image src={sort}  alt="sort"/>
      </div>
      </th>
      <th>
      <div className={`flex items-center text-[#2C2D33] text-[14px] gap-x-[8px] ${inter.className}`}>
          <p>Status</p>
          <Image src={sort}  alt="sort"/>
      </div>
      </th>
      
    </tr>
  </thead>
  <tbody>
    {allOrders.map(function(order, idx) {return <>
      <tr className={`text-[#6E7079] text-[14px] ${inter.className}`} key={idx}>
      <td className='py-[10px]'>{order.customer}</td>
      <td className='py-[10px]' >{changeDateFormate(order.orderDate)} - {changeTimeFormate(order.orderTime)}</td>
      <td className='py-[10px]'>{order.orderType}</td>
      <td className='py-[10px]'>{getTotalPrice(allProducts, order.productName)} EGP</td>
      <td className={`text-[#8B8D97] text-[12px] py-[10px] ${inter.className}`}><select id="action" name="action">
              <option value="Completed">Completed</option>
              <option value="In-Progress">In-Progress</option>
              <option value="Pending">Pending</option>
            </select></td>
            {order.orderStatus == "Completed" ? <td className='text-green-500'>{order.orderStatus}</td> : order.orderStatus == "In-Progress" ? <td className='text-blue-500'>{order.orderStatus}</td> : <td className='text-[#0a0a0a]'>{order.orderStatus}</td>}
      
    </tr>
    </>})}
    
  </tbody>
</table>
      </div>
  </section>
  </>
}
