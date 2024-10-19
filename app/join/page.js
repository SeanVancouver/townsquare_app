'use client'

import JoinModal from '@/components/JoinModal';
import React, { useState } from 'react'

function page() {

    const [isOpen, setIsOpen] = useState(false);

    const [isChecked, setIsChecked] = useState(false);
    const [showFirstPage, setShowFirstPage] = useState(true);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleJoinClick = () => {
        setIsOpen(true);
    };

    return (
        <>
            <article className="leading-6 m-0 px-8 py-8 sm:text-[1.2rem]">
                <p>Thank you for your interest!</p>

                <p>TownSquare is a long term goal, and it is important that we form a community with common understanding as we strive towards it.&nbsp;</p>

                <p>As such, there are a few housekeeping conditions that you need to agree on before we can let you join.&nbsp;</p>

                <p>1. Our goal is the TownSquare project.</p>
                <div className='ml-5'>
                    <p>If you are interested because you like to fight wealth inequality or the elites, know that this group is NOT looking to have discussion on what the solution is, for it has already been decided to be TownSquare. Accept this or otherwise there are certainly more open ended groups for you to join.</p>
                </div>


                <p>2. We are action based.</p>
                <div className='ml-5'>
                    <p>This group is for those who are ready for action. The foreseeable objective is to spread the idea of TownSquare. We aim to form actionable plans in this regards, and not interested in endless arguments, unactionable ideologies, constant news sharing, etc.</p>
                </div>


                <p>3. No bigots.</p>
                <div className='ml-5'>
                    <p>It is sad to have to say this, but do conduct yourself in a civil manner, and don't hate or discriminate.</p>
                    <p>The founder of this group is an immigrant, part of LGBTQ, and visible minority...so don&apos;t make things awkward please.</p>
                </div>



                <div className='mt-10'>
                    <input
                        type="checkbox"
                        id="scales"
                        name="scales"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className='mr-2'
                    />
                    <label htmlFor="scales" className='cursor-pointer'><b>
                        You agree to the conditions above, and understand that failure to comply will have you removed from the group
                    </b></label>
                </div>

                <button
                    disabled={!isChecked}
                    onClick={handleJoinClick}
                    className='text-[1.2rem] mt-4 px-8 py-2'
                >
                    Join
                </button>
            </article>
            <JoinModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default page