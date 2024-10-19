'use client'

import { useState , useEffect, Children} from 'react';

const BaseModal = ({ isOpen, clearForm, children }) => {
 
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = ''; 
        }

        return () => {
            document.body.style.overflow = ''; 
        };
    }, [isOpen]);


    if (!isOpen) {
        return null;
    }

    return (
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)'}} className='fixed inset-0 bg-black w-full h-full z-[20]' onClick={(e) => {
            e.stopPropagation();
            clearForm();
        }}>
            <div className="absolute bg-white w-full h-full sm:w-[500px] sm:h-[500px] -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 z-[30] box-border p-8" onClick={(e) => { e.stopPropagation() }}>
                <p className='absolute top-0 right-0  cursor-pointer underline pr-8' onClick={() => {
                    clearForm();
                }}>Close</p>
                <div className='overflow-y-scroll h-full flex items-center flex-col justify-center'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default BaseModal