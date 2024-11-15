import React from "react";
import classNames from "classnames";

// Define the types for the props
interface ProgressProps {
    value: number; // The percentage of progress (0-100)
    className?: string; // Optional additional classNames
}

// Progress component implementation
export const Progress: React.FC<ProgressProps> = ({ value, className }) => {
    return (
        <div className={classNames("relative w-full h-4 bg-gray-200 rounded-full", className)}>
            <div
                style={{ width: `${value}%` }}
                className="h-full bg-blue-500 rounded-full transition-all"
            />
        </div>
    );
};
