import type { ReactNode } from 'react';
import { Component } from 'react';

type RetryFn = () => void;

type Props = {
  children: ReactNode | (({ fetchKey }: { fetchKey: number }) => ReactNode);
  fallback?: (error: string | null, retry: RetryFn) => ReactNode | ReactNode;
};
type State = {
  error: string | null;
  fetchKey: number;
};
class ErrorBoundaryWithRetry extends Component<Props, State> {
  state = { error: null, fetchKey: 0 };

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  _retry = () => {
    this.setState((prev) => ({ error: null, fetchKey: prev.fetchKey + 1 }));
  };

  render() {
    const { children, fallback } = this.props;
    const { error, fetchKey } = this.state;

    if (error) {
      if (typeof fallback === 'function') {
        return fallback(error, this._retry);
      }

      return fallback;
    }

    if (typeof children === 'function') {
      return children({ fetchKey });
    }

    return children;
  }
}

export default ErrorBoundaryWithRetry;
