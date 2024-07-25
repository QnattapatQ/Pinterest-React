import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import imageData from '../imageData.js'
import { PiExportBold } from "react-icons/pi";
import { TfiMoreAlt } from "react-icons/tfi";


const LayoutPins = () => {

    useEffect(() => {
        ScrollReveal().reveal('.img-pin', { delay: 70, reset: true });
    }, [])

    return (
        <div className='max-w-[1750px] mx-auto px-4 columns-6 gap-4 mt-20 overflow-hidden'>
            {imageData.map((img, index) => (
                <div key={index} className='img-pin w-full mb-3 break-inside-avoid relative group/item'>
                    <img className='max-w-full rounded-2xl w-full h-full' src={img.img} alt="" />
                    <div className='absolute inset-0 invisible bg-[rgba(0,0,0,0.4)] rounded-2xl cursor-zoom-in group-hover/item:visible'>
                        <button className='absolute top-3 right-3 py-3 px-5 rounded-full text-white bg-red-600 hover:bg-red-700'>บันทึก</button>
                        <div className='absolute bottom-3 right-3 flex items-center gap-2'>
                            <button className='p-2 rounded-full bg-slate-100'>
                                <PiExportBold size={20}/>
                            </button>
                            <button className='p-2 rounded-full bg-slate-100'>
                                <TfiMoreAlt className='' size={20}/>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LayoutPins