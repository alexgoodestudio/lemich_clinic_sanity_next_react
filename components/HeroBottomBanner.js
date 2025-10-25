import Link from 'next/link'

export default function HeroBottomBanner() {
  return (
    <div className="p-5 bg-slate-950 text-white d-flex align-items-center">
      <div className="text-start">
        <p className="text-4xl mb-2">Your Mental Health Matters</p>
        <p className="text-lg mb-4">Compassionate care for veterans and active duty service members.</p>
        <Link href="/contact" className="btn rounded px-4 py-2 bg-blue-200 text-slate-900" aria-label="Contact The Lemich Clinic">
          Contact Us
        </Link>
      </div>
    </div>
  )
}