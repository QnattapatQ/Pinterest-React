import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import imageData from '../imageData.js'


const LayoutPins = () => {

    useEffect(() => {
        ScrollReveal().reveal('.img-pin', { delay: 70, reset: true });
    }, [])

    return (
        <div className='max-w-[1750px] mx-auto columns-6 gap-4 mt-20'>
            {imageData.map((img) => (
                <div className='img-pin w-full mb-3 break-inside-avoid'>
                    <img className='max-w-full rounded-2xl w-full h-full' src={img.img} alt="" />
                </div>
            ))}
        </div>
    )
}

export default LayoutPins