'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        console.log("asdfds");
        
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        // document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Link href="/">What</Link>
                <div style={{ position: 'relative' }} >
                    <button onClick={toggleDropdown} style={{ cursor: 'pointer' }} ref={dropdownRef}>
                        Why {isDropdownOpen ? '▲' : '▼'}
                    </button>
                    {isDropdownOpen && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            backgroundColor: 'white',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            padding: '10px',
                            zIndex: 1000,
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <Link href="/why">Take quiz</Link>
                                <Link href="/why/empowerment">Empowerment</Link>
                                <Link href="/why/bettersocialmedia">Better social media</Link>
                                <Link href="/why/elites">Elites</Link>
                                <Link href="/why/capitalism">Capitalism</Link>
                                <Link href="/why/humannature">Human nature</Link>
                            </div>
                        </div>
                    )}
                </div>
                <Link href="/how">How</Link>
            </div>
            <img src="https://media.cntraveler.com/photos/5c240136e223c55afc3e4206/16:9/w_2240,c_limit/Vancouver-Art-Gallery_VAG-ARCH-2006-015.jpg" alt="Girl in a jacket" width="500" height="600" />

        </div>
    );
};

export default NavBar;