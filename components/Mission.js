'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Mission() {
  const containerRef = useRef(null)
  const missionRef = useRef(null)
  const textRef = useRef(null)
  const accentRef = useRef(null)
  const statsRefs = useRef([])

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    })

    // Animate "MISSION" text in
    tl.fromTo(missionRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )

    // Animate paragraph text
    tl.fromTo(textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )

    // Animate accent line
    tl.fromTo(accentRef.current,
      { width: "0%" },
      { width: "100%", duration: 0.8, ease: "power2.out" },
      "-=0.2"
    )

    // Animate statistics counters
    const statsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".mission-stats-grid",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    statsTimeline
      .to(statsRefs.current[0], {
        textContent: 7,
        duration: 2,
        snap: { textContent: 1 },
        ease: "power2.out"
      })
      .to(statsRefs.current[1], {
        textContent: "100%",
        duration: 2,
        ease: "power2.out",
        onUpdate: function() {
          const progress = this.progress()
          const value = Math.round(progress * 100)
          this.targets()[0].textContent = value + "%"
        }
      }, "-=1.5")
      .to(statsRefs.current[2], {
        textContent: "650+",
        duration: 2,
        ease: "power2.out",
        onUpdate: function() {
          const progress = this.progress()
          const value = Math.round(progress * 500)
          this.targets()[0].textContent = value + "+"
        }
      }, "-=1.5")
      .to(statsRefs.current[3], {
        textContent: 14,
        duration: 2,
        snap: { textContent: 1 },
        ease: "power2.out"
      }, "-=1.5")

  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-5 container-fluid">
      <div className="px-5">
        {/* Bento-style grid layout */}
        <div className="row g-0">
          
          {/* Left column - Mission statement header */}
          <div className="col-lg-5 pe-lg-5 mb-4 mb-lg-0">
            <div className="position-relative">
              <div 
                ref={missionRef}
                className="text-5xl text-slate-900 font-bold leading-none"
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                OUR
                <br />
                MISSION
              </div>
              
              {/* Accent line */}
              <div
                ref={accentRef}
                className="mission-accent-line mt-3"
                style={{ backgroundColor: '#b5cde7' }}
              ></div>
            </div>
          </div>

          {/* Right column - Mission text */}
          <div className="col-lg-7 ps-lg-4">
            <div className="mission-text-container">
              <p 
                ref={textRef}
                className="text-lg text-slate-600 leading-relaxed  mb-0"
              >
                The Lemich Clinic for Military Mental Health was founded on
                the belief that everyone who serves should have access to
                high-quality, confidential mental health care. The majority
                of our clients are active duty sailors at Naval Station
                Norfolk. We also see service members from the other military
                installations in Virginia. We also work with military
                spouses and recent veterans. If you are a first responder or
                outside the military, contact us to see if you qualify for
                our program.
              </p>
            </div>
          </div>

        </div>

        {/* Statistics section */}
        <div className="row mt-5 pt-4">
          <div className="col-12">
            <div className="row mission-stats-grid text-center mt-5 pt-4">
              <div className="col-6 col-lg-3 mb-4 mb-lg-0">
                <div ref={el => statsRefs.current[0] = el} className="text-6xl font-bold tomorrow text-slate-800">0</div>
                <div className="text-sm text-slate-500 mt-1">Years of Service</div>
              </div>
              <div className="col-6 col-lg-3 mb-4 mb-lg-0">
                <div ref={el => statsRefs.current[1] = el} className="text-6xl font-bold tomorrow text-slate-800">0%</div>
                <div className="text-sm text-slate-500 mt-1">TRICARE Coverage</div>
              </div>
              <div className="col-6 col-lg-3 mb-4 mb-lg-0">
                <div ref={el => statsRefs.current[2] = el} className="text-6xl font-bold tomorrow text-slate-800">0+</div>
                <div className="text-sm text-slate-500 mt-1">Service Members Helped</div>
              </div>
              <div className="col-6 col-lg-3 mb-4 mb-lg-0">
                <div ref={el => statsRefs.current[3] = el} className="text-6xl font-bold tomorrow text-slate-800">0</div>
                <div className="text-sm text-slate-500 mt-1">Clinicians</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}