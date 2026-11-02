'use client'
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { motion } from 'motion/react'

const MaterialSection = () => {
    return (
        <div className='bg-white flex items-center justify-end overflow-hidden max-lg:flex-col py-10'>
            <div className='flex items-center justify-between gap-2 lg:w-10/11 max-lg:flex-col max-lg:items-center max-lg:gap-20'>
                <div className='flex flex-col items-start gap-5 px-5'>
                    <motion.span
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .70, delay: 0.1 }}
                        viewport={{ once: true }}
                        className='uppercase text-highlight font-heading font-semibold text-sm'>Materials</motion.span>
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .70, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='text-3xl lg:text-4xl font-heading font-bold tracking-wider text-primary lg:max-w-xl'>Very serious materials for making furniture</motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .70, delay: 0.3 }}
                        viewport={{ once: true }}
                        className='text-sm text-secondary lg:max-w-lg'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</motion.p>
                    <motion.span
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .70, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Button text={'More Info'} />
                    </motion.span>
                </div>

                <div className='flex items-end gap-5 lg:gap-10 max-lg:flex-col-reverse max-lg:items-center'>
                    <div className='flex flex-col gap-5 lg:gap-10 max-lg:flex-row w-full'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .70, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='relative w-[50%] h-60 lg:w-50 lg:h-50'>
                            <Image
                                src={'/material-1.webp'}
                                alt='Exp'
                                fill
                                sizes='(min-width: 1024px) 400px, 100vw'
                                loading='eager'
                                className='object-cover shadow-[0px_14px_20px_rgba(0,0,0,0.2)] rounded-xl' />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .70, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='relative w-[50%] h-60 lg:w-50 lg:h-70'>
                            <Image
                                src={'/material-2.webp'}
                                alt='Exp'
                                fill
                                sizes='(min-width: 1024px) 400px, 100vw'
                                loading='eager'
                                className='object-cover shadow-[0px_12px_20px_rgba(0,0,0,0.2)] rounded-3xl' />
                        </motion.div>
                    </div>
                    <div className='relative'>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .70, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='relative w-screen h-80 lg:w-100 lg:h-100 z-10'>
                            <Image
                                src={'/material-3.webp'}
                                alt='Exp'
                                fill
                                sizes='(min-width: 1024px) 400px, 100vw'
                                loading='eager'
                                className='object-cover shadow-[0px_22px_20px_rgba(229,132,17,0.1)] max-lg:rounded-3xl rounded-l-3xl' />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .70, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='bg-black/10 opacity-50 w-10/12 h-50 lg:w-70 lg:h-50 absolute -top-8 lg:-top-10 -right-8 lg:-right-5 rounded-l-3xl'></motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaterialSection