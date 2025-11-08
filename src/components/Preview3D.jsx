import React, { useMemo } from 'react';
import Spline from '@splinetool/react-spline';

/*
  Lightweight 3D preview shell using a Spline scene placeholder.
  We simulate fabric application and sizing by overlaying an info panel
  that reflects user selections. In a real setup, you'd load a parametrized
  rig and swap material textures based on the uploaded image and measurements.
*/

export default function Preview3D({ fabric, measurements, style }) {
  const info = useMemo(() => ({
    hasFabric: !!fabric?.url,
    styleLabel: style ? style.replace('-', ' ') : '—',
    height: measurements?.height,
    bust: measurements?.bust,
    waist: measurements?.waist,
    hips: measurements?.hips,
  }), [fabric, measurements, style]);

  return (
    <div className="relative h-[460px] w-full overflow-hidden rounded-2xl border bg-gradient-to-b from-gray-50 to-white">
      <Spline scene="https://prod.spline.design/2oPVIv7jG0n8z92q/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />

      <div className="absolute bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md">
        <div className="backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 rounded-xl border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Selected style</p>
              <p className="font-medium text-gray-900 capitalize">{info.styleLabel}</p>
            </div>
            <div className={`text-xs px-2 py-1 rounded-full ${info.hasFabric ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
              {info.hasFabric ? 'Fabric ready' : 'No fabric'}
            </div>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2 text-xs text-gray-700">
            <div className="rounded-lg bg-gray-50 p-2"><span className="block text-gray-500">Height</span>{info.height ? `${info.height} cm` : '—'}</div>
            <div className="rounded-lg bg-gray-50 p-2"><span className="block text-gray-500">Bust</span>{info.bust ? `${info.bust} cm` : '—'}</div>
            <div className="rounded-lg bg-gray-50 p-2"><span className="block text-gray-500">Waist</span>{info.waist ? `${info.waist} cm` : '—'}</div>
            <div className="rounded-lg bg-gray-50 p-2"><span className="block text-gray-500">Hips</span>{info.hips ? `${info.hips} cm` : '—'}</div>
          </div>
        </div>
      </div>

      {fabric?.url && (
        <div className="absolute top-4 right-4 hidden md:block">
          <div className="rounded-xl border bg-white/80 backdrop-blur p-2">
            <div className="h-16 w-16 overflow-hidden rounded-lg">
              <img src={fabric.url} alt="Fabric swatch" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
