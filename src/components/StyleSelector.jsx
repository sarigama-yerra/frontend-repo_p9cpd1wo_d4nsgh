import React from 'react';

const silhouettes = [
  { id: 'a-line', name: 'A-Line' },
  { id: 'mermaid', name: 'Mermaid' },
  { id: 'ball-gown', name: 'Ball Gown' },
  { id: 'sheath', name: 'Sheath' },
];

const models = [
  { id: 'mini', name: 'Mini' },
  { id: 'midi', name: 'Midi' },
  { id: 'maxi', name: 'Maxi' },
];

export default function StyleSelector({ value, onChange, model, onModelChange }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6">
      <h3 className="text-lg font-medium text-gray-900">Dress Options</h3>
      <p className="text-sm text-gray-500 mb-4">Choose a silhouette and length</p>

      <div>
        <p className="text-sm font-medium text-gray-800 mb-2">Silhouette</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {silhouettes.map((s) => {
            const active = value === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => onChange?.(s.id)}
                className={`rounded-xl border px-3 py-2 text-sm transition ${active ? 'border-gray-900 bg-gray-900 text-white' : 'hover:border-gray-400'}`}
              >
                {s.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <p className="text-sm font-medium text-gray-800 mb-2">Model length</p>
        <div className="inline-flex rounded-lg border p-1 bg-gray-50">
          {models.map((m) => {
            const active = model === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => onModelChange?.(m.id)}
                className={`px-3 py-1.5 text-sm rounded-md ${active ? 'bg-white shadow border' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {m.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
