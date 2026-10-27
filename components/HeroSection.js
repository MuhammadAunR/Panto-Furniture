import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <section className='flex flex-col items-center justify-center h-[calc(100vh-100px)]  gap-7 text-white'>
            
            <div className='absolute inset-0'>
                <Image
                    src='/hero-section.webp'
                    alt='Hero Section Image'
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover'
                />
                <div className='absolute inset-0 bg-black/60' />
            </div>

            <div className='relative z-10 flex flex-col items-center gap-7 px-10'>
                <h1 className='text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-center lg:max-w-6xl'>
                    Make your interior more minimalistic & modern
                </h1>
                <p className='font-body max-md:text-sm lg:max-w-lg text-center'>
                    Turn your room with panto into a lot more minimalist and modern with ease and speed
                </p>
                <div className='flex items-center justify-between bg-white/10 backdrop-blur-xs border border-white/50 rounded-full py-1 px-2 w-10/12 lg:w-1/3'>
                    <input type='text' placeholder='Search furniture' className='bg-transparent px-5 py-2 outline-none border-transparent w-full' />
                    <span className='bg-highlight rounded-full p-3 cursor-pointer'>
                        <Search size={20} />
                    </span>
                </div>
            </div>

        </section>
    )
}
export default HeroSection