import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ExperienceSection = () => {
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between gap-2 min-h-screen w-10/11'>
                <div className='relative'>
                    <div className='relative w-150 h-100 z-10'>
                        <Image
                            src={'/experience.png'}
                            alt='Exp'
                            fill
                            sizes='600px'
                            className='object-cover shadow-[0px_22px_20px_rgba(229,132,17,0.1)] rounded-r-3xl' />
                    </div>
                    <div className='bg-black/10 opacity-50 w-100 h-80 absolute top-1/2 -translate-y-1/2 -right-10 rounded-r-3xl'></div>
                    <div className='bg-black/10 opacity-50 w-110 h-80 absolute -top-10 left-0 rounded-r-3xl'></div>
                </div>

                <div className='flex flex-col items-start gap-5'>
                    <span className='uppercase text-highlight font-heading font-semibold text-sm'>Experiences</span>
                    <h2 className='text-5xl font-heading font-bold tracking-wider text-primary lg:max-w-xl'>We Provide You The Best Experience</h2>
                    <p className='text-sm text-secondary lg:max-w-lg'>You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                    <div className='flex items-center gap-5 text-highlight'>
                        <span>More Info</span>
                        <span className='group-hover:translate-x-2 transition-transform ease-linear duration-300'>
                            <MoveRight strokeWidth={1} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection