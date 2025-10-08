import React, { useContext } from 'react';
import Card from './common/Card';
import { glossaryTerms } from '../constants';
import { List, ArrowLeft } from 'lucide-react';
import { AppContext } from '../App';
import { ViewType } from '../types';
// Fix: Import the Button component.
import Button from './common/Button';

const GlossaryView: React.FC = () => {
    const context = useContext(AppContext);
    return (
        <div className="animate-fade-in max-w-3xl mx-auto space-y-4">
             <Button variant="ghost" onClick={() => context?.setView(ViewType.MENU)} className="self-start pl-0">
                <ArrowLeft className="mr-2 h-5 w-5" /> Back to Menu
            </Button>
            <Card>
                <div className="text-center mb-8">
                    <List className="mx-auto h-12 w-12 text-emerald-500 mb-4" />
                    <h2 className="text-3xl font-bold text-slate-800">Glossary</h2>
                    <p className="text-slate-500">Important keywords for understanding Procedure Text.</p>
                </div>
                <div className="space-y-6">
                    {glossaryTerms.map(term => (
                        <div key={term.term} className="border-b border-slate-200 pb-4">
                            <h3 className="text-xl font-bold text-teal-600">{term.term}</h3>
                            <p className="text-slate-700 mt-1">{term.definition}</p>
                            <p className="text-slate-500 italic mt-1">Example: {term.example}</p>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default GlossaryView;