'use client'

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Owners() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    // Staggered entrance with editorial sophistication
    const tl = gsap.timeline({ delay: 0.2 });
    
    tl.fromTo(logoRef.current,
      { opacity: 0, scale: 0.95, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(headingRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(textRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <>
      <Nav />
      <div ref={containerRef} className="bg-stone-50">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center min-vh-100 g-0">
            
            {/* Image Module - Enhanced with editorial spacing */}
            <div className="col-lg-4 text-center">
              <div className="position-relative p-4 p-lg-5">
                <img
                  ref={logoRef}
                  src="/images/owners-min.png"
                  alt="Gregory and Jennifer Lemich, Owners"
                  className="img-fluid w-100"
                  style={{ maxWidth: '450px' }}
                />
                {/* Editorial metadata */}
                <div className="mt-4">
                  <p className="text-caption text-slate-500 mb-0">
                    Norfolk, Virginia • Est. 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Content Module - Enhanced typography hierarchy */}
            <div className="col-lg-6">
              <div className="p-4 p-lg-5">
                
                {/* Metadata section */}
                <div className="mb-4">
                  <p className="text-caption text-slate-500 uppercase tracking-wider mb-2">
                    Founders & Clinical Directors
                  </p>
                  <div className="bg-slate-300" style={{ width: '60px', height: '2px' }}></div>
                </div>

                {/* Enhanced heading with custom sizing */}
                <div ref={headingRef}>
                  <h1 className="text-5xl text-slate-900 font-light mb-4 lh-1 tomorrow">
                    Meet The
                    <span className="d-block text-slate-700 font-normal">Owners</span>
                  </h1>
                </div>

                {/* Enhanced content with reading rhythm */}
                <div ref={textRef} className="max-width-readable">
                  <p className="text-lg text-slate-600 mb-4 lh-base">
                    The Lemich Clinic was founded by Gregory and Jennifer Lemich.
                    Jennifer is a 22-year US Navy retiree and current Navy employee.
                    Gregory holds a PhD in Counselor Education and Supervision, and is
                    an adjunct professor at Old Dominion University.
                  </p>
                  
                  <p className="text-md text-slate-500 mb-5 lh-base">
                    Together, they have been happily married for 9 years and live in
                    Norfolk, Virginia, with their French Bulldog and two cats.
                  </p>

                  {/* Credentials module */}
                  <div className="row g-4 mt-4">
                    <div className="col-md-6">
                      <div className="border-start border-slate-300 ps-3">
                        <h3 className="text-base fw-semibold text-slate-800 mb-1 tomorrow">
                          Jennifer Lemich
                        </h3>
                        <p className="text-sm text-slate-600 mb-1">
                          US Navy Veteran (22 years)
                        </p>
                        <p className="text-xs text-slate-500 mb-0">
                          Current Navy Employee
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="border-start border-slate-300 ps-3">
                        <h3 className="text-base fw-semibold text-slate-800 mb-1 tomorrow">
                          Gregory Lemich, PhD
                        </h3>
                        <p className="text-sm text-slate-600 mb-1">
                          Counselor Education & Supervision
                        </p>
                        <p className="text-xs text-slate-500 mb-0">
                          Adjunct Professor, ODU
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
