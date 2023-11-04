'use client'
import  {useContext, useEffect}  from 'react'
import { storeContext } from '../context/store';

export default function Header() {
    const {headerName} = useContext(storeContext)
   
    
  return <>
  <header className=' flex items-center justify-between  p-5 w-full bg-white'>
    <div >
    <h1 className=' text-2xl'>{headerName}</h1>
    </div>
    <div className=' flex items-center justify-between gap-5 '> 
    <div className=' flex items-center justify-around gap-3'>
        <p>Nanny’s Shop</p>
        <i class="fa-solid fa-arrow-down"></i>
    </div>
    <div>
    <i class="fa-solid fa-bell text-blue-500"></i>
    </div>
    <div>
    <i class="fa-solid fa-circle-user text-2xl"></i>
    </div>
    </div>

  </header>
  </>
}
