'use client'
import { Search } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'
import Container from './Container'
import { features } from '@/constants/features'
import Link from 'next/link'
import Button from './Button'

const HeroSection = () => {
    return (
        <div className='flex flex-col'>
            <section className='flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-7 text-white'>

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
            <div className='bg-white py-20 shadow-[0px_0px_12px_rgba(0,0,0,0.2)]'>
                <Container>
                    <section className='flex items-center justify-between gap-10 max-lg:flex-col'>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .70, delay: 0.1 }}
                            viewport={{ once: true }}
                            className='text-3xl lg:text-4xl font-heading font-bold text-primary'>Why <br className='max-lg:hidden' /> Choose Us</motion.h2>
                        <div className='flex items-center justify-center gap-5 flex-wrap max-lg:justify-start'>
                            {features.map((item, index) => {
                                return <motion.span
                                    key={item.id}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: .70, delay: 0.2 * index }}
                                    viewport={{ once: true }}
                                >
                                    <Link
                                        href={item.href}
                                        className='flex flex-col items-start w-80 px-4 py-2 gap-4 relative group'>
                                        <h3 className='font-heading font-bold tracking-wider lg:text-lg'>{item.title}</h3>
                                        <p className='text-justify text-secondary/60'>{item.description}</p>
                                        <Button text={'More Info'} className={'text-xs px-5 py-1'} />
                                        <div className='h-0 w-px bg-highlight absolute left-0 top-1/2 -translate-y-1/2 group-hover:h-full transition-all ease-linear duration-300'></div>
                                    </Link>
                                </motion.span>
                            })}
                        </div>
                    </section>
                </Container>
            </div>
        </div>
    )
}
export default HeroSection