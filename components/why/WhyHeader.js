'use client'

import { useState } from 'react';
import Header from "@/components/Header";
import ReasonsModal from './ReasonsModal';

const WhyHeader = () => {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <Header>
                <h1>Why TownSquare</h1>
                <h2>There are many good reasons, either read them all, or find yours by answering <span className='cursor-pointer underline' onClick={() => {
                    setIsOpen(true);
                }}>these questions</span></h2>
            </Header>

            <ReasonsModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </>

    )
}

export default WhyHeader