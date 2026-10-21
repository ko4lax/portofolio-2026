"use client";

import { site } from "@/data/site";

export default function Error({ reset }) {
  return (
    <main className='flex min-h-screen flex-col justify-center bg-background'>
      <div className='mx-auto w-full max-w-shell px-5 py-32 md:px-10'>
        <div className='border-t-2 border-primary pt-8'>
          <p className='mono text-secondary'>Error</p>
          <h1 className='mt-10 max-w-3xl text-[13vw] font-semibold leading-[0.92] tracking-[-0.045em] sm:text-5xl md:text-6xl'>
            Something went wrong.
          </h1>
          <p className='measure mt-8 text-lg text-secondary'>
            Try again, or email <span className='text-primary'>{site.email}</span> if it keeps
            happening.
          </p>
          <button type='button' onClick={() => reset()} className='btn-primary mt-12'>
            Try again
          </button>
        </div>
      </div>
    </main>
  );
}
