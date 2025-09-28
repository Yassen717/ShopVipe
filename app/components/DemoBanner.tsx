"use client";

import React from "react";

export default function DemoBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-center text-sm">
        <span className="font-semibold tracking-wide uppercase">Demo</span>
        <span className="mx-2">•</span>
        This is a demo build and will be published on Netlify. Some features may be limited.
      </div>
    </div>
  );
}
