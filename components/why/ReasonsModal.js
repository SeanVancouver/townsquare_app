'use client'

import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'

const INITIAL_LSC = "INITIAL_LSC";
const SECOND_SOCIAL = "SECOND_SOCIAL";
const SECOND_CULPRIT = "SECOND_CULPRIT";

const ReasonsModal = ({ isOpen, setIsOpen }) => {
    // if(isOpen) {
    //     return <div>ReasonsModal</div> 
    // }
    // return <div>closed</div>;
    const router = useRouter();

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

    const questionsObj = {
        INITIAL_LSC: {
            question: 'Do you believe that the increasing wealth gap is a serious issue we face?',
            options: [{
                display: "Yes",
                value: "initialYes"
            }, {
                display: "No",
                value: "initialNo"
            }]
        },
        SECOND_SOCIAL: {
            question: 'Are you happy with the current social media landscape?',
            options: [{
                display: "Yes",
                value: "secondSocialYes"
            }, {
                display: "No",
                value: "secondSocialNo"
            }]
        },
        SECOND_CULPRIT: {
            question: 'Who is the fundamental culprit?',
            options: [{
                    display: "Elites",
                    value: "secondCulpritElites"
                }, {
                    display: "Capitalism",
                    value: "secondCulpritCapitalism"
                }, 
                {
                    display: "HumanNature",
                    value: "secondCulpritHumanNature"
                }
            ]
        },
    }

    const [currentQuestion, setCurrentQuestion] = useState(INITIAL_LSC);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [answerArray, setAnswerArray] = useState([]);
    const [hasAnswered, setHasAnswered] = useState(false);


    const resetQuestionnaire = () => {
        setCurrentQuestion(INITIAL_LSC);
        setAnswers(Array(questions.length).fill(null));
    };

    const handleAnswer = (option) => {
        setHasAnswered(true);

        console.log("ccccc");
        console.log(option);
        let tempUpdateArray = answerArray;

        if (currentQuestion === INITIAL_LSC) {
            tempUpdateArray[0] = option.value;
        } 

        else {
            tempUpdateArray[1] = option.value;
        }

        // newAnswers[currentQuestion] = answer;
        // setAnswers(newAnswers);

        // setAnswerArray([...answerArray, answer.value]);
        setAnswerArray(tempUpdateArray);

    };

    const handleNext = () => {
        setHasAnswered(false);
        if (currentQuestion === INITIAL_LSC) {
            if (answerArray[0] === "initialYes") {
                setCurrentQuestion(SECOND_CULPRIT);
            }
            else {
                setCurrentQuestion(SECOND_SOCIAL);
            }
            // setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsOpen(false);
            resetQuestionnaire();
            onComplete();
        }
    };

    const onComplete = () => {
        console.log("ccc");
        
        console.log(answerArray);

        if(answerArray.includes("initialYes") && answerArray.includes("secondCulpritElites")) {
            console.log("111");
            router.push('/why/elites');
        }
        if(answerArray.includes("initialYes") && answerArray.includes("secondCulpritCapitalism")) {
            console.log("222");
            router.push('/why/capitalism');
        }
        if(answerArray.includes("initialYes") && answerArray.includes("secondCulpritHumanNature")) {
            console.log("333");
            router.push('/why/humannature');
        }
        if(answerArray.includes("initialNo") && answerArray.includes("secondSocialYes")) {
            console.log("444");
            router.push('/why/empowerment');
        }
        if(answerArray.includes("initialNo") && answerArray.includes("secondSocialNo")) {
            console.log("555");
            router.push('/why/bettersocialmedia');
        }
    }

    // const handleNext = () => {
    //     if (currentQuestion < questions.length - 1) {
    //         console.log("111111");
    //         setCurrentQuestion(currentQuestion + 1);
    //     } else {
    //         console.log("222222");
    //         setIsOpen(false);
    //         resetQuestionnaire();
    //         console.log(answers);
    //         // onComplete(answers);
    //     }
    // };

    // let hasAnswered = false;

    // if(currentQuestion === INITIAL_LSC) {
    //     hasAnswered = answerArray[0] ? true : false;
    // }
    // else {
    //     hasAnswered = answerArray[1] ? true : false;
    // }

    if (!isOpen) {
        return null;
    }

    return (
        <div className="absolute bg-blue-500 w-full h-full z-[2] top-0" onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
            resetQuestionnaire();
        }}>
            <div className="absolute bg-red-500 w-6/12 h-1/2 -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 z-[5]" onClick={(e) => { e.stopPropagation() }}>
                {/* <FontAwesomeIcon icon={faXmark} onClick={() => {
                    setIsOpen(false);
                    resetQuestionnaire();
                }}
                    className="absolute right-0 cursor-pointer"
                /> */}
                {/* <p>I am a modal</p> */}
                <div className="mt-4">
                    <h3 className="font-medium mb-2">{questionsObj[currentQuestion].question}</h3>
                    {/* <h3 className="font-medium mb-2">{questions[currentQuestion].question}</h3> */}
                    <div className="space-y-2">
                        {questionsObj[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                variant={answers[currentQuestion] === option ? "default" : "outline"}
                                className="w-full justify-start"
                                onClick={() => handleAnswer(option)}
                            >
                                {option.display}
                            </button>
                        ))}
                    </div>
                    {/* <div className="space-y-2">
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
                    </div> */}
                </div>
                <button
                    onClick={handleNext}
                    disabled={!hasAnswered}
                    className={`mt-4 w-full ${hasAnswered && "text-[blue]"}`}
                >
                    {currentQuestion === INITIAL_LSC ? "Next" : "Finish"}
                </button>
            </div>
        </div>

    );
}

export default ReasonsModal