// components/ui/badge.tsx

import React from "react";

interface BadgeProps {
    variant?: "primary" | "secondary" | "success" | "danger" | "warning"; // Badge types
    children: React.ReactNode;
    className?: string; // Custom class for additional styling
}

const Badge: React.FC<BadgeProps> = ({ variant = "primary", children, className = "" }) => {
    const badgeStyles = {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-500 text-white",
        success: "bg-green-500 text-white",
        danger: "bg-red-500 text-white",
        warning: "bg-yellow-500 text-white",
    };

    return (
        <span
            className={`inline-block px-3 py-1 text-sm font-semibold rounded-lg ${badgeStyles[variant]} ${className}`}
        >
            {children}
        </span>
    );
};

export { Badge };
