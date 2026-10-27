'use client'
import React, { useState } from 'react'
import Container from './Container'
import Image from 'next/image'
import { MoveRight, Plus } from 'lucide-react'

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
            <section className='flex flex-col items-center justify-center gap-20 min-h-screen py-20'>

                <div className='flex flex-col items-center gap-7'>
                    <h2 className='text-4xl font-heading font-bold tracking-wider text-primary'>Best Selling Products</h2>
                    <div className='flex items-center justify-center gap-5 bg-black/5 backdrop-blur-sm border border-black/10 p-1 rounded-full w-fit '>
                        {['Chair', 'Beds', 'Sofa', 'Lamp'].map(item => {
                            return <button
                                key={item}
                                onClick={() => setActiveCategory(item)}
                                className={`font-heading cursor-pointer py-3 px-5 rounded-full transition-all ease-linear duration-300
                                font-semibold ${item === activeCategory ? 'bg-white text-highlight' : 'bg-transparent'}`}>
                                {item}
                            </button>
                        })}
                    </div>
                </div>

                <div className='flex items-center justify-center flex-wrap gap-10'>
                    {products.map(item => {
                        return <div key={item.id} className='w-60 h-100 cursor-pointer group'>
                            <div className='relative w-60 h-70'>
                                <Image src={item.image} alt={item.name} fill sizes='260px' className='object-cover' />
                            </div>
                            <div className='bg-white py-5 px-2 flex flex-col gap-5 group-hover:shadow-lg transition-all ease-linear duration-300 rounded-b-2xl'>
                                <div className='flex flex-col items-start gap-1'>
                                    <span className='uppercase text-xs font-bold text-highlight'>{item.category}</span>
                                    <h3 className='font-bold font-heading text-lg text-primary'>{item.name}</h3>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-start gap-0.5 font-bold'>
                                        <span className='text-[10px]'>$</span>
                                        <span className='text-lg'>{item.price}</span>
                                    </div>
                                    <button className='bg-primary p-2 rounded-full cursor-pointer text-white group-hover:text-highlight hover:-translate-y-0.5 transition-all ease-linear duration-300'>
                                        <Plus />
                                    </button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

                <button className='flex items-center gap-5 border-2 border-highlight font-heading font-semibold text-white cursor-pointer bg-highlight rounded-full px-5 py-3 hover:bg-transparent hover:text-primary transition-all ease-linear duration-200 group'>
                    <span>More Info</span>
                    <span className='group-hover:translate-x-1 transition-transform ease-linear duration-200'>
                        <MoveRight strokeWidth={2} />
                    </span>
                </button>
            </section>
        </Container>
    )
}

export default ProductSection