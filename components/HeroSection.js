'use client'
import { Search } from 'lucide-react'
import { motion } from 'motion/react'
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
                <div className='absolute inset-0 bg-black/70' />
            </div>

            <div className='relative z-10 flex flex-col items-center gap-7 px-3'>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .70, delay: 0.1 }}
                    viewport={{ once: true }}
                    className='text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-center lg:max-w-6xl'>
                    Make your interior more <span className='text-highlight'>minimalistic</span> & <span className='text-highlight'>modern</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .70, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='font-body max-md:text-sm lg:max-w-lg text-center'>
                    Turn your room with panto into a lot more minimalist and modern with ease and speed
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .70, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='flex items-center justify-between bg-white/10 backdrop-blur-xs border border-white/50 rounded-full py-1 px-2 w-full lg:w-1/3'>
                    <input type='text' placeholder='Search furniture' className='bg-transparent px-5 py-2 outline-none border-transparent w-full' />
                    <span className='bg-highlight rounded-full p-3 cursor-pointer'>
                        <Search size={20} />
                    </span>
                </motion.div>
            </div>

        </section>
    )
}
export default HeroSection