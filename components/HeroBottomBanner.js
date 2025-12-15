import Link from 'next/link'

export default function HeroBottomBanner() {
  return (
    <div className="p-lg-5 p-4 bg-slate-900 text-white">
      <div className="py-4">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <p className="text-2xl md:text-3xl font-bold mb-3 light-blue">
              <span className='text-white'>Your Mental Health <span className='text-indigo-300'>Matters</span>.</span> 
            </p>
            <p className="text-lg text-slate-300 mb-0 tracking-wide">
              We understand the unique concerns of active duty service members. Your mental health care is completely confidential.
            </p>
            <Link
              href="/services"
              className="btn btn-light rounded px-4 py-2 mt-5  font-semibold no-underline"
              aria-label="Learn about our confidential process"
            >
               Our Services
            </Link>
          </div>
          <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

          </div>
        </div>
      </div>
    </div>
  )
}