import React from 'react';
import RenderStructure from '@/components/RenderStructure';

export default async function Home() {
  return (
    <div className="container mx-auto flex flex-column justify-center items-center h-screen ">
      <div>
        <h1>Project Structure</h1>
        <RenderStructure />
      </div>
    </div>
  );
}
