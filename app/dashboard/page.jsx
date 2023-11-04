'use client'
import React, { useContext, useEffect } from 'react'
import { storeContext } from '../context/store'

export default function Dashboard() {
  const { setHeaderName, allCustomers, allProducts, allOrders, getPendingOrder, getCompletedOrder} = useContext(storeContext)
  useEffect(() => {
    setHeaderName("Dashboard")
  
    
  }, [])
  
  return <>
  <section className=' '>
    <div className=' grid grid-cols-12 gap-4 mb-4 '>
      <div className=' bg-white p-5 rounded-md col-span-4 '>
        <div className=' flex items-center justify-between mb-8'>
          <div>
          <i className="fa-solid fa-cloud  pr-4  text-blue-500"></i>
          </div>
          <div className=' flex items-center justify-around gap-3 text-slate-400'>
              <p className=' '>This Week</p>
              <i className="fa-solid fa-arrow-down"></i>
          </div>
        </div>
        <div className=' flex items-center'>
          <div className=' mr-11'>
            <p className=' mb-1 text-slate-500'>Sales</p>
            <p className=' text-slate-950 fw-bold text-xl'>4,000,000.00</p>
          </div>
          <div>
            <p className=' mb-1 text-slate-500'>Volume</p>
            <p className=' text-gray-950 fw-bold text-xl'>450 <span className=' text-green-500 text-sm'>+20.00%</span></p>
          </div>

        </div>
      </div>
      <div className=' bg-white p-5 rounded-md col-span-4 '>
        <div className=' flex items-center justify-between mb-8'>
          <div>
          <i className="fa-solid fa-user-group  pr-4  text-blue-500"></i>
          </div>
          <div className=' flex items-center justify-around gap-3 text-slate-400'>
              <p className=' '>This Week</p>
              <i class="fa-solid fa-arrow-down"></i>
          </div>
        </div>
        <div className=' flex items-center'>
          <div className=' mr-11'>
            <p className=' mb-1 text-slate-500'>Customers</p>
            <p className=' text-slate-950 fw-bold text-xl'>{allCustomers.length} <span className=' text-green-500 text-sm'>+15.80%</span></p>
          </div>
          <div>
            <p className=' mb-1 text-slate-500'>Active</p>
            <p className=' text-gray-950 fw-bold text-xl'>1180 <span className=' text-green-500 text-sm'>85%</span></p>
          </div>

        </div>
      </div>
      <div className=' bg-white p-5 rounded-md col-span-4  '>
        <div className=' flex items-center justify-between mb-8'>
          <div>
          <i class="fa-solid fa-bag-shopping  pr-4  text-blue-500"></i>
          </div>
          <div className=' flex items-center justify-around gap-3 text-slate-400'>
              <p className=' '>This Week</p>
              <i class="fa-solid fa-arrow-down"></i>
          </div>
        </div>
        <div className=' flex items-center justify-between'>
          <div className=' pr-[30px]'>
            <p className=' mb-1 text-slate-500'>All Orders</p>
            <p className=' text-slate-950 fw-bold text-xl'>{allOrders.length}</p>
          </div>
          <div className=' pr-[30px]'>
            <p className=' mb-1 text-slate-500 '>Pending</p>
            <p className=' text-gray-950 fw-bold text-xl'>{getPendingOrder(allOrders)}</p>
          </div>
          <div>
            <p className=' mb-1 text-slate-500'>Completed</p>
            <p className=' text-gray-950 fw-bold text-xl'>{getCompletedOrder(allOrders)}</p>
          </div>

        </div>
      </div>


    </div>
    <div className=' grid grid-cols-3 gap-4'>
      <div className=' bg-white p-5 rounded-md'>
      <div className=' flex items-center justify-between mb-8'>
          <div className=' text-gray-950 fw-bold text-xl'>
          Orders
          </div>
          <div className=' flex items-center justify-around gap-3 text-slate-400'>
              <p className=' '>This Week</p>
              <i className="fa-solid fa-arrow-down"></i>
          </div>
        </div>
        <div className='  flex justify-center'>
        <div className=' h-44 w-44 bg-blue-500 rounded-full relative'>
          <div className=' h-32 w-32 bg-white rounded-full absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 '>
            </div>
          </div>
        </div>
      </div>
      <div className=' col-span-2'>
        <div className=' bg-blue-500 p-5 rounded-md'>
          <div className=' mb-5'>
          <i className="fa-solid fa-folder pr-4 text-2xl text-white"></i>
          </div>
          <div className=' flex items-center text-white gap-x-52'>
          <div className=' mr-11'>
            <p className=' mb-1 '>All Products</p>
            <p className='  fw-bold text-xl'>{allProducts.length}</p>
          </div>
          <div>
            <p className=' mb-1 '>Active</p>
            <p className='  fw-bold text-xl'>32 <span className='  text-sm'>+24%</span></p>
          </div>

        </div>
        </div>
        <div className=' bg-white p-5 rounded-md mt-4 '>
          <div className=' flex items-center justify-between mb-5'>
          <div>
          <i className="fa-solid fa-cart-shopping pr-4 text-2xl "></i>
          </div>
          <div className=' flex items-center justify-around gap-3 text-slate-400'>
              <p className=' '>This Week</p>
              <i className="fa-solid fa-arrow-down"></i>
          </div>
        </div>
          
          <div className=' flex items-center  gap-x-52'>
          <div className=' mr-11'>
            <p className=' mb-1 text-slate-500 '>Completed Orders</p>
            <p className=' text-gray-950  fw-bold text-xl'>{allOrders.length !== 0 ? <>{Math.round((Number.parseFloat(getCompletedOrder(allOrders)) / Number.parseFloat(allOrders.length)) * 100)}</> : 0}% <span className=' text-green-500 text-sm'>+0.00%</span></p>
          </div>
          <div>
            <p className=' mb-1 text-slate-500 '>Pending Orders</p>
            <p className=' text-gray-950 fw-bold text-xl'>{allOrders.length !== 0 ? <>{Math.round((Number.parseFloat(getPendingOrder(allOrders)) / Number.parseFloat(allOrders.length)) * 100)}</> : 0}%</p>
          </div>

        </div>
        </div>
        
      </div>

    </div>
  </section>
  </>
}
