import React from 'react';

const styles = [
  { id: 'a-line', name: 'A-Line' },
  { id: 'mermaid', name: 'Mermaid' },
  { id: 'ball-gown', name: 'Ball Gown' },
  { id: 'sheath', name: 'Sheath' },
];

export default function StyleSelector({ value, onChange }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6">
      <h3 className="text-lg font-medium text-gray-900">Dress Style</h3>
      <p className="text-sm text-gray-500 mb-4">Choose a silhouette for your dress</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {styles.map((s) => {
          const active = value === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onChange?.(s.id)}
              className={
                `rounded-xl border px-3 py-2 text-sm transition ${active ? 'border-gray-900 bg-gray-900 text-white' : 'hover:border-gray-400'}`
              }
            >
              {s.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
