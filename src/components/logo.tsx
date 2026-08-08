import React from 'react';

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Icon */}
      <path
        d="M20 4L4 12V28L20 36L36 28V12L20 4Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12L20 20L36 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 36V20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Text */}
      <text
        x="48"
        y="26"
        fontFamily="var(--font-geist-sans), sans-serif"
        fontSize="20"
        fontWeight="700"
        letterSpacing="-0.02em"
        fill="currentColor"
      >
        KAIRO
      </text>
      <text
        x="108"
        y="26"
        fontFamily="var(--font-geist-sans), sans-serif"
        fontSize="20"
        fontWeight="400"
        letterSpacing="-0.02em"
        fill="currentColor"
      >
        PACK
      </text>
    </svg>
  );
}
