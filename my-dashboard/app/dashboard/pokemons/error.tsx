'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <Image
        src="/server-error.svg"
        alt="Server Error Image"
        width={180}
        height={100}
        priority
      />

      <div className="flex flex-col items-center justify-center">
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-8">500</p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">Server Error</p>
        <p className="md:text-lg xl:text-xl text-gray-500 mt-4">Whoops, something went wrong on our servers.</p>
      </div>

      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}