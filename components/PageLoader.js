'use client'

import { useEffect, useState } from 'react'

const MIN_SHOW_MS = 2000
const MAX_WAIT_MS = 8000

// Covers the page until every eagerly-loaded image has finished loading
export default function PageLoader() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const images = Array.from(document.images).filter(
      (img) => img.loading !== 'lazy'
    )

    const pending = images.map((img) =>
      img.complete
        ? Promise.resolve()
        : new Promise((resolve) => {
            img.addEventListener('load', resolve, { once: true })
            img.addEventListener('error', resolve, { once: true })
          })
    )

    const timeout = new Promise((resolve) => setTimeout(resolve, MAX_WAIT_MS))
    const minimum = new Promise((resolve) => setTimeout(resolve, MIN_SHOW_MS))

    // Show the loader for at least MIN_SHOW_MS, and until images load (or MAX_WAIT_MS)
    Promise.all([Promise.race([Promise.all(pending), timeout]), minimum]).then(() =>
      setReady(true)
    )
  }, [])

  useEffect(() => {
    document.body.style.overflow = ready ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [ready])

  if (ready) return null

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1rem',
        color: '#0f172a',
        fontWeight: 500,
        fontSize: '1.25rem',
      }}
    >
      <style>{`
        @keyframes cpc-needle-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      {/* Compass dial with a spinning needle */}
      <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
        <circle cx="36" cy="36" r="32" fill="none" stroke="#b5cde7" strokeWidth="3" />
        <g stroke="#0f172a" strokeWidth="2" strokeLinecap="round">
          <line x1="36" y1="4" x2="36" y2="10" />
          <line x1="36" y1="62" x2="36" y2="68" />
          <line x1="4" y1="36" x2="10" y2="36" />
          <line x1="62" y1="36" x2="68" y2="36" />
        </g>
        <g style={{ transformOrigin: '36px 36px', animation: 'cpc-needle-spin 1.6s cubic-bezier(0.65, 0, 0.35, 1) infinite' }}>
          <polygon points="36,14 41,36 31,36" fill="#0f172a" />
          <polygon points="36,58 41,36 31,36" fill="#b5cde7" />
        </g>
        <circle cx="36" cy="36" r="3" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
      </svg>
      <span className="tomorrow">Compass Point Counseling</span>
    </div>
  )
}
