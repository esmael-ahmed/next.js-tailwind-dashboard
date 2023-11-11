'use client'
import React, { useContext, useEffect } from 'react'
import { storeContext } from '../context/store'
import Image from 'next/image'
import graph from '../../public/GraphBlue.svg'
import bag from '../../public/BagDash.svg'
import folder from '../../public/FolderDash.svg'
import shopingCart from '../../public/fi_shopping-cart.svg'
import users from '../../public/2 UserDash.svg'
import arrowDown from '../../public/fi_chevron-downDash.svg'
import arrowDownBlue from '../../public/fi_chevron-downBlue.svg'
import arrowDownBlack from '../../public/fi_chevron-downBlack.svg'
import { Poppins, Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], weight: '400', })
const inter500 = Inter({ subsets: ['latin'], weight: '500', })
const poppins = Poppins({ subsets: ['latin'], weight: '500', })

export default function Dashboard() {
  const { setHeaderName, allCustomers, allProducts, allOrders, getPendingOrder, getCompletedOrder} = useContext(storeContext)
  useEffect(() => {
    setHeaderName("Dashboard")
  
    
  }, [])
  
  return <>
  <section className=' '>
    <div className=' grid grid-cols-12 gap-[19px] mb-[20px] '>
      <div className=' bg-white px-[15px] py-[11px] rounded-[12px] col-span-4 '>
        <div className=' flex items-center justify-between'>
          <div className=' p-[8px] rounded-[8px] bg-[#3746F11E]'>
          <Image src={graph}  alt="graph"/>
          </div>
          <div className=' flex items-center'>
              <p className={`text-[#BEC0CA] text-[12px] mr-[7px] ${inter.className}`}>This Week</p>
              <Image src={arrowDown}  alt="arrowDown"/>
          </div>
        </div>
        <div className=' flex items-center mt-[32px]'>
          <div className=' mr-[32px]'>
            <p className={`text-[#8B8D97] text-[14px] mb-[8px] ${inter.className}`}>Sales</p>
            <p className={`text-[#45464E] text-[20px] ${poppins.className}`}>4,000,000.00</p>
          </div>
          <div>
            <p className={`text-[#8B8D97] text-[14px] mb-[8px] ${inter.className}`}>Volume</p>
            <div className=' flex items-center'>
              <p className={`text-[#45464E] text-[20px] mr-[7px] ${poppins.className}`}>450 </p>
              <p className={`text-[#519C66] text-[12px] ${inter.className}`}>+20.00%</p>
            </div>
            
          </div>
        </div>
      </div>


      <div className=' bg-white px-[15px] py-[11px] rounded-[12px] col-span-4 '>
        <div className=' flex items-center justify-between'>
          <div className=' p-[8px] rounded-[8px] bg-[#FFCC9129]'>
          <Image src={users}  alt="users"/>
          </div>
          <div className=' flex items-center'>
              <p className={`text-[#BEC0CA] text-[12px] mr-[7px] ${inter.className}`}>This Week</p>
              <Image src={arrowDown}  alt="arrowDown"/>
          </div>
        </div>
        <div className=' flex items-center mt-[32px]'>
          <div className=' mr-[32px]'>
            <p className={`text-[#8B8D97] text-[14px] mb-[8px] ${inter.className}`}>Customers</p>
            <div className=' flex items-center'>
            <p className={`text-[#45464E] text-[20px] mr-[7px] ${poppins.className}`}>{allCustomers.length}</p>
            <p className={`text-[#519C66] text-[12px] ${inter.className}`}>+15.80%</p>
            </div>
            
          </div>
          <div className='ml-[32px]'>
            <p className={`text-[#8B8D97] text-[14px] mb-[8px] ${inter.className}`}>Active</p>
            <div className=' flex items-center'>
            <p className={`text-[#45464E] text-[20px] mr-[7px] ${poppins.className}`}>1,180</p>
            <p className={`text-[#519C66] text-[12px] ${inter.className}`}>85%</p>
            </div>
          </div>

        </div>
      </div>

      <div className=' bg-white px-[15px] py-[11px] rounded-[12px] col-span-4  '>
        <div className=' flex items-center justify-between'>
          <div className=' p-[8px] rounded-[8px] bg-[#FFCC9129]'>
          <Image src={bag}  alt="bag"/>
          </div>
          <div className=' flex items-center'>
              <p className={`text-[#BEC0CA] text-[12px] mr-[7px] ${inter.className}`}>This Week</p>
              <Image src={arrowDown}  alt="arrowDown"/>
          </div>
        </div>
        <div className=' flex items-center mt-[32px] w-full'>
          <div className=' mr-[32px]'>
            <p className={`text-[#8B8D97] text-[14px] mb-[8px] ${inter.className}`}>All Orders</p>
            <p className={`text-[#45464E] text-[20px] ${poppins.className}`}>{allOrders.length}</p>
          </div>
          <div className=' mr-[32px]'>
            <p className={`text-[#8B8D97] text-[14px] mb-[8px] ${inter.className}`}>Pending</p>
            <p className={`text-[#45464E] text-[20px] ${poppins.className}`}>{getPendingOrder(allOrders)}</p>
          </div>
          <div>
            <p className={`text-[#8B8D97] text-[14px] mb-[8px] ${inter.className}`}>Completed</p>
            <p className={`text-[#45464E] text-[20px] ${poppins.className}`}>{getCompletedOrder(allOrders)}</p>
          </div>

        </div>
      </div>
    </div>

    <div className=' grid grid-cols-3 gap-[20px] '>
      <div className=' bg-white py-[21px] px-[20px] rounded-[12px]'>
      <div className=' flex items-center justify-between'>
          <div className={`text-[#45464E] text-[16px] ${inter500.className}`}>
          Orders
          </div>
          <div className=' flex items-center'>
              <p className={`text-[#BEC0CA] text-[12px] mr-[7px] ${inter.className}`}>This Week</p>
              <Image src={arrowDown}  alt="arrowDown"/>
          </div>
        </div>
        <div className="Keycontainer w-full justify-between items-start inline-flex mt-[12px]">
          <div className="Key justify-center items-center gap-2 flex">
            <div className="Rectangle4 w-2 h-2 bg-indigo-500 rounded-md" />
            <div className={`Retention text-gray-400 text-[11px] font-normal ${inter.className}`}>Pending</div>
          </div>
          <div className="Key justify-center items-center gap-2 flex">
            <div className="Rectangle4 w-2 h-2 bg-indigo-300 rounded-md" />
            <div className={`Retention text-gray-400 text-[11px] font-normal ${inter.className}`}>Completed</div>
          </div>
          <div className="Key justify-center items-center gap-2 flex">
            <div className="Rectangle4 w-2 h-2 bg-amber-200 rounded-md" />
            <div className={`Retention text-gray-400 text-[11px] font-normal ${inter.className}`}>In Progress</div>
          </div>
        </div>

        <div className=' flex items-center justify-center mt-[24px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="205" height="205" viewBox="0 0 205 205" fill="none">
<path d="M205 102.5C205 159.109 159.109 205 102.5 205C45.8908 205 0 159.109 0 102.5C0 45.8908 45.8908 0 102.5 0C159.109 0 205 45.8908 205 102.5ZM56.7908 102.5C56.7908 127.744 77.2555 148.209 102.5 148.209C127.744 148.209 148.209 127.744 148.209 102.5C148.209 77.2555 127.744 56.7908 102.5 56.7908C77.2555 56.7908 56.7908 77.2555 56.7908 102.5Z" fill="#EEF0FA"/>
<path d="M103 17C82.4661 17 62.6098 24.3471 47.0215 37.7129C31.4331 51.0787 21.1415 69.581 18.0075 89.8744C14.8736 110.168 19.1041 130.913 29.9341 148.358C40.7642 165.804 57.479 178.799 77.0563 184.993L83.2715 165.351C68.3842 160.64 55.6738 150.758 47.4382 137.492C39.2027 124.226 35.9856 108.451 38.3688 93.0188C40.752 77.587 48.5781 63.5173 60.432 53.3535C72.2859 43.1896 87.3853 37.6026 103 37.6026V17Z" fill="#FFCC91"/>
<path d="M38.0163 46.6696C46.1641 37.2701 56.2541 29.75 67.5901 24.6282C78.9261 19.5064 91.2382 16.9047 103.677 17.0027L103.515 37.6047C94.0559 37.5302 84.6934 39.5086 76.0731 43.4034C67.4528 47.2982 59.7801 53.0167 53.5842 60.1644L38.0163 46.6696Z" fill="#97A5EB"/>
<path d="M103 17C115.474 17 127.798 19.7135 139.118 24.9522C150.439 30.1909 160.484 37.8295 168.557 47.3382C176.631 56.8468 182.539 67.9979 185.872 80.018C189.206 92.038 189.884 104.639 187.861 116.948C185.838 129.257 181.162 140.978 174.157 151.298C167.151 161.619 157.985 170.293 147.292 176.717C136.6 183.141 124.639 187.163 112.237 188.502C99.8355 189.842 87.291 188.468 75.4735 184.476L82.0679 164.957C91.0543 167.993 100.594 169.038 110.024 168.019C119.455 167 128.551 163.942 136.681 159.057C144.812 154.172 151.783 147.576 157.11 139.728C162.437 131.88 165.993 122.966 167.532 113.606C169.07 104.247 168.554 94.6641 166.019 85.5237C163.484 76.3832 158.991 67.9035 152.852 60.6728C146.713 53.4421 139.074 47.6335 130.466 43.6498C121.857 39.6661 112.485 37.6026 103 37.6026V17Z" fill="#5570F1"/>
</svg>
        </div>
      </div>


      <div className=' col-span-2'>
        <div className=' bg-[#5570F1] py-[11px] px-[15px] rounded-[12px]'>
          <div className=' p-[8px] rounded-[8px] bg-[#FFFFFF29] w-fit'>
          <Image src={folder}  alt="folder"/>
          </div>
          <div className=' grid grid-cols-2 gap-x-[32px] text-white mt-[46px]'>
          <div className=' '>
            <p className={`text-[14px] mb-[8px] ${inter.className}`}>All Products</p>
            <p className={`text-[20px] ${poppins.className}`}>{allProducts.length}</p>
          </div>
          <div>
            <p className={`text-[14px] mb-[8px] ${inter.className}`}>Active</p>
            <div className=' flex items-center'>
            <p className={`text-[20px] mr-[7px] ${poppins.className}`}>32</p>
            <p className={`text-[#DBDEEE] text-[12px] ${inter.className}`}>+24%</p>
            </div>
            
          </div>

        </div>
        </div>


        <div className=' bg-white py-[11px] px-[15px] rounded-[12px] mt-[19px] '>
          <div className=' flex items-center justify-between '>
          <div className='p-[8px] rounded-[8px] bg-[#FFCC9129]'>
          <Image src={shopingCart}  alt="shopingCart"/>
          </div>
          <div className=' flex items-center'>
              <p className={`text-[#BEC0CA] text-[12px] mr-[7px] ${inter.className}`}>This Week</p>
              <Image src={arrowDown}  alt="arrowDown"/>
          </div>
        </div>
          
          <div className=' grid grid-cols-2 gap-x-[32px] mt-[46px]'>
          <div>
            <p className={`text-[#8B8D97] text-[14px] mb-[8px] ${inter.className}`}>Completed Orders</p>
            <div className='flex items-center'>
            <p className={`text-[#45464E] text-[20px] mr-[7px] ${poppins.className}`}>{allOrders.length !== 0 ? <>{Math.round((Number.parseFloat(getCompletedOrder(allOrders)) / Number.parseFloat(allOrders.length)) * 100)}</> : 0}%</p>
            <p className={`text-[#519C66] text-[12px] ${inter.className}`}>+0.00%</p>
            </div>
            
          </div>
          <div>
            <p className={`text-[#8B8D97] text-[14px] mb-[8px] ${inter.className}`}>Pending Orders</p>
            <p className={`text-[#45464E] text-[20px] ${poppins.className}`}>{allOrders.length !== 0 ? <>{Math.round((Number.parseFloat(getPendingOrder(allOrders)) / Number.parseFloat(allOrders.length)) * 100)}</> : 0}%</p>
          </div>

        </div>
        </div>
        
      </div>
    </div>


    <div className=" h-96 px-5 py-3.5 bg-white rounded-xl flex-col justify-start items-start gap-2.5 inline-flex w-full mt-[20px]">
  <div className="self-stretch h-80 flex-col justify-start items-start gap-9 flex">
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="justify-start items-center gap-5 flex">
        <div className={`text-zinc-700 text-base font-medium ${inter500.className}`}>Summary</div>
        <div className="w-24 h-7 relative bg-indigo-500 bg-opacity-10 rounded-lg">
          <div className="left-[12px] top-[5px] absolute justify-start items-center gap-5 inline-flex">
            <div className={`text-indigo-500 text-sm font-normal ${inter.className}`}>Sales</div>
            
            <Image src={arrowDownBlue}  alt="arrowDown"/>
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-1.5 flex">
        <div className={`text-zinc-900 text-xs font-normal ${inter.className}`}>Last 7 Days</div>
        <Image src={arrowDownBlack}  alt="arrowDown"/>
      </div>
    </div>
    <div className="self-stretch justify-between items-start inline-flex">
      <div className="flex-col justify-start items-end gap-9 inline-flex">
        <div className={`text-gray-400 text-xs font-normal ${inter.className}`}>100k</div>
        <div className={`text-right text-gray-400 text-xs font-normal ${inter.className}`}>80k</div>
        <div className={`text-right text-gray-400 text-xs font-normal ${inter.className}`}>60k</div>
        <div className={`text-right text-gray-400 text-xs font-normal ${inter.className}`}>40k</div>
        <div className={`text-right text-gray-400 text-xs font-normal ${inter.className}`}>20k</div>
      </div>
      <div className="flex-col justify-start items-center gap-5 inline-flex">
        <div className="w-3 h-60 relative">
          <div className="w-3 h-60 left-0 top-0 absolute bg-slate-100 rounded-3xl" />
          <div className="w-3 h-52 left-0 top-[30px] absolute bg-indigo-500 rounded-3xl" />
        </div>
        <div className={`text-right text-neutral-300 text-xs font-normal ${inter.className}`}>Sept 10</div>
      </div>
      <div className="flex-col justify-start items-center gap-5 inline-flex">
        <div className="w-3 h-60 relative">
          <div className="w-3 h-60 left-0 top-0 absolute bg-slate-100 rounded-3xl" />
          <div className="w-3 h-20 left-0 top-[157px] absolute bg-indigo-500 rounded-3xl" />
        </div>
        <div className={`text-right text-neutral-300 text-xs font-normal ${inter.className}`}>Sept 11</div>
      </div>
      <div className="flex-col justify-start items-center gap-5 inline-flex">
        <div className="w-3 h-60 relative">
          <div className="w-3 h-60 left-0 top-0 absolute bg-slate-100 rounded-3xl" />
          <div className="w-3 h-40 left-0 top-[87px] absolute bg-indigo-500 rounded-3xl" />
        </div>
        <div className={`text-right text-neutral-300 text-xs font-normal ${inter.className}`}>Sept 12</div>
      </div>
      <div className="flex-col justify-start items-center gap-5 inline-flex">
        <div className="w-3 h-60 relative">
          <div className="w-3 h-60 left-0 top-0 absolute bg-slate-100 rounded-3xl" />
          <div className="w-3 h-12 left-0 top-[190px] absolute bg-indigo-500 rounded-3xl" />
        </div>
        <div className={`text-right text-neutral-300 text-xs font-normal ${inter.className}`}>Sept 13</div>
      </div>
      <div className="flex-col justify-start items-center gap-5 inline-flex">
        <div className="w-3 h-60 relative">
          <div className="w-3 h-60 left-0 top-0 absolute bg-slate-100 rounded-3xl" />
          <div className="w-3 h-48 left-0 top-[45px] absolute bg-indigo-500 rounded-3xl" />
        </div>
        <div className={`text-right text-neutral-300 text-xs font-normal ${inter.className}`}>Sept 14</div>
      </div>
      <div className="flex-col justify-start items-center gap-5 inline-flex">
        <div className="w-3 h-60 relative">
          <div className="w-3 h-60 left-0 top-0 absolute bg-slate-100 rounded-3xl" />
          <div className="w-3 h-28 left-0 top-[135px] absolute bg-indigo-500 rounded-3xl" />
        </div>
        <div className={`text-right text-neutral-300 text-xs font-normal ${inter.className}`}>Sept 15</div>
      </div>
      <div className="flex-col justify-start items-center gap-5 inline-flex">
        <div className="w-3 h-60 relative">
          <div className="w-3 h-60 left-0 top-0 absolute bg-slate-100 rounded-3xl" />
          <div className="w-3 h-48 left-0 top-[45px] absolute bg-indigo-500 rounded-3xl" />
        </div>
        <div className={`text-right text-neutral-300 text-xs font-normal ${inter.className}`}>Sept 16</div>
      </div>
    </div>
  </div>
</div>

    
  </section>
  </>
}
