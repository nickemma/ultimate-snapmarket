'use client';
import { useEffect } from "react";

export default function Error({error, reset}: {error: Error & {digest?: string}, reset: () => void}) {
    useEffect(() => {
        // Log the error to the console
        console.error(error);
    }, [error]);

  return (
   <div className="w-full min-h-56 text-lg flex items-center justify-center flex-col">
    <h2>Something went wrong</h2>
    <button
    onClick={
    // Reset the error state
    () => reset()
    }
    >
    Try again
    </button>
   </div>
  );
}
