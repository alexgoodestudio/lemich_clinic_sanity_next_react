'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Banner() {
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const message = "The Lemich Clinic"
  const description = "Home of Military Mental Health"
  const location = "Located in Norfolk, Virginia"

  useGSAP(() => {
    if (!trackRef.current || prefersReducedMotion) {
      if (trackRef.current) {
        gsap.set(trackRef.current, { x: 0 })
      }
      return
    }

    const track = trackRef.current
    const trackWidth = track.scrollWidth / 2

    gsap.to(track, {
      x: -trackWidth,
      duration: 90,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % trackWidth)
      }
    })
  }, { scope: containerRef })

  const content = Array(8).fill(null).map((_, i) => (
    <span key={i} className="inline-flex items-center">
      <span>{message}</span>
      <span className="mx-8 text-slate-500" aria-hidden="true">•</span>
      <span>{description}</span>
      <span className="mx-8 text-slate-500" aria-hidden="true">•</span>
      <span>{location}</span>
      <span className="mx-8 text-slate-500" aria-hidden="true">•</span>
    </span>
  ))

  return (
    <div 
      ref={containerRef}
      className="overflow-hidden bg-slate-100 py-4 py-lg-5"
      role="marquee"
      aria-live="off"
    >
      <div 
        ref={trackRef}
        className="flex whitespace-nowrap text-5xl font-semibold text-slate-900"
      >
        {content}
      </div>
    </div>
  )
}