"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
    text: string;
    duration?: number;
    className?: string;
    delay?: number;
}

export function TypingAnimation({
    text,
    duration = 100,
    className,
    delay = 0,
}: TypingAnimationProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, duration);

        return () => clearInterval(typingInterval);
    }, [text, duration, started]);

    return (
        <span className={cn("inline-block", className)}>
            {displayedText}
            <span className="animate-pulse">|</span>
        </span>
    );
}
