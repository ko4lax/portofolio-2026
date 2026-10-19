"use client";

import { useState } from "react";
import { FaImage } from "react-icons/fa";

export default function SafeImage({ src, alt, className, ...props }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`bg-surface flex flex-col items-center justify-center text-secondary/30 gap-2 border border-border ${className}`}
        {...props}>
        <FaImage size={40} />
        <span className='text-xs font-medium uppercase tracking-widest'>
          Image Not Found
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
