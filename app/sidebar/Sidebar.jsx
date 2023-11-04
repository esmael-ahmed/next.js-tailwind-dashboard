import React from 'react'
import  Link  from 'next/link';

export default function Sidebar() {
  return <>
  <aside className=' h-full min-h-screen px-7 bg-white'>
    <div className=' flex justify-normal items-center p-5 mb-4 '>
        <div >
        <i class="fa-solid fa-cloud  pr-4 text-4xl text-blue-500"></i>
        </div>
        <div>
            <h1 className=' font-bold text-2xl text-[#1e293b]'>Metrix</h1>
        </div>
    </div>
    <div className=' text-[#1e293b]'>
    <div className=' dashboard p-4 hover:bg-blue-500 rounded-lg hover:text-white '>
        <Link href={'/dashboard'} >
        <div className=' flex items-center'>
            <div>
            <i className="fa-solid fa-cubes pr-4 text-2xl"></i>
            </div>
            <div>
                <h3>Dashboard</h3>
            </div>
        </div>
        </Link>
    </div>
    <div className=' orders p-4 hover:bg-blue-500 rounded-lg hover:text-white '>
        <Link href={'/orders'}>
        <div className=' flex'>
            <div>
            <i className="fa-solid fa-bag-shopping pr-4 text-2xl"></i>
            </div>
            <div>
                <h3>Orders</h3>
            </div>
        </div>
        </Link>
    </div>
    <div className=' customers p-4 hover:bg-blue-500 rounded-lg hover:text-white '>
        <Link href={'/customers'}>
        <div className=' flex'>
            <div>
            <i className="fa-solid fa-user-group pr-4 text-2xl"></i>
            </div>
            <div>
                <h3>Customers</h3>
            </div>
        </div>
        </Link>
    </div>
    <div className=' inventory p-4 hover:bg-blue-500 rounded-lg hover:text-white '>
        <Link href={'/inventory'}>
        <div className=' flex'>
            <div>
            <i className="fa-solid fa-folder pr-4 text-2xl"></i>
            </div>
            <div>
                <h3>Inventory</h3>
            </div>
        </div>
        </Link>
    </div>
    </div>
    

  </aside>
  </>
}
