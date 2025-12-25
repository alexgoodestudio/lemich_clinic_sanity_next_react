'use client'

import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FileText, Group, History, Target } from "lucide-react";

export default function Services() {
  useEffect(() => { 
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <div className="d-flex flex-column bg-slate-50 px-lg-5">
        <div className="container-fluid px-4 px-md-5 px-lg-6 py-5 flex-grow-1">
          <div className="row mb-3">
            <div className="col-12">
              <h1 className="text-4xl mb-2 barlow text-start text-gray-800 pt-3">
                Exclusive Client Services
              </h1>
            </div>
          </div>

          <div className="row mt-lg-4">
            <div className="col-lg-12">
              <p className="text-justify mb-4 text-md text-gray-600 border rounded bg-slate-100 p-3">
                For current clients, we have a selection of services provided by
                our team to support you in your journey to better mental health.
                Prices and availability may vary, so please talk to our office
                staff about options for you.
              </p>
            </div>
          </div>

          {/* Mobile: Keep cards */}
          <div className="row d-md-none">
            {/* Card 1 - Letters */}
            <div className="col-12 mb-4">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full text-start">
                <img
                  src="/images/1.avif"
                  className="card-img-top object-cover w-full h-64"
                  alt="Nexus & Summary Letters"
                />
                <div className="card-body p-5 flex-grow-1">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
                    <FileText size={18} />Letters
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600">
                    Summary Letters (Active Duty only) We can provide you with a letter containing clinically relevant information for your medication provider, PCP, command, or insurance provider.  These letters can include dates of treatment, diagnoses, symptoms, and clinical recommendations.
                    <br/><br/>
                    Nexus Letters (for active duty and under one-year veterans): We can provide you with a letter containing the relevant information needed to supplement your VA disability claim. This letter contains your diagnosis, symptoms, and treatment schedule. It also connects your symptoms with your service, if relevant. This service can be used as a stand-alone service or be paired with psychological testing to achieve the best results.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Testing and Evaluations*/}
            <div className="col-12 mb-4">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full text-start">
                <img
                  src="/images/2.avif"
                  className="card-img-top object-cover w-full h-64"
                  alt="Testing and Evaluations"
                />
                <div className="card-body p-5 flex-grow-1">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
                    <History size={18} /> Testing and Evaluations
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600">
                    Full Psychological Evaluation We can assist you and your therapist through advanced psychological testing. At our location, we can assess for most psychological conditions including ADHD, PTSD, bipolar, personality disorders, and psychosis. During the assessment you will complete a historical interview followed by a series of psychological evaluations. Dr. Lemich will then meet with you to go over the results. After, he will meet with your therapist to advise on treatment. You can choose to receive a Clinical Summary, a Summary Letter, or a VA Disability Letter upon completion.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Group Therapy */}
            <div className="col-12 mb-4">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full text-start">
                <img
                  src="/images/3.avif"
                  className="card-img-top object-cover w-full h-64"
                  alt="Group Therapy"
                />
                <div className="card-body p-5 flex-grow-1">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
                    <Group size={18} /> Group Therapy
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600">
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

            {/* Card 4 - Life Coaching */}
            <div className="col-12 mb-4">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full text-start">
                <img
                  src="/images/office1.avif"
                  className="card-img-top object-cover w-full h-64"
                  alt="Life Coaching"
                />
                <div className="card-body p-5 flex-grow-1">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
                    <Target size={18} /> Life Coaching
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600">
                    Life Coaching helps clients identify personal and professional goals that do not fall under mental health or medical care providers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Row-based layout */}
          <div className="d-none d-md-block">
            {/* Row 1 - Letters */}
            <div className="row border-bottom border-slate-200 py-5 align-items-stretch">
              <div className="col-md-5">
                <div className="h-100">
                  <img
                    src="/images/1.avif"
                    className="w-full object-cover rounded"
                    alt="Nexus & Summary Letters"
                    style={{ height: '240px' }}
                  />
                </div>
              </div>
              <div className="col-md-7 d-flex flex-column justify-content-center ps-md-5">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3 tomorrow">
                  <FileText size={24} className="inline-block me-2" />Letters
                </h3>
                <p className="text-base leading-relaxed text-slate-600" style={{ letterSpacing: '-0.01em' }}>
                  <strong>Summary Letters (Active Duty only)</strong><br/>
                  We can provide you with a letter containing clinically relevant information for your medication provider, PCP, command, or insurance provider. These letters can include dates of treatment, diagnoses, symptoms, and clinical recommendations.
                </p>
                <p className="text-base leading-relaxed text-slate-600 mt-3" style={{ letterSpacing: '-0.01em' }}>
                  <strong>Nexus Letters (for active duty and under one-year veterans)</strong><br/>
                  We can provide you with a letter containing the relevant information needed to supplement your VA disability claim. This letter contains your diagnosis, symptoms, and treatment schedule. It also connects your symptoms with your service, if relevant. This service can be used as a stand-alone service or be paired with psychological testing to achieve the best results.
                </p>
              </div>
            </div>

            {/* Row 2 - Testing and Evaluations */}
            <div className="row border-bottom border-slate-200 py-5 align-items-stretch">
              <div className="col-md-5">
                <div className="h-100">
                  <img
                    src="/images/2.avif"
                    className="w-full object-cover rounded"
                    alt="Testing and Evaluations"
                    style={{ height: '240px' }}
                  />
                </div>
              </div>
              <div className="col-md-7 d-flex flex-column justify-content-center ps-md-5">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3 tomorrow">
                  <History size={24} className="inline-block me-2" />Testing and Evaluations
                </h3>
                <p className="text-base leading-relaxed text-slate-600" style={{ letterSpacing: '-0.01em' }}>
                  <strong>Full Psychological Evaluation</strong><br/>
                  We can assist you and your therapist through advanced psychological testing. At our location, we can assess for most psychological conditions including ADHD, PTSD, bipolar, personality disorders, and psychosis. During the assessment you will complete a historical interview followed by a series of psychological evaluations. Dr. Lemich will then meet with you to go over the results. After, he will meet with your therapist to advise on treatment. You can choose to receive a Clinical Summary, a Summary Letter, or a VA Disability Letter upon completion.
                </p>
              </div>
            </div>

            {/* Row 3 - Group Therapy */}
            <div className="row border-bottom border-slate-200 py-5 align-items-stretch">
              <div className="col-md-5">
                <div className="h-100">
                  <img
                    src="/images/3.avif"
                    className="w-full object-cover rounded"
                    alt="Group Therapy"
                    style={{ height: '240px' }}
                  />
                </div>
              </div>
              <div className="col-md-7 d-flex flex-column justify-content-center ps-md-5">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3 tomorrow">
                  <Group size={24} className="inline-block me-2" />Group Therapy
                </h3>
                <p className="text-base leading-relaxed text-slate-600 mb-3" style={{ letterSpacing: '-0.01em' }}>
                  To register for a group and get cost/payment information,{" "}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf772Z4DElgOFl_7u2GM71MB6xB3g-qOYMmjd1-Rlu4EVoz_Q/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    click here
                  </a>{" "}
                  or call our office.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <strong>Betrayed Partners:</strong> Tuesdays 9:15 am - 10:15 am
                  </li>
                  <li>
                    <strong>Men's Relationship Skills:</strong> Every other Thursday @ 5:30pm - 7pm
                  </li>
                </ul>
              </div>
            </div>

            {/* Row 4 - Life Coaching */}
            <div className="row py-5 align-items-stretch">
              <div className="col-md-5">
                <div className="h-100">
                  <img
                    src="/images/office1.avif"
                    className="w-full object-cover rounded"
                    alt="Life Coaching"
                    style={{ height: '240px' }}
                  />
                </div>
              </div>
              <div className="col-md-7 d-flex flex-column justify-content-center ps-md-5">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3 tomorrow">
                  <Target size={24} className="inline-block me-2" />Life Coaching
                </h3>
                <p className="text-base leading-relaxed text-slate-600" style={{ letterSpacing: '-0.01em' }}>
                  Life Coaching helps clients identify personal and professional goals that do not fall under mental health or medical care providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
