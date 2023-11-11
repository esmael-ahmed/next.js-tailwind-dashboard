'use client'
import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import  Link  from 'next/link';
import { storeContext } from '../context/store';
import plus from '../../public/fi_plus.svg'
import folder from '../../public/FolderDash.svg'
import { Poppins, Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], weight: '400', })
const inter500 = Inter({ subsets: ['latin'], weight: '500', })
const poppins = Poppins({ subsets: ['latin'], weight: '500', })

export default function Inventory() {

  const { setHeaderName, allProducts} = useContext(storeContext)


  useEffect(() => {
    setHeaderName("Inventory")
  }, [])

  return<>
  <section>
  <div className=' flex items-center justify-between'>
    <p className={`text-[#45464E] text-[16px] ${inter500.className}`}>Inventory Summary</p>
    <Link href={'/inventory/addnewproduct'}>
    <div className=' flex items-center text-white bg-[#5570F1] rounded-[12px] px-[16px] py-[10px] hover:bg-blue-700'>
    <Image src={plus}  alt="plus"/>
      <p className={`text-[14px] ml-[10px] ${inter.className}`}>Add a New Product</p>
    </div>
    </Link>
  </div>




  <div className=' bg-[#5570F1] px-[15px] py-[11px] rounded-[12px] my-[20px] text-white'>
      <div>
        <div className='p-[8px] rounded-[8px] bg-[#FFFFFF29] w-fit'>
        <Image src={folder}  alt="folder"/>
        </div>
        
      </div>


      <div className=' mt-[32px]'>
        <div >
          <p className={` text-[14px] mb-[8px] ${inter.className}`}>All Products</p>
          <p className={` text-[20px] ${poppins.className}`}>{allProducts.length}</p>
        </div>
        

      </div>
    </div>




    <div className=' bg-white py-[22px] px-[21px] rounded-[12px]'>
    <p className={`text-[16px] text-[#45464E] text-center mb-[20px] ${inter500.className}`}>Inventory Items</p>
    <table className=' w-full text-left border-spacing-y-3  ' >
<thead className=' border-y-2'>
  <tr>
    <th className={` text-[#2C2D33] text-[14px]  ${inter.className}`}>Product Name</th>
    <th className={` text-[#2C2D33] text-[14px]  ${inter.className}`}>Category</th>
    <th className={` text-[#2C2D33] text-[14px]  ${inter.className}`}>Unit Price</th>
    <th className={` text-[#2C2D33] text-[14px]  ${inter.className}`}>In-Stock</th>
  </tr>
</thead>
<tbody>
  {allProducts.map(function(product, idx) {return <tr className={`text-[#6E7079] text-[14px] ${inter.className}`} key={idx}> 
    <td className='text-slate-500 py-[10px]'>{product.name}</td>
    <td className='text-slate-500 py-[10px]'>{product.category}</td>
    <td className='text-slate-500 py-[10px]'>{product.price} EGP</td>
    <td className='text-slate-500 py-[10px]'>{product.quantity}</td>
  </tr>})}
  
</tbody>
</table>
    </div>
</section>
  </> 
}
