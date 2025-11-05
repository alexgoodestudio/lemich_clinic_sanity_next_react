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
        <div className="container-fluid px-3 px-md-5 py-5 flex-grow-1">
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
            {/* Card 1 - Letters */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full text-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg card-animate">
                <img
                  src="/images/1.avif"
                  className="card-img-top object-cover w-full h-48"
                  alt="Nexus & Summary Letters"
                />
                <div className="card-body p-5 flex-grow-1">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-2">
                    <FileText size={18} />Letters
                  </h3>
                  <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600">
                    Summary Letters (Active Duty only) We can provide you with a letter containing clinically relevant information for your medication provider, PCP, command, or insurance provider.  These letters can include dates of treatment, diagnoses, symptoms, and clinical recommendations.
                    ​<br/><br/>
                    Nexus Letters (for active duty and under one-year veterans): We can provide you with a letter containing the relevant information needed to supplement your VA disability claim. This letter contains your diagnosis, symptoms, and treatment schedule. It also connects your symptoms with your service, if relevant. This service can be used as a stand-alone service or be paired with psychological testing to achieve the best results. 
                  </p>
                </div>
                {/* <div className="card-footer bg-slate-100 p-3">
                  <small className="text-muted">PRICE: $40/letter</small>
                </div> */}
              </div>
            </div>

            {/* Card 2 - Testing and Evaluations*/}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full text-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg card-animate">
                <img
                  src="/images/2.avif"
                  className="card-img-top object-cover w-full h-48"
                  alt="Testing and Evaluations"
                />
                <div className="card-body p-5 flex-grow-1">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-2">
                    <History size={18} /> Testing and Evaluations
                  </h3>
                  <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600">
                    Full Psychological Evaluation We can assist you and your therapist through advanced psychological testing. At our location, we can assess for most psychological conditions including ADHD, PTSD, bipolar, personality disorders, and psychosis. During the assessment you will complete a historical interview followed by a series of psychological evaluations. Dr. Lemich will then meet with you to go over the results. After, he will meet with your therapist to advise on treatment. You can choose to receive a Clinical Summary, a Summary Letter, or a VA Disability Letter upon completion.
                  </p>
                </div>
                {/* <div className="card-footer bg-slate-100 p-3">
                  <small className="text-muted">PRICE: $180/letter</small>
                </div> */}
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
                      <strong>Betrayed Partners:</strong> Tuesdays 9:15 am - 10:15 am
                    </li>
                    <li>
                      <strong>Men's Relationship Skills:</strong> Every other
                      Thursday @ 5:30pm - 7pm
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
