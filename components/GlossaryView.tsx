
import React from 'react';
import Card from './common/Card';
import { glossaryTerms } from '../constants';
import { List } from 'lucide-react';

const GlossaryView: React.FC = () => {
    return (
        <Card className="animate-fade-in max-w-3xl mx-auto">
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
    );
};

export default GlossaryView;
