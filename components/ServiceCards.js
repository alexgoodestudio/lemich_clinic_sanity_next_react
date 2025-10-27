'use client'

import { useState, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { User, Layers, Flag, FileText, ChevronDown } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const MOTION = {
  smooth: 0.5,
  quick: 0.3
}

const services = [
  {
    Icon: User,
    title: "Personalized Care",
    description: "Matched with a therapist that fits your needs and style. We take the time to understand you to make the right pairing.",
    featured: true
  },
  {
    Icon: Layers,
    title: "Comprehensive Specialties",
    description: "Large variety of clinician expertise including trauma, PTSD, depression, anxiety, OCD, and perinatal concerns.",
    featured: false
  },
  {
    Icon: Flag,
    title: "Military-Focused",
    description: "Specialized in active duty concerns: PCS transitions, deployment support, and civilian life adjustments.",
    featured: false
  },
  {
    Icon: FileText,
    title: "Administrative Support",
    description: "Expert assistance with LIMDU, Med Board, VA, and Security Clearance paperwork when medically necessary.",
    featured: false
  }
]

export default function ServiceCards() {
  const [openIndex, setOpenIndex] = useState(null)
  const gridRef = useRef(null)
  const sectionRef = useRef(null)

  // Desktop: Staggered scroll reveal
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (!prefersReducedMotion && window.innerWidth >= 768) {
      const cards = gsap.utils.toArray('.service-card')
      
      gsap.from(cards, {
        y: 40,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
          once: true
        }
      })
    }
  }, [])

  const toggleAccordion = (index) => {
    const isOpening = openIndex !== index
    setOpenIndex(isOpening ? index : null)
    
    // Animate chevron rotation
    const chevron = document.querySelector(`.chevron-${index}`)
    if (chevron) {
      gsap.to(chevron, {
        rotate: isOpening ? 180 : 0,
        duration: MOTION.quick,
        ease: 'power2.out'
      })
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 bg-stone-50"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-4xl  font-semibold text-slate-900 mb-6 leading-tight">
            How we serve those who serve
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Specialized support for active duty service members, veterans, and military spouses navigating mental health challenges.
          </p>
        </div>

        {/* Desktop: Bento Grid */}
        <div 
          ref={gridRef}
          className="hidden md:grid grid-cols-12 gap-6 lg:gap-8"
        >
          {/* Featured Card - Spans 2 columns, 2 rows */}
          <div className="service-card col-span-6 row-span-2 bg-white border border-stone-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <User className="w-12 h-12 text-slate-700" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              {services[0].title}
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              {services[0].description}
            </p>
          </div>

          {/* Standard Cards */}
          {services.slice(1).map((service, index) => (
            <div 
              key={index + 1}
              className="service-card col-span-6 bg-white border border-stone-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <service.Icon className="w-10 h-10 text-slate-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden space-y-2">
          {services.map((service, index) => (
            <div 
              key={index}
              className="border-b border-stone-200 pb-4"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between py-4 text-left"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4">
                  <service.Icon className="w-6 h-6 text-slate-600" strokeWidth={1.5} />
                  <span className="text-lg font-semibold text-slate-900">
                    {service.title}
                  </span>
                </div>
                <ChevronDown 
                  className={`chevron-${index} w-5 h-5 text-slate-600 transition-transform`}
                  style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
              
              {openIndex === index && (
                <div className="pl-10 pr-4 pb-2">
                  <p className="text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}