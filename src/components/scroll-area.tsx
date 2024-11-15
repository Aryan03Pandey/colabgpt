// components/ui/scroll-area.tsx

import React from "react";

interface ScrollAreaProps {
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({ className = "", children, style }) => {
    return (
        <div
            className={`overflow-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-gray-500 dark:scrollbar-thumb-gray-700 ${className}`}
            style={style}
        >
            {children}
        </div>
    );
};
