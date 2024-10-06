'use client'

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ReasonsModal = ({ isOpen, setIsOpen }) => {
    // if(isOpen) {
    //     return <div>ReasonsModal</div> 
    // }
    // return <div>closed</div>;

    const questions = [
        {
            question: "What's your favorite color?",
            options: ["Red", "Blue", "Green", "Yellow"]
        },
        {
            question: "How often do you exercise?",
            options: ["Daily", "Weekly", "Monthly", "Rarely"]
        },
        {
            question: "What's your preferred programming language?",
            options: ["JavaScript", "Python", "Java", "C++"]
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));

    const resetQuestionnaire = () => {
        setCurrentQuestion(0);
        setAnswers(Array(questions.length).fill(null));
    };

    const handleAnswer = (answer) => {
        const newAnswers = [...answers];

        console.log("ccccc");
        console.log(answer);
        
        newAnswers[currentQuestion] = answer;
        setAnswers(newAnswers);
      };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            console.log("111111");
            setCurrentQuestion(currentQuestion + 1);
        } else {
            console.log("222222");
            setIsOpen(false);
            resetQuestionnaire();
            console.log(answers);
            // onComplete(answers);
        }
    };

    if (!isOpen) {
        return null;
    }

    console.log("disabledddd?");
    console.log(answers[currentQuestion]);

    return (
        <div className="absolute bg-blue-500 w-full h-full z-[2] top-0" onClick={(e) => {
            e.stopPropagation();
            console.log("outer click");
            setIsOpen(false);
            resetQuestionnaire();
        }}>
            <div className="absolute bg-red-500 w-6/12 h-1/2 -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 z-[5]" onClick={(e) => { e.stopPropagation() }}>
                <FontAwesomeIcon icon={faXmark} onClick={() => {
                    console.log("inner click");
                    setIsOpen(false);
                    resetQuestionnaire();
                }}
                    className="absolute right-0 cursor-pointer"
                />
                {/* <p>I am a modal</p> */}
                <div className="mt-4">
                    <h3 className="font-medium mb-2">{questions[currentQuestion].question}</h3>
                    <div className="space-y-2">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                variant={answers[currentQuestion] === option ? "default" : "outline"}
                                className="w-full justify-start"
                                onClick={() => handleAnswer(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
                <button
                    onClick={handleNext}
                    // disabled={answers[currentQuestion] === null}
                    className="mt-4 w-full"
                >
                    {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
                </button>
            </div>
        </div>

    );
}

export default ReasonsModal