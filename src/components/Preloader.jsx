import React, { useState, useEffect, useRef } from 'react'
import './Preloader.css'

export default function Preloader({ onComplete, onExitStart }) {
  const [count, setCount] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const reducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (reducedMotion.current) {
      setCount(100)
      onExitStart()
      const timer = setTimeout(onComplete, 200)
      return () => clearTimeout(timer)
    }

    if (count >= 100) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true)
        onExitStart()
      }, 320)
      const completeTimer = setTimeout(onComplete, 1150)
      return () => {
        clearTimeout(exitTimer)
        clearTimeout(completeTimer)
      }
    }

    const increment = count < 70 ? Math.floor(Math.random() * 8) + 3 : Math.floor(Math.random() * 4) + 1
    const delay = count < 70 ? 55 : 90
    const timer = setTimeout(() => setCount((c) => Math.min(c + increment, 100)), delay)
    return () => clearTimeout(timer)
  }, [count, onComplete, onExitStart])

  return (
    <div className={`preloader ${isExiting ? 'preloader--exit' : ''}`} aria-hidden="true">
      <div className="preloader-content">
        <div className="preloader-count-row">
          <span className="preloader-count">{count}</span>
          <span className="preloader-percent">%</span>
        </div>
        <div className="preloader-bar-track">
          <div className="preloader-bar-fill" style={{ width: `${count}%` }} />
        </div>
      </div>
    </div>
  )
}
