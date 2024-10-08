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

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    console.log("vvvvvvvvv");
    

    useEffect(() => {
  

        const path = window.location.pathname;
        console.log("pathpath: " + path);

        if (path.startsWith('/what')) {
            setActiveLink('/what');
        }
        else if (path.startsWith('/why/empowerment')) {
            setActiveLink('/why/empowerment');
        }

        else if (path.startsWith('/why/bettersocialmedia')) {
            setActiveLink('/why/bettersocialmedia');
        }

        else if (path.startsWith('/why/elites')) {
            setActiveLink('/why/elites');
        }

        else if (path.startsWith('/why/capitalism')) {
            setActiveLink('/why/capitalism');
        }

        else if (path.startsWith('/why/humannature')) {
            setActiveLink('/why/humannature');
        }
        else if (path.startsWith('/why')) {
            setActiveLink('/why');
        }
        else if (path.startsWith('/how')) {
            setActiveLink('/how');
        }
        else if (path.startsWith('/who')) {
            setActiveLink('/who');
        }
        else {
            setActiveLink('/what');
        }

        // switch (path) {
        //     case '/why':
        //         setActiveLink('why');
        //         break;
        //     case '/how':
        //         setActiveLink('how');
        //         break;
        //     case '/who':
        //         setActiveLink('who');
        //         break;
        //     default:
        //         setActiveLink('what');
        //         break;
        // }

        // document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ position: 'fixed', top: 0, display: "flex", gap: "20px", alignItems: "center" }} className='bg-[blanchedalmond]'>
                <Link className={`${activeLink === "/what" && 'bg-[aqua]'}`} href="/" onClick={() => setActiveLink("/what")}>What</Link>
                <div style={{ position: 'relative' }} >
                    <button className={`${activeLink.startsWith("/why") && 'bg-[aqua]'}`} onClick={toggleDropdown} style={{ cursor: 'pointer' }} ref={dropdownRef}>
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
                                <Link className={`${activeLink === "/why" && 'bg-[aqua]'}`} onClick={() => setActiveLink("/why")} href="/why">Take quiz</Link>
                                <Link className={`${activeLink === "/why/empowerment" && 'bg-[aqua]'}`} onClick={() => setActiveLink("/why/empowerment")} href="/why/empowerment">Empowerment</Link>
                                <Link className={`${activeLink === "/why/bettersocialmedia" && 'bg-[aqua]'}`} onClick={() => setActiveLink("/why/bettersocialmedia")} href="/why/bettersocialmedia">Better social media</Link>
                                <Link className={`${activeLink === "/why/elites" && 'bg-[aqua]'}`} onClick={() => setActiveLink("/why/elites")} href="/why/elites">Elites</Link>
                                <Link className={`${activeLink === "/why/capitalism" && 'bg-[aqua]'}`} onClick={() => setActiveLink("/why/capitalism")} href="/why/capitalism">Capitalism</Link>
                                <Link className={`${activeLink === "/why/humannature" && 'bg-[aqua]'}`} onClick={() => setActiveLink("/why/humannature")} href="/why/humannature">Human nature</Link>
                            </div>
                        </div>
                    )}
                </div>
                <Link className={`${activeLink === "/how" && 'bg-[aqua]'}`} href="/how" onClick={() => setActiveLink("/how")}>How</Link>
                <Link className={`${activeLink === "/who" && 'bg-[aqua]'}`} href="/who" onClick={() => setActiveLink("/who")}>Who</Link>
            </div>
            <img src="https://media.cntraveler.com/photos/5c240136e223c55afc3e4206/16:9/w_2240,c_limit/Vancouver-Art-Gallery_VAG-ARCH-2006-015.jpg" alt="Girl in a jacket" width="500" height="600" className="mt-16" />
        </div>
    );
};

export default NavBar;