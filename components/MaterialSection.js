import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MaterialSection = () => {
    return (
        <div className='bg-white flex items-center justify-end overflow-hidden'>
            <div className='flex items-center justify-between gap-2 min-h-screen w-10/11'>
                <div className='flex flex-col items-start gap-5'>
                    <span className='uppercase text-highlight font-heading font-semibold text-sm'>Materials</span>
                    <h2 className='text-5xl font-heading font-bold tracking-wider text-primary lg:max-w-xl'>Very serious materials for making furniture</h2>
                    <p className='text-sm text-secondary lg:max-w-lg'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                    <div className='flex items-center gap-5 text-highlight'>
                        <span>More Info</span>
                        <span className='group-hover:translate-x-2 transition-transform ease-linear duration-300'>
                            <MoveRight strokeWidth={1} />
                        </span>
                    </div>
                </div>

                <div className='flex items-end gap-10'>
                    <div className='flex flex-col gap-10'>
                        <div className='relative w-50 h-50 z-10'>
                            <Image
                                src={'/material-1.webp'}
                                alt='Exp'
                                fill
                                sizes='240px'
                                className='object-cover shadow-[0px_14px_20px_rgba(0,0,0,0.2)] rounded-xl' />
                        </div>
                        <div className='relative w-50 h-70 z-10'>
                            <Image
                                src={'/material-2.webp'}
                                alt='Exp'
                                fill
                                sizes='240px'
                                className='object-cover shadow-[0px_12px_20px_rgba(0,0,0,0.2)] rounded-3xl' />
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='relative w-100 h-100 z-10'>
                            <Image
                                src={'/material-3.webp'}
                                alt='Exp'
                                fill
                                sizes='600px'
                                className='object-cover shadow-[0px_22px_20px_rgba(229,132,17,0.1)] rounded-l-3xl' />
                        </div>
                        <div className='bg-black/10 opacity-50 w-70 h-50 absolute -top-10 -right-5 rounded-l-3xl'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaterialSection