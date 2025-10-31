'use client'

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Insurance() {
  const insuranceData = [
    {
      category: "va",
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "Veterans Affairs",
      description: "A referral is required from the VA prior to scheduling your appointment.",
      badge: "Referral Required"
    },
  ];

  return (
    <>
      <Nav />
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Module */}
        <section className="py-16 md:py-20 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center mb-4">
              <div>
                <h1 className="text-6xl font-semibold text-slate-900 mb-2 tracking-tight lh-1 tomorrow">
                  Payment & Insurance
                </h1>
                <p className="text-xl text-slate-600">
                  Comprehensive coverage for active duty, military spouses and veterans
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Bento Layout */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              
              {/* Image Module - Left Column */}
              <div className="lg:col-span-5">
                <div className="sticky top-8">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-xl">
                    <img
                      src="/images/new_creek.jpg"
                      alt="Calm, soothing water representing peace and healing"
                      className="w-full h-full object-cover brightness-95 contrast-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7">
                <div className="lg:pl-8">
                  
                  {/* Active Duty Module */}
                  <div className="mb-12 pb-8 border-b border-slate-200">
                    <div className="flex items-start mb-6">
                      <div className="mr-4">
                        <div className="bg-tricare text-white flex items-center justify-content-center w-12 h-12 rounded-lg">
                          <span className="text-lg font-semibold">AD</span>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-5xl font-semibold text-slate-900 mb-2 tracking-tight tomorrow">
                          Active Duty
                        </h2>
                        <p className="text-lg text-slate-600">
                          Specialized support for active service members
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-start">
                          <div>
                            <h4 className="text-lg font-semibold text-slate-900 mb-2 tomorrow">
                              Tricare Coverage
                            </h4>
                            <p className="text-md text-slate-600 lh-base">
                              Must have an active referral on file for counseling prior to scheduling your appointment.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-start">
                          <div>
                            <h4 className="text-lg font-semibold text-slate-900 mb-2 tomorrow">
                              Private Pay Options
                            </h4>
                            <p className="text-md text-slate-600 lh-base">
                              Highest level of confidentiality available. Prices vary by clinician and session length.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Veterans Module */}
                  <div className="mb-12">
                    <div className="flex items-start mb-6">
                      <div className="mr-4">
                        <div className="bg-tricare text-white flex items-center justify-content-center w-12 h-12 rounded-lg">
                          <span className="text-lg font-semibold">V</span>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-5xl font-semibold text-slate-900 mb-2 tracking-tight tomorrow">
                          Veterans & Dependents
                        </h2>
                        <p className="text-lg text-slate-600">
                          Flexible coverage options for veteran families
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {insuranceData.map((item, index) => (
                        <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                          <div className="flex items-start">
                            <div className="bg-slate-100 text-slate-700 flex items-center justify-content-center w-10 h-10 rounded-lg mr-4 flex-shrink-0">
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                <h4 className="text-lg font-semibold text-slate-900 mr-3 tomorrow">
                                  {item.title}
                                </h4>
                                <span className="bg-slate-100 text-slate-700 text-caption px-3 py-1 rounded-full">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-md text-slate-600 lh-base">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Care Connect Callout Module */}
                  <div className="p-6 rounded-xl relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border-l-4 border-tricare">
                    <div className="flex items-start">
                      <ArrowRight className="text-slate-700 mt-1 mr-4 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="text-2xl font-semibold text-slate-900 mb-3 tomorrow">
                          Quick Referral for Active Duty
                        </h4>
                        <p className="text-md text-slate-700 mb-4 lh-base max-width-readable">
                          Can't see your PCM quickly? Active Duty personnel can visit the Care Connect station at the Behavioral Health Department (Building 3, NMCP) to meet with a Behavioral Health Technician for mental health counseling referrals.
                        </p>
                        <div className="flex items-center text-sm text-slate-600 mb-2">
                          <span className="font-semibold">
                            Open Monday-Friday, 8:30-10:30 AM
                          </span>
                        </div>
                        <p className="text-sm text-slate-600">
                          After referral creation, call Tricare to update provider to The Lemich Clinic.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}