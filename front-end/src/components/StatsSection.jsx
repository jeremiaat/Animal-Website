import React from "react";

export default function StatsSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-emerald-700/30">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-medium text-white mb-2">
              Our Ever-Growing Database
            </h2>
            <p className="text-emerald-200 text-lg font-light">
              We are constantly expanding our collection of the world's
              incredible species.
            </p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-semibold text-emerald-400">10,000+</p>
            <p className="text-white/80 text-xl font-light">Animals Catalogued</p>
          </div>
        </div>
      </div>
    </section>
  );
}
