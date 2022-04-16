import type { ComponentType, ReactNode } from "react";
import { Suspense } from "react";

import Loading from "./Loading";
import ErrorViewBoundary from "./errorBoundary/ErrorViewBoundary";

type Config = {
  loadingView?: NonNullable<ReactNode> | null;
};
export const withRelayBoundary = (
  Component: ComponentType<any>,
  config: Config = {}
): ComponentType<any> => {
  const { loadingView = <Loading fullScreen={true} /> } = config;

  const QueryRendererWrapper = (props) => {
    return (
      <ErrorViewBoundary>
        {({ fetchKey }) => (
          <Suspense fallback={loadingView}>
            <Component {...props} fetchKey={fetchKey} />
          </Suspense>
        )}
      </ErrorViewBoundary>
    );
  };

  QueryRendererWrapper.displayName = `withRelayBoundary(${
    Component.displayName || Component.name
  })`;

  return QueryRendererWrapper;
};
