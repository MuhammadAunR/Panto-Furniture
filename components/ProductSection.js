'use client'
import React, { useState } from 'react'
import Container from './Container'
import Image from 'next/image'
import { Plus } from 'lucide-react'
import Button from './Button'
import { motion } from 'motion/react'

const ProductSection = () => {

    const [activeCategory, setActiveCategory] = useState('Chair')
    const products = [
        {
            id: 1,
            category: "Chair",
            name: "Sakarias Armchair",
            rating: 5,
            price: 392,
            image: "/chair-1.png",
        },
        {
            id: 2,
            category: "Chair",
            name: "Baltsar Chair",
            rating: 5,
            price: 299,
            image: "/chair-2.png",
        },
        {
            id: 3,
            category: "Chair",
            name: "Anjay Chair",
            rating: 5,
            price: 519,
            image: "/chair-3.png",
        },
        {
            id: 4,
            category: "Chair",
            name: "Nyantuy Chair",
            rating: 5,
            price: 921,
            image: "/chair-4.png",
        },
    ];

    return (

        <Container>
            <section className='flex flex-col items-center justify-center gap-10 min-h-screen py-20'>

                <div className='flex flex-col items-center gap-7'>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .70, delay: 0.1 }}
                        viewport={{ once: true }}
                        className='text-3xl lg:text-4xl font-heading font-bold tracking-wider text-primary text-center'>Best Selling Products</motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .70, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='flex items-center justify-center gap-5 bg-black/5 backdrop-blur-sm border border-black/10 p-1 rounded-full w-fit'>
                        {['Chair', 'Beds', 'Sofa', 'Lamp'].map(item => {
                            return <button
                                key={item}
                                onClick={() => setActiveCategory(item)}
                                className={`font-heading cursor-pointer py-3 px-3 md:px-5 rounded-full transition-all ease-linear duration-300
                                font-semibold ${item === activeCategory ? 'bg-white text-highlight' : 'bg-transparent'}`}>
                                {item}
                            </button>
                        })}
                    </motion.div>
                </div>

                <div className='flex items-center justify-center flex-wrap gap-5'>
                    {products.map((item, index) => {
                        return <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .70, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            key={item.id} className='w-full md:w-70 h-110 cursor-pointer p-1 border border-highlight/20 bg-white rounded-lg hover:border-highlight transition-all ease-linear duration-300 group'>
                            <div className='relative w-full h-70'>
                                <Image src={item.image} alt={item.name} fill sizes='260px' className='object-cover' />
                            </div>
                            <div className='py-5 px-2 flex flex-col gap-5 border-t border-highlight/20'>
                                <div className='flex flex-col items-start gap-1'>
                                    <span className='uppercase text-xs font-bold text-highlight'>{item.category}</span>
                                    <h3 className='font-bold font-heading text-lg text-primary'>{item.name}</h3>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-start gap-0.5 font-bold'>
                                        <span className='text-[10px]'>$</span>
                                        <span className='text-lg'>{item.price}</span>
                                    </div>
                                    <motion.button
                                        whileTap={{ scale: 0.97 }}
                                        className='bg-primary p-2 rounded-full cursor-pointer text-white group-hover:text-highlight hover:-translate-y-0.5 transition-all ease-linear duration-300'>
                                        <Plus />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    })}
                </div>

                <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .70, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <Button text={'More Info'} />
                </motion.span>
            </section>
        </Container>
    )
}

export default ProductSection