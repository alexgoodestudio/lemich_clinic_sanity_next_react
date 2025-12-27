'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShieldCheck } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
}

export default function Tricare() {
  const sectionRef = useRef(null)
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useGSAP(() => {
    if (prefersReducedMotion) return

    const elements = sectionRef.current?.querySelectorAll('.tricare-animate')
    
    if (elements) {
      gsap.from(elements, {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      })
    }
  }, { scope: sectionRef })

  return (
    <section 
      ref={sectionRef}
      className="bg-neutral-500 text-white tricare-section"
      aria-labelledby="tricare-heading"
    >
      <div className="container px-5 px-lg-0">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="tricare-content">
              <div className="d-flex align-items-center mb-4 tricare-animate">
                <div className="bg-white text-neutral-500 d-flex align-items-center justify-content-center me-2 me-lg-3 rounded d-block d-lg-none" style={{ width: '24px', height: '24px', padding: '2px' }}>
                  <ShieldCheck size={20} strokeWidth={2.5} />
                </div>
                <div className="bg-white text-neutral-500 d-flex align-items-center justify-content-center me-lg-3 rounded d-none d-lg-block" style={{ width: '36px', height: '36px', padding: '4px' }}>
                  <ShieldCheck size={28} strokeWidth={2.5} />
                </div>
                <h2
                  id="tricare-heading"
                  className="text-3xl text-lg-4xl tomorrow font-bold mb-0"
                >
                  TRICARE <span className="">ACCEPTED</span>
                </h2>
              </div>

              <p className="text-xl mb-4 tricare-animate">
                Great news! We are in-network with TRICARE.
              </p>
              
              <p className=" mb-5 tricare-animate tricare-instructions">
                Active duty, please have your referral made to{' '}
                <Link 
                  href="/contact" 
                  className="text-white underline hover-link"
                >
                  The Lemich Clinic
                </Link>. Dependents and retirees, no referral is needed. Just make an appointment, and we&apos;ll take care of the rest.
              </p>
              
              <Link 
                href="/insurance" 
                className="text-base font-semibold text-white tricare-animate tricare-cta"
                aria-label="Learn more about TRICARE coverage"
              >
                Learn More 
                <span className="arrow-icon" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}