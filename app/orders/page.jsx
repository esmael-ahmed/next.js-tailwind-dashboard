'use client'
import React, { useContext, useEffect } from 'react'
import { storeContext } from '../context/store'
import  Link  from 'next/link';
import { format } from 'date-fns';

export default function Orders() {
  const { setHeaderName, allOrders, allProducts, changeDateFormate, changeTimeFormate, getTotalPrice, getPendingOrder, getCompletedOrder} = useContext(storeContext)
  useEffect(() => {
    setHeaderName("Orders")
    
    console.log(allOrders);
    
  }, [])
  return <>
  <section>
    <div className=' flex justify-between'>
      <p className=' text-gray-950 fw-bold text-xl'>Orders Summary</p>
      <Link href={'/orders/createneworder'}>
      <div className=' text-white bg-blue-500 rounded-lg p-2 hover:bg-blue-700'>
        <i className="fa-solid fa-plus pr-3"></i>
        <span>Create a New Order</span>
      </div>
      </Link>
    </div>




    <div className=' bg-white p-5 rounded-md mt-4'>
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
      </div>




      <div className=' bg-white p-5 rounded-md mt-4'>
      <table className=' w-full text-left border-spacing-y-3  border-separate' >
  <thead className=' border-y-2'>
    <tr>
      <th className=' text-gray-700 fw-light'>Customer Name <i className="fa-solid fa-filter pl-2"></i></th>
      <th className=' text-gray-700 fw-light' >Order Date<i className="fa-solid fa-filter pl-2"></i></th>
      <th className=' text-gray-700 fw-light'>Order Type<i className="fa-solid fa-filter pl-2"></i></th>
      <th className=' text-gray-700 fw-light'>Order Total<i className="fa-solid fa-filter pl-2"></i></th>
      <th className=' text-gray-700 fw-light'>Action<i className="fa-solid fa-filter pl-2"></i></th>
      <th className=' text-gray-700 fw-light'>Status<i className="fa-solid fa-filter pl-2"></i></th>
      
    </tr>
  </thead>
  <tbody>
    {allOrders.map(function(order, idx) {return <>
      <tr key={idx}>
      <td className='text-slate-500'>{order.customer}</td>
      <td className='text-slate-500'>{changeDateFormate(order.orderDate)} - {changeTimeFormate(order.orderTime)}</td>
      <td className='text-slate-500'>{order.orderType}</td>
      <td className='text-slate-500'>{getTotalPrice(allProducts, order.productName)} EGP</td>
      <td className='text-slate-500'><select id="action" name="action">
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
