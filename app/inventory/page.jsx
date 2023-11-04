'use client'
import React, { useContext, useEffect } from 'react'

import  Link  from 'next/link';
import { storeContext } from '../context/store';

export default function Inventory() {

  const { setHeaderName, allProducts} = useContext(storeContext)


  useEffect(() => {
    setHeaderName("Inventory")
  }, [])

  return<>
  <section>
  <div className=' flex justify-between'>
    <p className=' text-gray-950 fw-bold text-xl'>Inventory Summary</p>
    <Link href={'/inventory/addnewproduct'}>
    <div className=' text-white bg-blue-500 rounded-lg p-2 hover:bg-blue-700'>
      <i className="fa-solid fa-plus pr-3"></i>
      <span>Add a New Product</span>
    </div>
    </Link>
  </div>




  <div className=' bg-blue-500 p-5 rounded-md mt-4 text-white'>
      <div className=' flex items-center justify-between mb-8'>
        <div>
        <i class="fa-solid fa-folder  pr-4  "></i>
        </div>
        {/* <div className=' text-slate-400'>
          <select id="time" name="time">
            <option value="volvo">This Week</option>
          </select>
        </div> */}
      </div>


      <div className=' flex items-center gap-x-60'>
        <div >
          <p className=' mb-1 '>All Products</p>
          <p className='  fw-bold text-xl'>{allProducts.length}</p>
        </div>
        

      </div>
    </div>




    <div className=' bg-white p-5 rounded-md mt-4'>
    <table className=' w-full text-left border-spacing-y-3  border-separate' >
<thead className=' border-y-2'>
  <tr>
    <th className=' text-gray-700 fw-light'>Product Name <i className="fa-solid fa-filter pl-2"></i></th>
    <th className=' text-gray-700 fw-light' >Category<i className="fa-solid fa-filter pl-2"></i></th>
    <th className=' text-gray-700 fw-light'>Unit Price<i className="fa-solid fa-filter pl-2"></i></th>
    <th className=' text-gray-700 fw-light'>In-Stock<i className="fa-solid fa-filter pl-2"></i></th>
    
  </tr>
</thead>
<tbody>
  {allProducts.map(function(product, idx) {return <tr key={idx}> 
    <td className='text-slate-500'>{product.name}</td>
    <td className='text-slate-500'>{product.category}</td>
    <td className='text-slate-500'>{product.price} EGP</td>
    <td className='text-slate-500'>{product.quantity}</td>
  </tr>})}
  
</tbody>
</table>
    </div>
</section>
  </> 
}
