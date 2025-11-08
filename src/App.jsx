import React, { useState } from 'react';
import Header from './components/Header';
import FabricUploader from './components/FabricUploader';
import MeasurementForm from './components/MeasurementForm';
import StyleSelector from './components/StyleSelector';
import Preview3D from './components/Preview3D';

export default function App() {
  const [fabric, setFabric] = useState(null);
  const [measurements, setMeasurements] = useState({ height: 170, bust: 90, waist: 70, hips: 95 });
  const [style, setStyle] = useState('a-line');
  const [model, setModel] = useState('midi');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-16">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-6">
            <FabricUploader onChange={setFabric} />
            <MeasurementForm value={measurements} onChange={setMeasurements} />
            <StyleSelector value={style} onChange={setStyle} model={model} onModelChange={setModel} />
          </div>
          <div className="space-y-6">
            <Preview3D fabric={fabric} measurements={measurements} style={style} model={model} />
            <div className="bg-white rounded-xl border p-5">
              <h3 className="font-medium text-gray-900">How this works</h3>
              <p className="mt-2 text-sm text-gray-600">
                Your selections are prepared for a 3D render: fabric image as material texture, measurements as body
                parameters, and style as dress silhouette. If the interactive 3D scene can’t load on your network, a fallback
                image will appear so you can continue configuring your design.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
