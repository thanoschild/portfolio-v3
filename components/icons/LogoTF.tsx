'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface LogoTFProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
  color?: string;
  hoverColor?: string;
}

export default function LogoTF({
  className,
  size = 40,
  color = 'currentColor',
  hoverColor,
  ...props
}: LogoTFProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 251 175"
      fill="none"
      strokeWidth={18}
      strokeLinecap="round"
      className={twMerge(
        'transition-colors duration-200',
        hoverColor && 'group-hover/logo:stroke-[var(--hover-color)]',
        className
      )}
      style={{
        stroke: color,
        ...(hoverColor ? { '--hover-color': hoverColor } as React.CSSProperties : {}),
      }}
      {...props}
    >
      <path d="M123.961 49.6772H126.685" style={{ stroke: 'inherit' }} />
      <path d="M162.102 49.6772L202.968 49.6772" style={{ stroke: 'inherit' }} />
      <path d="M47.6772 125.961H50.4017" style={{ stroke: 'inherit' }} />
      <path d="M105.6772 90.961 H120.6772" style={{ stroke: 'inherit' }} />
      <path d="M85.8188 125.961H130.685" style={{ stroke: 'inherit' }} />
      <path d="M49.0393 48.315L87.181 48.315" style={{ stroke: 'inherit' }} />
      <path d="M68.1102 48.315L68.1102 88.5" style={{ stroke: 'inherit' }} />
      <path d="M167.323 85.8189 L167.323 125.961" style={{ stroke: 'inherit' }} />
      <path d="M167.323 85.8189 L199.465 85.8189" style={{ stroke: 'inherit' }} />
      <path d="M167.323 108.5 L191.292 108.5" style={{ stroke: 'inherit' }} />
      <rect
        x="10.2166"
        y="10.8543"
        width="230.213"
        height="153.929"
        rx="34.7362"
        style={{ stroke: 'inherit' }}
      />
    </svg>
  );
}
