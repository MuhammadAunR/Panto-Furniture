'use client'
import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { navOptions } from '@/constants/navOptions'
import { Handbag, Menu } from 'lucide-react'
import { useSidebar } from '@/app/context/SidebarConext'

const Navbar = () => {

    const { toggleSidebar } = useSidebar()

    return (
        <Container>
            <nav className='flex items-center justify-between py-5 text-white relative z-10'>
                <Link
                    href={'/'}
                    className='text-2xl font-heading font-bold tracking-widest hover:text-highlight transition-colors ease-linear duration-300'>
                    Panto
                </Link>
                <ul className='flex items-center justify-center gap-15 max-lg:hidden'>
                    {navOptions.map(opt => {
                        return <Link
                            key={opt.label}
                            href={opt.href}
                            className='text-lg font-heading tracking-widest transition-all ease-linear duration-300 hover:text-highlight relative group/nav'>
                            <li>
                                {opt.label}
                            </li>
                            <span className='w-0 h-px bg-highlight absolute left-0 bottom-0 group-hover/nav:w-full transition-all ease-linear duration-200'></span>
                        </Link>
                    })}
                </ul>

                <div className='flex items-center gap-5'>
                    <span className='hover:text-highlight transition-colors ease-linear duration-300 cursor-pointer group'>
                        <Handbag className='group-hover:-translate-y-0.5 transition-transform ease-linear duration-300' />
                    </span>
                    <span
                        onClick={toggleSidebar}
                        className='lg:hidden'>
                        <Menu />
                    </span>
                </div>
            </nav>
        </Container>
    )
}

export default Navbar