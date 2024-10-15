'use client'

import { useState , useEffect} from 'react';
import { useRouter } from 'next/navigation'
import BaseModal from '@/components/why/BaseModal'

const INITIAL_LSC = "INITIAL_LSC";
const SECOND_SOCIAL = "SECOND_SOCIAL";
const SECOND_CULPRIT = "SECOND_CULPRIT";

const ReasonsModal = ({isOpen, setIsOpen}) => {
 
    const router = useRouter();

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
    const [currentAnswer, setCurrentAnswer] = useState("");
    const [answerArray, setAnswerArray] = useState([]);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [finalText, setFinalText] = useState("");


    const handleAnswerSelect = (option) => {
        setHasAnswered(true);
        setCurrentAnswer(option.value);

        let tempUpdateArray = answerArray;

        if (currentQuestion === INITIAL_LSC) {
            tempUpdateArray[0] = option.value;
        } 

        else {
            tempUpdateArray[1] = option.value;
            if (option.value === "secondSocialYes") {
                setFinalText("secondSocialYes");
            }
            if (option.value === "secondSocialNo") {
                setFinalText("secondSocialNo");
            }
            if (option.value === "secondCulpritElites") {
                setFinalText("secondCulpritElites");
            }
            if (option.value === "secondCulpritCapitalism") {
                setFinalText("secondCulpritCapitalism");
            }
            if (option.value === "secondCulpritHumanNature") {
                setFinalText("secondCulpritHumanNature");
            }
        }

        setAnswerArray(tempUpdateArray);

    };

    const clearForm = () => {
        setIsOpen(false);
        setCurrentAnswer("");
        setCurrentQuestion(INITIAL_LSC);
        setFinalText("");
        setHasAnswered(false);
    }

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


    if (!isOpen) {
        return null;
    }

    return (
        <BaseModal isOpen={isOpen} clearForm={clearForm}>
            <div className="mt-14">
                <h3 className="font-medium mb-2">{questionsObj[currentQuestion].question}</h3>
                <div className="space-y-2">
                    {questionsObj[currentQuestion].options.map((option, index) => (
                        <button
                            key={index}
                            // variant={answers[currentQuestion] === option ? "default" : "outline"}
                            variant={"default"}
                            onClick={() => handleAnswerSelect(option)}
                            className={`w-full justify-start ${option.value === currentAnswer && 'bg-[aqua]'}`}
                        >
                            {option.display}
                        </button>
                    ))}
                </div>
            </div>
            {finalText && <p>{finalText}</p>}
            <button
                onClick={handleNext}
                disabled={!hasAnswered}
                className={`mt-4 w-full ${hasAnswered && "text-[blue]"}`}
            >
                {currentQuestion === INITIAL_LSC ? "Next" : "Finish"}
            </button>
        </BaseModal>
    );
}

export default ReasonsModal