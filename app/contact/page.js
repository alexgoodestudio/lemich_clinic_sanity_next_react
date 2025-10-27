'use client'

import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceStatus: '',
    location: '',
    message: ''
  });

  const containerRef = useRef();
  const formRef = useRef();
  const headingRef = useRef();
  const detailsRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(headingRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(detailsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(formRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 },
      "-=0.3"
    );
  }, { scope: containerRef });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formElement = e.target;
      const data = new FormData(formElement);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString()
      });

      if (response.ok) {
        setTimeout(() => {
          setSubmitted(true);
          gsap.fromTo(".success-message", 
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
          );
        }, 800);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert('Error submitting form. Please try again.');
      console.error(error);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', serviceStatus: '', location: '', message: '' });
  };

  return (
    <>
      <Nav />
      <div className="bg-stone-50 min-h-screen py-5" ref={containerRef}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              
              {/* Header Section */}
              <div className="row mb-5">
                <div className="col-12 col-md-9">
                  <div ref={headingRef}>
                    <h1 className="text-6xl text-slate-900 font-light mb-4 tracking-tight">
                      Get In Touch
                    </h1>
                    <p className="text-lg text-slate-600 mb-4" style={{ fontSize: '1.125rem', lineHeight: '1.5' }}>
                      We're here to help. All communications are confidential.
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="row g-5">
                
                {/* Contact Form */}
                <div className="col-12 col-lg-8">
                  {!submitted ? (
                    <form 
                      name="contact"
                      method="POST"
                      onSubmit={handleSubmit}
                      ref={formRef} 
                      className="space-y-4"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <p style={{ display: 'none' }}>
                        <label>
                          Don't fill this out if you're human: <input name="bot-field" />
                        </label>
                      </p>
                      
                      {/* Name & Email Row */}
                      <div className="row g-4 mb-4">
                        <div className="col-12 col-md-6">
                          <label className="text-sm text-slate-700 mb-2 d-block font-weight-medium">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="form-control border-0 bg-white px-4 py-3 text-slate-900 shadow-sm rounded-0"
                            placeholder="Your full name"
                            style={{ fontSize: '1rem', lineHeight: '1.6' }}
                          />
                        </div>
                        
                        <div className="col-12 col-md-6">
                          <label className="text-sm text-slate-700 mb-2 d-block font-weight-medium">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="form-control border-0 bg-white px-4 py-3 text-slate-900 shadow-sm rounded-0"
                            placeholder="your@email.com"
                            style={{ fontSize: '1rem', lineHeight: '1.6' }}
                          />
                        </div>
                      </div>

                      {/* Phone & Service Status Row */}
                      <div className="row g-4 mb-4">
                        <div className="col-12 col-md-6">
                          <label className="text-sm text-slate-700 mb-2 d-block font-weight-medium">
                            Phone Number
                            <span className="text-slate-400 font-weight-normal ms-1">(Optional)</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="form-control border-0 bg-white px-4 py-3 text-slate-900 shadow-sm rounded-0"
                            placeholder="(555) 123-4567"
                            style={{ fontSize: '1rem', lineHeight: '1.6' }}
                          />
                        </div>
                        
                        <div className="col-12 col-md-6">
                          <label className="text-sm text-slate-700 mb-2 d-block font-weight-medium">
                            Service Status
                          </label>
                          <select
                            name="serviceStatus"
                            value={formData.serviceStatus}
                            onChange={handleInputChange}
                            required
                            className="form-control border-0 bg-white px-4 py-3 text-slate-900 shadow-sm rounded-0"
                            style={{ fontSize: '1rem', lineHeight: '1.6' }}
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

                      {/* Location */}
                      <div className="mb-4">
                        <label className="text-sm text-slate-700 mb-2 d-block font-weight-medium">
                          Current Location / Installation
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="form-control border-0 bg-white px-4 py-3 text-slate-900 shadow-sm rounded-0"
                          placeholder="e.g., Naval Station Norfolk, Fort Liberty, etc."
                          style={{ fontSize: '1rem', lineHeight: '1.6' }}
                        />
                      </div>

                      {/* Message */}
                      <div className="mb-5">
                        <label className="text-sm text-slate-700 mb-2 d-block font-weight-medium">
                          How Can We Help?
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows="6"
                          className="form-control border-0 bg-white px-4 py-3 text-slate-900 shadow-sm rounded-0"
                          placeholder="Please share what brings you here today. You can include any specific concerns, preferred appointment times, or questions about our services. All information is kept strictly confidential."
                          style={{ fontSize: '1rem', lineHeight: '1.6', resize: 'none' }}
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="btn bg-slate-900 text-white border-0 px-5 py-3 rounded-0 shadow-sm hover-lift"
                        style={{ 
                          fontSize: '0.875rem', 
                          fontWeight: '600',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        Send Confidential Message
                      </button>
                      
                    </form>
                  ) : (
                    <div className="success-message bg-white p-5 shadow-sm">
                      <div className="text-center py-5">
                        <div className="d-flex align-items-center justify-content-center mx-auto mb-4" 
                             style={{ 
                               width: '4rem', 
                               height: '4rem', 
                               backgroundColor: 'rgb(220 252 231)', 
                               borderRadius: '50%' 
                             }}>
                          <svg className="text-green-600" style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-slate-900 mb-3" style={{ fontSize: '1.5rem', lineHeight: '1.4' }}>
                          Message Received
                        </h3>
                        <p className="text-slate-600 mb-4" style={{ fontSize: '1.125rem', lineHeight: '1.5' }}>
                          Thank you for reaching out. A member of our clinical team will contact you within 24 hours 
                          to discuss your needs and schedule an initial consultation.
                        </p>
                        <div className="bg-blue-50 p-4 mb-4 text-start">
                          <p className="text-slate-700 mb-2" style={{ fontSize: '0.875rem', lineHeight: '1.5', fontWeight: '600' }}>
                            Crisis Support Available 24/7:
                          </p>
                          <p className="text-slate-600 mb-1" style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                            Military Crisis Line: <strong>1-800-273-8255</strong>
                          </p>
                          <p className="text-slate-600" style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                            Text: <strong>838255</strong>
                          </p>
                        </div>
                        <button
                          onClick={resetForm}
                          className="btn bg-slate-100 text-slate-900 border-0 px-4 py-2 rounded-0"
                          style={{ 
                            fontSize: '0.875rem',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          Send Another Message
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact Details Sidebar */}
                <div className="col-12 col-lg-4" ref={detailsRef}>
                  <div className="bg-white p-5 shadow-sm h-fit mb-4">
                    
                    {/* Who We Serve */}
                    <div className="mb-5">
                      <h4 className="text-slate-900 mb-3" style={{ fontSize: '1.25rem', lineHeight: '1.45' }}>
                        Who We Serve
                      </h4>
                      <ul className="list-unstyled">
                        <li className="text-slate-600 mb-2" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                          • Active duty 
                        </li>
                        <li className="text-slate-600 mb-2" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                          • Military spouses 
                        </li>
                        <li className="text-slate-600 mb-2" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                          • Recent veterans
                        </li>
                        <li className="text-slate-600 mb-2" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                          • First responders (eligibility varies)
                        </li>
                      </ul>
                    </div>

                    {/* Response Time */}
                    <div className="mb-5">
                      <h4 className="text-slate-900 mb-3" style={{ fontSize: '1.25rem', lineHeight: '1.45' }}>
                        What to Expect
                      </h4>
                      <p className="text-slate-600 mb-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                        We respond to all inquiries within 2 business days. Initial consultations can often be scheduled within 48-72 hours.
                      </p>
                      <p className="text-slate-600" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                        All services are confidential and designed specifically for military culture and experience.
                      </p>
                    </div>

                  </div>

                  {/* Crisis Resources */}
                  <div className="bg-blue-50 p-5 shadow-sm">
                    <h4 className="text-slate-900 mb-3" style={{ fontSize: '1.25rem', lineHeight: '1.45' }}>
                      Immediate Support
                    </h4>
                    <p className="text-slate-700 mb-3" style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                      If you're experiencing a mental health crisis:
                    </p>
                    <div className="mb-3">
                      <p className="text-slate-700 mb-1" style={{ fontSize: '0.875rem', lineHeight: '1.5', fontWeight: '600' }}>
                        Military Crisis Line
                      </p>
                      <p className="text-slate-800" style={{ fontSize: '1rem', lineHeight: '1.6', fontWeight: '700' }}>
                        1-800-273-8255
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-700 mb-1" style={{ fontSize: '0.875rem', lineHeight: '1.5', fontWeight: '600' }}>
                        Crisis Text Line
                      </p>
                      <p className="text-slate-800" style={{ fontSize: '1rem', lineHeight: '1.6', fontWeight: '700' }}>
                        Text: 838255
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}