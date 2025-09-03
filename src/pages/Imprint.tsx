import React from 'react'

export default function Imprint() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/20 via-purple-950/20 to-neutral-950 opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-8">
          <h1 className="text-display-md font-semibold text-white mb-6">Imprint</h1>
          <p className="text-body-md text-neutral-300 max-w-2xl">
            This is a placeholder for the legal imprint. Add your company details,
            address, and contact information here.
          </p>
        </div>
      </div>
    </section>
  )
}


