import React from 'react';

export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Dress Model Builder</h1>
        <p className="mt-3 text-gray-600 md:text-lg">
          Upload your fabric, enter measurements, and pick a dress style. We’ll preview a character wearing your custom design.
        </p>
      </div>
    </header>
  );
}
