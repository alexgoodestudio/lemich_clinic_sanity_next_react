'use client'

import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FileText, Group, History } from "lucide-react";

export default function Services() {
  useEffect(() => { 
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <div className="d-flex flex-column bg-slate-50">
        <div className="container py-5 flex-grow-1">
          <div className="row mb-3">
            <div className="col-12">
              <h1 className="text-4xl mb-4 barlow text-start text-gray-800">
                Exclusive Services
              </h1>
            </div>
          </div>

          <div className="row mt-lg-5">
            <div className="col-lg-12">
              <p className="text-justify mb-4 text-md text-gray-600 border rounded bg-slate-100 p-3">
                For current clients, we have a selection of services provided by
                our team to support you in your journey to better mental health.
                Prices and availability may vary, so please talk to our office
                staff about options for you.
              </p>
            </div>
          </div>

          <div className="row">
            {/* Card 1 - Summary Letters */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full text-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg card-animate">
                <img
                  src="/images/1.avif"
                  className="card-img-top object-cover w-full h-48"
                  alt="Summary Letters"
                />
                <div className="card-body p-5 flex-grow-1">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-2">
                    <FileText size={18} /> Summary Letters
                  </h3>
                  <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600">
                    Only for Active Duty Military Service Members. This letter
                    will outline the diagnosis that the client has, confirm and
                    give a brief description of their session attendance, and give
                    advice and confirmation of their clinical needs.
                  </p>
                </div>
                <div className="card-footer bg-slate-100 p-3">
                  <small className="text-muted">PRICE: $40/letter</small>
                </div>
              </div>
            </div>

            {/* Card 2 - NEXUS Letters */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full text-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg card-animate">
                <img
                  src="/images/2.avif"
                  className="card-img-top object-cover w-full h-48"
                  alt="NEXUS Therapy"
                />
                <div className="card-body p-5 flex-grow-1">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-2">
                    <History size={18} /> NEXUS Letters
                  </h3>
                  <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600">
                    Only for Veterans who have been out of Active Duty Military
                    Service for more than one year. This letter is a compilation
                    of your medical history that explains the connection between
                    current medical condition(s) and military service.
                  </p>
                </div>
                <div className="card-footer bg-slate-100 p-3">
                  <small className="text-muted">PRICE: $180/letter</small>
                </div>
              </div>
            </div>

            {/* Card 3 - Group Therapy */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full text-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg card-animate">
                <img
                  src="/images/3.avif"
                  className="card-img-top object-cover w-full h-48"
                  alt="Group Therapy"
                />
                <div className="card-body p-5 flex-grow-1">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-2">
                    <Group size={18} /> Group Therapy
                  </h3>
                  <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600">
                    To register for a group and get cost/payment information,{" "}
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf772Z4DElgOFl_7u2GM71MB6xB3g-qOYMmjd1-Rlu4EVoz_Q/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      click here
                    </a>{" "}
                    or call our office.
                  </p>
                  <ul className="list-unstyled mt-3">
                    <li>
                      <strong>Betrayed Partners:</strong> Mondays @ 12pm - 1pm
                    </li>
                    <li>
                      <strong>Men's Relationship Skills:</strong> Every other
                      Thursday @ 5pm - 6:30pm
                    </li>
                  </ul>
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
