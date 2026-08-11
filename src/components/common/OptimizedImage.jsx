import React, { useState } from 'react'
import './OptimizedImage.css'

export default function OptimizedImage({
  src,
  alt = '',
  className = '',
  loading = 'lazy',
  decoding = 'async',
  fallbackIcon,
  ...props
}) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  if (hasError || !src) {
    return (
      <div className={`optimized-image-fallback ${className}`}>
        {fallbackIcon || (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="optimized-image-fallback-icon">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        )}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={`optimized-image ${isLoaded ? 'is-loaded' : ''} ${className}`}
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      {...props}
    />
  )
}
