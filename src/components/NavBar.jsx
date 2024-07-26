import React from 'react'
import { FaPinterest, FaCommentDots, FaChevronDown  } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

const NavBar = () => {
    return (
        <div className='w-full h-20 flex items-center z-40 py-1 px-4 fixed left-0 right-0 top-0 bg-white'>
            <div className='h-14 w-full flex items-center justify-between'>
                <div className='flex items-center'>
                    <div className='size-12 flex items-center justify-center rounded-full hover:bg-[#eeeeee] cursor-pointer'>
                        <FaPinterest className='text-red-600' size={25}/>
                    </div>
                    <div className='h-12 bg-black px-4 overflow-hidden rounded-full max-xl:hidden'>
                        <button className='text-white h-full text-base font-semibold text-nowrap'>หน้าหลัก</button>
                    </div>
                    <div className='h-12 bg-white px-4 max-xl:hidden'>
                        <button className='text-black h-full text-base font-semibold'>สร้าง</button>
                    </div>
                    <div className='h-12 bg-white p-[14px] ml-2 overflow-hidden rounded-full hidden max-xl:block'>
                        <button className='text-black h-full text-base font-semibold text-nowrap '>
                            หน้าหลัก <FaChevronDown className='inline-block ml-1' size={14}/>
                        </button>
                    </div>
                </div>
                <div className='relative w-full h-12 flex items-center px-2 max-md:hidden group/input'>
                    <div className='bg-[rgb(241_241_241)] h-full flex items-center pl-4 rounded-tl-full rounded-bl-full group-hover/'>
                        <IoSearchSharp className='mr-2 text-[#767676]' size={20}/>
                    </div>
                    <input 
                        type="text"
                        className='h-full w-full bg-[rgb(241_241_241)] outline-none placeholder:text-[#767676] rounded-tr-full rounded-br-full'
                        placeholder='ค้นหา' 
                    />
                </div>
                <div className='flex items-center'>
                    <div className='hidden max-md:inline-block'>
                        <div className='size-12  cursor-pointer flex items-center justify-center rounded-full hover:bg-[#eeeeee]'>
                            <a href="#">
                                <IoSearchSharp className='ml-[5%] text-[#767676]' size={24}/>
                            </a>
                        </div>
                    </div>
                    <div className='size-12 cursor-pointer flex items-center justify-center rounded-full hover:bg-[#eeeeee]'>
                        <a href="#">
                            <IoIosNotifications className='text-[#767676]' size={30}/>
                        </a>
                    </div>
                    <div className='size-12 cursor-pointer flex items-center justify-center rounded-full hover:bg-[#eeeeee]'>
                        <a href="#">
                            <FaCommentDots className='text-[#767676]' size={26}/>
                        </a>
                    </div>
                    <div className='size-12 cursor-pointer flex items-center justify-center rounded-full hover:bg-[#eeeeee]'>
                        <a href="#">
                            <div className='size-6 bg-slate-500 rounded-full overflow-hidden'>
                                <img src="https://i.pinimg.com/75x75_RS/63/1e/53/631e53700ce9c9bbdc5c8d529956fc29.jpg" alt="" />
                            </div>
                        </a>
                    </div>
                    <div className='size-6 cursor-pointer flex items-center justify-center rounded-full hover:bg-[#eeeeee]'>
                        <a href="#">
                            <FaChevronDown className='text-[#767676]' size={16}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar