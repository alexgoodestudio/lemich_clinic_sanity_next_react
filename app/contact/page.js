'use client'

import { useSearchParams } from 'next/navigation';
import { Suspense, useRef } from 'react';
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

function ContactForm() {
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get('success') === 'true';
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => window.location.href = '/contact?success=true')
    .catch((error) => alert('Error: ' + error));
  };

  if (isSuccess) {
    return (
      <div className="success-message bg-white p-5 shadow-sm">
        <div className="text-center py-5">
          <h3 className="text-slate-900 mb-3">Message Received</h3>
          <p className="text-slate-600 mb-4">Thank you for reaching out.</p>
          <a href="/contact" className="btn bg-slate-100 text-slate-900 border-0 px-4 py-2">
            Send Another Message
          </a>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} name="contact" method="POST" onSubmit={handleSubmit} data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-6">
          <label className="text-sm text-slate-700 mb-2 d-block">Full Name</label>
          <input type="text" name="name" required className="form-control" />
        </div>
        <div className="col-12 col-md-6">
          <label className="text-sm text-slate-700 mb-2 d-block">Email</label>
          <input type="email" name="email" required className="form-control" />
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-12 col-md-6">
          <label className="text-sm text-slate-700 mb-2 d-block">Phone</label>
          <input type="tel" name="phone" className="form-control" />
        </div>
        <div className="col-12 col-md-6">
          <label className="text-sm text-slate-700 mb-2 d-block">Service Status</label>
          <select name="serviceStatus" required className="form-control">
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
        <label className="text-sm text-slate-700 mb-2 d-block">Location</label>
        <input type="text" name="location" className="form-control" />
      </div>

      <div className="mb-5">
        <label className="text-sm text-slate-700 mb-2 d-block">Message</label>
        <textarea name="message" required rows="6" className="form-control"></textarea>
      </div>

      <button type="submit" className="btn bg-slate-900 text-white">Send Message</button>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <Nav />
      <div className="bg-stone-50 min-h-screen py-5">
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
      <Footer />
    </>
  );
}