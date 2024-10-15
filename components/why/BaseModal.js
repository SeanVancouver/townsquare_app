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
        <div className="fixed inset-0 bg-blue-500 w-full h-full z-[2]" onClick={(e) => {
            e.stopPropagation();
            clearForm();
        }}>
            <div className="absolute bg-red-500 w-6/12 h-1/2 -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 z-[5]" onClick={(e) => { e.stopPropagation() }}>
                <p className='absolute top-0 right-0 cursor-pointer underline' onClick={() => {
                    clearForm();
                }}>Close</p>
                {children}
            </div>
        </div>
    );
}

export default BaseModal