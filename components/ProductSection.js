'use client'
import React, { useEffect, useState } from 'react'
import Container from './Container'
import Image from 'next/image'
import { Plus } from 'lucide-react'
import Button from './Button'
import { motion } from 'motion/react'
import { fetchAllProducts } from '@/services/productServices'

const ProductSection = () => {

    const [activeCategory, setActiveCategory] = useState('Chair')
    const [products, setProducts] = useState([])
    const [activeCategoryProducts, setActiveCategoryProducts] = useState([])

    useEffect(() => {
        async function getAllProducts() {
            let res = await fetchAllProducts()
            setProducts(res.data)
            console.log(res)
        }
        getAllProducts()
    }, [activeCategory])

    useEffect(() => {
        setActiveCategoryProducts(
            products.filter(
                item => item.category.toLowerCase() === activeCategory.toLowerCase()
            )
        )
    }, [products, activeCategory])

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
                        {['Chair', 'Bed', 'Sofa', 'Table'].map(item => {
                            return <button
                                key={item}
                                onClick={() => setActiveCategory(item)}
                                className={`font-heading cursor-pointer py-3 px-3 md:px-5 rounded-full transition-all ease-linear duration-300 hover:bg-white
                                font-semibold ${item.toLowerCase() === activeCategory.toLowerCase() ? 'bg-white text-highlight' : 'bg-transparent'}`}>
                                {item}
                            </button>
                        })}
                    </motion.div>
                </div>

                <div className='flex items-center justify-center flex-wrap gap-5'>
                    {activeCategoryProducts.map((item, index) => {
                        return <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .70, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            key={item._id} className='w-full md:w-70 h-110 cursor-pointer p-1 border border-highlight/20 bg-white rounded-lg hover:border-highlight transition-all ease-linear duration-300 group'>
                            <div className='relative w-full h-70'>
                                <Image
                                    src={`/${activeCategory.toLowerCase()}.webp`}
                                    alt={item.name}
                                    fill
                                    sizes='260px'
                                    className='object-cover rounded-sm' />
                                {item.discount > 0 && <span
                                    className='bg-highlight rounded-md font-bold font-heading text-white p-1 absolute right-1 top-1 flex items-center justify-center'>
                                    {item.discount}%
                                </span>
                                }
                            </div>
                            <div className='py-5 px-2 flex flex-col gap-5 border-t border-highlight/20'>
                                <div className='flex flex-col items-start gap-1'>
                                    <span className='uppercase text-xs font-bold text-highlight'>{item.category}</span>
                                    <h3 className='font-bold font-heading text-lg text-primary'>{item.name}</h3>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-col items-start font-bold'>
                                        <span className='text-[10px]'>PKR</span>
                                        <span className='text-lg'>{item.defaultPrice}</span>
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