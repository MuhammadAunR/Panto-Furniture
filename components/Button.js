'use client'
import { MoveRight } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'

const Button = ({ text, className = 'px-5 py-3' }) => {
    return (
        <motion.button
            whileTap={{ scale: 0.97 }}
            className={`${className} flex items-center gap-5 border-2 border-highlight font-heading font-semibold text-white cursor-pointer bg-highlight rounded-full hover:bg-transparent hover:text-primary transition-all ease-linear duration-200 group`}>
            <span>{text}</span>
            <span className='group-hover:translate-x-1 transition-transform ease-linear duration-200'>
                <MoveRight strokeWidth={2} />
            </span>
        </motion.button>
    )
}

export default Button