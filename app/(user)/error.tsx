"use client";

import { Tooltip } from "@mui/material";

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center p-5 w-full bg-white">
      <div className="text-center font-Staatliches">
        <div className="inline-flex rounded-full bg-sky-100 p-4">
          <div className="rounded-full stroke-sky-600 bg-sky-200 p-4">
            <img src="/error.gif" alt="" className="rounded-full"/>
          </div>
        </div>
        <h1 className="mt-5 text-[36px] tracking-wider font-bold lg:text-[50px]">
          {error && <p className="text-black">{error.message}</p>}
        </h1>
        <p className="text-black mt-5 lg:text-lg tracking-wider">
          Oops something went wrong. Try to refresh this page or <br /> feel
          free to contact us if the problem presists.
        </p>
        <Tooltip title="Click try again">
          <button
            className="my-4 px-10 py-4 tracking-wider text-white bg-black font-medium"
            onClick={reset}
          >
            Try again
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
