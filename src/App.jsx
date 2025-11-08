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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-16">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-6">
            <FabricUploader onChange={setFabric} />
            <MeasurementForm value={measurements} onChange={setMeasurements} />
            <StyleSelector value={style} onChange={setStyle} />
          </div>
          <div className="space-y-6">
            <Preview3D fabric={fabric} measurements={measurements} style={style} />
            <div className="bg-white rounded-xl border p-5">
              <h3 className="font-medium text-gray-900">How this works</h3>
              <p className="mt-2 text-sm text-gray-600">
                This demo prepares your selections for a 3D render: fabric image as material texture, measurements as body
                parameters, and style as dress silhouette. Connect it to a backend later to generate a full character and
                garment fit preview.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
