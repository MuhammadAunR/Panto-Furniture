"use client"
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { motion } from 'motion/react'

const ExperienceSection = () => {
    return (
        <div className='bg-white py-25'>
            <div className='flex items-center justify-between gap-2 lg:w-10/11 max-lg:flex-col-reverse max-lg:items-start max-lg:gap-15'>
                <div className='relative'>
                    <div className='relative w-70 h-50 md:w-100 md:h-80 lg:w-150 lg:h-100 z-10'>
                        <Image
                            src={'/experience.png'}
                            alt='Exp'
                            fill
                            sizes='(min-width: 1024px) 400px, 100vw'
                            loading='eager'
                            className='object-cover shadow-[0px_22px_20px_rgba(229,132,17,0.1)] rounded-r-3xl' />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .70, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='bg-black/10 opacity-50 w-50 h-40 md:w-100 md:h-70 absolute top-1/2 -translate-y-1/2 -right-5 md:-right-8 lg:-right-10 rounded-r-3xl'></motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .70, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='bg-black/10 opacity-50  w-55 md:w-75 lg:w-110 h-50 absolute -top-5 md:-top-8 lg:-top-10 left-0 rounded-r-3xl'></motion.div>
                </div>

                <div className='flex flex-col items-start gap-5 max-lg:px-10'>
                    <motion.span
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .70, delay: 0.1 }}
                        viewport={{ once: true }}
                        className='uppercase text-highlight font-heading font-semibold text-sm'>Experiences</motion.span>
                    <motion.h2
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .70, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='text-3xl lg:text-4xl font-heading font-bold tracking-wider text-primary lg:max-w-xl'>We Provide You The Best Experience</motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .70, delay: 0.3 }}
                        viewport={{ once: true }}
                        className='text-sm text-secondary lg:max-w-lg'>You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</motion.p>

                    <motion.span
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .70, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Button text={'More Info'} />
                    </motion.span>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection