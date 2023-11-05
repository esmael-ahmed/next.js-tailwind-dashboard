'use client'
import React, { useContext, useEffect } from 'react'
import { storeContext } from '../context/store'
import  Link  from 'next/link';

export default function Customers() {
  const { setHeaderName, allCustomers} = useContext(storeContext)
  useEffect(() => {
    setHeaderName("Customers")
  }, [])

  
  return <>
  <section>
    <div className=' flex justify-between'>
      <p className=' text-gray-950 fw-bold text-xl'>Customers Summary</p>
      <Link href={'/customers/addnewcustomer'}>
      <div className=' text-white bg-blue-500 rounded-lg p-2 hover:bg-blue-700'>
        <i className="fa-solid fa-plus pr-3"></i>
        <span>Add a New Customer</span>
      </div>
      </Link>
    </div>




    <div className=' bg-white p-5 rounded-md mt-4'>
        <div className=' flex items-center justify-between mb-8'>
          <div>
          <i class="fa-solid fa-user-group  pr-4  "></i>
          </div>
          <div className=' text-slate-400'>
            <select id="time" name="time">
              <option value="volvo">This Week</option>
            </select>
          </div>
        </div>


        <div className=' flex items-center gap-x-60'>
          <div className=' '>
            <p className=' mb-1 text-slate-500'>All Customers</p>
            <p className=' text-slate-950 fw-bold text-xl'>{allCustomers.length}</p>
          </div>
          

        </div>
      </div>




      <div className=' bg-white p-5 rounded-md mt-4'>
      <table className=' w-full text-left border-spacing-y-3  border-separate' >
  <thead className=' border-y-2'>
    <tr>
      <th className=' text-gray-700 fw-light'>Customer Name <i className="fa-solid fa-filter pl-2"></i></th>
      <th className=' text-gray-700 fw-light' >Email<i className="fa-solid fa-filter pl-2"></i></th>
      <th className=' text-gray-700 fw-light'>Nationality<i className="fa-solid fa-filter pl-2"></i></th>
      <th className=' text-gray-700 fw-light'>Gender<i className="fa-solid fa-filter pl-2"></i></th>
      
    </tr>
  </thead>
  <tbody>
    {allCustomers.map(function(customer, idx) {return <tr key={idx}> 
      <td className='text-slate-500'>{customer.name}</td>
      <td className='text-slate-500'>{customer.email}</td>
      <td className='text-slate-500'>{customer.nationality}</td>
      <td className='text-slate-500'>{customer.grnder}</td>
    </tr>})}
    
  </tbody>
</table>
      </div>
  </section>
  </>
}
