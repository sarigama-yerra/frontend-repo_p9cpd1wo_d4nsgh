import React from 'react';
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
    // You could log to an external service here
    // console.error('Spline render error:', error, info);
  }

  handleRetry = () => {
    this.setState((s) => ({ hasError: false, error: null, retryKey: s.retryKey + 1 }));
  };

  render() {
    const { hasError, error, retryKey } = this.state;
    const { scene, className, style } = this.props;

    if (hasError) {
      return (
        <div className={`flex h-full w-full items-center justify-center ${className || ''}`}
             style={style}>
          <div className="max-w-md rounded-xl border bg-white/80 p-4 text-center backdrop-blur">
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

export default function SafeSpline({ scene, className, style }) {
  return (
    <ErrorBoundary>
      <Spline scene={scene} style={{ width: '100%', height: '100%' }} className={className} />
    </ErrorBoundary>
  );
}
