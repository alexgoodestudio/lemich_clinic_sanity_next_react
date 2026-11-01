'use client'

import { useState, useRef } from "react"
import { gsap } from "gsap"
import { User, Layers, Flag, FileText, ChevronDown } from "lucide-react"

const MOTION = {
  smooth: 0.5,
  quick: 0.3
}

const services = [
  {
    Icon: User,
    title: "Personalized Care",
    description: "Matched with a therapist that fits your needs and style. We take the time to understand you to make the right pairing."
  },
  {
    Icon: Layers,
    title: "Comprehensive Specialties",
    description: "Large variety of clinician expertise including trauma, PTSD, depression, anxiety, OCD, and perinatal concerns."
  },
  {
    Icon: Flag,
    title: "Military-Focused",
    description: "Specialized in active duty concerns: PCS transitions, deployment support, and civilian life adjustments."
  },
  {
    Icon: FileText,
    title: "Administrative Support",
    description: "Expert assistance with LIMDU, Med Board, Nexus Letters, Summary Letters, and Security Clearance paperwork when medically necessary."
  }
]

export default function ServiceCards() {
  const [openIndex, setOpenIndex] = useState(null)
  const sectionRef = useRef(null)

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
      <div className="px-5">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl tomorrow font-semibold text-slate-900 mb-6 leading-tight">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Specialized support for active duty service members, veterans, and military spouses navigating mental health challenges.
          </p>
        </div>

        {/* Desktop: uniform grid, 2 columns on tablet and 4 on wide screens */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card flex flex-col h-full bg-white border border-stone-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-slate-900 text-white mb-6">
                <service.Icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed mb-0">
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