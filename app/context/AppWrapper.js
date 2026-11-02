import React from 'react'
import SidebarConext from './SidebarConext'

const AppWrapper = ({ children }) => {
    return (
        <>
            <SidebarConext>
                {children}
            </SidebarConext>
        </>
    )
}

export default AppWrapper