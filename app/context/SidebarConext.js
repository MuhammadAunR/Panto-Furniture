'use client'

import { createContext, useContext, useState } from "react"

const ContextProvider = createContext()
export const useSidebar = () => useContext(ContextProvider)

import React from 'react'

const SidebarConext = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <ContextProvider.Provider value={{ isOpen, toggleSidebar }}>
            {children}
        </ContextProvider.Provider>
    )
}

export default SidebarConext