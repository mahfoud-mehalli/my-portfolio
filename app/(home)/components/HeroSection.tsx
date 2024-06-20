import { MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row justify-between items-center">
        <div className='space-y-10 text-center lg:text-start'>
            <h1 className='text-4xl lg:text-7xl font-bold capitalize'>
                Hi, and welcome 🖐<br /><span className='underline underline-offset-8 decoration-green-500'>I'm Mahfoud.</span>
            </h1>
            <p className='capitalize md:w-96 text-lg text-gray-300'>
                {"A full stack developer based in algeria, with +3 years of experience in the industry i bring your idea into reality"}
            </p>
            <Link href={"mailto:mahfoudmehalli12345@gmail.com"} className='inline-block group'>
                <div className='space-y-1'>
                    <h1 className='text-3xl font-bold group-hover:text-green-400'>Contact Me 📧</h1>
                    <div className="w-40 h-1 bg-green-500"></div>
                    <div className="w-40 h-1 bg-indigo-500 translate-x-2"></div>
                </div>
            </Link>
        </div>
        <div className='relative'>
            <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
                <div className='flex gap-3 translate-x-8'>
                    <div className='w-32 h-32 rounded-2xl bg-green-500'></div>
                    <div className='w-32 h-32 rounded-full bg-indigo-500'></div>
                </div>
                <div className='flex gap-3 -translate-x-8'>
                    <div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>
                    <div className='w-32 h-32 rounded-full bg-green-500'></div>
                </div>
                <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
            </div>
            <div className=' absolute bottom-5 sm:bottom-10 left-0 sm:-left-14'>

            <MovingBorderBtn borderRadius='.5rem' className='p-3 font-semibold'>
                <p>💼 Available for work</p>
            </MovingBorderBtn>
            </div>
        </div>
    </div>
  )
}

export default HeroSection