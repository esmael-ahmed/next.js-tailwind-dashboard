'use client'
import { storeContext } from '@/app/context/store';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import bag from '../../../public/BagDash.svg'
import Xmark from '../../../public/fi_x.svg'
import React, { useContext, useState } from 'react'
import { Poppins, Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], weight: '400', })
const inter500 = Inter({ subsets: ['latin'], weight: '500', })
const poppins = Poppins({ subsets: ['latin'], weight: '500', })


export default function CreateNewOrder() {


  const router = useRouter()
  const { addToOrdersArray, allCustomers, allProducts} = useContext(storeContext)

  function returnToOrders() {
    router.push('/orders')
  }

    let order = {
        customer:'',
        paymentType:'',
        orderType:'',
        orderDate:'',
        orderTime:'',
        orderStatus:'',
        orderNote:'',
        productName:'',
      }




      function whenAdd(values) {
        addToOrdersArray(values);
        
        setTimeout (function () {
          router.push('/orders');
        }, 1500)
      }



    

    const formikObj = useFormik({
        initialValues: order,
        onSubmit: whenAdd,
        
      })
  return <>
  <section className=' w-3/4 bg-white mx-auto px-[24px] py-[28px] rounded-[12px] shadow-lg'>
        <div className=' flex justify-between items-center mb-[28px]'>
        <h3 className={`text-[#000] text-[20px] ${poppins.className}`}>Create New Order</h3>
        <Link href={'/orders'}><div className={` p-[4px] rounded-[8px] bg-[#FFCC9129]`}><Image src={Xmark}  alt="Xmark"/></div></Link>
        </div>
        
        <div>
            <form className=' grid grid-cols-2 gap-x-[52px]' onSubmit={formikObj.handleSubmit} action="">
            <div>
            <h4 className={`text-[#8B8D97] text-[16px] ${inter500.className}`}>Order Details</h4>
             <div className=" mb-[24px] mt-[27px]">
              <select onBlur={formikObj.handleBlur} id='customer' onChange={formikObj.handleChange} value={formikObj.values.customer} type="text" className=' p-2 rounded-lg outline-none bg-[#e5e7eb] w-full '>
              <option disabled value="" label="Select Customer">
                    Select Customer{" "}
                </option>
                {allCustomers.map(function(customer, idx) {return <>
                  <option key={idx} value={customer.name}>{customer.name}</option>
                </>})}
              </select>
            </div>
            
            <div className=" mb-[24px] grid grid-cols-2 gap-x-[12px]">
              <div>
              <select onBlur={formikObj.handleBlur} id='paymentType' onChange={formikObj.handleChange} value={formikObj.values.paymentType} type="text" className=' p-2 rounded-lg outline-none bg-[#e5e7eb] w-full '>
              <option disabled value="" label="Payment Type">
              Payment Type{" "}
                </option>
                  <option value="Cash">Cash</option>
                  <option value="Visa">Visa</option>
              </select>
              </div>
              <div>
              <select onBlur={formikObj.handleBlur} id='orderType' onChange={formikObj.handleChange} value={formikObj.values.orderType} type="text" className=' p-2 rounded-lg outline-none bg-[#e5e7eb] w-full '>
              <option disabled value="" label="Order Type">
              Order Type{" "}
                </option>
                  <option value="Home Delivery">Home Delivery</option>
                  <option value="Pick Up">Pick Up</option>
              </select>
              </div>
            </div>

              <p className={`text-[#53545C] text-[12px] mb-[8px] ${inter.className}`}>Order Time &amp; Date</p>
            <div className=" mb-[24px] grid grid-cols-2 gap-x-[8px]">
              <div>
              <input onBlur={formikObj.handleBlur} id='orderDate' onChange={formikObj.handleChange} value={formikObj.values.orderDate}  type="date" className=' p-2 rounded-lg outline-none bg-[#e5e7eb] w-full ' />
              </div>
              <div>
              <input onBlur={formikObj.handleBlur} id='orderTime' onChange={formikObj.handleChange} value={formikObj.values.orderTime}  type="time" className=' p-2 rounded-lg outline-none bg-[#e5e7eb] w-full ' />
              </div>
            </div>

            <div className=" my-4">
              <select onBlur={formikObj.handleBlur} id='orderStatus' onChange={formikObj.handleChange} value={formikObj.values.orderStatus} type="text" className=' p-2 rounded-lg outline-none bg-[#e5e7eb] w-full '>
              <option disabled value="" label="Order Status">
              Order Status{" "}
                </option>
                
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="In-Progress">In-Progress</option>
               
              </select>
            </div>
            
            <div className=" my-4">
              <textarea  onBlur={formikObj.handleBlur} id='orderNote' onChange={formikObj.handleChange} value={formikObj.values.orderNote} placeholder='Order Note'  className=' p-2 rounded-lg outline-none bg-[#e5e7eb] w-full'  rows="4" />
            </div>
            </div>
            <div>
            <h4 className={`text-[#8B8D97] text-[16px] ${inter500.className}`}>Items</h4>
            <div className=" my-4">
            <select multiple onBlur={formikObj.handleBlur} id='productName' onChange={formikObj.handleChange} value={formikObj.values.productName} type="text" className=' p-2 rounded-lg outline-none bg-[#e5e7eb] w-full '>
              <option disabled value="" label="Select Product">
                    Select Product{" "}
                </option>
                {allProducts.map(function(product, idx) {return <>
                  <option key={idx} value={product.name}>{product.name}</option>
                </>})}
              </select>
            </div>
            </div>
  
   
    <div className=' my-4 flex justify-center gap-x-8 items-start col-span-2'>
        <div className=' '>
            <div onClick={returnToOrders} className=' text-blue-500 bg-white cursor-pointer rounded-[12px] px-10 py-2 border border-blue-500 hover:bg-blue-500 hover:text-white'>Cancel</div>
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
