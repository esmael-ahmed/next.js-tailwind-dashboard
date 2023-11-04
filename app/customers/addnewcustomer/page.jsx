'use client'
import { storeContext } from '@/app/context/store';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'

export default function AddNewCustomer() {

  const router = useRouter()
  const { addToCustomersArray} = useContext(storeContext)

  function returnToCustomers() {
    router.push('/customers')
  }

    let customer = {
        name:'',
        email:'',
        nationality:'',
        grnder:'',
      }




      function whenAdd(values) {
        addToCustomersArray(values);
        
        setTimeout (function () {
          router.push('/customers');
        }, 1500)
      }



    

    const formikObj = useFormik({
        initialValues: customer,
        onSubmit: whenAdd,
        
      })
return <>
    <section className=' w-1/2 bg-white mx-auto p-5 rounded-lg shadow-lg'>
        <div className=' flex justify-between items-center'>
        <h3 className=' mb-3'>Add a New Customer</h3>
        <Link href={'/customers'}><div><i className="fa-solid fa-xmark"></i></div></Link>
        
        </div>
        <div>
            <h4 className=' text-[#4b5563]'>Customer Information</h4>
            <form onSubmit={formikObj.handleSubmit} action="">
  
    <div className=" my-4">
      <input onBlur={formikObj.handleBlur} id='name' onChange={formikObj.handleChange} value={formikObj.values.name} placeholder='Customer Name' type="text" className=' p-2 rounded-lg outline-none bg-[#e5e7eb] w-full ' />
    </div>
    <div className=" my-4">
      <input onBlur={formikObj.handleBlur} id='email' onChange={formikObj.handleChange} value={formikObj.values.email} placeholder='Customer Email' type="email" className=' p-2 rounded-lg outline-none bg-[#e5e7eb] w-full ' />
    </div>
    <div className=" my-4">
      <input onBlur={formikObj.handleBlur} id='nationality' onChange={formikObj.handleChange} value={formikObj.values.nationality} placeholder='Customer Nationality' type="text" className=' p-2 rounded-lg outline-none bg-[#e5e7eb] w-full ' />
    </div>
    <div className=" my-4">
      <input onBlur={formikObj.handleBlur} id='grnder' onChange={formikObj.handleChange} value={formikObj.values.grnder} placeholder='Customer Grnder' type="text" className=' p-2 rounded-lg outline-none bg-[#e5e7eb] w-full ' />
    </div>
    <div className=' my-4 flex justify-center gap-x-8 items-start'>
        <div className=' '>
            <div onClick={returnToCustomers} className=' text-blue-500 bg-white cursor-pointer rounded-lg px-10 py-2 border border-blue-500 hover:bg-blue-500 hover:text-white'>Cancel</div>
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
