'use client'

import { useEffect, useState } from 'react'

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
    Promise.race([Promise.all(pending), timeout]).then(() => setReady(true))
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
        color: '#0f172a',
        fontWeight: 600,
        letterSpacing: '0.05em',
      }}
    >
      Loading…
    </div>
  )
}
