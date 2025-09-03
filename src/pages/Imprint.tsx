import React from 'react'

export default function Imprint() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/20 via-purple-950/20 to-neutral-950 opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-8">
          <h1 className="text-display-md font-semibold text-white mb-6">Impressum</h1>
          <div className="max-w-2xl space-y-6">
            <div className="space-y-2">
              <h2 className="text-body-lg font-semibold text-white">Impressum gemäß § 5 TMG</h2>
              <div className="text-body-md text-neutral-300 space-y-1">
                <p className="font-medium">Office Dortmund</p>
                <p>Unping GmbH</p>
                <p>Emil-Figge-Straße 80</p>
                <p>44227 Dortmund</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-body-lg font-semibold text-white">Contact</h2>
              <div className="text-body-md text-neutral-300 space-y-1">
                <p>Business Phone: +49 231 99994132</p>
                <p>General Inquiries & Sales: contact@unping.com</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-body-lg font-semibold text-white">Legal Information</h2>
              <div className="text-body-md text-neutral-300 space-y-1">
                <p>Commercial Register: HRB 33559</p>
                <p>Registration court: Amtsgericht Dortmund</p>
                <p>USt-ID: DE349009328</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-body-lg font-semibold text-white">Vertreten durch</h2>
              <p className="text-body-md text-neutral-300">Philip Müller</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


