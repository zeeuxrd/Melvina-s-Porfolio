import React from 'react'
import OptimizedImage from './OptimizedImage'
import './PolaroidCard.css'

export default function PolaroidCard({
  img,
  caption,
  rot = '0deg',
  className = '',
  style = {},
  showTape = true,
  ...props
}) {
  return (
    <div
      className={`polaroid-card-primitive ${className}`}
      style={{ '--rot': rot, ...style }}
      {...props}
    >
      {showTape && <div className="tape-accent" />}
      <div className="polaroid-card-frame">
        <OptimizedImage
          src={img}
          alt={caption || 'UX Research Card'}
          className="polaroid-card-img"
        />
      </div>
      {caption && <span className="polaroid-card-caption">{caption}</span>}
    </div>
  )
}
