import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { testimonials } from '@/constants/testimonials'
import { Star } from 'lucide-react'

const TestimonialSection = () => {
    return (
        <div className='bg-white'>
            <Container>
                <section className='min-h-screen flex flex-col items-center justify-center gap-15'>
                    <div className='flex flex-col items-center justify-center gap-3'>
                        <span className='uppercase text-highlight font-heading font-semibold text-sm'>Testimonials</span>
                        <h2 className='text-4xl font-heading font-bold tracking-wider text-primary lg:max-w-xl'>Our Client Review</h2>
                    </div>
                    <div className='flex items-center justify-center gap-5 flex-wrap'>
                        {testimonials.map(item => {
                            return <div
                                key={item.id}
                                className='relative w-80 h-110 flex items-end justify-center py-3'>
                                <Image
                                    src={item.image}
                                    alt={'Exp'}
                                    fill
                                    sizes='600px'
                                    className='object-cover shadow-[0px_22px_20px_rgba(229,132,17,0.1)] rounded-xl brightness-50' />
                                <div className='bg-white absolute z-10 flex flex-col items-center justify-center gap-3 px-5 py-7 rounded-xl w-75 min-h-50'>
                                    <div className="avatar-wrap absolute w-12 h-12 -top-5 bg-white rounded-full">
                                        <Image src={item.avatar} alt={item.name} fill sizes='100px' className='object-cover rounded-full' />
                                    </div>
                                    <div className='flex flex-col items-center justify-center'>
                                        <h3 className='font-heading font-bold text-xl text-primary'>{item.name}</h3>
                                        <h4 className='font-heading font-semibold text-sm text-secondary/40'>{item.role}</h4>
                                    </div>
                                    <p className='text-center text-sm text-secondary/50'>"{item.review}"</p>

                                    <div className='flex items-center justify-center gap-1'>
                                        {[...Array(5)].map((_, index) => {
                                            return <span key={index} className={`${index < item.rating ? 'fill-highlight text-highlight' : 'fill-highlight/30 text-highlight/30'}`}>
                                                <Star size={14} fill='' />
                                            </span>
                                        })}
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default TestimonialSection