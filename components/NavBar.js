'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const [headerTitle, setHeaderTitle] = useState("TownSquare");
    const dropdownRef = useRef(null);

    const pathname = usePathname();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        const path = window.location.pathname;

        if (path.startsWith('/what')) {
            setActiveLink('/what');
            setHeaderTitle('TownSquare');
        }
        else if (path.startsWith('/why/empowerment')) {
            setActiveLink('/why/empowerment');
            setHeaderTitle('Why: Empowerment');
        }
        else if (path.startsWith('/why/socialmedia')) {
            setActiveLink('/why/socialmedia');
            setHeaderTitle('Why: Social media');
        }
        else if (path.startsWith('/why/elites')) {
            setActiveLink('/why/elites');
            setHeaderTitle('Why: Elites');
        }
        else if (path.startsWith('/why/capitalism')) {
            setActiveLink('/why/capitalism');
            setHeaderTitle('Why: Capitalism');
        }
        else if (path.startsWith('/why/people')) {
            setActiveLink('/why/people');
            setHeaderTitle('Why: People');
        }
        else if (path.startsWith('/why')) {
            setActiveLink('/why');
            setHeaderTitle('Take Quiz');
        }
        else if (path.startsWith('/how')) {
            setActiveLink('/how');
            setHeaderTitle('Attack plan');
        }
        else if (path.startsWith('/who')) {
            setActiveLink('/who');
            setHeaderTitle('About me');
        }
        else if (path.startsWith('/join')) {
            setActiveLink('/join');
            setHeaderTitle('Join us');
        }
        else {
            setActiveLink('/what');
            setHeaderTitle('TownSquare');
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [pathname]);

    return (
        <>
            <div style={{ position: 'sticky', top: 0, display: "flex", gap: "20px", alignItems: "center", justifyContent: 'space-evenly', height: '4rem', zIndex: 10}} className='bg-[white]'>
                <Link className={`${activeLink !== "/what" && 'no-underline'} text-[black] underline-offset-8 text-[1.6rem]`} href="/">What</Link>
                <div style={{ position: 'relative' }} >
                    <span className={`${activeLink.startsWith("/why") && 'underline'} underline-offset-8 text-[1.6rem]`} onClick={toggleDropdown} style={{ cursor: 'pointer' }} ref={dropdownRef}>
                        Why {isDropdownOpen ? '▲' : '▼'}
                    </span>
                    {isDropdownOpen && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            backgroundColor: 'white',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            padding: '10px',
                            zIndex: 10,
                            width: 'max-content'
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <Link className={`${activeLink !== "/why" && 'no-underline'} underline-offset-4`} href="/why">Take quiz</Link>
                                <Link className={`${activeLink !== "/why/empowerment" && 'no-underline'} underline-offset-4`} href="/why/empowerment">1. Empowerment</Link>
                                <Link className={`${activeLink !== "/why/socialmedia" && 'no-underline'} underline-offset-4`} href="/why/socialmedia">2. Social media</Link>
                                <Link className={`${activeLink !== "/why/capitalism" && 'no-underline'} underline-offset-4`} href="/why/capitalism">3. Capitalism</Link>
                                <Link className={`${activeLink !== "/why/elites" && 'no-underline'} underline-offset-4`} href="/why/elites">4. Elites</Link>
                                <Link className={`${activeLink !== "/why/people" && 'no-underline'} underline-offset-4`} href="/why/people">5. People</Link>
                            </div>
                        </div>
                    )}
                </div>
                <Link className={`${activeLink !== "/how" && 'no-underline'} text-[black] underline-offset-8 text-[1.6rem]`} href="/how">How</Link>
                <Link className={`${activeLink !== "/who" && 'no-underline'} text-[black] underline-offset-8 text-[1.6rem]`} href="/who">Who</Link>
                <Link className={`${activeLink !== "/join" && 'no-underline'} text-[black] underline-offset-8 text-[1.6rem]`} href="/join">Join</Link>
            </div>
            {/* <img src="https://media.cntraveler.com/photos/5c240136e223c55afc3e4206/16:9/w_2240,c_limit/Vancouver-Art-Gallery_VAG-ARCH-2006-015.jpg" alt="Girl in a jacket" width="500" height="600" /> */}
            <div className='w-full'>
                <h1 className='absolute text-[white] text-center mx-auto inset-x-0'>{headerTitle}</h1>
                <img className='w-full' src="/assets/main_banner.jpg" />
            </div>
        </>

    );
};

export default NavBar;