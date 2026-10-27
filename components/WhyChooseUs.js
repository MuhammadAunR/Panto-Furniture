import React from 'react'
import Container from './Container'
import { MoveRight } from 'lucide-react'
import { features } from '@/constants/features'
import Link from 'next/link'

const WhyChooseUs = () => {
    return (
        <div className='bg-white py-20 shadow-[0px_0px_12px_rgba(0,0,0,0.2)]'>
            <Container>
                <section className='flex items-center justify-between'>
                    <h2 className='text-5xl font-heading font-bold text-primary'>Why <br /> Choose Us</h2>
                    <div className='flex items-center justify-center gap-5 flex-wrap'>
                        {features.map(item => {
                            return <Link
                                href={item.href}
                                key={item.id}
                                className='flex flex-col items-start w-80 px-4 py-2 gap-4 relative group'>
                                <h3 className='font-heading font-bold tracking-wider'>{item.title}</h3>
                                <p className=''>{item.description}</p>
                                <div className='flex items-center gap-5 text-highlight'>
                                    <span>More Info</span>
                                    <span className='group-hover:translate-x-2 transition-transform ease-linear duration-300'>
                                        <MoveRight strokeWidth={1} />
                                    </span>
                                </div>
                                <div className='h-0 w-px bg-highlight absolute left-0 top-1/2 -translate-y-1/2 group-hover:h-full transition-all ease-linear duration-300'></div>
                            </Link>
                        })}
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default WhyChooseUs