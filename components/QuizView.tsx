
import React, { useState, useContext, useRef } from 'react';
import { quizQuestions } from '../constants';
import { QuizQuestion, QuizType, MultipleChoiceQuestion, DragAndDropQuestion, WritingQuestion, ViewType } from '../types';
import Button from './common/Button';
import Card from './common/Card';
import { AppContext } from '../App';
import { getAIFeedback } from '../services/geminiService';
import { ArrowRight, Check, Send, Sparkles } from 'lucide-react';

const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};

const QuizView: React.FC = () => {
    const context = useContext(AppContext);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [dndItems, setDndItems] = useState<string[]>([]);
    const [writingText, setWritingText] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);
    
    const dragItem = useRef<number | null>(null);
    const dragOverItem = useRef<number | null>(null);

    const currentQuestion = quizQuestions[currentQuestionIndex];

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setIsCorrect(null);
            setFeedback('');
            setWritingText('');
            if(quizQuestions[currentQuestionIndex + 1].type === QuizType.DRAG_AND_DROP) {
                const q = quizQuestions[currentQuestionIndex + 1] as DragAndDropQuestion;
                setDndItems(shuffleArray(q.correctOrder));
            }
        } else {
            context?.setView(ViewType.EVALUATION);
        }
    };

    const handleMcSubmit = () => {
        const question = currentQuestion as MultipleChoiceQuestion;
        if (selectedAnswer === question.correctAnswer) {
            setIsCorrect(true);
            context?.setScore(s => s + 1);
        } else {
            setIsCorrect(false);
        }
    };

    const handleDndSubmit = () => {
        const question = currentQuestion as DragAndDropQuestion;
        const isOrderCorrect = dndItems.every((item, index) => item === question.correctOrder[index]);
        setIsCorrect(isOrderCorrect);
        if (isOrderCorrect) {
            context?.setScore(s => s + 1);
        }
    };
    
    const handleWritingFeedback = async () => {
        setIsLoadingFeedback(true);
        setFeedback('');
        const question = currentQuestion as WritingQuestion;
        const aiFeedback = await getAIFeedback(writingText, question.geminiPromptContext);
        setFeedback(aiFeedback);
        setIsLoadingFeedback(false);
    };

    const handleDragSort = () => {
        if (dragItem.current === null || dragOverItem.current === null) return;
        const newItems = [...dndItems];
        const draggedItemContent = newItems.splice(dragItem.current, 1)[0];
        newItems.splice(dragOverItem.current, 0, draggedItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setDndItems(newItems);
    };

    const renderQuestion = () => {
        switch (currentQuestion.type) {
            case QuizType.MULTIPLE_CHOICE:
                const mcQuestion = currentQuestion as MultipleChoiceQuestion;
                return (
                    <div>
                        <p className="text-lg mb-2">{mcQuestion.context}</p>
                        <h3 className="text-2xl font-bold mb-6">{mcQuestion.question}</h3>
                        <div className="space-y-4">
                            {mcQuestion.options.map(option => (
                                <button
                                    key={option}
                                    onClick={() => isCorrect === null && setSelectedAnswer(option)}
                                    className={`w-full text-left p-4 border-2 rounded-lg transition-all ${
                                        selectedAnswer === option
                                            ? 'bg-teal-100 border-teal-500 ring-2 ring-teal-500'
                                            : 'bg-white border-slate-200 hover:border-teal-300'
                                    } ${ isCorrect !== null && option === mcQuestion.correctAnswer ? 'bg-green-100 border-green-500' : ''}
                                    ${ isCorrect === false && selectedAnswer === option ? 'bg-red-100 border-red-500' : ''}
                                    `}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        {isCorrect !== null && (
                            <div className={`mt-4 p-4 rounded-lg text-center font-semibold ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {isCorrect ? 'Correct!' : `Wrong! The correct answer is: ${mcQuestion.correctAnswer}`}
                            </div>
                        )}
                    </div>
                );

            case QuizType.DRAG_AND_DROP:
                 const dndQuestion = currentQuestion as DragAndDropQuestion;
                 if(dndItems.length === 0) setDndItems(shuffleArray(dndQuestion.correctOrder));
                 return (
                    <div>
                         <h3 className="text-2xl font-bold mb-6">{dndQuestion.title}</h3>
                         <div className="space-y-3">
                            {dndItems.map((item, index) => (
                                <div
                                    key={index}
                                    draggable
                                    onDragStart={() => dragItem.current = index}
                                    onDragEnter={() => dragOverItem.current = index}
                                    onDragEnd={handleDragSort}
                                    onDragOver={(e) => e.preventDefault()}
                                    className={`p-4 border-2 rounded-lg cursor-grab active:cursor-grabbing bg-white flex items-center
                                    ${isCorrect === true ? 'bg-green-100 border-green-500' : ''}
                                    ${isCorrect === false ? 'bg-red-100 border-red-500' : ''}`}
                                >
                                    <span className="text-slate-400 mr-4 font-mono">{index + 1}.</span> {item}
                                </div>
                            ))}
                         </div>
                          {isCorrect !== null && (
                            <div className={`mt-4 p-4 rounded-lg text-center font-semibold ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {isCorrect ? 'Correct Order!' : 'Incorrect Order. Try again or check the materials.'}
                            </div>
                        )}
                    </div>
                 );
            
            case QuizType.WRITING:
                const writingQuestion = currentQuestion as WritingQuestion;
                return (
                    <div>
                        <h3 className="text-2xl font-bold mb-4">{writingQuestion.title}</h3>
                        <p className="mb-4 text-slate-600">{writingQuestion.prompt}</p>
                        <img src={writingQuestion.imageUrl} alt="prompt" className="rounded-lg mb-4 w-full h-auto max-w-md mx-auto" />
                        <textarea
                            value={writingText}
                            onChange={(e) => setWritingText(e.target.value)}
                            className="w-full p-4 border-2 rounded-lg h-48 focus:ring-teal-500 focus:border-teal-500"
                            placeholder="Write your procedure text here..."
                        />
                        <div className="mt-4 flex justify-end">
                            <Button onClick={handleWritingFeedback} disabled={isLoadingFeedback || !writingText}>
                                {isLoadingFeedback ? 'Getting Feedback...' : <><Sparkles className="mr-2 h-5 w-5" />Get AI Feedback</>}
                            </Button>
                        </div>
                        {feedback && (
                            <div className="mt-4 p-4 rounded-lg bg-slate-100 border border-slate-200">
                                <h4 className="font-bold text-teal-600 mb-2">AI Feedback:</h4>
                                <div className="prose prose-sm max-w-none whitespace-pre-wrap">{feedback}</div>
                            </div>
                        )}
                    </div>
                );
        }
    };

    const handleSubmit = () => {
        if (currentQuestion.type === QuizType.MULTIPLE_CHOICE) handleMcSubmit();
        if (currentQuestion.type === QuizType.DRAG_AND_DROP) handleDndSubmit();
        if (currentQuestion.type === QuizType.WRITING) {
            context?.setScore(s => s + 1); // Auto-pass writing for now, feedback is the goal
            handleNextQuestion();
        }
    };

    return (
        <Card className="animate-fade-in">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-teal-600">Quiz Time!</h2>
                <span className="text-slate-500 font-semibold">Question {currentQuestionIndex + 1} / {quizQuestions.length}</span>
            </div>
            
            <div className="min-h-[400px]">
                {renderQuestion()}
            </div>
            
            <div className="mt-8 flex justify-end">
                {isCorrect !== null || currentQuestion.type === QuizType.WRITING ? (
                    <Button onClick={handleNextQuestion}>
                        {currentQuestionIndex === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                ) : (
                    <Button onClick={handleSubmit} disabled={selectedAnswer === null && dndItems.length === 0}>
                        Submit Answer <Check className="ml-2 h-5 w-5" />
                    </Button>
                )}
            </div>
        </Card>
    );
};

export default QuizView;
