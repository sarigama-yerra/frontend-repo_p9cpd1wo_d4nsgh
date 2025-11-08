import React, { useState, useEffect } from 'react';

const fields = [
  { key: 'height', label: 'Height (cm)', min: 120, max: 220 },
  { key: 'bust', label: 'Bust (cm)', min: 70, max: 140 },
  { key: 'waist', label: 'Waist (cm)', min: 50, max: 130 },
  { key: 'hips', label: 'Hips (cm)', min: 70, max: 150 },
];

export default function MeasurementForm({ value, onChange }) {
  const [form, setForm] = useState({ height: 170, bust: 90, waist: 70, hips: 95 });

  useEffect(() => {
    if (value) setForm((prev) => ({ ...prev, ...value }));
  }, [value]);

  const update = (key, val) => {
    const v = Number(val);
    const next = { ...form, [key]: isNaN(v) ? '' : v };
    setForm(next);
    onChange?.(next);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6">
      <h3 className="text-lg font-medium text-gray-900">Measurements</h3>
      <p className="text-sm text-gray-500 mb-4">Provide body measurements for accurate sizing</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map(({ key, label, min, max }) => (
          <label key={key} className="block">
            <span className="text-sm text-gray-700">{label}</span>
            <input
              type="number"
              min={min}
              max={max}
              value={form[key]}
              onChange={(e) => update(key, e.target.value)}
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900"
            />
          </label>
        ))}
      </div>
    </div>
  );
}
