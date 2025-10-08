
import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import { procedureTextExamples } from '../constants';
import { ProcedureText } from '../types';
import Button from './common/Button';
import Card from './common/Card';
import { ArrowLeft, Volume2, Languages } from 'lucide-react';

const InfoSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-6">
        <h3 className="text-xl font-bold text-teal-600 mb-2 border-b-2 border-teal-200 pb-1">{title}</h3>
        <div className="space-y-3 text-slate-700">{children}</div>
    </div>
);

const MaterialView: React.FC = () => {
    const context = useContext(AppContext);
    const [selectedExample, setSelectedExample] = useState<ProcedureText | null>(null);
    const [showTranslation, setShowTranslation] = useState(false);

    const speak = (text: string) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            window.speechSynthesis.speak(utterance);
        } else {
            alert('Sorry, your browser does not support text-to-speech.');
        }
    };
    
    if (selectedExample) {
        const content = showTranslation ? selectedExample.translation : selectedExample;
        const fullText = [content.goal, ...(content.materials || []), ...content.steps].join('. ');

        return (
            <Card className="animate-fade-in">
                <div className="flex justify-between items-start mb-4">
                    <Button variant="ghost" onClick={() => setSelectedExample(null)} className="pl-0">
                        <ArrowLeft className="mr-2 h-5 w-5" /> Back to Materials
                    </Button>
                    <div className="flex space-x-2">
                         <Button variant="secondary" onClick={() => speak(fullText)}>
                             <Volume2 className="mr-2 h-5 w-5" /> Play Audio
                         </Button>
                         <Button variant="secondary" onClick={() => setShowTranslation(!showTranslation)}>
                             <Languages className="mr-2 h-5 w-5" /> {showTranslation ? 'Show Original' : 'Translate'}
                         </Button>
                    </div>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-slate-800">{content.title}</h2>
                <img src={selectedExample.imageUrl} alt={content.title} className="rounded-lg mb-4 w-full object-cover h-64"/>

                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-teal-600">Goal</h4>
                    <p>{content.goal}</p>
                </div>
                {content.materials && (
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold text-teal-600">Materials</h4>
                        <ul className="list-disc list-inside space-y-1">
                            {content.materials.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                )}
                <div>
                    <h4 className="text-lg font-semibold text-teal-600">Steps</h4>
                     <ol className="list-decimal list-inside space-y-1">
                        {content.steps.map((item, index) => <li key={index}>{item}</li>)}
                    </ol>
                </div>
            </Card>
        );
    }

    return (
        <div className="animate-fade-in space-y-8">
            <Card>
                <h2 className="text-3xl font-bold mb-4 text-slate-800">Materi Lengkap: Procedure Text</h2>
                
                <InfoSection title="Definition (Pengertian)">
                    <p>A procedure text is a piece of text that gives us instructions for doing something. The purpose is to explain how something can be done through a sequence of actions or steps.</p>
                </InfoSection>

                <InfoSection title="Social Function (Tujuan Komunikatif)">
                    <p>To explain to the reader how to make, operate, or do something. It provides a series of steps in order that, if followed, will produce a desired result.</p>
                </InfoSection>

                <InfoSection title="Generic Structure (Struktur Umum)">
                    <p><strong>1. Goal / Aim:</strong> States the purpose of the text. It's often the title itself (e.g., "How to Use a Blender").</p>
                    <p><strong>2. Materials / Equipment / Ingredients:</strong> Lists the tools or ingredients needed to complete the procedure. Note: This section is optional and not always present (e.g., in "How to get to the library").</p>
                    <p><strong>3. Steps / Method:</strong> A sequence of instructions, in a logical order, to achieve the goal. This is the core of the procedure text.</p>
                    <p><strong>4. Result (Optional):</strong> The outcome or the final product of the procedure. (e.g., "The smoothie is ready to drink.").</p>
                </InfoSection>

                <InfoSection title="Language Features (Unsur Kebahasaan)">
                    <p><strong>- Simple Present Tense:</strong> Uses the base form of the verb (V1), because it's explaining a fact or a general instruction. (e.g., you <strong>pour</strong> the water, the machine <strong>starts</strong>).</p>
                    <p><strong>- Imperative Sentences (Kalimat Perintah):</strong> Gives direct commands. (e.g., "<strong>Cut</strong> the onion," "<strong>Plug in</strong> the cable," "<strong>Don't</strong> touch the hot surface.").</p>
                    <p><strong>- Action Verbs (Kata Kerja Aksi):</strong> Verbs that show an action. (e.g., `make`, `take`, `boil`, `cook`, `cut`, `mix`, `pour`, `press`).</p>
                    <p><strong>- Connectors / Sequencers (Kata Penghubung Urutan):</strong> Words to connect the steps in order. (e.g., `first`, `second`, `then`, `next`, `after that`, `while`, `finally`).</p>
                    <p><strong>- Adverbials (Kata Keterangan):</strong> To give more detail about how (manner), for how long (time), or where (place) an action should be done. (e.g., "Mix the dough <strong>slowly</strong>," "Boil for <strong>ten minutes</strong>," "Place it <strong>on the table</strong>.").</p>
                </InfoSection>
            </Card>

            <Card>
                 <h2 className="text-3xl font-bold mb-4 text-slate-800">Interactive Examples</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {procedureTextExamples.map(example => (
                        <div key={example.id} onClick={() => setSelectedExample(example)} className="cursor-pointer group">
                             <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img src={example.imageUrl} alt={example.title} className="w-full h-40 object-cover" />
                                <div className="p-4 bg-white">
                                    <p className="text-sm text-teal-500 font-semibold">{example.type}</p>
                                    <h4 className="font-bold text-lg text-slate-800 group-hover:text-teal-600 transition-colors">{example.title}</h4>
                                </div>
                             </div>
                        </div>
                    ))}
                 </div>
            </Card>
        </div>
    );
};

export default MaterialView;
