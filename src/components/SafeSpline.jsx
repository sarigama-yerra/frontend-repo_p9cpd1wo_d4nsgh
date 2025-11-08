import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, retryKey: 0 };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Optionally log errors
  }

  handleRetry = () => {
    this.setState((s) => ({ hasError: false, error: null, retryKey: s.retryKey + 1 }));
  };

  render() {
    const { hasError, error, retryKey } = this.state;
    const { scene, className, style, fallbackSrc } = this.props;

    if (hasError) {
      return (
        <div className={`relative flex h-full w-full items-center justify-center ${className || ''}`} style={style}>
          {fallbackSrc ? (
            <img src={fallbackSrc} alt="3D preview fallback" className="absolute inset-0 h-full w-full object-cover" />
          ) : null}
          <div className="relative z-10 max-w-md rounded-xl border bg-white/85 p-4 text-center backdrop-blur">
            <p className="font-medium text-gray-900">3D preview failed to load</p>
            <p className="mt-1 text-sm text-gray-600">{error?.message || 'There was a problem loading the 3D scene.'}</p>
            <button
              onClick={this.handleRetry}
              className="mt-3 inline-flex items-center rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-800"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return (
      <div key={retryKey} className={className} style={style}>
        <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
      </div>
    );
  }
}

export default function SafeSpline({ scene, className, style, fallbackSrc }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative ${className || ''}`} style={style}>
      {loading && (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div className="rounded-lg bg-white/80 px-3 py-1.5 text-sm text-gray-700 shadow">Loading 3D preview…</div>
        </div>
      )}
      {fallbackSrc ? (
        <img src={fallbackSrc} alt="3D preview placeholder" className="absolute inset-0 h-full w-full object-cover" />
      ) : null}
      <ErrorBoundary scene={scene} className="relative z-10" style={{ width: '100%', height: '100%' }} fallbackSrc={fallbackSrc}>
        <Spline
          scene={scene}
          style={{ width: '100%', height: '100%' }}
          onLoad={() => setLoading(false)}
        />
      </ErrorBoundary>
    </div>
  );
}
