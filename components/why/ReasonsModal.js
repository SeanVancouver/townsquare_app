'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ReasonsModal = ({ isOpen, setIsOpen }) => {
    // if(isOpen) {
    //     return <div>ReasonsModal</div> 
    // }
    // return <div>closed</div>;

    if (!isOpen) {
        return null;
    }

    return (
        <div className="absolute bg-blue-500 w-full h-full z-[2] top-0" onClick={(e) => {
            e.stopPropagation();
            console.log("outer click");
            setIsOpen(false);
        }}>
            <div className="absolute bg-red-500 w-6/12 h-1/2 -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 z-[5]" onClick={(e) => {e.stopPropagation()}}>
                <FontAwesomeIcon icon={faXmark} onClick={() => {
                    console.log("inner click");
                    setIsOpen(false);
                }}
                    className="absolute right-0 cursor-pointer"
                />
                <p>I am a modal</p>
            </div>
        </div>

    );
}

export default ReasonsModal