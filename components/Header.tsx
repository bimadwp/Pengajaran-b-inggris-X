
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { ViewType } from '../types';

const Header: React.FC = () => {
    const context = useContext(AppContext);

    return (
        <header className="text-center w-full">
            <h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-600 cursor-pointer"
                onClick={() => context?.setView(ViewType.MENU)}
            >
                Procedure Text Learning Hub
            </h1>
            <p className="text-slate-500 mt-2 text-md sm:text-lg">
                Interactive English Lessons for Grade X SMK
            </p>
        </header>
    );
};

export default Header;
