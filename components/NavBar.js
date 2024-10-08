'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");
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

        const path = window.location.pathname;
        console.log("pathpath: " + path);

        if (path.startsWith('/why')) {
            setActiveLink('why');
        }

        switch (path) {
            case '/why':
                setActiveLink('why');
                break;
            case '/how':
                setActiveLink('how');
                break;
            case '/who':
                setActiveLink('who');
                break;
            default:
                setActiveLink('what');
                break;
        }

        // document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Link className={`${activeLink === "what" && 'bg-[aqua]'}`} href="/" onClick={() => setActiveLink("what")}>What</Link>
                <div style={{ position: 'relative' }} >
                    <button className={`${activeLink === "why" && 'bg-[aqua]'}`} onClick={toggleDropdown} style={{ cursor: 'pointer' }} ref={dropdownRef}>
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
                                <Link onClick={() => setActiveLink("why")} href="/why">Take quiz</Link>
                                <Link onClick={() => setActiveLink("why")} href="/why/empowerment">Empowerment</Link>
                                <Link onClick={() => setActiveLink("why")} href="/why/bettersocialmedia">Better social media</Link>
                                <Link onClick={() => setActiveLink("why")} href="/why/elites">Elites</Link>
                                <Link onClick={() => setActiveLink("why")} href="/why/capitalism">Capitalism</Link>
                                <Link onClick={() => setActiveLink("why")} href="/why/humannature">Human nature</Link>
                            </div>
                        </div>
                    )}
                </div>
                <Link className={`${activeLink === "how" && 'bg-[aqua]'}`} href="/how" onClick={() => setActiveLink("how")}>How</Link>
                <Link className={`${activeLink === "who" && 'bg-[aqua]'}`} href="/who" onClick={() => setActiveLink("who")}>Who</Link>
            </div>
            <img src="https://media.cntraveler.com/photos/5c240136e223c55afc3e4206/16:9/w_2240,c_limit/Vancouver-Art-Gallery_VAG-ARCH-2006-015.jpg" alt="Girl in a jacket" width="500" height="600" />
        </div>
    );
};

export default NavBar;