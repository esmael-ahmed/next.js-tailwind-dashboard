'use client'

import { storeContext } from '@/app/context/store';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

export default function AddNewProduct() {
  const router = useRouter()
  const { addToProductsArray} = useContext(storeContext)

  function returnToInventory() {
    router.push('/inventory')
  }

    let product = {
        name:'',
        price:'',
        quantity:'',
        category:'',
      }




      function whenAdd(values) {
        addToProductsArray(values);
        
        setTimeout (function () {
          router.push('/inventory');
        }, 1500)
      }



    

    const formikObj = useFormik({
        initialValues: product,
        onSubmit: whenAdd,
        
      })
return <>
    <section className=' w-1/2 bg-white mx-auto p-5 rounded-lg shadow-lg'>
        <div className=' flex justify-between items-center'>
        <h3 className=' mb-3'>Add a New Product</h3>
        <Link href={'/inventory'}><div><i className="fa-solid fa-xmark"></i></div></Link>
        
        </div>
        <div>
            
            <form onSubmit={formikObj.handleSubmit} action="">
  
    <div className=" my-4">
      <input onBlur={formikObj.handleBlur} id='name' onChange={formikObj.handleChange} value={formikObj.values.name} placeholder='Product Name' type="text" className=' p-2 rounded-lg outline-none bg-[#e5e7eb] w-full ' />
    </div>
    <div className=" my-4">
      <input onBlur={formikObj.handleBlur} id='price' onChange={formikObj.handleChange} value={formikObj.values.price} placeholder='Product Price' type="text" className=' p-2 rounded-lg outline-none bg-[#e5e7eb] w-full ' />
    </div>
    <div className=" my-4">
      <input onBlur={formikObj.handleBlur} id='quantity' onChange={formikObj.handleChange} value={formikObj.values.quantity} placeholder='Quantity In Stock' type="number" className=' p-2 rounded-lg outline-none bg-[#e5e7eb] w-full ' />
    </div>
    <div className=" my-4">
      <input onBlur={formikObj.handleBlur} id='category' onChange={formikObj.handleChange} value={formikObj.values.category} placeholder='Product Category' type="text" className=' p-2 rounded-lg outline-none bg-[#e5e7eb] w-full ' />
    </div>
    <div className=' my-4 flex justify-center gap-x-8 items-start'>
        <div className=' '>
            <div onClick={returnToInventory} className=' text-blue-500 bg-white cursor-pointer rounded-lg px-10 py-2 border border-blue-500 hover:bg-blue-500 hover:text-white'>Cancel</div>
        </div>
        <div>
            <button type='submit' className=' text-white bg-blue-500 rounded-lg px-12 py-2 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500'>Add</button>
        </div>

    </div>
    </form>
        </div>
        
    </section>
</>
}
