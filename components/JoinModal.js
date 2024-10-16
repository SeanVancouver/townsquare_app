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
            <p>Welcome!</p>
        </BaseModal>
    )
}

export default JoinModal