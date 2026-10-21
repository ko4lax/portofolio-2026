import Link from "next/link";

export default function NotFound() {
  return (
    <main className='min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center'>
      <p className='text-sm font-bold tracking-[0.3em] uppercase text-secondary'>404</p>
      <h1 className='text-4xl md:text-6xl font-black mt-6 mb-6'>This page does not exist.</h1>
      <p className='text-lg text-secondary max-w-md mb-10'>
        The link may be outdated, or the page may have moved.
      </p>
      <Link href='/' className='btn-primary inline-block px-8 py-4 font-bold'>
        Back to home
      </Link>
    </main>
  );
}
