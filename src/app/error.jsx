"use client";

import { site } from "@/data/site";

export default function Error({ reset }) {
  return (
    <main className='min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center'>
      <p className='text-sm font-bold tracking-[0.3em] uppercase text-secondary'>Error</p>
      <h1 className='text-4xl md:text-6xl font-black mt-6 mb-6'>Something went wrong.</h1>
      <p className='text-lg text-secondary max-w-md mb-10'>
        Try again, or email <span className='text-primary'>{site.email}</span> if it keeps happening.
      </p>
      <button type='button' onClick={() => reset()} className='btn-primary px-8 py-4 font-bold'>
        Try again
      </button>
    </main>
  );
}
