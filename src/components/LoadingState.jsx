import { useGSAP } from '@gsap/react';
import React from 'react'
import { FaPinterest } from "react-icons/fa";
import gsap from 'gsap';

const LoadingState = () => {

    useGSAP(() => {

        const tl = gsap.timeline();

        gsap.to(".logo-pin", {
            keyframes: {
              scale: [5, 10, 5, 250],
              opacity: 1,
              ease: "none",
              easeEach: "power2.inOut" 
            },
            ease: "elastic",
            duration: 5,
            stagger: 0.2,
        });

        gsap.to(".logo-pin, .loading-bg", {
            opacity: 0,
            autoAlpha: 0,
            delay: 4.2
        });
    });
    
    return (
        <div className='loading-bg fixed inset-0 bg-white h-screen flex items-center justify-center z-50'>
            <FaPinterest className='logo-pin text-red-600' size={20}/>
        </div>
    )
}

export default LoadingState