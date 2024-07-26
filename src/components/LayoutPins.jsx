import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import imageData from '../imageData.js'
import { PiExportBold } from "react-icons/pi";
import { TfiMoreAlt } from "react-icons/tfi";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const LayoutPins = () => {

    useGSAP(() => {
        gsap.from('.img-box', {
            scale: 0,
            delay: 4.5,
            ease: 'bounce.out',
        });
    });
    

    useEffect(() => {
        ScrollReveal().reveal('.img-pin', { delay: 70, reset: true });
    }, [])

    return (
        <div className='max-w-[1750px] mx-auto px-4 columns-6 max-4xl:columns-5 max-3xl:columns-4 max-2xl:columns-3 max-lg:columns-2 gap-4 mt-20 overflow-hidden'>
            {imageData.map((img, index) => (
                <div className='img-box' key={index}>
                    <div className='img-pin w-full mb-3 break-inside-avoid relative group/item'>
                        <img className='max-w-full rounded-2xl w-full h-full' src={img.img} alt="" />
                        <div className='absolute inset-0 invisible bg-[rgba(0,0,0,0.4)] rounded-2xl cursor-zoom-in group-hover/item:visible'>
                            <button className='absolute top-3 right-3 py-3 px-5 rounded-full text-white bg-red-600 hover:bg-red-700 font-semibold'>บันทึก</button>
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
                </div>
            ))}
        </div>
    )
}

export default LayoutPins