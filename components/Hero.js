'use client'

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export default function Hero() {
  const imageContainerRef = useRef(null)
  const slideImageRef = useRef(null)
  const baseImageRef = useRef(null)
  const currentImageRef = useRef(0)
  const [openIndex, setOpenIndex] = useState(null)
  const serviceRefs = useRef([])

  const services = [
    {
      title: "PTSD Treatment",
      text: "Evidence-based therapy tailored for service members living with trauma symptoms, flashbacks, and hypervigilance.",
    },
    {
      title: "Trauma Therapy",
      text: "Specialized treatment for combat stress, military sexual trauma, and critical incident experiences.",
    },
    {
      title: "Family Counseling",
      text: "Support for spouses and children to strengthen relationships impacted by deployments and transitions.",
    },
    {
      title: "Military Transitions",
      text: "Guidance and therapy for navigating PCS moves, deployments, and the transition to civilian life.",
    },
    {
      title: "VA Paperwork",
      text: "Assistance with mental health documentation for LIMDU, Med Board, VA claims, and security clearance cases.",
    },
  ]

  useEffect(() => {
    const slideAnimation = () => {
      const slideImg = slideImageRef.current
      const baseImg = baseImageRef.current
      if (!slideImg || !baseImg) return

      const nextImage = currentImageRef.current === 0 ? "/images/ship.jpg" : "/images/unit.jpg"
      slideImg.src = nextImage

      const tl = gsap.timeline({
        onComplete: () => {
          baseImg.src = nextImage
          gsap.set(slideImg, { opacity: 0 })
          currentImageRef.current = currentImageRef.current === 0 ? 1 : 0
        },
      })

      tl.set(slideImg, { x: "100%", opacity: 1 }).to(slideImg, {
        x: "0%",
        duration: 1,
        ease: "power2.inOut",
      })
    }

    const interval = setInterval(slideAnimation, 5000)
    return () => clearInterval(interval)
  }, [])

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="container-fluid mt-5">
      <div className="row align-items-center">
        <div className="col-lg-5 p-lg-5 p-4">
          <div className="d-flex align-items-start mb-3">
            <div>
              <p className="text-4xl mb-0 font-extrabold" style={{ letterSpacing: '0.0125em' }}>
                Home of Military Mental Health
              </p>
            </div>
          </div>

          <p className="text-lg text-slate-600 mb-4 tracking-wide">
            Dedicated to the Mental Health of <span className="">Norfolk, Virginia</span>'s Military
            Community — specializing in trauma-informed care, PTSD treatment,
            VA paperwork support, and confidential clinical services for
            active duty, veterans and families.
          </p>

          <div className="d-flex">
            <a href="tel:+17575361233" className="btn btn-dark rounded px-lg-5 py-lg-3 px-4 py-2 me-3" aria-label="Call The Lemich Clinic">
              Call Us
            </a>
            <a href="/contact" className="btn btn-outline-secondary rounded px-lg-5 py-lg-3 px-4 py-2" aria-label="Contact and location">
              Contact Us
            </a>
          </div>
        </div>

        <div className="col-lg-5 p-lg-5 p-4">
          <div ref={imageContainerRef} className="position-relative overflow-hidden rounded-lg shadow-lg">
            <img ref={baseImageRef} src="/images/unit.jpg" alt="Military unit" className="base-image w-100 h-auto" />
            <img ref={slideImageRef} src="/images/ship.jpg" alt="Naval ship" className="w-100 h-auto position-absolute top-0 start-0" style={{ opacity: 0, transform: "translateX(100%)", zIndex: 2 }} />
          </div>
        </div>

        <div className="col-lg-2 p-5 border-start border-gray-300 d-none d-lg-block">
          {services.map((service, index) => (
            <div key={index} ref={(el) => { serviceRefs.current[index] = el }} className="border-bottom border-gray-300 py-3" style={{ cursor: 'pointer' }} onClick={() => toggle(index)}>
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-semibold mb-0 text-sm md:text-base">{service.title}</p>
                <span className="text-lg md:text-xl">{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && (
                <div className="mt-2 text-muted text-xs md:text-sm">{service.text}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}