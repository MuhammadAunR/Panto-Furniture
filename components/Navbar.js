import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { navOptions } from '@/constants/navOptions'
import { Handbag } from 'lucide-react'

const Navbar = () => {
    return (
        <Container>
            <nav className='flex items-center justify-between py-5 text-white'>
                <Link
                    href={'/'}
                    className='text-2xl font-heading font-bold tracking-wider'>
                    Panto
                </Link>
                <ul className='flex items-center justify-center gap-15 max-lg:hidden'>
                    {navOptions.map(opt => {
                        return <Link
                            key={opt.label}
                            href={opt.href}
                            className='text-lg font-heading'>
                            <li>
                                {opt.label}
                            </li>
                        </Link>
                    })}
                </ul>

                <div>
                    <span>
                        <Handbag />
                    </span>
                </div>
            </nav>
        </Container>
    )
}

export default Navbar