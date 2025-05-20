import React from 'react';
import Link from 'next/link';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="container mx-auto flex flex-column justify-center items-center h-screen">
      <div>
        <div>
          Page:
          {slug}
        </div>
        <div className="mt-10">
          <Link
            href="/"
            className="px-10 py-5 bg-green-600 duration-300 hover:bg-green-400 rounded-lg "
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
