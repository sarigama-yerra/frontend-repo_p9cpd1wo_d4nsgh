import React, { useRef, useState } from 'react';
import { Upload } from 'lucide-react';

export default function FabricUploader({ onChange }) {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const url = e.target?.result;
      setPreview(url);
      onChange?.({ file, url });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Fabric Texture</h3>
          <p className="text-sm text-gray-500">Upload an image of your fabric (JPG/PNG)</p>
        </div>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-3 py-2 text-sm hover:bg-black/90"
        >
          <Upload size={16} /> Upload
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
      </div>

      {preview ? (
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border">
            <img src={preview} alt="Fabric preview" className="h-full w-full object-cover" />
          </div>
          <div className="text-sm text-gray-600">
            <ul className="space-y-1 list-disc list-inside">
              <li>Clear photo, even lighting works best</li>
              <li>Texture will be used to render the dress material</li>
              <li>You can replace it anytime</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="mt-4 rounded-lg border border-dashed p-6 text-center text-gray-500">
          No fabric selected yet
        </div>
      )}
    </div>
  );
}
