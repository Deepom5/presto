import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Which is the capital of a?',
			answerOptions: [
				{ answerText: 'B', isCorrect: false },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'A', isCorrect: true },
				{ answerText: 'D', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'Which number is 7?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
        {
			questionText: 'Which of these is a file format for digital image?',
			answerOptions: [
				{ answerText: 'CIA', isCorrect: false },
				{ answerText: 'JPG', isCorrect: true },
				{ answerText: 'ICBM', isCorrect: false },
				{ answerText: 'IBM', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
    const [flag, setFlag] = useState(false);
	const [score, setScore] = useState(0);
    const [userAns, setUserAns]= useState(false);

	const handleAnswerOptionClick = (isCorrect) => {
	
    setUserAns(isCorrect);
       

		
	};
    const handleNext=()=>{
        const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
        if (currentQuestion=== questions.length-1){
            setFlag(!flag);
        }
        if (userAns) {
			setScore(score + 1);
		}
    }
    const handlePrev=()=>{
        setCurrentQuestion(currentQuestion-1);
    }
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
                        <div  style={{display:"flex"}}>
                        <input className="buttons" type="button" onClick={()=> handlePrev()} value="previous"/>
                        {flag?
                    <input className="buttons" type="button" onClick={()=> handleNext()} value="finish"/>    
                   : <input  className="buttons" type="button" onClick={()=> handleNext()} value="next"/>
                        }
                    </div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
                    <br/>
                   
				</>
			)}
		</div>
	);
}