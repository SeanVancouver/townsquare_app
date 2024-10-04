'use client'

import Header from '@/components/Header';
import { createContext, useContext, useState } from 'react';

export const NavbarContext = createContext();

export function Sidebar() {
  const [sharedState, setSharedState] = useState('Initial value');

  return (
    <NavbarContext.Provider value={{ sharedState }}>
      <Header />
    </NavbarContext.Provider>
  );
}