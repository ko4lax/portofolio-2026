import Link from "next/link";

export default function NotFound() {
  return (
    <main className='flex min-h-screen flex-col justify-center bg-background'>
      <div className='mx-auto w-full max-w-shell px-5 py-32 md:px-10'>
        <div className='border-t-2 border-primary pt-8'>
          <p className='mono text-secondary'>404</p>
          <h1 className='mt-10 max-w-3xl text-[13vw] font-semibold leading-[0.92] tracking-[-0.045em] sm:text-5xl md:text-6xl'>
            This page does not exist.
          </h1>
          <p className='measure mt-8 text-lg text-secondary'>
            The link may be outdated, or the page may have moved.
          </p>
          <Link href='/' className='btn-primary mt-12'>
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
