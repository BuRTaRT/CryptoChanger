'use client';
import {useEffect, useState} from 'react';

interface Props {
    createdAt: Date;
}

export default function Countdown({createdAt}: Props) {
    const [timeLeft, setTimeLeft] = useState('');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const endTime = new Date(createdAt).getTime() + 30 * 60 * 1000;
        const update = () => {
            const remaining = Math.max(0, endTime - Date.now());
            const minutes = Math.floor(remaining / 60000);
            const seconds = Math.floor((remaining % 60000) / 1000);
            const percent = (remaining / (30 * 60 * 1000)) * 100;

            setTimeLeft(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
            setProgress(percent);
        };

        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, [createdAt]);


    return (
        <div>
            <div className="flex flex-col w-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-2">
                    <img src="/oval.svg" className="h-8 sm:h-10 w-auto" alt=""/>
                    <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-wrap items-center gap-1 text-sm sm:text-base">
                            <span>Оплатите заявку в течении:</span>
                            {timeLeft === '00:00' ? (
                                <p className="text-red-500 font-medium">просрочена</p>
                            ) : (
                                <span className="font-mono font-bold text-blue-600">{timeLeft}</span>
                            )}
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                            <div
                                className="h-2 bg-blue-500 rounded-full transition-all duration-500 ease-out"
                                style={{width: `${Math.max(0, Math.min(100, progress))}%`}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}