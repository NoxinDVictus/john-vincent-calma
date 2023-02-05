'use client'; // Error components must be Client components

import { useEffect } from 'react';

interface IError {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: IError): JSX.Element {
  useEffect(() => {
    // eslint-disable-next-line
    console.error(error);
  }, [error]);

  return (
    <div className="h-100-vh w-100-vw center flex-col">
      <h2>Something went wrong!</h2>
      {/* Attempt to recover by trying to re-render the segment */}
      <button onClick={reset}>Try again</button>
    </div>
  );
}
