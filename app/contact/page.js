'use client'

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

function ContactForm() {
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get('success') === 'true';

  if (isSuccess) {
    return (
      <div className="success-message bg-white p-5 shadow-sm">
        <div className="text-center py-5">
          <div 
            className="d-flex align-items-center justify-content-center mx-auto mb-4" 
            style={{ 
              width: '4rem', 
              height: '4rem', 
              backgroundColor: 'rgb(220 252 231)', 
              borderRadius: '50%' 
            }}
          >
            <svg className="text-green-600" style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-slate-900 mb-3" style={{ fontSize: '1.5rem', lineHeight: '1.4' }}>
            Message Received
          </h3>
          <p className="text-slate-600 mb-4" style={{ fontSize: '1.125rem', lineHeight: '1.5' }}>
            Thank you for reaching out. A member of our clinical team will contact you within 24 hours.
          </p>
          <a
            href="/contact"
            className="btn bg-slate-100 text-slate-900 border-0 px-4 py-2 rounded-0"
          >
            Send Another Message
          </a>
        </div>
      </div>
    );
  }

  return (
    <form 
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      
      {/* Rest of your form fields - KEEP THEM EXACTLY AS THEY ARE */}
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-6">
          <label className="text-sm text-slate-700 mb-2 d-block font-weight-medium">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="form-control border-0 bg-white px-4 py-3 text-slate-900 shadow-sm rounded-0"
            placeholder="Your full name"
          />
        </div>
        <div className="col-12 col-md-6">
          <label className="text-sm text-slate-700 mb-2 d-block font-weight-medium">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            className="form-control border-0 bg-white px-4 py-3 text-slate-900 shadow-sm rounded-0"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-12 col-md-6">
          <label className="text-sm text-slate-700 mb-2 d-block font-weight-medium">
            Phone Number <span className="text-slate-400 font-weight-normal ms-1">(Optional)</span>
          </label>
          <input
            type="tel"
            name="phone"
            className="form-control border-0 bg-white px-4 py-3 text-slate-900 shadow-sm rounded-0"
            placeholder="(555) 123-4567"
          />
        </div>
        <div className="col-12 col-md-6">
          <label className="text-sm text-slate-700 mb-2 d-block font-weight-medium">
            Service Status
          </label>
          <select
            name="serviceStatus"
            required
            className="form-control border-0 bg-white px-4 py-3 text-slate-900 shadow-sm rounded-0"
          >
            <option value="">Please select</option>
            <option value="active-duty-navy">Active Duty Navy</option>
            <option value="active-duty-other">Active Duty (Other Branch)</option>
            <option value="military-spouse">Military Spouse</option>
            <option value="veteran">Veteran</option>
            <option value="first-responder">First Responder</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="text-sm text-slate-700 mb-2 d-block font-weight-medium">
          Current Location / Installation
        </label>
        <input
          type="text"
          name="location"
          className="form-control border-0 bg-white px-4 py-3 text-slate-900 shadow-sm rounded-0"
          placeholder="e.g., Naval Station Norfolk"
        />
      </div>

      <div className="mb-5">
        <label className="text-sm text-slate-700 mb-2 d-block font-weight-medium">
          How Can We Help?
        </label>
        <textarea
          name="message"
          required
          rows="6"
          className="form-control border-0 bg-white px-4 py-3 text-slate-900 shadow-sm rounded-0"
          placeholder="Please share what brings you here today..."
        />
      </div>

      <button
        type="submit"
        className="btn bg-slate-900 text-white border-0 px-5 py-3 rounded-0 shadow-sm"
      >
        Send Confidential Message
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <Nav />
      <div className="bg-stone-50 min-h-screen py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="row mb-5">
                <div className="col-12 col-md-9">
                  <h1 className="text-6xl text-slate-900 font-light mb-4 tracking-tight">
                    Get In Touch
                  </h1>
                  <p className="text-lg text-slate-600 mb-4">
                    We're here to help. All communications are confidential.
                  </p>
                </div>
              </div>

              <div className="row g-5">
                <div className="col-12 col-lg-8">
                  <Suspense fallback={<div>Loading...</div>}>
                    <ContactForm />
                  </Suspense>
                </div>
                
                {/* Keep your sidebar content */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}