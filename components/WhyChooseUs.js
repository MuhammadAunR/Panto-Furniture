'use client'
import React from 'react'
import Container from './Container'
import { features } from '@/constants/features'
import Link from 'next/link'
import Button from './Button'
import { motion } from 'motion/react'

const WhyChooseUs = () => {
    return (
        <div className='bg-white shadow-[0px_0px_12px_rgba(0,0,0,0.2)]'>
            <Container>
                <section className='flex items-center justify-between gap-10 max-lg:flex-col py-20'>
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
    )
}

export default WhyChooseUs