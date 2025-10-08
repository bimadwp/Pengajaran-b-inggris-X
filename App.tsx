
import React, { useState, createContext, useMemo, useCallback } from 'react';
import { ViewType } from './types';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import MaterialView from './components/MaterialView';
import QuizView from './components/QuizView';
import PronunciationCorner from './components/PronunciationCorner';
import GlossaryView from './components/GlossaryView';
import EvaluationView from './components/EvaluationView';

interface AppContextType {
    setView: (view: ViewType) => void;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    score: number;
    resetApp: () => void;
}

export const AppContext = createContext<AppContextType | null>(null);

const App: React.FC = () => {
    const [view, setView] = useState<ViewType>(ViewType.MENU);
    const [score, setScore] = useState(0);

    const resetApp = useCallback(() => {
        setScore(0);
        setView(ViewType.MENU);
    }, []);

    const contextValue = useMemo(() => ({
        setView,
        score,
        setScore,
        resetApp
    }), [score, resetApp]);

    const renderView = () => {
        switch (view) {
            case ViewType.MATERIAL:
                return <MaterialView />;
            case ViewType.QUIZ:
                return <QuizView />;
            case ViewType.PRONUNCIATION:
                return <PronunciationCorner />;
            case ViewType.GLOSSARY:
                return <GlossaryView />;
            case ViewType.EVALUATION:
                return <EvaluationView />;
            case ViewType.MENU:
            default:
                return <MainMenu />;
        }
    };

    return (
        <AppContext.Provider value={contextValue}>
            <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col items-center p-4">
                <div className="w-full max-w-4xl mx-auto flex flex-col flex-grow">
                    <Header />
                    <main className="mt-8 flex-grow">
                        {renderView()}
                    </main>
                    <footer className="text-center text-slate-400 mt-8 py-4">
                        <p>© 2025 by bxm</p>
                    </footer>
                </div>
            </div>
        </AppContext.Provider>
    );
};

export default App;
