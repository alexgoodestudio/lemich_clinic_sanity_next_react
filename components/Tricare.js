'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

export default function Tricare() {
  const sectionRef = useRef(null)
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
              <div className="d-flex align-items-center mb-4">
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

              <p className="text-xl mb-4">
                Great news! We are in-network with TRICARE.
              </p>
              
              <p className=" mb-5 tricare-instructions">
                Active duty, please have your referral made to{' '}
                <Link
                  href="/contact"
                  className="text-white underline hover-link"
                >
                  Compass Point Counseling
                </Link>. Dependents and retirees, no referral is needed. Just make an appointment, and we&apos;ll take care of the rest.
              </p>
              
              <Link 
                href="/insurance" 
                className="text-base font-semibold text-white tricare-cta"
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