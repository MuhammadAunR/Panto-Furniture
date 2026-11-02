'use client'
import { useSidebar } from '@/app/context/SidebarConext'
import { navOptions } from '@/constants/navOptions'
import useBlockYScroll from '@/hooks/useBlockYScroll'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    const { isOpen, toggleSidebar } = useSidebar()
    useBlockYScroll(isOpen)
    return (
        <>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={toggleSidebar}
                        aria-hidden="true"
                        className="fixed inset-0 z-40 bg-secondary/70 backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>

            <aside
                aria-hidden={!isOpen}
                className={`fixed top-0 left-0 z-50 h-screen w-full md:w-100 bg-secondary/50 text-white p-5
                flex flex-col gap-40 transition-transform ease-linear duration-300
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <motion.div
                    initial={false}
                    animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ duration: 0.7, delay: isOpen ? 0.1 : 0 }}
                    className="flex items-center justify-between">
                    <Link
                        href="/"
                        onClick={toggleSidebar}
                        className="text-2xl font-heading font-bold tracking-widest hover:text-highlight transition-colors ease-linear duration-300">
                        Panto
                    </Link>
                    <button
                        onClick={toggleSidebar}
                        aria-label="Close menu"
                        className="bg-secondary rounded-full p-1.5 cursor-pointer hover:text-highlight transition-colors ease-linear duration-300"
                    >
                        <X size={20} />
                    </button>
                </motion.div>

                <nav>
                    <ul className="flex flex-col items-center justify-center gap-10">
                        {navOptions.map((opt, index) => (
                            <motion.li
                                key={opt.label}
                                initial={false}
                                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ duration: 0.7, delay: isOpen ? 0.1 * index : 0 }}
                            >
                                <Link
                                    href={opt.href}
                                    onClick={toggleSidebar}
                                    className="text-2xl font-bold font-heading tracking-wider transition-all ease-linear duration-300 hover:text-highlight relative group/nav"
                                >
                                    {opt.label}
                                    <span className="w-0 h-px bg-highlight absolute left-0 bottom-0 group-hover/nav:w-full transition-all ease-linear duration-200" />
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar