'use client';

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.target;
    const formData = new FormData(form);
    
    // CRITICAL: Encode as URL-encoded string (Netlify requirement)
    const urlEncodedData = new URLSearchParams(formData).toString();

    try {
      // POST to the static HTML file path
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded" 
        },
        body: urlEncodedData,
      });

      if (response.ok || response.status === 303) {
        // 303 is a successful redirect from Netlify
        setSubmitted(true);
      } else {
        throw new Error(`Form submission failed: ${response.status}`);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setError(null);
  };

  if (submitted) {
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
            <svg 
              className="text-green-600" 
              style={{ width: '2rem', height: '2rem' }} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
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
            style={{ fontSize: '0.875rem', transition: 'all 0.3s ease' }}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form 
      name="contact"
      method="POST"
      onSubmit={handleSubmit}
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      {/* Honeypot field - hidden from users, catches bots */}
      <p hidden>
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

      {/* Form name - REQUIRED for Netlify */}
      <input type="hidden" name="form-name" value="contact" />

      {error && (
        <div className="alert alert-danger mb-4" role="alert">
          {error}
        </div>
      )}

      {/* Name & Email Row */}
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
            style={{ fontSize: '1rem', lineHeight: '1.6' }}
            disabled={isSubmitting}
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
            style={{ fontSize: '1rem', lineHeight: '1.6' }}
            disabled={isSubmitting}
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
            className="form-control border-0 bg-white px-4 py-3 text-slate-900 shadow-sm rounded-0"
            placeholder="(555) 123-4567"
            style={{ fontSize: '1rem', lineHeight: '1.6' }}
            disabled={isSubmitting}
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
            style={{ fontSize: '1rem', lineHeight: '1.6' }}
            disabled={isSubmitting}
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
          className="form-control border-0 bg-white px-4 py-3 text-slate-900 shadow-sm rounded-0"
          placeholder="e.g., Naval Station Norfolk, Fort Liberty, etc."
          style={{ fontSize: '1rem', lineHeight: '1.6' }}
          disabled={isSubmitting}
        />
      </div>

      {/* Message */}
      <div className="mb-5">
        <label className="text-sm text-slate-700 mb-2 d-block font-weight-medium">
          How Can We Help?
        </label>
        <textarea
          name="message"
          required
          rows="6"
          className="form-control border-0 bg-white px-4 py-3 text-slate-900 shadow-sm rounded-0"
          placeholder="Please share what brings you here today. You can include any specific concerns, preferred appointment times, or questions about our services. All information is kept strictly confidential."
          style={{ fontSize: '1rem', lineHeight: '1.6', resize: 'none' }}
          disabled={isSubmitting}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn bg-slate-900 text-white border-0 px-5 py-3 rounded-0 shadow-sm hover-lift"
        style={{ 
          fontSize: '0.875rem', 
          fontWeight: '600',
          transition: 'all 0.3s ease',
          opacity: isSubmitting ? 0.7 : 1,
          cursor: isSubmitting ? 'not-allowed' : 'pointer'
        }}
      >
        {isSubmitting ? 'Sending...' : 'Send Confidential Message'}
      </button>
    </form>
  );
}
