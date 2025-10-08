
import React, { useState } from 'react';
import Button from './common/Button';
import Card from './common/Card';
import { Mic } from 'lucide-react';

const PronunciationCorner: React.FC = () => {
    const [text, setText] = useState('Hello! Welcome to the pronunciation corner. Type anything here and I will say it for you.');
    const [isLoading, setIsLoading] = useState(false);

    const speak = () => {
        if ('speechSynthesis' in window) {
            if (speechSynthesis.speaking) {
                speechSynthesis.cancel();
            }
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.onstart = () => setIsLoading(true);
            utterance.onend = () => setIsLoading(false);
            utterance.onerror = () => setIsLoading(false);
            window.speechSynthesis.speak(utterance);
        } else {
            alert('Sorry, your browser does not support text-to-speech.');
        }
    };

    return (
        <Card className="animate-fade-in max-w-2xl mx-auto">
            <div className="text-center">
                <Mic className="mx-auto h-12 w-12 text-violet-500 mb-4" />
                <h2 className="text-3xl font-bold mb-2 text-slate-800">Pronunciation Corner</h2>
                <p className="text-slate-500 mb-6">Type any English word or sentence and click the button to hear it spoken.</p>
            </div>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full h-40 p-4 border-2 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-lg"
                placeholder="Type text to pronounce..."
            />
            <div className="mt-6 text-center">
                <Button onClick={speak} disabled={!text || isLoading}>
                    {isLoading ? 'Speaking...' : 'Speak the Text'}
                </Button>
            </div>
        </Card>
    );
};

export default PronunciationCorner;
