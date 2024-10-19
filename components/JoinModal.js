import React, { useState } from 'react'
import BaseModal from './BaseModal'

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
            <h1>Welcome</h1>
            <p>In the Facebook and Discord groups below, you'll find awesome like minded people like you. Let's make history together!</p>
        </BaseModal>
    )
}

export default JoinModal