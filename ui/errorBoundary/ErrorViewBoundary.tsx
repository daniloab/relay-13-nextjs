import { Button, Stack, Text } from '@chakra-ui/react';

import ErrorBoundaryWithRetry from './ErrorBoundaryWithRetry';

type Props = {
  error: string;
  retry?: () => void;
};

const ErrorView = ({ error, retry = undefined }: Props) => {
  const errorMessage = Array.isArray(error) ? error[0].message : error?.message;

  return (
    <Stack align={'center'} spacing={2}>
      <Stack>
        <h3>Ops! Ocorreu um erro</h3>
        <Text>{errorMessage}</Text>
        {retry && (
          <Button variant="outlined" onClick={retry}>
            Tentar novamente
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export const ErrorViewBoundary = ({ children }) => {
  return (
    <ErrorBoundaryWithRetry
      fallback={(error, retry) => <ErrorView error={error} retry={retry} />}
    >
      {({ fetchKey }) => children({ fetchKey })}
    </ErrorBoundaryWithRetry>
  );
};

export default ErrorView;
