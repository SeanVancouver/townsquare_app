'use client'

import React from 'react'

function Header({ children }) {
    return <div>
        <p>____header____</p>
        {children}
        <p>----header----</p>
    </div>;
}

export default Header