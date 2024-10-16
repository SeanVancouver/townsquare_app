import React, { useState } from 'react'
import BaseModal from './why/BaseModal'

const JoinModal = ({ isOpen, setIsOpen }) => {

    const clearForm = () => {
        console.log("sdfddfsd");
        setIsOpen(false);
        setShowFirstPage(true);
        setIsChecked(false);
    }

    const [isChecked, setIsChecked] = useState(false);
    const [showFirstPage, setShowFirstPage] = useState(true);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleJoinClick = () => {
        setShowFirstPage(false);
    };


    return (
        <BaseModal isOpen={isOpen} clearForm={clearForm}>

            {showFirstPage ? (
                <div className='firstPage'>
                    <p>Thank you for your interest!</p>
                    <p><br /></p>
                    <p>TownSquare is a long term goal, and it is important that we foster a community spirit with common understanding as we strive towards it.&nbsp;</p>
                    <p><br /></p>
                    <p>As such, there are a few housekeeping conditions that you need to agree on before we can let you join.&nbsp;</p>
                    <p><br /></p>
                    <p>&nbsp; &nbsp; 1. Our ultimate goal is the creation of the TownSquare project</p>
                    <p>&nbsp; &nbsp; &nbsp; &nbsp; If you are interested because you like to fight wealth inequality or the elites, know that this group is NOT looking to have discussion on what the solution is, for it has already been decided to be TownSquare. Accept this or otherwise there are certainly more open ended groups for you to join.</p>
                    <p><br /></p>
                    <p>&nbsp; &nbsp; 2. We are action based&nbsp;</p>
                    <p>&nbsp; &nbsp; &nbsp; &nbsp; This group is for those who are ready for action, not those who like to argue for the sake of arguing. The foreseeable objective is to spread the idea of TownSquare. We aim to form actionable plans in this regards, and not interested in endless arguments, unactionable ideologies, ceaseless news sharing, etc.</p>
                    <p><br /></p>
                    <p>&nbsp; &nbsp; 3. No bigots</p>
                    <p>It feels sad to have to say this, but do conduct yourself in a civil manner, and don't hate or discriminate.</p>
                    <p>&nbsp; &nbsp; &nbsp; &nbsp; The founder of this group is an immigrant, part of LGBTQ, and visible minority...so don&apos;t make things awkward please.</p>
                    <p><br /></p>
                    <p><br /></p>
                    <div>
                        <input 
                            type="checkbox" 
                            id="scales" 
                            name="scales" 
                            checked={isChecked} 
                            onChange={handleCheckboxChange} 
                        />
                        <label htmlFor="scales">You agree to the conditions above, and understand that failure to comply may cause your removal from the group</label>
                    </div>

                    <button
                        disabled={!isChecked}
                        onClick={handleJoinClick}
                    >
                        Join
                    </button>
                </div>
            ) : (
                <div className='secondPage'>
                    <h3>Welcome!</h3>
                </div>
            )}
        </BaseModal>
    )
}

export default JoinModal