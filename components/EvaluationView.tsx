
import React, { useContext, useMemo } from 'react';
import { AppContext } from '../App';
import { quizQuestions } from '../constants';
import Card from './common/Card';
import Button from './common/Button';
import { Award, Repeat } from 'lucide-react';

const EvaluationView: React.FC = () => {
    const context = useContext(AppContext);

    if (!context) {
        return null;
    }

    const { score, resetApp } = context;
    const totalQuestions = quizQuestions.length;
    const percentage = Math.round((score / totalQuestions) * 100);

    const feedback = useMemo(() => {
        if (percentage >= 80) {
            return {
                title: "Excellent Work!",
                message: "You have a strong understanding of procedure texts. Keep up the great work!",
                color: "text-green-500",
            };
        } else if (percentage >= 60) {
            return {
                title: "Good Job!",
                message: "You're doing well, but there's still room for improvement. Review the materials again to solidify your knowledge.",
                color: "text-blue-500",
            };
        } else {
            return {
                title: "Keep Practicing!",
                message: "Don't worry! Learning is a process. We recommend going through the materials and examples again.",
                color: "text-orange-500",
            };
        }
    }, [percentage]);

    return (
        <Card className="animate-fade-in text-center max-w-2xl mx-auto">
            <Award className={`mx-auto h-16 w-16 mb-4 ${feedback.color}`} />
            <h2 className="text-3xl font-bold mb-2 text-slate-800">{feedback.title}</h2>
            <p className="text-slate-500 mb-6">{feedback.message}</p>

            <div className="bg-slate-100 rounded-lg p-6 my-8">
                <p className="text-lg text-slate-600">Your Score</p>
                <p className="text-6xl font-bold text-teal-600 my-2">{score} / {totalQuestions}</p>
                <p className="text-2xl font-semibold text-slate-700">({percentage}%)</p>
            </div>

            <Button onClick={resetApp}>
                <Repeat className="mr-2 h-5 w-5" />
                Start Over
            </Button>
        </Card>
    );
};

export default EvaluationView;
