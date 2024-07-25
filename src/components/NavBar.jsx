import React from 'react'
import { FaPinterest, FaCommentDots, FaChevronDown  } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

const NavBar = () => {
    return (
        <div className='w-full h-20 flex items-center z-40 py-1 px-4 fixed left-0 right-0 top-0 bg-white'>
            <div className='h-14 w-full flex items-center gap-4'>
                <div className='flex items-center gap-4'>
                    <FaPinterest className='text-red-600' size={25}/>
                    <div className='h-12 bg-black px-4 overflow-hidden rounded-full'>
                        <button className='text-white h-full text-base font-semibold text-nowrap'>หน้าหลัก</button>
                    </div>
                    <div className='h-12 bg-white px-4'>
                        <button className='text-black h-full text-base font-semibold'>สร้าง</button>
                    </div>
                </div>
                <div className='relative w-full h-full flex items-center'>
                    <div className='bg-[rgb(241_241_241)] h-full flex items-center pl-4 rounded-tl-full rounded-bl-full'>
                        <IoSearchSharp className='mr-2' size={20}/>
                    </div>
                    <input 
                        type="text"
                        className='h-full w-full bg-[rgb(241_241_241)] outline-none placeholder:text-black rounded-tr-full rounded-br-full'
                        placeholder='ค้นหา' 
                    />
                </div>
                <div className='flex items-center'>
                    <div className='size-12 cursor-pointer flex items-center justify-center rounded-full hover:bg-[#dfdfdf]'>
                        <a href="#">
                            <IoIosNotifications className='text-[#767676]' size={30}/>
                        </a>
                    </div>
                    <div className='size-12 cursor-pointer flex items-center justify-center rounded-full hover:bg-[#dfdfdf]'>
                        <a href="#">
                            <FaCommentDots className='text-[#767676]' size={26}/>
                        </a>
                    </div>
                    <div className='size-12 cursor-pointer flex items-center justify-center rounded-full hover:bg-[#dfdfdf]'>
                        <a href="#">
                            <div className='size-6 bg-slate-500 rounded-full'>

                            </div>
                        </a>
                    </div>
                    <div className='size-6 cursor-pointer flex items-center justify-center rounded-full hover:bg-[#dfdfdf]'>
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