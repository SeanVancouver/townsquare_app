'use client'

import { createContext, useContext, useState } from 'react';

export const NavbarContext = createContext();

export function NavbarProvider({ children }) {
    const [sharedState, setSharedState] = useState('Initial value');
    
    return (
        <NavbarContext.Provider value={{ sharedState, setSharedState }}>
            {children}
        </NavbarContext.Provider>
    );
}

export function useNavbarContext() {
    const context = useContext(NavbarContext);
    if (context === undefined) {
        throw new Error('useNavbarContext must be used within a NavbarProvider');
    }
    return context;
}