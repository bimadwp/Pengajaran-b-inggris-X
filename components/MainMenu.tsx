
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { ViewType } from '../types';
import Card from './common/Card';
import { BookOpen, HelpCircle, Mic, List, Award } from 'lucide-react';

const menuItems = [
    {
        view: ViewType.MATERIAL,
        title: 'Materi & Contoh',
        description: 'Learn the definition, structure, and examples.',
        icon: BookOpen,
        color: 'text-sky-500',
    },
    {
        view: ViewType.QUIZ,
        title: 'Kuis & Latihan',
        description: 'Test your knowledge with various exercises.',
        icon: HelpCircle,
        color: 'text-amber-500',
    },
    {
        view: ViewType.PRONUNCIATION,
        title: 'Pronunciation Corner',
        description: 'Practice your pronunciation of words and sentences.',
        icon: Mic,
        color: 'text-violet-500',
    },
    {
        view: ViewType.GLOSSARY,
        title: 'Glosarium',
        description: 'Find definitions for important keywords.',
        icon: List,
        color: 'text-emerald-500',
    },
];

const MainMenu: React.FC = () => {
    const context = useContext(AppContext);

    if (!context) {
        return null;
    }

    const { setView } = context;

    return (
        <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-center mb-6 text-slate-700">Welcome! What would you like to do?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuItems.map((item) => (
                    <button
                        key={item.view}
                        onClick={() => setView(item.view)}
                        className="text-left focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-xl"
                    >
                        <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <item.icon className={`${item.color} w-10 h-10`} strokeWidth={2} />
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                                    <p className="text-slate-500">{item.description}</p>
                                </div>
                            </div>
                        </Card>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MainMenu;
